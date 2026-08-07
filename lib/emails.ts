// Email bodies for the quote pipeline.
//
// Plain HTML strings with inline styles and table layout — email clients strip
// <style> blocks and have no flexbox, so the site's Tailwind classes are no use
// here. Brand palette is copied from app/globals.css.

import { esc, waLink } from '@/lib/email'
import { formatRand, QUOTE_VALID_DAYS, REVISION_ROUNDS, type Quote } from '@/lib/packages'

const CHARCOAL = '#333333'
const CREAM = '#f0efe8'
const STEEL = '#a8bdd0'
const YELLOW = '#ddd27a'
const LIGHTGREY = '#888888'

type LeadLike = {
  id: number
  name: string
  email: string
  phone?: string | null
  businessName?: string | null
  message?: string | null
}

function shell(inner: string): string {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:${CREAM};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};padding:32px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${CHARCOAL};">
<tr><td style="padding:28px 32px;">
${inner}
</td></tr>
</table>
<p style="max-width:560px;margin:18px auto 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:${LIGHTGREY};text-align:center;">
paperclip studio · South Africa<br>
<a href="mailto:hello@paperclipstudio.co.za" style="color:${LIGHTGREY};">hello@paperclipstudio.co.za</a>
</p>
</td></tr>
</table>
</body></html>`
}

function button(href: string, label: string, bg = CHARCOAL, fg = '#ffffff'): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0;"><tr>
<td style="background:${bg};border-radius:8px;">
<a href="${href}" style="display:inline-block;padding:13px 26px;font-size:15px;font-weight:600;color:${fg};text-decoration:none;">${label}</a>
</td></tr></table>`
}

function lineItems(quote: Quote): string {
  const rows = quote.lines
    .map((l) => {
      const suffix = l.billing === 'monthly' ? '<span style="color:' + LIGHTGREY + ';font-weight:400;">/month</span>' : ''
      return `<tr>
<td style="padding:10px 0;border-bottom:1px solid ${CREAM};font-size:14px;line-height:1.4;">
${esc(l.label)}${l.note ? `<br><span style="color:${LIGHTGREY};font-size:12px;">${esc(l.note)}</span>` : ''}
</td>
<td style="padding:10px 0;border-bottom:1px solid ${CREAM};font-size:14px;font-weight:600;text-align:right;white-space:nowrap;">
${formatRand(l.price)}${suffix}
</td>
</tr>`
    })
    .join('')

  const monthly =
    quote.monthlyTotal > 0
      ? `<tr>
<td style="padding:10px 0 0;font-size:14px;color:${LIGHTGREY};">Then monthly</td>
<td style="padding:10px 0 0;font-size:14px;font-weight:600;text-align:right;white-space:nowrap;">${formatRand(quote.monthlyTotal)}/month</td>
</tr>`
      : ''

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
${rows}
<tr>
<td style="padding:14px 0 0;font-size:16px;font-weight:700;">Once-off total</td>
<td style="padding:14px 0 0;font-size:16px;font-weight:700;text-align:right;white-space:nowrap;">${formatRand(quote.onceOffTotal)}</td>
</tr>
${monthly}
</table>`
}

// ---------------------------------------------------------------------------
// 1. Internal — the review email Lucia gets the moment a lead lands.
// ---------------------------------------------------------------------------

export function ownerReviewEmail(
  lead: LeadLike,
  quote: Quote,
  reviewUrl: string,
): { subject: string; html: string } {
  const wa = waLink(
    lead.phone,
    `Hi ${lead.name}, thanks for your enquiry with paperclip studio! I've just sent your quote through to ${lead.email} — have a look and shout if you have any questions.`,
  )

  const inner = `
<p style="margin:0 0 4px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${LIGHTGREY};font-weight:600;">New lead · #${lead.id}</p>
<h1 style="margin:0 0 6px;font-size:22px;font-weight:700;">${esc(lead.businessName || lead.name)}</h1>
<p style="margin:0 0 20px;font-size:14px;color:${LIGHTGREY};line-height:1.6;">
${esc(lead.name)} · <a href="mailto:${esc(lead.email)}" style="color:${CHARCOAL};">${esc(lead.email)}</a>${lead.phone ? ` · ${esc(lead.phone)}` : ''}
</p>

${lineItems(quote)}

<p style="margin:16px 0 4px;font-size:14px;line-height:1.6;">
Deposit to start: <strong>${formatRand(quote.deposit)}</strong> · Balance on delivery: <strong>${formatRand(quote.balance)}</strong>
</p>
<p style="margin:0 0 22px;font-size:13px;color:${LIGHTGREY};line-height:1.6;">Timeline: ${esc(quote.timeline)}</p>

${lead.message ? `<div style="margin:0 0 22px;padding:12px 14px;background:${CREAM};border-radius:8px;font-size:13px;line-height:1.6;"><strong>Note from the form:</strong><br>${esc(lead.message)}</div>` : ''}

<hr style="border:none;border-top:1px solid ${CREAM};margin:22px 0;">

<p style="margin:0 0 10px;font-size:15px;font-weight:600;">Check the numbers, then send it.</p>
${button(reviewUrl, 'Review &amp; send quote →')}
${wa ? `<p style="margin:14px 0 0;font-size:13px;line-height:1.6;"><a href="${wa}" style="color:${CHARCOAL};">Message ${esc(lead.name)} on WhatsApp →</a></p>` : `<p style="margin:14px 0 0;font-size:13px;color:${LIGHTGREY};line-height:1.6;">WhatsApp link unavailable — the number they entered (${esc(lead.phone)}) isn't a recognisable SA mobile.</p>`}
<p style="margin:16px 0 0;font-size:12px;color:${LIGHTGREY};line-height:1.6;">Nothing has been sent to the client yet.</p>
`
  return {
    subject: `New quote to review — ${lead.businessName || lead.name} (${formatRand(quote.onceOffTotal)})`,
    html: shell(inner),
  }
}

// ---------------------------------------------------------------------------
// 2. Client-facing — the quote itself.
// ---------------------------------------------------------------------------

export function clientQuoteEmail(lead: LeadLike, quote: Quote): { subject: string; html: string } {
  const includes = quote.includes
    .map(
      (i) =>
        `<tr><td style="padding:5px 0;font-size:14px;line-height:1.5;color:${CHARCOAL};">
