import {
  CalendarCheck,
  ClipboardList,
  Code2,
  Eye,
  FileText,
  HeartHandshake,
  Rocket,
} from 'lucide-react'
import {
  HOSTING_RENEWAL,
  REVISION_ROUNDS,
  addons,
  formatRand,
} from '@/lib/packages'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

// The whole journey, quote to aftercare, so nobody has to guess what happens
// next. Timings and payment terms must match the FAQ, Terms and lib/packages.
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

const maintenance = addons.find((a) => a.id === 'maintenance')

// Only prices that exist in lib/packages are shown. Adding a tier here means
// adding it there first.
const carePlans = [
  {
    name: 'Self-managed',
    price: 'R0',
    period: '',
    highlight: false,
    points: [
      'You get every login and file',
      'Make simple changes yourself',
      'Need help later? Ask for a quote',
    ],
  },
  {
    name: 'Hosting',
    price: formatRand(HOSTING_RENEWAL),
    period: '/year',
    highlight: false,
    points: [
      'Fast, secure hosting with SSL',
      'First year included when we set up your domain',
      'Charged yearly from year two',
    ],
  },
  {
    name: 'Monthly Care',
    price: maintenance ? formatRand(maintenance.price) : '',
    period: '/month',
    highlight: true,
    points: [
      'Content updates when you need them',
      'Regular backups',
      'Uptime monitoring, so we know if it goes down',
    ],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>The Process</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            From first message to live website.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            Here&apos;s exactly what happens, start to finish. Most websites are live within a week
            of us receiving your content.
          </p>
        </Reveal>

        {/* Timeline */}
        <ol className="relative mt-14 max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[21px] top-6 w-px bg-charcoal/15"
          />
          {steps.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 60}>
              <li className={`relative flex gap-5 ${i < steps.length - 1 ? 'pb-10' : ''}`}>
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/15 bg-white text-charcoal">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="pt-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-steel">
                    Step {i + 1} · {s.when}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-charcoal">{s.name}</h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Care plans */}
        <div id="care-plans" className="mt-20">
          <Reveal>
            <h3 className="font-serif text-2xl italic text-charcoal md:text-3xl">
              Optional care plans
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Nothing is compulsory. Add a plan when you order, or later on.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {carePlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <article
                  className={`relative flex h-full flex-col border bg-white p-7 ${
                    plan.highlight ? 'border-2 border-charcoal' : 'border-[#e0ddda]'
                  }`}
                >
                  {plan.highlight ? (
                    <span className="absolute right-0 top-0 bg-charcoal px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                      Most hands-off
                    </span>
                  ) : null}
                  <h4 className="text-base font-semibold text-charcoal">{plan.name}</h4>
                  <p className="mt-3">
                    <span className="font-serif text-3xl italic text-charcoal">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {plan.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
