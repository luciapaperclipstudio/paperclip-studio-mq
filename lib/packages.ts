export type PackageOption = {
  id: string
  name: string
  short: string
  price: number
}

export type AddonOption = {
  id: string
  label: string
  note: string
  price: number
  suffix?: string
}

export const packages: PackageOption[] = [
  {
    id: 'starter',
    name: 'Starter Landing Page',
    short: '1 page · Fast · Ads-ready',
    price: 1800,
  },
  {
    id: 'business',
    name: 'Business Website',
    short: '3–5 pages · Full site · WhatsApp',
    price: 3500,
  },
  {
    id: 'premium',
    name: 'Premium + Ads-Ready',
    short: 'Full site + landing page · Ads setup',
    price: 7500,
  },
]

export const addons: AddonOption[] = [
  { id: 'domain', label: 'Domain + Hosting', note: '1 year setup', price: 500 },
  { id: 'logo', label: 'Logo / Brand Refresh', note: 'AI-assisted design', price: 800 },
  { id: 'whatsapp', label: 'WhatsApp Widget', note: 'Click-to-chat button', price: 300 },
  { id: 'popia', label: 'POPIA Compliance', note: 'Privacy policy + cookie notice', price: 400 },
  { id: 'gbp', label: 'Google Business Profile', note: 'Maps listing setup', price: 600 },
  {
    id: 'maintenance',
    label: 'Monthly Maintenance',
    note: 'Updates + backups',
    price: 500,
    suffix: '/mo',
  },
]

export const WHATSAPP_NUMBER = '27000000000'

export function formatRand(amount: number): string {
  return 'R' + amount.toLocaleString('en-ZA')
}
