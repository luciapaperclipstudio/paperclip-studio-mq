import type { Metadata } from 'next'
import Image from 'next/image'
import { Accessibility, Heart, Layers, MapPin, MessageCircle, Quote, Search } from 'lucide-react'

import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'

export const metadata: Metadata = {
  title: 'The Khanya Collective | Paperclip Studio Case Study',
  description:
    'How Paperclip Studio took The Khanya Collective from no online presence to a full website and Google Business Profile in 5–7 days, bringing three service lines together under one brand.',
  alternates: { canonical: 'https://www.paperclipstudio.co.za/work/the-khanya-collective' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Khanya Collective — Multi-Service Business Website by Paperclip Studio',
  author: { '@type': 'Organization', name: 'Paperclip Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Paperclip Studio',
    url: 'https://www.paperclipstudio.co.za',
  },
  description:
    'Case study: The Khanya Collective, a printing, design, career development and product sourcing business in Fourways, Johannesburg, had no website or Google Business Profile. Paperclip Studio built both from scratch in 5–7 days.',
  url: 'https://www.paperclipstudio.co.za/work/the-khanya-collective',
}

const features = [
  {
    icon: MapPin,
    title: 'An online presence from zero',
    body: 'Khanya had no website and no Google Business Profile. We set the profile up so they appear on Google Maps and in local searches, and recommended they ask every client for a Google review to build trust from day one.',
  },
  {
    icon: Layers,
    title: 'Three pillars, one clear structure',
    body: 'Professional development, creative and design work, and product sourcing each have their own page, so visitors find their service quickly without the brand feeling scattered.',
  },
  {
    icon: Search,
    title: 'Every offering, still easy to find',
    body: 'Fitting this many services onto one site can bury them. Each pillar is written and structured around what people actually search for, so the whole range can be found on Google, not just the headline service.',
  },
  {
    icon: Accessibility,
    title: 'Easy for everyone to use',
    body: 'We guided Khanya on keeping the site user-friendly for all: clear navigation, readable text, a layout that works on any phone, and no guesswork about what to do next.',
  },
  {
    icon: Heart,
    title: 'Their values, front and centre',
    body: 'Khanya is more than a list of services. The site makes room for what the collective stands for, so people understand who they are buying from, not just what.',
  },
  {
    icon: MessageCircle,
    title: 'A quote or a WhatsApp, from any page',
    body: 'Every page leads to one of two actions: request a quote or send a WhatsApp. Individuals and corporate buyers both have an easy, obvious next step.',
  },
]

const stats = [
  { value: '5–7', label: 'Days from brief to launch' },
  { value: '3', label: 'Service pillars, one website' },
]

export default function KhanyaCollectiveCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* a) Hero */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel>Multi-Service Collective · Fourways, Johannesburg</SectionLabel>
              <h1 className="mt-5 font-serif text-[2.75rem] italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                The Khanya Collective
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
                From no online presence at all to a full website and Google Business Profile, with
                three very different service lines under one clear, trustworthy brand. Built from
                scratch in 5–7 days.
              </p>
            </Reveal>
          </div>
        </section>

        {/* b) Project overview */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Reveal>
              <div className="grid gap-px overflow-hidden rounded-xl border border-[#e0ddda] bg-[#e0ddda] md:grid-cols-2">
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    The Brief
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    The Khanya Collective started with custom printing and personalised products, and
                    grew into a collective spanning creative and design services, professional and
                    business development, and product sourcing and supply. Despite all that, they had
                    no online presence at all: no website and not even a Google Business Profile.
                    They needed to be found, and they needed one place that could explain everything
                    they do without confusing people.
                  </p>
                </div>
                <div className="bg-cream p-8 md:p-10">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                    The Solution
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-charcoal/80">
                    We built the website fully from scratch around their three pillars, so every
                    offering has a home while the whole site stays searchable. We set up their Google
                    Business Profile, recommended a plan for collecting reviews from their clients,
                    and guided them on keeping the site easy for everyone to use, with room to show
                    their values as a company. From brief to launch took 5–7 days.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* c) Full-width website preview — full-page screenshot in a scrollable frame */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 pb-16 md:pb-20">
            <Reveal>
              <figure className="overflow-hidden rounded-xl border border-charcoal/15 bg-white shadow-[0_24px_60px_-24px_rgba(51,51,51,0.35)]">
                {/* Browser chrome bar */}
                <div className="flex items-center gap-2 border-b border-charcoal/10 bg-cream px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-charcoal/15" aria-hidden="true" />
                  <span className="ml-3 truncate rounded bg-white px-3 py-1 text-xs text-charcoal/50">
                    thekhanyacollective.co.za
                  </span>
                </div>
                {/* Scrollable viewport — the tall full-page capture scrolls within here */}
                <div className="h-[600px] overflow-y-auto overscroll-contain bg-white">
                  <Image
                    src="/work/khanya-collective-full.jpeg"
                    alt="Full homepage of The Khanya Collective website, designed by Paperclip Studio"
                    width={1200}
                    height={7055}
                    className="block h-auto w-full"
                    priority
                  />
                </div>
              </figure>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                Scroll within the frame to explore the full homepage, or{' '}
                <a
                  href="https://thekhanyacollective.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-charcoal underline underline-offset-2"
                >
                  visit the live site
                </a>
                .
              </figcaption>
            </Reveal>
          </div>
        </section>

        {/* d) What we built */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Reveal>
              <SectionLabel>What We Built</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                From invisible online to easy to find.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* e) Results / stats */}
        <section className="bg-charcoal">
          <div className="mx-auto grid max-w-3xl gap-10 px-6 py-16 text-center sm:grid-cols-2 md:py-20">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <p className="font-serif text-4xl italic text-steel md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* f) Client testimonial. Verbatim excerpts from Ash Moodley's Google
            review (October 2026); the short version is in lib/reviews.ts. */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <Quote
                className="mx-auto h-12 w-12 text-steel"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <blockquote className="mt-8 font-serif text-2xl italic leading-relaxed text-charcoal text-balance md:text-[2rem] md:leading-[1.4]">
                &ldquo;Working with Lucia and Paperclip Studio has been an exceptional experience from
                the very beginning. What stood out most was Lucia&apos;s willingness to genuinely
                understand the vision behind The Khanya Collective rather than simply build a
                website from a brief… What I appreciated most is that Paperclip did not just give
                us a website. Lucia helped us think more clearly about our brand, our positioning
                and how the different parts of the business should come together.&rdquo;
              </blockquote>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal/60">
                — Ash Moodley, The Khanya Collective
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Google review · 5 stars</p>
            </Reveal>
          </div>
        </section>

        {/* g) Bottom CTA */}
        <section className="bg-charcoal">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
            <h2 className="max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
              Like what you see? Let&apos;s build yours.
            </h2>
            <p className="max-w-xl text-white/70 leading-relaxed">
              We&apos;ll translate your brand into a website you&apos;re proud of — in under a week.
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
