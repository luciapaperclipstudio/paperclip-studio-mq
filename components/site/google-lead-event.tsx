'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

// Fires the lead events once on mount.
//
// Same shape as MetaLeadEvent, and for the same reason: the Google tag in
// app/layout.tsx loads with strategy="afterInteractive", so on a direct load of
// this page gtag may not exist yet when this effect first runs. We poll briefly
// until it does, then fire once.
//
// Two events go out:
// - CONVERSION_SEND_TO reports straight to Google Ads, to the "Website enquiry
//   (thank-you page)" conversion action. This is what bidding optimises for.
//   The label comes from that action's event snippet; changing it silently
//   stops conversions being recorded.
// - EVENT_NAME goes to GA4, where it was previously imported into Google Ads
//   as a conversion. Kept so Analytics reporting carries on; in Google Ads that
//   import is now a secondary action, so it does not double count.
const CONVERSION_SEND_TO = 'AW-18253779955/PwmzCPqQg40dEPOnioBE'
const EVENT_NAME = 'manual_event_SUBMIT_LEAD_FORM'

export function GoogleLeadEvent() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let fired = false
    let attempts = 0

    const fire = () => {
      if (fired) return true
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: CONVERSION_SEND_TO })
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
