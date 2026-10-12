'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
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
    short: 'Quote',
    when: 'Day 1',
    name: 'Get your quote',
    description:
      'Answer a few quick questions. We send a fixed-price quote to your email and WhatsApp within 24 hours.',
  },
  {
    icon: CalendarCheck,
    short: 'Book',
    when: 'When you’re ready',
    name: 'Confirm and book your slot',
    description:
      'Accept your quote and pay the 50% deposit by EFT. We book your build into our schedule.',
  },
  {
    icon: ClipboardList,
    short: 'Content',
    when: 'Your part',
    name: 'Send your content',
    description:
      'A simple form for your logo, photos, services and contact details. We guide you through it, so it never feels like homework.',
  },
  {
    icon: Code2,
    short: 'Build',
    when: '3–7 working days',
    name: 'We design and build',
    description:
      'We design your site by hand around your business, and use AI tools to build it fast, without cutting corners.',
  },
  {
    icon: Eye,
    short: 'Preview',
    when: 'Your review',
    name: 'Preview and changes',
    description: `You get a live preview link to click through on your phone and computer. ${REVISION_ROUNDS} rounds of changes are included, and if you’re unhappy with the first preview, you get your deposit back.`,
  },
  {
    icon: Rocket,
    short: 'Launch',
    when: 'Launch day',
    name: 'Pay the balance and go live',
    description:
      'Once you’re happy, pay the balance. We connect your domain, make sure Google can find your site and hand over your logins.',
  },
  {
    icon: HeartHandshake,
    short: 'Aftercare',
    when: 'After launch',
    name: 'Stay looked after',
    description:
      'Add monthly maintenance if you’d like us to keep things running, or take the keys and manage it yourself. Either way, the website is yours.',
  },
]

// One step at a time, explored rather than read. Navigation is deliberately
// quiet (icon tabs and small outline arrows) so it never reads as a sign-up
// button. Every panel stays in the DOM (inactive ones `hidden`) so the whole
// process is still crawlable and readable by screen readers.
export function ProcessStepper() {
  const [active, setActive] = useState(0)
  const last = steps.length - 1
  const go = (n: number) => setActive(Math.min(last, Math.max(0, n)))

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      {/* Step picker */}
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-[7%] right-[7%] top-5 h-px bg-charcoal/15 sm:top-6"
        />
        <span
          aria-hidden="true"
          className="absolute left-[7%] top-5 h-px bg-steel transition-[width] duration-500 sm:top-6"
          style={{ width: `${(86 * active) / last}%` }}
        />
        <ol className="relative grid grid-cols-7" role="tablist" aria-label="Our process">
          {steps.map((s, i) => {
            const current = i === active
            const done = i < active
            return (
              <li key={s.name} className="flex justify-center">
                <button
                  type="button"
                  role="tab"
                  id={`process-tab-${i}`}
                  aria-selected={current}
                  aria-controls={`process-panel-${i}`}
                  onClick={() => go(i)}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-12 sm:w-12 ${
                      current
                        ? 'border-charcoal bg-charcoal text-white shadow-[0_8px_20px_-8px_rgba(51,51,51,0.6)] sm:scale-110'
                        : done
                          ? 'border-steel bg-steel/40 text-charcoal'
                          : 'border-charcoal/15 bg-white text-charcoal/50 group-hover:border-charcoal/40 group-hover:text-charcoal'
                    }`}
                  >
                    <s.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span
                    className={`hidden text-[12px] font-medium sm:block ${
                      current ? 'text-charcoal' : 'text-charcoal/50 group-hover:text-charcoal'
                    }`}
                  >
                    {s.short}
                  </span>
                  <span className="sr-only">{`Step ${i + 1}: ${s.name}`}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Panel, flanked by quiet arrows */}
      <div className="mt-10 flex items-center gap-3 sm:gap-6">
        <ArrowButton dir="prev" onClick={() => go(active - 1)} disabled={active === 0} className="hidden sm:flex" />

        <div className="min-h-[200px] flex-1 border border-[#e0ddda] bg-white px-5 py-8 text-center sm:px-10">
          {steps.map((s, i) => (
            <div
              key={s.name}
              role="tabpanel"
              id={`process-panel-${i}`}
              aria-labelledby={`process-tab-${i}`}
              hidden={i !== active}
              className={i === active ? 'animate-in fade-in slide-in-from-bottom-2 duration-500' : ''}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-steel">
                Step {i + 1} of {steps.length} · {s.when}
              </p>
              <h3 className="mt-2 font-serif text-2xl italic text-charcoal md:text-3xl">
                {s.name}
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-[16px] leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              {i === last ? (
                <a
                  href="/get-a-quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal underline underline-offset-4 hover:text-charcoal/70"
                >
                  Ready when you are: get your quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <ArrowButton dir="next" onClick={() => go(active + 1)} disabled={active === last} className="hidden sm:flex" />
      </div>

      <div className="mt-5 flex justify-center gap-4 sm:hidden">
        <ArrowButton dir="prev" onClick={() => go(active - 1)} disabled={active === 0} />
        <ArrowButton dir="next" onClick={() => go(active + 1)} disabled={active === last} />
      </div>

      <p className="mt-4 text-center text-[12px] text-muted-foreground">
        Tap a step or use the arrows to walk through it.
      </p>
    </div>
  )
}

function ArrowButton({
  dir,
  onClick,
  disabled,
  className = '',
}: {
  dir: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
  className?: string
}) {
  const Icon = dir === 'prev' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Previous step' : 'Next step'}
      className={`h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition hover:border-charcoal disabled:opacity-25 ${className || 'flex'}`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
