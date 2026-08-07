'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import {
  Check,
  FileText,
  Laptop,
  MapPin,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'
import { submitQuote } from '@/app/actions/leads'
// Prices are deliberately not imported here. The quiz collects selections only;
// the rate card stays server-side so it isn't readable from the public page.
import {
  addonsFor,
  domainChoices,
  packages,
  type DomainChoiceId,
  type PackageId,
} from '@/lib/packages'

// Options are derived from lib/packages so the quiz can never drift from the
// rate card. Only the icons live here — everything priced comes from there.
const PACKAGE_ICONS: Record<string, React.ReactNode> = {
  starter: <FileText size={24} strokeWidth={1.6} />,
  business: <Laptop size={24} strokeWidth={1.6} />,
  premium: <Rocket size={24} strokeWidth={1.6} />,
}

const ADDON_ICONS: Record<string, React.ReactNode> = {
  logo: <Sparkles size={20} strokeWidth={1.6} />,
  popia: <Shield size={20} strokeWidth={1.6} />,
  gbp: <MapPin size={20} strokeWidth={1.6} />,
  'ads-pixel': <Target size={20} strokeWidth={1.6} />,
  rush: <Zap size={20} strokeWidth={1.6} />,
  maintenance: <Wrench size={20} strokeWidth={1.6} />,
}

const STEP_LABELS = ['Package', 'Add-ons', 'Your Details']
const PROGRESS = ['5%', '38%', '70%', '100%']

