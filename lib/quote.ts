import type { Lead } from '@/lib/db/schema'
import { getPackage, type Quote } from '@/lib/packages'

// Rebuilds the Quote we priced at submit time from what was stored, rather than
// recalculating. If the rate card changes between a lead arriving and the quote
// being approved, the client must still receive the figures that were reviewed.
//
// Lives here rather than in app/actions/quote.ts because a 'use server' module
// may only export async functions.
export function quoteFromLead(lead: Lead): Quote | null {
  const pkg = getPackage(lead.selectedPackage)
  if (!pkg || !lead.quoteLines?.length) return null

  return {
    packageId: pkg.id,
    packageName: pkg.name,
    timeline: pkg.timeline,
    includes: pkg.includes,
    lines: lead.quoteLines,
    onceOffTotal: lead.onceOffTotal ?? 0,
    monthlyTotal: lead.monthlyTotal ?? 0,
    deposit: lead.deposit ?? 0,
    balance: (lead.onceOffTotal ?? 0) - (lead.deposit ?? 0),
    validUntil: lead.validUntil ?? new Date(),
  }
}
