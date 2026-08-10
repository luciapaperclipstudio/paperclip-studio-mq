'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

// Fires the Google Ads conversion event once on mount.
//
// Same shape as MetaLeadEvent, and for the same reason: the Google tag in
// app/layout.tsx loads with strategy="afterInteractive", so on a direct load of
// this page gtag may not exist yet when this effect first runs. We poll briefly
// until it does, then fire once.
//
// The event name must match the conversion action configured in Google Ads
// (Goals > Conversions > the "manual event" it was created from). Renaming it
// here silently stops conversions being recorded.
const EVENT_NAME = 'manual_event_SUBMIT_LEAD_FORM'

export function GoogleLeadEvent() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let fired = false
    let attempts = 0

    const fire = () => {
      if (fired) return true
      if (typeof window.gtag === 'function') {
        window.gtag('event', EVENT_NAME)
        fired = true
        return true
      }
      return false
    }

    if (fire()) return

    const interval = window.setInterval(() => {
      attempts += 1
      if (fire() || attempts >= 25) {
        window.clearInterval(interval)
      }
    }, 200)

    return () => window.clearInterval(interval)
  }, [])

  return null
}
