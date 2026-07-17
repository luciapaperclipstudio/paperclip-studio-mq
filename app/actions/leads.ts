'use server'

import { db } from '@/lib/db'
import { leads, type SelectedAddon } from '@/lib/db/schema'
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
