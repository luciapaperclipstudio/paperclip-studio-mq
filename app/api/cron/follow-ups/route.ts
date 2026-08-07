import { NextResponse } from 'next/server'
import { and, eq, isNotNull } from 'drizzle-orm'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'
import { sendEmail } from '@/lib/email'
import { FOLLOW_UP_COUNT, FOLLOW_UP_DAYS, followUpEmail } from '@/lib/emails'
import { quoteFromLead } from '@/lib/quote'

export const dynamic = 'force-dynamic'

const DAY_MS = 24 * 60 * 60 * 1000

// Daily sweep that sends the follow-up sequence to clients whose quote has
// already been reviewed and sent. Wired up in vercel.json.
//
// Off unless FOLLOW_UPS_ENABLED=true, so deploying this can never start
// messaging clients by surprise. Turn it on once you've watched a few real
// quotes go out and you're happy with the copy in lib/emails.ts.
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  const auth = request.headers.get('authorization')
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (process.env.FOLLOW_UPS_ENABLED !== 'true') {
    return NextResponse.json({ skipped: 'FOLLOW_UPS_ENABLED is not true', sent: 0 })
  }

  const candidates = await db
    .select()
    .from(leads)
    .where(
      and(
        eq(leads.status, 'sent'),
        eq(leads.clientReplied, false),
        isNotNull(leads.quoteSentAt),
      ),
    )

  const now = Date.now()
  let sent = 0
  const errors: string[] = []

  for (const lead of candidates) {
    // Sequence finished — nothing further owed to this lead.
    if (lead.followUpCount >= FOLLOW_UP_COUNT) continue

    const dueAfterDays = FOLLOW_UP_DAYS[lead.followUpCount]
    if (dueAfterDays === undefined) continue

    const sentAt = lead.quoteSentAt?.getTime() ?? 0
    if (now - sentAt < dueAfterDays * DAY_MS) continue

    // Belt and braces: never send two follow-ups to the same person in a day,
    // however often the cron happens to fire.
    const last = lead.lastFollowUpAt?.getTime() ?? 0
    if (last && now - last < DAY_MS) continue

    const quote = quoteFromLead(lead)
    if (!quote) continue

    const mail = followUpEmail(lead, quote, lead.followUpCount)
    if (!mail) continue

    const res = await sendEmail({
      to: lead.email,
      subject: mail.subject,
      html: mail.html,
      replyTo: process.env.OWNER_EMAIL || 'hello@paperclipstudio.co.za',
    })

    if (!res.ok) {
      errors.push(`lead ${lead.id}: ${res.error}`)
      continue
    }

    // Only advance the counter after a confirmed send, so a failure retries
    // tomorrow rather than silently skipping a step in the sequence.
    await db
      .update(leads)
      .set({
        followUpCount: lead.followUpCount + 1,
        lastFollowUpAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(leads.id, lead.id))

    sent += 1
  }

  return NextResponse.json({ checked: candidates.length, sent, errors })
}
