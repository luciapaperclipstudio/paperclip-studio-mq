import { ProcessStepper } from './process-stepper'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

// Prices are deliberately not shown here; they're confirmed in the quote.
const carePlans = [
  {
    name: 'Self-managed',
    tag: 'Included',
    highlight: false,
    points: [
      'You get every login and file',
      'Make simple changes yourself',
      'Need help later? Ask for a quote',
    ],
  },
  {
    name: 'Hosting',
    tag: 'Optional add-on',
    highlight: false,
    points: [
      'Fast, secure hosting with SSL',
      'First year included when we set up your domain',
      'Renewed yearly from year two',
    ],
  },
  {
    name: 'Monthly Care',
    tag: 'Optional add-on',
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

        <ProcessStepper />

        {/* Care plans */}
        <div id="care-plans" className="mt-20">
          <Reveal>
            <h3 className="font-serif text-2xl italic text-charcoal md:text-3xl">
              Optional care plans
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Nothing is compulsory. Add a plan when you order or any time later, and we&apos;ll include it in your quote.
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
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-steel">
                    {plan.tag}
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
