import { CheckCircle2, X } from 'lucide-react'
import { REVISION_ROUNDS, formatRand, getPackage, type PackageId } from '@/lib/packages'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export type Plan = {
  // Price comes from lib/packages by this id, never typed in here.
  packageId: PackageId
  title: string
  tagline: string
  delivery: string
  included: string[]
  excluded: string[]
  popular: boolean
}

export const plans: Plan[] = [
  {
    packageId: 'starter',
    title: 'Starter Landing Page',
    tagline: 'Get online fast. Perfect for running ads.',
    delivery: '3–5 days',
    included: [
      '1-page custom design',
      'Mobile responsive',
      'Hero, Services, Contact & Map',
      'Contact form with email notification',
      'Basic SEO metadata',
      'WhatsApp chat button',
      'Deployed to your domain',
    ],
    excluded: ['Multiple pages', 'Portfolio / gallery section', 'Ads pixel setup (add-on)'],
    popular: false,
  },
  {
    packageId: 'business',
    title: 'Business Website',
    tagline: 'Your full online presence. Done properly.',
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
    packageId: 'premium',
    title: 'Premium + Ads-Ready',
    tagline: 'Full site plus a dedicated page for paid ads.',
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

// "From R2,200" etc. Shown as a starting price because add-ons and domain
// choices change the final quote.
export function planPrice(plan: Plan): string {
  const price = getPackage(plan.packageId)?.price
  return price ? formatRand(price) : ''
}

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

                  {/* Price + delivery */}
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        From
                      </span>
                      <span className="font-serif text-3xl italic text-charcoal">
                        {planPrice(plan)}
                      </span>
                    </div>
                    <span className="mb-1 inline-block bg-charcoal px-2.5 py-1 text-[11px] font-medium text-white">
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
                  href="/get-a-quote"
                  className="mt-8 inline-flex w-full items-center justify-center gap-1 bg-steel px-6 py-3 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  Get a Free Quote &rarr;
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <hr className="mt-12 border-t border-[#e0ddda]" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-[#888888]">
          Once-off prices. All packages include {REVISION_ROUNDS} rounds of revisions. Additional
          pages, logo design and monthly care are available as add-ons. Domain and hosting are quoted
          separately unless you already have your own. Your exact price is confirmed in your quote.
        </p>
      </div>
    </section>
  )
}
