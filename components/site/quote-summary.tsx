'use client'

import { useEffect, useState } from 'react'

// Written by the quote form just before it navigates to /thank-you. Kept in
// sessionStorage rather than the URL so personal details never reach the
// analytics and ad tags, which record the full page address.
export const QUOTE_SUMMARY_KEY = 'pc_quote_summary'

type Summary = {
  name?: string
  business?: string
  whatsapp?: string
  email?: string
  package?: string
  addons?: string
}

function readSummary(): Summary | null {
  try {
    const raw = sessionStorage.getItem(QUOTE_SUMMARY_KEY)
    return raw ? (JSON.parse(raw) as Summary) : null
  } catch {
    return null
  }
}

export function ThankYouGreeting() {
  const [summary, setSummary] = useState<Summary | null>(null)
  useEffect(() => setSummary(readSummary()), [])
  const first = summary?.name?.trim().split(' ')[0]
  return <>You&apos;re all set{first ? `, ${first}` : ''}.</>
}

export function QuoteSummary() {
  const [summary, setSummary] = useState<Summary | null>(null)
  useEffect(() => setSummary(readSummary()), [])
  if (!summary) return null

  const rows = [
    ['Package', summary.package || '—'],
    ['Add-ons', summary.addons || 'None selected'],
    ['Name', summary.name || ''],
    ['Business', summary.business || ''],
    ['WhatsApp', summary.whatsapp || ''],
    ['Email', summary.email || ''],
  ].filter(([, value]) => value !== '')

  return (
    <div className="mx-auto mb-8 max-w-md border border-[#E0DDDA] bg-[#F7F6F2] p-5 text-left">
      <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
        Your selections
      </p>
      {rows.map(([k, v], i) => (
        <div
          key={k}
          className={`flex items-start gap-2.5 py-2 text-[13.5px] ${
            i < rows.length - 1 ? 'border-b border-[#E0DDDA]' : ''
          }`}
        >
          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
          <span className="w-20 shrink-0 font-semibold text-charcoal">{k}</span>
          <span className="min-w-0 flex-1 break-words text-[#888888]">{v}</span>
        </div>
      ))}
    </div>
  )
}
