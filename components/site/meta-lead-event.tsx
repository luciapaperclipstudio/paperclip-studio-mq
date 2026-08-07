'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// Fires the Meta Pixel "Lead" conversion event once on mount.
// The base pixel is initialised in app/layout.tsx with strategy="afterInteractive",
// so on a fresh/direct page load fbq may not exist yet when this effect runs.
// We poll briefly until fbq is available, then fire once, so the Pixel Helper
// reliably detects the Lead event regardless of script load order.
export function MetaLeadEvent() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let fired = false
    let attempts = 0

    const fire = () => {
      if (fired) return true
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead')
        fired = true
        return true
      }
      return false
    }

    // Try immediately, then retry every 200ms for up to ~5s while the base
    // pixel script finishes loading.
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
