'use client'

import { captureLead, updateLead } from '@/app/actions/leads'
import {
  addons as addonData,
  formatRand,
  packages as packageData,
  WHATSAPP_NUMBER,
  type AddonOption,
} from '@/lib/packages'
import { cn } from '@/lib/utils'
import {
  Check,
  FileText,
  Globe,
  Laptop,
  MapPin,
  MessageCircle,
  Palette,
  Rocket,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const packageIcons: Record<string, React.ElementType> = {
  starter: FileText,
  business: Laptop,
  premium: Rocket,
}

const addonIcons: Record<string, React.ElementType> = {
  domain: Globe,
  logo: Palette,
  whatsapp: MessageCircle,
  popia: ShieldCheck,
  gbp: MapPin,
  maintenance: Wrench,
}

export function Calculator() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  // Lead capture
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [leadId, setLeadId] = useState<number | null>(null)
  const [captured, setCaptured] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)

  const pkg = packageData.find((p) => p.id === selectedPackage) ?? null
  const chosenAddons: AddonOption[] = addonData.filter((a) => selectedAddons.includes(a.id))
  const total = (pkg?.price ?? 0) + chosenAddons.reduce((sum, a) => sum + a.price, 0)

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Autosave selection changes once we have captured the lead
  useEffect(() => {
    if (!leadId) return
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      void updateLead(leadId, {
        selectedPackage: pkg?.name ?? null,
        selectedPackagePrice: pkg?.price ?? null,
        selectedAddons: chosenAddons.map((a) => ({ id: a.id, label: a.label, price: a.price })),
        estimateTotal: total,
        completed,
      })
    }, 700)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadId, selectedPackage, selectedAddons, completed])

  function toggleAddon(id: string) {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSaving(true)
    const res = await captureLead({
      name,
      email,
      selectedPackage: pkg?.name ?? null,
      selectedPackagePrice: pkg?.price ?? null,
      selectedAddons: chosenAddons.map((a) => ({ id: a.id, label: a.label, price: a.price })),
      estimateTotal: total,
    })
    setSaving(false)
    if (!res.ok) {
      setError(res.error ?? 'Something went wrong.')
      return
    }
    setLeadId(res.id ?? null)
    setCaptured(true)
  }

  function handleGetQuote() {
    setCompleted(true)
    if (leadId) {
      void updateLead(leadId, {
        selectedPackage: pkg?.name ?? null,
        selectedPackagePrice: pkg?.price ?? null,
        selectedAddons: chosenAddons.map((a) => ({ id: a.id, label: a.label, price: a.price })),
        estimateTotal: total,
        completed: true,
      })
    }
  }

  const waMessage = encodeURIComponent(
    `Hi paperclip studio! I'd like a quote${pkg ? ` for the ${pkg.name}` : ''}. My estimate is ${formatRand(total)}.`,
  )

  return (
    <section id="pricing" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal md:text-4xl">
            Build your package.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Select what you need and get an instant estimate — no forms, no waiting.
          </p>
        </Reveal>

        {/* Step 1 */}
        <div className="mt-12">
          <p className="label-caps mb-5 text-charcoal/60">Step 1 — What do you need?</p>
          <div className="grid gap-5 md:grid-cols-3">
            {packageData.map((p) => {
              const Icon = packageIcons[p.id]
              const active = selectedPackage === p.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPackage(p.id)}
                  className={cn(
                    'relative flex flex-col items-start rounded-lg border bg-white p-6 text-left transition-all duration-200 hover:-translate-y-0.5',
                    active
                      ? 'border-2 border-charcoal bg-yellow'
                      : 'border border-[#e0e0e0] hover:shadow-md',
                  )}
                >
                  {active ? (
                    <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal text-white">
                      <Check className="h-4 w-4" />
                    </span>
                  ) : null}
                  <span
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-md border',
                      active ? 'border-charcoal/30 bg-white/60' : 'border-charcoal/15 bg-cream',
                    )}
                  >
                    <Icon className="h-6 w-6 text-charcoal" strokeWidth={1.5} />
                  </span>
                  <span className="mt-4 text-base font-semibold text-charcoal">{p.name}</span>
                  <span className="mt-1 text-sm text-charcoal/70">{p.short}</span>
                  <span className="mt-4 font-serif text-2xl italic text-charcoal">
                    {formatRand(p.price)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Contact capture — required before continuing */}
        {selectedPackage && !captured ? (
          <div className="mt-8 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="rounded-lg border border-charcoal/15 bg-white p-6 md:p-8">
              <p className="label-caps mb-2 text-charcoal/60">Almost there</p>
              <h3 className="font-serif text-xl italic text-charcoal">
                Where should we send your quote?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pop in your name and email so we can follow up with a confirmed quote.
              </p>
              <form
                onSubmit={handleCapture}
                className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start"
              >
                <div className="flex-1">
                  <label htmlFor="calc-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="calc-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded border border-charcoal/30 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-steel focus:ring-2 focus:ring-steel/40"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="calc-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="calc-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded border border-charcoal/30 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-steel focus:ring-2 focus:ring-steel/40"
                  />
                </div>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded bg-charcoal px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {saving ? 'Saving…' : 'Continue'}
                </button>
              </form>
              {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
            </div>
          </div>
        ) : null}

        {/* Step 2 */}
        {captured ? (
          <div className="mt-12 animate-in fade-in slide-in-from-top-3 duration-500">
            <div className="mb-5 flex flex-wrap items-baseline gap-x-3">
              <p className="label-caps text-charcoal/60">Step 2 — Anything extra?</p>
              <span className="text-sm text-muted-foreground">Select all that apply</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {addonData.map((a) => {
                const Icon = addonIcons[a.id]
                const active = selectedAddons.includes(a.id)
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => toggleAddon(a.id)}
                    className={cn(
                      'relative flex items-start gap-3 rounded-lg border bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5',
                      active
                        ? 'border-2 border-charcoal bg-yellow'
                        : 'border border-[#e0e0e0] hover:shadow-md',
                    )}
                  >
                    {active ? (
                      <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                    ) : null}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-charcoal/15 bg-cream text-charcoal">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-charcoal">{a.label}</span>
                      <span className="block text-xs text-charcoal/60">{a.note}</span>
                      <span className="mt-1 block text-sm font-medium text-charcoal">
                        +{formatRand(a.price)}
                        {a.suffix ?? ''}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}

        {/* Step 3 */}
        {captured ? (
          <div className="mt-12 animate-in fade-in slide-in-from-top-3 duration-500">
            <p className="label-caps mb-5 text-charcoal/60">Step 3 — Your estimate</p>
            <div className="grid gap-8 rounded-lg border border-charcoal/15 bg-white p-6 md:grid-cols-2 md:p-10">
              <div>
                <ul className="divide-y divide-[#eeeeee]">
                  {pkg ? (
                    <li className="flex items-center justify-between py-3">
                      <span className="text-sm text-charcoal">{pkg.name}</span>
                      <span className="text-sm font-medium text-charcoal">
                        {formatRand(pkg.price)}
                      </span>
                    </li>
                  ) : null}
                  {chosenAddons.map((a) => (
                    <li key={a.id} className="flex items-center justify-between py-3">
                      <span className="text-sm text-charcoal/80">{a.label}</span>
                      <span className="text-sm font-medium text-charcoal/80">
                        +{formatRand(a.price)}
                        {a.suffix ?? ''}
                      </span>
                    </li>
                  ))}
                  {chosenAddons.length === 0 ? (
                    <li className="py-3 text-sm text-muted-foreground">
                      No add-ons selected yet.
                    </li>
                  ) : null}
                </ul>
              </div>

              <div className="flex flex-col justify-center border-charcoal/10 md:border-l md:pl-10">
                <p className="text-sm text-muted-foreground">Your estimate</p>
                <p className="mt-1 font-serif text-5xl italic text-charcoal">
                  {formatRand(total)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  * Prices are estimates. Final quote confirmed after brief.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleGetQuote}
                    className="rounded bg-yellow px-6 py-3 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {completed ? 'Quote request sent ✓' : 'Get My Custom Quote'}
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-charcoal px-6 py-3 text-center text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-white"
                  >
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
                {completed ? (
                  <p className="mt-4 text-sm text-charcoal/70">
                    Thanks {name.split(' ')[0]} — we&apos;ll be in touch within 24 hours.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
