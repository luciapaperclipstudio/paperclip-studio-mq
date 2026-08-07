'use server'

import { revalidatePath } from 'next/cache'
import { and, eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { leads, type Lead } from '@/lib/db/schema'
import { sendEmail } from '@/lib/email'
import { clientQuoteEmail } from '@/lib/emails'
import { quoteFromLead } from '@/lib/quote'

// The review link is unguessable and emailed only to Lucia, so the token is the
// sole credential. Look the lead up by id *and* token together so a valid token
// can't be replayed against a different lead.
export async function getLeadForReview(id: number, token: string): Promise<Lead | null> {
  if (!token) return null
  const [row] = await db
    .select()
    .from(leads)
    .where(and(eq(leads.id, id), eq(leads.reviewToken, token)))
    .limit(1)
  return row ?? null
}

export type SendResult = { ok: boolean; error?: string }

export async function approveAndSend(id: number, token: string): Promise<SendResult> {
  const lead = await getLeadForReview(id, token)
  if (!lead) return { ok: false, error: 'This review link is no longer valid.' }

  if (lead.status === 'sent') {
    return { ok: false, error: 'This quote has already been sent.' }
  }

  const quote = quoteFromLead(lead)
  if (!quote) {
    return { ok: false, error: 'This lead has no priced quote attached — send it manually.' }
  }

  const mail = clientQuoteEmail(lead, quote)
  const sent = await sendEmail({
    to: lead.email,
    subject: mail.subject,
    html: mail.html,
    replyTo: process.env.OWNER_EMAIL || 'hello@paperclipstudio.co.za',
  })

  if (!sent.ok) {
    return {
      ok: false,
      error: sent.skipped
        ? 'Email is not configured yet — set RESEND_API_KEY before sending.'
        : `Could not send: ${sent.error}`,
    }
  }

  // Only marked sent after Resend accepts it, so a failure leaves the quote
  // reviewable and re-sendable rather than silently marked done.
  await db
    .update(leads)
    .set({ status: 'sent', quoteSentAt: new Date(), updatedAt: new Date() })
    .where(eq(leads.id, id))

  revalidatePath('/admin')
  return { ok: true }
}

export async function declineLead(id: number, token: string): Promise<SendResult> {
  const lead = await getLeadForReview(id, token)
  if (!lead) return { ok: false, error: 'This review link is no longer valid.' }

  await db
    .update(leads)
    .set({ status: 'declined', updatedAt: new Date() })
    .where(eq(leads.id, id))

  revalidatePath('/admin')
  return { ok: true }
}

// Stops the follow-up sequence once a client has replied.
export async function markReplied(id: number): Promise<SendResult> {
  await db
    .update(leads)
    .set({ clientReplied: true, updatedAt: new Date() })
    .where(eq(leads.id, id))
  revalidatePath('/admin')
  return { ok: true }
}
