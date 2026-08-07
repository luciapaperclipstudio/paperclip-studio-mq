// Single source of truth for everything we charge for.
//
// The quiz (components/site/quote-quiz.tsx), the calculator
// (components/site/calculator.tsx) and the server-side quote builder
// (app/actions/leads.ts) all read from here, so a price only ever changes in
// one place. Never hardcode a price in a component.

export type PackageId = 'starter' | 'business' | 'premium'

export type Billing = 'once' | 'monthly' | 'annual'

export type PackageOption = {
  id: PackageId
  name: string
  short: string
  desc: string
  price: number
  timeline: string
  includes: string[]
}

export type AddonOption = {
  id: string
  label: string
  note: string
  price: number
  billing: Billing
  suffix?: string
  // Omit to offer on every package. Used to hide add-ons that a package
  // already covers — e.g. Premium ships with pixel tracking built in.
  availableFor?: PackageId[]
}

export const packages: PackageOption[] = [
  {
    id: 'starter',
    name: 'Starter Landing Page',
    short: '1 page · Fast · Mobile-ready',
    desc: 'One powerful page — great for ads, lead capture, or simply getting found online.',
    price: 2950,
    timeline: '3–5 working days',
    includes: [
      'Single-page website, designed around one clear action',
      'Mobile-first layout',
      'Hero, services and contact sections',
      'Enquiry form delivered to your inbox',
      'Click-to-chat WhatsApp button',
      'Basic on-page SEO',
    ],
  },
  {
    id: 'business',
    name: 'Business Website',
    short: '3–5 pages · Full site · WhatsApp',
    desc: 'A full 3–5 page website — Home, About, Services, Gallery, and Contact.',
    price: 5000,
    timeline: '5–7 working days',
    includes: [
      'Up to 5 pages — Home, About, Services, Gallery, Contact',
      'Mobile-first layout',
      'Enquiry form delivered to your inbox',
      'Click-to-chat WhatsApp button',
      'On-page SEO across every page',
      'Google-ready sitemap and metadata',
    ],
  },
  {
    id: 'premium',
    name: 'Premium + Ads-Ready',
    short: 'Full site + landing page · Ads setup',
    desc: 'Full website plus a dedicated landing page set up for Google or Meta ad campaigns.',
    price: 8500,
    timeline: 'Priority — 5–7 working days',
    includes: [
      'Everything in the Business Website',
      'Dedicated campaign landing page built to convert',
      'Meta Pixel and Google Tag installed and tested',
      'Conversion tracking wired to your ad account',
      'Click-to-chat WhatsApp button',
      'Priority build slot',
    ],
  },
]

// Bundled into every package at no cost. Listed on the quote so the client can
// see the value, but never priced as an extra.
export const includedFree: string[] = [
  'WhatsApp click-to-chat widget',
  `${2} rounds of revisions within 14 days of delivery`,
]

export const addons: AddonOption[] = [
  {
    id: 'logo',
    label: 'Logo / Brand Refresh',
    note: 'AI-assisted logo design for your business',
    price: 850,
    billing: 'once',
  },
  {
    id: 'popia',
    label: 'POPIA Compliance',
    note: 'Privacy policy + cookie notice',
    price: 600,
    billing: 'once',
  },
  {
    id: 'gbp',
    label: 'Google Business Profile',
    note: 'Maps listing setup & optimisation',
    price: 700,
    billing: 'once',
  },
  {
    id: 'ads-pixel',
    label: 'Tracking & Pixel Setup',
    note: 'Meta Pixel and Google Tag installed and tested',
    price: 400,
    billing: 'once',
    // Premium already includes tracking, so offering it there would double-charge.
    availableFor: ['starter', 'business'],
  },
  {
    id: 'rush',
    label: 'Rush Delivery',
    note: 'Priority build, delivered in 48–72 hours',
    price: 700,
    billing: 'once',
  },
  {
    id: 'maintenance',
    label: 'Monthly Maintenance',
    note: 'Content updates, backups & uptime monitoring',
    price: 550,
    billing: 'monthly',
    suffix: '/mo',
  },
]

// Domain + hosting is a choice between three situations rather than a single
// yes/no add-on, because the cost to us differs a lot in each case.
export type DomainChoiceId = 'none' | 'own' | 'coza' | 'com'

