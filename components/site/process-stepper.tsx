'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  Code2,
  Eye,
  FileText,
  HeartHandshake,
  Rocket,
} from 'lucide-react'
import { REVISION_ROUNDS } from '@/lib/packages'

// The whole journey, quote to aftercare. Timings and payment terms must match
// the FAQ, Terms and lib/packages.
const steps = [
  {
    icon: FileText,
    when: 'Day 1',
    name: 'Get your quote',
    description:
      'Answer a few quick questions. We send a fixed-price quote to your email and WhatsApp within 24 hours.',
  },
  {
    icon: CalendarCheck,
    when: 'When you’re ready',
    name: 'Confirm and book your slot',
    description:
      'Accept your quote and pay the 50% deposit by EFT. We book your build into our schedule.',
  },
  {
    icon: ClipboardList,
    when: 'Your part',
    name: 'Send your content',
    description:
      'A simple form for your logo, photos, services and contact details. We guide you through it, so it never feels like homework.',
  },
  {
    icon: Code2,
    when: '3–7 working days',
    name: 'We design and build',
    description:
      'We design your site by hand around your business, and use AI tools to build it fast, without cutting corners.',
  },
  {
    icon: Eye,
    when: 'Your review',
    name: 'Preview and changes',
    description: `You get a live preview link to click through on your phone and computer. ${REVISION_ROUNDS} rounds of changes are included.`,
  },
  {
    icon: Rocket,
    when: 'Launch day',
    name: 'Pay the balance and go live',
    description:
      'Once you’re happy, pay the balance. We connect your domain, make sure Google can find your site and hand over your logins.',
  },
  {
    icon: HeartHandshake,
    when: 'After launch',
    name: 'Stay looked after',
    description:
      'Choose an optional care plan below, or take the keys and manage it yourself. Either way, the website is yours.',
  },
]

// One step at a time instead of a long list. Every panel stays in the DOM
// (inactive ones are `hidden`) so the full process is still readable by
// search engines and screen readers.
export function ProcessStepper() {
  const [active, setActive] = useState(0)
  const last = steps.length - 1

  return (
    <div className="mt-12 max-w-3xl">
      {/* Step picker */}
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-[18px] right-[18px] top-[18px] h-px bg-charcoal/15"
        />
        <span
          aria-hidden="true"
          className="absolute left-[18px] top-[18px] h-px bg-steel transition-[width] duration-300"
          style={{ width: `calc((100% - 36px) * ${active / last})` }}
        />
        <ol className="relative flex justify-between" role="tablist" aria-label="Our process">
          {steps.map((s, i) => {
            const done = i < active
            const current = i === active
            return (
              <li key={s.name}>
                <button
                  type="button"
                  role="tab"
                  id={`process-tab-${i}`}
                  aria-selected={current}
                  aria-controls={`process-panel-${i}`}
                  aria-label={`Step ${i + 1}: ${s.name}`}
                  onClick={() => setActive(i)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    current
                      ? 'border-charcoal bg-charcoal text-white'
                      : done
                        ? 'border-steel bg-steel text-charcoal'
                        : 'border-charcoal/20 bg-white text-charcoal/60 hover:border-charcoal'
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Panels */}
      <div className="mt-8 border border-[#e0ddda] bg-white p-7 md:p-9">
        {steps.map((s, i) => (
          <div
            key={s.name}
            role="tabpanel"
            id={`process-panel-${i}`}
            aria-labelledby={`process-tab-${i}`}
            hidden={i !== active}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-steel/25 text-charcoal">
                <s.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-steel">
                  Step {i + 1} of {steps.length} · {s.when}
                </p>
                <h3 className="mt-1.5 font-serif text-2xl italic text-charcoal md:text-3xl">
                  {s.name}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#e0ddda] pt-6">
          <button
            type="button"
            onClick={() => setActive((n) => Math.max(0, n - 1))}
            disabled={active === 0}
            className="inline-flex items-center gap-1.5 px-1 py-2 text-sm font-semibold text-charcoal transition disabled:invisible"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>
          {active < last ? (
            <button
              type="button"
              onClick={() => setActive((n) => Math.min(last, n + 1))}
              className="inline-flex items-center gap-1.5 bg-steel px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:brightness-95"
            >
              Next: {steps[active + 1].name}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <a
              href="/get-a-quote"
              className="inline-flex items-center gap-1.5 bg-steel px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:brightness-95"
            >
              Get my quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
