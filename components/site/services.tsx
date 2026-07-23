import { CheckCircle2, X } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

type Plan = {
  title: string
  tagline: string
  from: string
  price: string
  delivery: string
  included: string[]
  excluded: string[]
  popular: boolean
}

const plans: Plan[] = [
  {
    title: 'Starter Landing Page',
    tagline: 'Get online fast. Perfect for running ads.',
    from: 'From',
    price: 'R1,800',
    delivery: '3–5 days',
    included: [
      '1-page custom design',
      'Mobile responsive',
      'Hero, Services, Contact & Map',
      'Contact form with email notification',
      'Basic SEO metadata',
      'WhatsApp chat button',
      'Ads pixel setup',
      'Deployed to your domain',
    ],
    excluded: ['Multiple pages', 'Portfolio / gallery section'],
    popular: false,
  },
  {
    title: 'Business Website',
    tagline: 'Your full online presence. Done properly.',
    from: 'From',
    price: 'R3,500',
    delivery: '5–7 days',
    included: [
      '3–5 custom pages',
      'Mobile responsive',
      'Home, About, Services, Gallery & Contact',
      'Contact form with email notification',
      'WhatsApp integration',
      'On-page SEO for all pages',
      'Google Maps embed',
      'Image gallery / portfolio section',
      'Deployed to your domain',
    ],
    excluded: ['Paid ads landing page', 'Google / Meta pixel setup'],
    popular: true,
  },
  {
    title: 'Premium + Ads-Ready',
    tagline: 'Full site plus a dedicated page for paid ads.',
    from: 'From',
    price: 'R7,500',
    delivery: 'Priority',
    included: [
      'Everything in Business Website',
      'Dedicated ads landing page (separate URL)',
      'Google Analytics setup',
      'Meta Pixel + Google Ads pixel installed',
      'Conversion tracking configured',
      'WhatsApp integration',
      '1 round of post-launch revisions',
      'Priority delivery',
      'Deployed to your domain',
    ],
    excluded: [],
    popular: false,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            Three ways to get your business online.
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 100}>
              <article className="relative flex h-full flex-col justify-between border border-[#e0ddda] bg-cream p-8">
                {plan.popular ? (
                  <span className="absolute right-0 top-0 bg-charcoal px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                    Most Popular
                  </span>
                ) : null}

                <div>
                  {/* Header */}
                  <h3 className="pr-24 text-lg font-semibold text-charcoal">{plan.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {plan.tagline}
                  </p>
                  <hr className="my-5 border-t border-[#e0ddda]" />

                  {/* Price */}
                  <div className="flex items-end gap-3">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        {plan.from}
                      </span>
                      <span className="font-serif text-3xl italic text-charcoal">{plan.price}</span>
                    </div>
                    <span className="mb-1 bg-charcoal px-2.5 py-1 text-[11px] font-medium text-white">
                      {plan.delivery}
                    </span>
                  </div>

                  {/* Included */}
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {plan.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-steel"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Excluded */}
                  {plan.excluded.length > 0 ? (
                    <ul className="mt-2.5 flex flex-col gap-2.5">
                      {plan.excluded.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <X
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#cccccc]"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                          <span className="leading-snug line-through decoration-[#cccccc]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {/* CTA */}
                <a
                  href="#pricing"
                  className="mt-8 inline-flex w-full items-center justify-center gap-1 bg-steel px-6 py-3 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  Get Started &rarr;
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <hr className="mt-12 border-t border-[#e0ddda]" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-[#888888]">
          All packages include 1 round of revisions. Additional pages, copywriting, logo design, and
          monthly maintenance available as add-ons. Prices exclude domain and hosting unless the
          hosting add-on is selected.
        </p>
      </div>
    </section>
  )
}
