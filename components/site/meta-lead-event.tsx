'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// Fires the Meta Pixel "Lead" conversion event once on mount.
// The base pixel is initialised in app/layout.tsx; this only tracks the event
// and is rendered on the thank-you page only.
export function MetaLeadEvent() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead')
    }
  }, [])

  return null
}