// `source` is recorded on the lead so paid traffic is distinguishable from
// organic in the review email and the admin list.
export function QuoteQuiz({ source }: { source?: string } = {}) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [pkg, setPkg] = useState<PackageId | null>(null)
  const [addons, setAddons] = useState<string[]>([])
  const [domain, setDomain] = useState<DomainChoiceId>('none')
  const [form, setForm] = useState({ name: '', business: '', whatsapp: '', email: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  function go(n: number) {
    setError('')
    setStep(n)
    // Scroll to the top of the form itself rather than the top of the page, so
    // the quiz stays in view when it's embedded mid-page (e.g. the homepage).
    if (typeof window !== 'undefined' && rootRef.current) {
      const top = rootRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Add-ons on offer depend on the package — Premium already covers tracking,
  // so that option is filtered out rather than sold twice.
  const availableAddons = pkg ? addonsFor(pkg) : []

  function selectPkg(value: PackageId) {
    setPkg(value)
    setError('')
    // Drop any selection the new package doesn't offer.
    const allowed = addonsFor(value).map((a) => a.id)
    setAddons((prev) => prev.filter((id) => allowed.includes(id)))
    setTimeout(() => go(2), 380)
  }

  function toggleAddon(value: string) {
    setAddons((prev) => (prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]))
  }

  function nextFromPkg() {
    if (!pkg) {
      setError('Please select a package before continuing.')
      return
    }
    go(2)
  }

  async function handleSubmit() {
    const { name, business, whatsapp, email } = form
    if (!name.trim() || !business.trim() || !whatsapp.trim() || !email.trim()) {
      setError('Please fill in all required fields marked with *')
      return
    }
    setSubmitting(true)

    // Human-readable versions for the Formspree alert and the thank-you page.
    // The database gets ids, so pricing stays keyed to lib/packages.
    const addonLabels = availableAddons
      .filter((a) => addons.includes(a.id))
      .map((a) => a.label)
    const packageLabel = packages.find((p) => p.id === pkg)?.name ?? ''

    // Save to our database. This also prices the quote and emails it for review.
    const res = await submitQuote({
      name,
      business,
      whatsapp,
      email,
      selectedPackage: pkg ?? '',
      addons,
      domainChoice: domain,
      source,
    })

    // Also email the request via Formspree. A failure here shouldn't block the
    // user, since the lead is already saved to the database above.
    try {
      await fetch('https://formspree.io/f/xqerqolq', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          business,
          whatsapp,
          email,
          _replyto: email,
          package: packageLabel,
          addons: addonLabels.length ? addonLabels.join(', ') : 'None selected',
          domain: domainChoices.find((d) => d.id === domain)?.label ?? '',
          _subject: `New quote request from ${name} (${business})`,
        }),
      })
    } catch (err) {
      console.log('[v0] Formspree submit failed:', (err as Error).message)
    }

    if (!res.ok) {
      setSubmitting(false)
      setError(res.error ?? 'Something went wrong. Please try again.')
      return
    }

    // Redirect to the dedicated thank-you page, carrying the submitted details
    // so they can be shown back to the user.
    const params = new URLSearchParams({
      name,
      business,
      whatsapp,
      email,
      package: packageLabel,
      addons: addonLabels.length ? addonLabels.join(', ') : 'None selected',
    })
    router.push(`/thank-you?${params.toString()}`)
  }

  const inputClass =
    'w-full border border-[#E0DDDA] bg-[#F7F6F2] px-4 py-3.5 text-[15px] text-charcoal outline-none transition focus:border-steel focus:bg-white placeholder:text-[#C0BCBA]'

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-[480px] scroll-mt-24">
      {/* Progress */}
      {step < 4 ? (
        <div className="mb-6 px-1">
          <div className="mb-2.5 flex justify-between">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1
              const state = n === step ? 'text-steel' : n < step ? 'text-charcoal' : 'text-[#bbbbbb]'
              return (
                <span
                  key={label}
                  className={`text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${state}`}
                >
                  {label}
                </span>
              )
            })}
          </div>
          <div className="relative h-0.5 w-full overflow-hidden bg-[#E0DDDA]">
            <div
              className="absolute left-0 top-0 h-full bg-steel transition-[width] duration-500 ease-out"
              style={{ width: PROGRESS[step - 1] }}
            />
          </div>
        </div>
      ) : null}

      {/* Card */}
      <div className="relative overflow-hidden border border-[#E0DDDA] bg-white px-6 py-8">
        {/* STEP 1 — Package */}
        {step === 1 ? (
          <div>
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
              Step 1 of 3
            </p>
            <h1 className="mb-1.5 font-serif text-[28px] italic leading-tight text-charcoal">
              What do you need built?
            </h1>
            <p className="mb-7 text-sm leading-relaxed text-[#888888]">
              Choose the option that fits where your business is right now.
            </p>

            <div className="mb-6 flex flex-col gap-2.5">
              {packages.map((p) => {
                const selected = pkg === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => selectPkg(p.id)}
                    className={`flex items-start gap-3.5 border p-4 text-left transition ${
                      selected
                        ? 'border-2 border-charcoal bg-steel'
                        : 'border-[1.5px] border-[#E0DDDA] hover:border-steel'
                    }`}
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-charcoal">
                      {PACKAGE_ICONS[p.id]}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[15px] font-semibold text-charcoal">{p.name}</span>
                      <span
                        className={`block text-[13px] leading-normal ${selected ? 'text-[#555]' : 'text-[#888888]'}`}
                      >
                        {p.desc}
                      </span>
                    </span>
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] transition ${
                        selected ? 'border-charcoal bg-charcoal text-white' : 'border-[#E0DDDA]'
                      }`}
                    >
                      {selected ? <Check size={12} strokeWidth={3} /> : null}
                    </span>
                  </button>
                )
              })}
            </div>

            {error ? <p className="mb-3 text-xs text-[#B03A2E]">{error}</p> : null}

            <button
              type="button"
              onClick={nextFromPkg}
              className="w-full border-2 border-steel bg-steel px-5 py-3.5 text-sm font-semibold text-charcoal transition hover:border-[#8FAEC5] hover:bg-[#8FAEC5]"
            >
              Next →
            </button>
          </div>
        ) : null}

        {/* STEP 2 — Add-ons */}
        {step === 2 ? (
          <div>
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
              Step 2 of 3
            </p>
            <h2 className="mb-1.5 font-serif text-[28px] italic leading-tight text-charcoal">
              Anything extra?
            </h2>
            <p className="mb-7 text-sm leading-relaxed text-[#888888]">
              Tap all that apply — or skip ahead if you just need the basics.
            </p>

            <div className="mb-6 grid grid-cols-2 gap-2">
              {availableAddons.map((a) => {
                const selected = addons.includes(a.id)
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => toggleAddon(a.id)}
                    className={`relative flex flex-col gap-2 border p-3.5 text-left transition ${
                      selected
                        ? 'border-2 border-charcoal bg-steel'
                        : 'border-[1.5px] border-[#E0DDDA] hover:border-steel'
                    }`}
                  >
                    <span
                      className={`absolute right-2.5 top-2.5 flex h-[17px] w-[17px] items-center justify-center rounded-full border-[1.5px] transition ${
                        selected ? 'border-charcoal bg-charcoal text-white' : 'border-[#E0DDDA]'
                      }`}
                    >
                      {selected ? <Check size={10} strokeWidth={3} /> : null}
                    </span>
                    <span className="flex h-7 items-center text-charcoal">{ADDON_ICONS[a.id]}</span>
                    <span className="pr-4 text-[12.5px] font-semibold leading-tight text-charcoal">
                      {a.label}
                    </span>
                    <span className="text-[11px] leading-snug text-[#888888]">{a.note}</span>
                  </button>
                )
              })}
            </div>

            {/* Domain + hosting is a choice between situations, not a tick-box:
                what it costs us differs a lot depending on what they already have. */}
            <div className="mb-6">
              <p className="mb-2 text-[12.5px] font-semibold text-charcoal">
                Domain &amp; hosting
              </p>
              <div className="flex flex-col gap-1.5">
                {domainChoices.map((d) => {
                  const selected = domain === d.id
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDomain(d.id)}
                      className={`flex items-center gap-3 border p-3 text-left transition ${
                        selected
                          ? 'border-2 border-charcoal bg-steel'
                          : 'border-[1.5px] border-[#E0DDDA] hover:border-steel'
                      }`}
                    >
                      <span
                        className={`flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition ${
                          selected ? 'border-charcoal bg-charcoal text-white' : 'border-[#E0DDDA]'
                        }`}
                      >
                        {selected ? <Check size={10} strokeWidth={3} /> : null}
                      </span>
                      <span className="flex-1">
                        <span className="block text-[12.5px] font-semibold leading-tight text-charcoal">
                          {d.label}
                        </span>
                        <span className="block text-[11px] leading-snug text-[#888888]">
                          {d.note}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mb-5 text-center">
              <button
                type="button"
                onClick={() => go(3)}
                className="p-1 text-[13px] text-[#888888] underline"
              >
                Skip — I don&apos;t need any add-ons
              </button>
            </div>

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => go(1)}
                className="border border-[#E0DDDA] px-5 py-3.5 text-sm font-semibold text-charcoal transition hover:border-charcoal"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => go(3)}
                className="flex-1 border-2 border-steel bg-steel px-5 py-3.5 text-sm font-semibold text-charcoal transition hover:border-[#8FAEC5] hover:bg-[#8FAEC5]"
              >
                Next →
              </button>
            </div>
          </div>
        ) : null}

        {/* STEP 3 — Details */}
        {step === 3 ? (
          <div>
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
              Step 3 of 3
            </p>
            <h2 className="mb-1.5 font-serif text-[28px] italic leading-tight text-charcoal">
              Almost done.
            </h2>
            <p className="mb-7 text-sm leading-relaxed text-[#888888]">
              Leave your details and we&apos;ll send a custom quote within 24 hours.
            </p>

            <div className="flex flex-col gap-[18px]">
              <Field label="Your Name *">
                <input
                  className={inputClass}
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Naledi Dlamini"
                  autoComplete="name"
                />
              </Field>
              <Field label="Business Name *">
                <input
                  className={inputClass}
                  type="text"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  placeholder="e.g. Naledi's Hair Studio"
                  autoComplete="organization"
                />
              </Field>
              <Field label="WhatsApp Number *">
                <input
                  className={inputClass}
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="e.g. 083 123 4567"
                  autoComplete="tel"
                />
              </Field>
              <Field label="Email Address *">
                <input
                  className={inputClass}
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. naledi@example.com"
                  autoComplete="email"
                />
              </Field>
            </div>

            {error ? <p className="mb-3 mt-3 text-xs text-[#B03A2E]">{error}</p> : null}

            <div className="mt-2 flex gap-2.5">
              <button
                type="button"
                onClick={() => go(2)}
                className="border border-[#E0DDDA] px-5 py-3.5 text-sm font-semibold text-charcoal transition hover:border-charcoal"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1 border-2 border-steel bg-steel px-5 py-3.5 text-sm font-semibold text-charcoal transition hover:border-[#8FAEC5] hover:bg-[#8FAEC5] disabled:opacity-45"
              >
                {submitting ? 'Sending…' : 'Send My Quote Request'}
              </button>
            </div>
          </div>
        ) : null}

      </div>

      <p className="mx-auto mt-4 max-w-[480px] text-center text-[11.5px] leading-relaxed text-[#aaaaaa]">
        Your information is only used to prepare and send your quote — never shared or sold.
      </p>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-charcoal">
        {label}
      </span>
      {children}
    </label>
  )
}
