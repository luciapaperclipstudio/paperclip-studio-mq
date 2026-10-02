'use server'

import { db } from '@/lib/db'
import { leads, type SelectedAddon } from '@/lib/db/schema'
import {
  addons,
  getPackage,
  packages,
  quoteFor,
  type DomainChoiceId,
} from '@/lib/packages'
import { eq } from 'drizzle-orm'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type CalculatorPayload = {
  name: string
  email: string
  selectedPackage?: string | null
  selectedPackagePrice?: number | null
  selectedAddons?: SelectedAddon[]
  estimateTotal?: number | null
  completed?: boolean
}

export type ActionResult = {
  ok: boolean
  id?: number
  error?: string
}

// Creates a lead the moment we have a name + email, so a follow-up is possible
// even if the visitor never finishes the calculator.
export async function captureLead(payload: CalculatorPayload): Promise<ActionResult> {
  const name = payload.name?.trim()
  const email = payload.email?.trim().toLowerCase()

  if (!name) return { ok: false, error: 'Please enter your name.' }
  if (!email || !emailRe.test(email)) return { ok: false, error: 'Please enter a valid email.' }

  try {
    const [row] = await db
      .insert(leads)
      .values({
        name,
        email,
        selectedPackage: payload.selectedPackage ?? null,
        selectedPackagePrice: payload.selectedPackagePrice ?? null,
        selectedAddons: payload.selectedAddons ?? [],
        estimateTotal: payload.estimateTotal ?? null,
        source: 'calculator',
        completed: payload.completed ?? false,
      })
      .returning({ id: leads.id })

    return { ok: true, id: row.id }
  } catch (e) {
    console.log('[v0] captureLead error:', (e as Error).message)
    return { ok: false, error: 'Something went wrong saving your details.' }
  }
}

// Updates an existing calculator lead as selections change.
export async function updateLead(
  id: number,
  payload: Partial<CalculatorPayload>,
): Promise<ActionResult> {
  try {
    await db
      .update(leads)
      .set({
        selectedPackage: payload.selectedPackage ?? null,
        selectedPackagePrice: payload.selectedPackagePrice ?? null,
        selectedAddons: payload.selectedAddons ?? [],
        estimateTotal: payload.estimateTotal ?? null,
        completed: payload.completed ?? false,
        updatedAt: new Date(),
      })
      .where(eq(leads.id, id))
    return { ok: true, id }
  } catch (e) {
    console.log('[v0] updateLead error:', (e as Error).message)
    return { ok: false, error: 'Could not update your estimate.' }
  }
}

type ContactPayload = {
  name: string
  businessName?: string
  phone?: string
  email: string
  packageInterest?: string
  message?: string
}

type QuotePayload = {
  name: string
  business: string
  whatsapp: string
  email: string
  source?: string
  selectedPackage: string
  addons: string[]
  domainChoice?: string
}

// The quiz used to submit display labels rather than ids. Accept both so a
// visitor with a stale cached bundle still produces a correctly priced quote.
function toPackageId(value: string): string {
  const byId = packages.find((p) => p.id === value)
  if (byId) return byId.id
  const byName = packages.find((p) => p.name === value)
  return byName?.id ?? ''
}

function toAddonId(value: string): string | null {
  const byId = addons.find((a) => a.id === value)
  if (byId) return byId.id
  const byLabel = addons.find(
    (a) => a.label.toLowerCase() === value.toLowerCase().replace(/ (setup|plan|widget)$/i, ''),
  )
  if (byLabel) return byLabel.id
  const loose = addons.find((a) => value.toLowerCase().startsWith(a.label.toLowerCase().slice(0, 12)))
  return loose?.id ?? null
}

// Handles the multi-step "Get a Quote" quiz submission.
//
// Saves the lead with a server-side price breakdown for reference in /admin.
// Nothing is emailed from here: Lucia gets the Formspree alert sent by the form
// and writes each quote to the client herself.
export async function submitQuote(payload: QuotePayload): Promise<ActionResult> {
  const name = payload.name?.trim()
  const email = payload.email?.trim().toLowerCase()
  const business = payload.business?.trim()
  const whatsapp = payload.whatsapp?.trim()

  if (!name) return { ok: false, error: 'Please enter your name.' }
  if (!business) return { ok: false, error: 'Please enter your business name.' }
  if (!whatsapp) return { ok: false, error: 'Please enter your WhatsApp number.' }
  if (!email || !emailRe.test(email)) return { ok: false, error: 'Please enter a valid email.' }

  const packageId = toPackageId(payload.selectedPackage || '')
  const addonIds = (payload.addons ?? [])
    .map(toAddonId)
    .filter((id): id is string => Boolean(id))

  const quote = quoteFor({
    packageId,
    addonIds,
    domainChoice: (payload.domainChoice as DomainChoiceId) || 'none',
  })

  // An unrecognised package means the form and this table have drifted. Still
  // save the lead — an unpriced lead is recoverable, a lost one isn't.
  const selectedAddons: SelectedAddon[] =
    quote?.lines
      .filter((l) => l.id !== packageId)
      .map((l) => ({ id: l.id, label: l.label, price: l.price })) ?? []

  try {
    const [row] = await db
      .insert(leads)
      .values({
        name,
        email,
        phone: whatsapp,
        businessName: business,
        packageInterest: payload.selectedPackage || null,
        selectedPackage: packageId || payload.selectedPackage || null,
        selectedPackagePrice: getPackage(packageId)?.price ?? null,
        selectedAddons,
        domainChoice: payload.domainChoice ?? null,
        quoteLines: quote?.lines ?? [],
        onceOffTotal: quote?.onceOffTotal ?? null,
        monthlyTotal: quote?.monthlyTotal ?? null,
        deposit: quote?.deposit ?? null,
        validUntil: quote?.validUntil ?? null,
        estimateTotal: quote?.onceOffTotal ?? null,
        message: payload.source ? `Found us via: ${payload.source}` : null,
        source: 'quote',
        status: 'new',
        completed: true,
      })
      .returning({ id: leads.id })

    if (!quote) {
      console.error('[leads] lead', row.id, 'saved without a price — unknown package:', payload.selectedPackage)
    }

    return { ok: true, id: row.id }
  } catch (e) {
    console.log('[v0] submitQuote error:', (e as Error).message)
    return { ok: false, error: 'Something went wrong sending your request.' }
  }
}

export async function submitContact(payload: ContactPayload): Promise<ActionResult> {
  const name = payload.name?.trim()
  const email = payload.email?.trim().toLowerCase()

  if (!name) return { ok: false, error: 'Please enter your full name.' }
  if (!email || !emailRe.test(email)) return { ok: false, error: 'Please enter a valid email.' }

  try {
    const [row] = await db
      .insert(leads)
      .values({
        name,
        email,
        phone: payload.phone?.trim() || null,
        businessName: payload.businessName?.trim() || null,
        packageInterest: payload.packageInterest || null,
        message: payload.message?.trim() || null,
        source: 'contact',
        completed: true,
      })
      .returning({ id: leads.id })
    return { ok: true, id: row.id }
  } catch (e) {
    console.log('[v0] submitContact error:', (e as Error).message)
    return { ok: false, error: 'Something went wrong sending your request.' }
  }
}
