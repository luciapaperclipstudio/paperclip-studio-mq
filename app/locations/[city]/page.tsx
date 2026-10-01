import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, CheckCircle2, X } from 'lucide-react'

import { faqJsonLd } from '@/app/layout'
import { Faq } from '@/components/site/faq'
import { Footer } from '@/components/site/footer'
import { BrowserMock } from '@/components/site/hero'
import { HowItWorks } from '@/components/site/how-it-works'
import { Navbar } from '@/components/site/navbar'
import { QuoteCta } from '@/components/site/quote-cta'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'
import { plans } from '@/components/site/services'
import { Testimonials } from '@/components/site/testimonials'
import { TrustStrip } from '@/components/site/trust-strip'
import { getLocationBySlug, locations } from '@/lib/locations'

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const location = getLocationBySlug(city)

  if (!location) {
    return { title: 'Location not found' }
  }

  const url = `https://www.paperclipstudio.co.za/locations/${location.slug}`

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url,
      type: 'website',
      locale: 'en_ZA',
    },
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const location = getLocationBySlug(city)

  if (!location) {
    notFound()
  }

  const url = `https://www.paperclipstudio.co.za/locations/${location.slug}`

  // A service offered in this city, not a business located in it. We work
  // remotely, so a PostalAddress per city would claim offices that don't
  // exist. The provider points at the site-wide Organization entity.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Web Design ${location.city}`,
    serviceType: 'Web Design',
    description: location.metaDescription,
    url,
    provider: { '@id': 'https://www.paperclipstudio.co.za/#organization' },
    areaServed: [
      {
        '@type': 'City',
        name: location.city,
        alternateName: location.alternateNames,
        containedInPlace: { '@type': 'Country', name: 'South Africa' },
      },
      ...location.areas.map((name) => ({ '@type': 'Place', name })),
    ],
  }

  // One FAQPage covering both the city questions and the general FAQ, since
  // both are visible on this page.
  const cityFaqJsonLd = {
    ...faqJsonLd,
    mainEntity: [
      ...location.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
      ...faqJsonLd.mainEntity,
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="scroll-smooth">
        {/* a) Hero */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
            <Reveal className="md:col-span-3">
              <SectionLabel>Web Design Studio · {location.city}</SectionLabel>
              <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                {location.h1}
              </h1>
              <p className="mt-4 max-w-xl font-serif text-xl italic font-light leading-snug text-charcoal/70 text-balance md:text-2xl">
                {location.heroSubheading}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/get-a-quote"
                  className="rounded bg-steel px-6 py-3 text-center text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  Get a Free Quote &rarr;
                </a>
                <a
                  href="#packages"
                  className="rounded border border-charcoal px-6 py-3 text-center text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-white"
                >
                  See Packages
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {['Delivered in 3–7 days', 'Mobile-first', `Built for ${location.city} businesses`].map(
                  (t) => (
                    <span key={t} className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-steel" />
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal className="md:col-span-2" delay={150}>
              <div className="relative rounded-xl bg-gradient-to-br from-cream to-white p-6 shadow-[0_24px_60px_-24px_rgba(51,51,51,0.35)]">
                <BrowserMock
                  label="KLIPKOP Gallery · Concept"
                  tone="#dce7ef"
                  image="/portfolio/klipkop-desktop.jpeg"
                  className="w-[88%] -rotate-2"
                />
                <BrowserMock
                  label="Eventure Escapes · Luxury Travel"
                  tone="#f0e7c8"
                  image="/portfolio/eventure-escapes-desktop.jpeg"
                  className="-mt-6 ml-auto w-[82%] rotate-1"
                />
                <BrowserMock
                  label="Torque & Co. · Concept"
                  tone="#dbe4ee"
                  image="/portfolio/torque-and-co-desktop.jpeg"
                  className="-mt-6 w-[74%] -rotate-1"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* b) Trust bar */}
        <TrustStrip />

        {/* c) Services / packages */}
        <section id="packages" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Reveal>
              <SectionLabel>What We Build</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                Website packages for {location.city} businesses.
              </h2>
              <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                {location.servicesIntro}
              </p>
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
                      <h3 className="pr-24 text-lg font-semibold text-charcoal">{plan.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {plan.tagline}
                      </p>
                      <hr className="my-5 border-t border-[#e0ddda]" />

                      <div className="flex items-end gap-3">
                        <div>
                          <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                            Delivered in
                          </span>
                          <span className="font-serif text-3xl italic text-charcoal">
                            {plan.delivery}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-6 flex flex-col gap-2.5">
                        {plan.included.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-charcoal"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-steel"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>

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
          </div>
        </section>

        {/* d) How it works */}
        <HowItWorks />

        {/* e) City-specific copy block */}
        <section className="bg-charcoal">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel className="text-steel">Local Web Design · {location.city}</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
                Websites built to win in {location.city}.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
                {location.cityBlurb}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
                Serving {[location.city, ...location.alternateNames.slice(0, 1)].join(' / ')} and
                surrounds, including {location.areas.join(', ')}.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
                {['Found on Google', 'Mobile-first design', 'Delivered in 3–7 days'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-steel" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* f) Testimonials */}
        <Testimonials />

        {/* g) FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityFaqJsonLd) }}
        />
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <Reveal>
              <SectionLabel>{location.city} Questions</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                Website design in {location.city}, answered.
              </h2>
            </Reveal>
            <div className="mt-10 flex flex-col divide-y divide-[#e0ddda] border-y border-[#e0ddda]">
              {location.faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <h3 className="text-lg font-semibold text-charcoal">{faq.q}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Faq />

        {/* h) Footer CTA with city mention */}
        <QuoteCta
          variant="band"
          title={`Ready to grow your ${location.city} business online?`}
          subtitle={`Tell us what you need and we'll send a free, no-obligation quote for your ${location.city} website.`}
        />
      </main>
      <Footer />
    </>
  )
}