<span style="color:${STEEL};font-weight:700;">·</span>&nbsp; ${esc(i)}</td></tr>`,
    )
    .join('')

  const validUntil = quote.validUntil.toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const inner = `
<p style="margin:0 0 4px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${LIGHTGREY};font-weight:600;">Your quote</p>
<h1 style="margin:0 0 14px;font-size:24px;font-weight:700;">${esc(quote.packageName)}</h1>

<p style="margin:0 0 18px;font-size:15px;line-height:1.65;">
Hi ${esc(lead.name)}, thanks for getting in touch. Here's what a website for
${esc(lead.businessName || 'your business')} would look like.
</p>

${lineItems(quote)}

<p style="margin:18px 0 6px;font-size:15px;line-height:1.7;">
<strong>${formatRand(quote.deposit)}</strong> to get started, <strong>${formatRand(quote.balance)}</strong> on delivery.
</p>
<p style="margin:0 0 24px;font-size:14px;color:${LIGHTGREY};line-height:1.6;">
Ready in ${esc(quote.timeline)} from the day we have your content.
</p>

<div style="padding:18px 20px;background:${CREAM};border-radius:10px;margin:0 0 24px;">
<p style="margin:0 0 10px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${CHARCOAL};">What's included</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${includes}</table>
<p style="margin:12px 0 0;font-size:13px;line-height:1.6;color:${CHARCOAL};">
Plus a WhatsApp click-to-chat button and ${REVISION_ROUNDS} rounds of revisions within 14 days of delivery — both free.
</p>
</div>

<p style="margin:0 0 6px;font-size:15px;font-weight:600;">Happy to go ahead?</p>
<p style="margin:0 0 12px;font-size:14px;line-height:1.65;color:${CHARCOAL};">
Just reply to this email, or message me on WhatsApp and we can start this week.
</p>
${button('https://wa.me/message/HACG5W5RQCDMJ1', 'Chat on WhatsApp')}

<p style="margin:22px 0 0;font-size:12px;color:${LIGHTGREY};line-height:1.6;">
This quote holds until ${validUntil} (${QUOTE_VALID_DAYS} days). Payment is 50% to start and 50% on delivery — EFT, card via PayFast or Yoco, or PayPal. Domain and hosting are excluded unless listed above.
</p>
`
  return {
    subject: `Your website quote — ${formatRand(quote.onceOffTotal)}`,
    html: shell(inner),
  }
}

// ---------------------------------------------------------------------------
// 3. Follow-ups. Three touches, then stop.
// ---------------------------------------------------------------------------

const FOLLOW_UPS = [
  {
    subject: 'Any questions about your quote?',
    body: (lead: LeadLike) =>
      `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;">Hi ${esc(lead.name)}, just checking you got the quote I sent through for ${esc(lead.businessName || 'your business')}.</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.65;">If anything about it doesn't fit — the package, the budget, the timing — tell me and I'll rework it. Easier to adjust than to guess.</p>`,
  },
  {
    subject: 'Still keen on the website?',
    body: (lead: LeadLike) =>
      `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;">Hi ${esc(lead.name)}, I know how quickly this stuff slides down the list when you're busy running things.</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.65;">Your quote is still good, and I have a build slot open. If now isn't the right time, no problem at all — just let me know and I'll leave you be.</p>`,
  },
  {
    subject: 'Closing this one off',
    body: (lead: LeadLike) =>
      `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;">Hi ${esc(lead.name)}, this is my last note about the website — I don't want to keep filling your inbox.</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.65;">If it comes back around later, just reply here and I'll pick it straight up. Prices may have shifted by then, but I'll always do my best for you.</p>`,
  },
]

export const FOLLOW_UP_COUNT = FOLLOW_UPS.length

// Day offsets after the quote was sent, matched by index to FOLLOW_UPS.
export const FOLLOW_UP_DAYS = [3, 8, 16]

export function followUpEmail(
  lead: LeadLike,
  quote: Quote,
  index: number,
): { subject: string; html: string } | null {
  const step = FOLLOW_UPS[index]
  if (!step) return null

  const inner = `
${step.body(lead)}
<div style="padding:14px 18px;background:${CREAM};border-radius:10px;margin:0 0 22px;">
<p style="margin:0;font-size:14px;line-height:1.6;">
<strong>${esc(quote.packageName)}</strong> — ${formatRand(quote.onceOffTotal)} once-off${quote.monthlyTotal > 0 ? `, then ${formatRand(quote.monthlyTotal)}/month` : ''}<br>
<span style="color:${LIGHTGREY};font-size:13px;">${formatRand(quote.deposit)} to start · ready in ${esc(quote.timeline)}</span>
</p>
</div>
${button('https://wa.me/message/HACG5W5RQCDMJ1', 'Chat on WhatsApp', YELLOW, CHARCOAL)}
<p style="margin:20px 0 0;font-size:14px;line-height:1.65;">— Lucia, paperclip studio</p>
`
  return { subject: step.subject, html: shell(inner) }
}
