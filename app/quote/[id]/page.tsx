import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLeadForReview } from '@/app/actions/quote'
import { waLink } from '@/lib/email'
import { formatRand } from '@/lib/packages'
import { quoteFromLead } from '@/lib/quote'
import { ReviewActions } from './review-actions'

// Internal review screen — never index it, and never let it into a sitemap.
export const metadata: Metadata = {
  title: 'Review quote',
  robots: { index: false, follow: false },
}

export default async function ReviewQuotePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ t?: string }>
}) {
  const { id } = await params
  const { t } = await searchParams

  const leadId = Number(id)
  if (!Number.isInteger(leadId)) notFound()

  const lead = await getLeadForReview(leadId, t ?? '')
  if (!lead) notFound()

  const quote = quoteFromLead(lead)

  const wa = waLink(
    lead.phone,
    `Hi ${lead.name}, thanks for your enquiry with paperclip studio! I've just sent your quote through to ${lead.email} — have a look and shout if you have any questions.`,
  )

  return (
    <main className="min-h-screen bg-cream px-6 py-12">
      <div className="mx-auto max-w-lg">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/45">
          Lead #{lead.id} ·{' '}
          {lead.createdAt.toLocaleDateString('en-ZA', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
        <h1 className="mt-2 font-serif text-3xl italic text-charcoal">
          {lead.businessName || lead.name}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
          {lead.name} · {lead.email}
          {lead.phone ? ` · ${lead.phone}` : ''}
        </p>

        {lead.message && (
          <p className="mt-4 rounded-lg bg-charcoal/5 px-4 py-3 text-sm leading-relaxed text-charcoal/75">
            {lead.message}
          </p>
        )}

        {quote ? (
          <div className="mt-7 rounded-xl bg-white p-6">
            <table className="w-full text-sm">
              <tbody>
                {quote.lines.map((line) => (
                  <tr key={line.id} className="border-b border-cream last:border-0">
                    <td className="py-2.5 pr-4 leading-snug">
                      {line.label}
                      {line.note && (
                        <span className="block text-xs text-charcoal/45">{line.note}</span>
                      )}
                    </td>
                    <td className="whitespace-nowrap py-2.5 text-right font-semibold">
                      {formatRand(line.price)}
                      {line.billing === 'monthly' && (
                        <span className="font-normal text-charcoal/45">/mo</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 flex items-baseline justify-between border-t border-charcoal/10 pt-4">
              <span className="text-base font-bold">Once-off total</span>
              <span className="text-base font-bold">{formatRand(quote.onceOffTotal)}</span>
            </div>
            {quote.monthlyTotal > 0 && (
              <div className="mt-1.5 flex items-baseline justify-between">
                <span className="text-sm text-charcoal/60">Then monthly</span>
                <span className="text-sm font-semibold">
                  {formatRand(quote.monthlyTotal)}/month
                </span>
              </div>
            )}
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              Deposit <strong className="text-charcoal">{formatRand(quote.deposit)}</strong> ·
              balance <strong className="text-charcoal">{formatRand(quote.balance)}</strong> ·{' '}
              {quote.timeline}
            </p>
          </div>
        ) : (
          <p className="mt-7 rounded-xl bg-white p-6 text-sm leading-relaxed text-charcoal/70">
            This lead came in without a priced quote — most likely the form and the rate card
            were out of step. You&apos;ll need to quote this one by hand.
          </p>
        )}

        <div className="mt-7">
          <ReviewActions
            id={lead.id}
            token={t ?? ''}
            clientName={lead.name.split(' ')[0]}
            clientEmail={lead.email}
            whatsappLink={wa}
            alreadySent={lead.status === 'sent'}
          />
        </div>

        {lead.status === 'sent' && lead.quoteSentAt && (
          <p className="mt-4 text-center text-xs text-charcoal/45">
            Sent{' '}
            {lead.quoteSentAt.toLocaleDateString('en-ZA', {
              day: 'numeric',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        )}
      </div>
    </main>
  )
}