export type DomainChoice = {
  id: DomainChoiceId
  label: string
  note: string
  price: number
}

export const domainChoices: DomainChoice[] = [
  {
    id: 'none',
    label: 'Not needed',
    note: "I'll handle my own domain and hosting",
    price: 0,
  },
  {
    id: 'own',
    label: 'I already own my domain',
    note: 'DNS, hosting setup and SSL certificate',
    price: 300,
  },
  {
    id: 'coza',
    label: 'Register a .co.za for me',
    note: 'Domain + first year of hosting, set up end to end',
    price: 500,
  },
  {
    id: 'com',
    label: 'Register a .com for me',
    note: 'Domain + first year of hosting, set up end to end',
    price: 750,
  },
]

// Charged from year two onward, once the first year bundled above runs out.
export const HOSTING_RENEWAL = 350

export const DEPOSIT_RATE = 0.5
export const QUOTE_VALID_DAYS = 14
export const REVISION_ROUNDS = 2

// International format, no leading + and no spaces — this is what wa.me wants.
// Displayed as +27 78 442 9357.
export const WHATSAPP_NUMBER = '27784429357'

export const WHATSAPP_CHAT_LINK = 'https://wa.me/message/HACG5W5RQCDMJ1'

export function formatRand(amount: number): string {
  return 'R' + amount.toLocaleString('en-ZA')
}

export function getPackage(id: string | null | undefined): PackageOption | undefined {
  return packages.find((p) => p.id === id)
}

// Add-ons on offer for a given package. Anything restricted via availableFor is
// filtered out so it can never be selected, priced or quoted.
export function addonsFor(packageId: PackageId): AddonOption[] {
  return addons.filter((a) => !a.availableFor || a.availableFor.includes(packageId))
}

export type QuoteLine = {
  id: string
  label: string
  note?: string
  price: number
  billing: Billing
}

export type Quote = {
  packageId: PackageId
  packageName: string
  timeline: string
  includes: string[]
  lines: QuoteLine[]
  onceOffTotal: number
  monthlyTotal: number
  deposit: number
  balance: number
  validUntil: Date
}

export type QuoteInput = {
  packageId: string
  addonIds?: string[]
  domainChoice?: DomainChoiceId
}

// Builds a quote from a package id plus the client's selections.
//
// Deliberately ignores anything it does not recognise: selections arrive from a
// public form, so an unknown id is either a stale client or someone poking at
// the endpoint. Prices are only ever read from the tables above — never from
// the request — so a tampered payload cannot change what we charge.
export function quoteFor(input: QuoteInput): Quote | null {
  const pkg = getPackage(input.packageId)
  if (!pkg) return null

  const lines: QuoteLine[] = [
    {
      id: pkg.id,
      label: pkg.name,
      note: pkg.short,
      price: pkg.price,
      billing: 'once',
    },
  ]

  const offered = addonsFor(pkg.id)
  for (const id of input.addonIds ?? []) {
    const addon = offered.find((a) => a.id === id)
    if (!addon) continue
    lines.push({
      id: addon.id,
      label: addon.label,
      note: addon.note,
      price: addon.price,
      billing: addon.billing,
    })
  }

  const domain = domainChoices.find((d) => d.id === input.domainChoice)
  if (domain && domain.price > 0) {
    lines.push({
      id: `domain-${domain.id}`,
      label: `Domain + Hosting — ${domain.label}`,
      note: domain.note,
      price: domain.price,
      billing: 'once',
    })
  }

  const onceOffTotal = lines
    .filter((l) => l.billing === 'once')
    .reduce((sum, l) => sum + l.price, 0)

  const monthlyTotal = lines
    .filter((l) => l.billing === 'monthly')
    .reduce((sum, l) => sum + l.price, 0)

  const deposit = Math.round(onceOffTotal * DEPOSIT_RATE)

  const validUntil = new Date()
  validUntil.setDate(validUntil.getDate() + QUOTE_VALID_DAYS)

  return {
    packageId: pkg.id,
    packageName: pkg.name,
    timeline: pkg.timeline,
    includes: pkg.includes,
    lines,
    onceOffTotal,
    monthlyTotal,
    deposit,
    balance: onceOffTotal - deposit,
    validUntil,
  }
}
