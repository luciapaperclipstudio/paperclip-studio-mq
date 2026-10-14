// Cookie consent, shared by the banner and the footer "Cookie settings" link.
//
// Analytics and advertising (GA4, Google Ads, Meta Pixel) start in a denied
// state from the inline scripts in app/layout.tsx, which read the same key
// below so a returning visitor's choice applies before the first hit.
// Google Consent Mode keeps cookieless, modelled measurement for visitors
// who decline; the Meta Pixel sends nothing until consent is granted.

export const CONSENT_KEY = 'pc_cookie_consent'
export const OPEN_SETTINGS_EVENT = 'pc:open-cookie-settings'

export type ConsentChoice = 'granted' | 'denied'

type Win = Window & {
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
}

export function readConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice)
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }

  const w = window as Win
  const state = choice === 'granted' ? 'granted' : 'denied'
  w.gtag?.('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  })

  if (choice === 'granted') {
    w.fbq?.('consent', 'grant')
    // The PageView fired while consent was revoked was never sent.
    w.fbq?.('track', 'PageView')
  } else {
    w.fbq?.('consent', 'revoke')
  }
}
