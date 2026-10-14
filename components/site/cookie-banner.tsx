'use client'

import { useEffect, useState } from 'react'
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent, type ConsentChoice } from '@/lib/consent'

// Shown until the visitor chooses, and again when they click "Cookie settings"
// in the footer. Accept and Decline carry equal weight on purpose: a consent
// that's been nudged isn't really consent.
export function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (readConsent() === null) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen)
  }, [])

  if (!open) return null

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice)
    setOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#e0ddda] bg-white/95 px-4 py-4 shadow-[0_-8px_30px_-12px_rgba(51,51,51,0.25)] backdrop-blur animate-in slide-in-from-bottom-4 duration-300 md:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="text-[13.5px] leading-relaxed text-charcoal/80">
          We use cookies to see how our site is used and to measure our ads. Nothing is tracked
          unless you accept.{' '}
          <a
            href="/privacy-policy#cookies"
            className="font-semibold text-charcoal underline underline-offset-2"
          >
            Privacy policy
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="flex-1 border border-charcoal px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:bg-charcoal hover:text-white md:flex-none"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="flex-1 border border-charcoal bg-charcoal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#222] md:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export function CookieSettingsLink({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  )
}
