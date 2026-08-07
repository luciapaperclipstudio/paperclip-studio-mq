// Email delivery via the Resend REST API.
//
// Called through fetch rather than the SDK so this stays dependency-free —
// v0 manages package.json and an unnecessary install there is friction.
//
// Required env vars:
//   RESEND_API_KEY  — from resend.com, after verifying paperclipstudio.co.za
//   OWNER_EMAIL     — where lead notifications land (hello@paperclipstudio.co.za)
//   SITE_URL        — public origin, used to build absolute review links
//
// If RESEND_API_KEY is absent, sends are skipped and logged rather than thrown.
// A missing key must never take down the form and lose a lead — capturing the
// lead matters more than notifying about it.

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

export const FROM_ADDRESS = 'paperclip studio <hello@paperclipstudio.co.za>'

export function ownerEmail(): string {
  return process.env.OWNER_EMAIL || 'hello@paperclipstudio.co.za'
}

export function siteUrl(): string {
  const raw = process.env.SITE_URL || 'https://www.paperclipstudio.co.za'
  return raw.replace(/\/+$/, '')
}

export type SendResult = { ok: boolean; skipped?: boolean; error?: string }

export async function sendEmail(opts: {
  to: string
  subject: string
  html: string
  replyTo?: string
}): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.warn('[email] RESEND_API_KEY not set — skipped send to', opts.to)
    return { ok: false, skipped: true, error: 'RESEND_API_KEY is not configured.' }
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [opts.to],
        subject: opts.subject,
        html: opts.html,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('[email] resend rejected send:', res.status, detail)
      return { ok: false, error: `Resend returned ${res.status}` }
    }

    return { ok: true }
  } catch (e) {
    console.error('[email] send failed:', (e as Error).message)
    return { ok: false, error: (e as Error).message }
  }
}

// Escapes values that come from the public form before they go into an email
// body. Lead-supplied text is untrusted: without this, a name containing markup
// would be rendered as HTML in Lucia's inbox.
export function esc(value: string | null | undefined): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Normalises a South African mobile number into wa.me form (27XXXXXXXXX).
// Returns null when the input doesn't look like a usable SA number, so callers
// can fall back to the generic chat link instead of building a dead one.
export function waNumber(input: string | null | undefined): string | null {
  const digits = String(input ?? '').replace(/\D/g, '')
  if (!digits) return null

  // 0821234567 -> 27821234567
  if (digits.length === 10 && digits.startsWith('0')) return '27' + digits.slice(1)
  // 27821234567
  if (digits.length === 11 && digits.startsWith('27')) return digits
  // 821234567
  if (digits.length === 9) return '27' + digits

  return null
}

export function waLink(phone: string | null | undefined, message: string): string | null {
  const number = waNumber(phone)
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
