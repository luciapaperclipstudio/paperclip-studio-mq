import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, MessageCircle, ShieldCheck } from 'lucide-react'

import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'

const SITE_URL = 'https://torque-and-co.vercel.app'

export const metadata: Metadata = {
  title: 'Torque & Co. Mechanic (Concept) | Paperclip Studio',
  description:
    'A concept website for a fictional Cape Town mechanic, built by Paperclip Studio to show a conversion-focused local service website: WhatsApp booking, clear pricing and local SEO.',
  alternates: { canonical: 'https://www.paperclipstudio.co.za/work/torque-and-co' },
}

// Torque & Co. is a mock-up, not a client. Everything on this page says so
// plainly: no testimonial, no results, no client name.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Torque & Co. — Concept Mechanic Website by Paperclip Studio',
  author: { '@type': 'Organization', name: 'Paperclip Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Paperclip Studio',
    url: 'https://www.paperclipstudio.co.za',
  },
  description:
    'Concept project: a booking-focused website for a fictional independent mechanic in Wynberg, Cape Town.',
  url: 'https://www.paperclipstudio.co.za/work/torque-and-co',
}

const features = [
  {
    icon: MessageCircle,
    title: 'Booking in one tap',
    body: 'A WhatsApp button with a pre-filled message (make, model, service needed) sits at the top of every screen, so booking a car in takes seconds on a phone.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust, up front',
    body: '"From" prices on every service, the workmanship guarantee, accreditations and a quote-first promise. The questions people worry about with mechanics are answered before they ask.',
  },
  {
    icon: MapPin,
    title: 'Built to rank locally',
    body: 'Titles, copy and structured data are written around the suburb, the way a local mechanic actually gets found when someone searches nearby.',
  },
]

export default function TorqueAndCoCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel>Concept Project · Mechanic · Cape Town</SectionLabel>
              <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                Torque &amp; Co.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
                A mock-up website for a fictional independent mechanic in Wynberg, Cape Town, made to
                show how Paperclip Studio builds a local service website that turns visitors into
                bookings.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Reveal>
              <div className="grid gap-px overflow-hidden rounded-xl border border-[#e0ddda] bg-[#e0ddda] md:grid-cols-2">
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    Why We Made It
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    Torque &amp; Co. isn&apos;t a real workshop. We invented it, and every phone
                    number, price and review on the site is a placeholder. Trades like mechanics
                    live or die on local trust and quick bookings, so we wanted to show what a
                    website built around exactly that looks like.
                  </p>
                </div>
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    The Approach
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    A bold, workshop-inspired design with one clear job: get the car booked in. The
                    single page covers services with prices, why to trust the workshop, a four-step
                    booking process, reviews, FAQs and directions. If you run a trade or service
                    business, this is the kind of website we build.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Full-page preview in a scrollable browser frame */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 pb-16 md:pb-20">
            <Reveal>
              <figure className="overflow-hidden rounded-xl border border-charcoal/15 bg-white shadow-[0_24px_60px_-24px_rgba(51,51,51,0.35)]">
                <div className="flex items-center gap-2 border-b border-charcoal/10 bg-cream px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="ml-3 truncate rounded bg-white px-3 py-1 text-xs text-charcoal/50">
                    Torque &amp; Co. · concept site
                  </span>
                </div>
                <div className="h-[600px] overflow-y-auto overscroll-contain bg-white">
                  <Image
                    src="/work/torque-and-co-full.jpeg"
                    alt="Full homepage of the Torque & Co. concept mechanic website, designed by Paperclip Studio"
                    width={1200}
                    height={6166}
                    className="block h-auto w-full"
                    priority
                  />
                </div>
              </figure>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                Scroll within the frame to explore the full homepage, or{' '}
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-charcoal underline underline-offset-2"
                >
                  visit the live concept site
                </a>
                .
              </figcaption>
            </Reveal>
          </div>
        </section>

        {/* What it shows */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Reveal>
              <SectionLabel>What It Shows</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                A website that books the job.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 100}>
                  <article className="flex h-full flex-col border border-[#e0ddda] bg-white p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-steel/25 text-charcoal">
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-charcoal">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-charcoal">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
            <h2 className="max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
              Run a trade or service business? Let&apos;s get you booked up.
            </h2>
            <p className="max-w-xl text-white/70 leading-relaxed">
              We&apos;ll build a website that makes it easy for local customers to choose you.
            </p>
            <a
              href="/get-a-quote"
              className="inline-flex items-center gap-2 rounded bg-steel px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-95"
            >
              Get a Free Quote &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
