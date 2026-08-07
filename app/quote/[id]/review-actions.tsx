'use client'

import { useState, useTransition } from 'react'
import { approveAndSend, declineLead } from '@/app/actions/quote'

type Props = {
  id: number
  token: string
  clientName: string
  clientEmail: string
  whatsappLink: string | null
  alreadySent: boolean
}

export function ReviewActions({
  id,
  token,
  clientName,
  clientEmail,
  whatsappLink,
  alreadySent,
}: Props) {
  const [pending, startTransition] = useTransition()
  const [sent, setSent] = useState(alreadySent)
  const [declined, setDeclined] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function send() {
    setError(null)
    startTransition(async () => {
      const res = await approveAndSend(id, token)
      if (res.ok) setSent(true)
      else setError(res.error ?? 'Something went wrong.')
    })
  }

  function decline() {
    setError(null)
    startTransition(async () => {
      const res = await declineLead(id, token)
      if (res.ok) setDeclined(true)
      else setError(res.error ?? 'Something went wrong.')
    })
  }

  if (declined) {
    return (
      <p className="rounded-lg bg-charcoal/5 px-4 py-3 text-sm text-charcoal/70">
        Marked as declined. Nothing was sent.
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {sent ? (
        <div className="rounded-lg bg-charcoal px-4 py-3 text-sm text-white">
          Quote sent to {clientEmail}.
        </div>
      ) : (
        <button
          type="button"
          onClick={send}
          disabled={pending}
          className="w-full rounded-lg bg-charcoal px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-charcoal/90 disabled:opacity-50"
        >
          {pending ? 'Sending…' : `Send quote to ${clientName}`}
        </button>
      )}

      {whatsappLink ? (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded-lg border border-charcoal/15 px-6 py-3.5 text-center text-[15px] font-semibold text-charcoal transition hover:bg-charcoal/5"
        >
          Message on WhatsApp
        </a>
      ) : (
        <p className="text-center text-xs text-charcoal/50">
          No WhatsApp link — the number on this lead isn&apos;t a recognisable SA mobile.
        </p>
      )}

      {!sent && (
        <button
          type="button"
          onClick={decline}
          disabled={pending}
          className="w-full py-2 text-center text-xs text-charcoal/45 underline transition hover:text-charcoal/70 disabled:opacity-50"
        >
          Not a real lead — dismiss
        </button>
      )}

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}
    </div>
  )
}
