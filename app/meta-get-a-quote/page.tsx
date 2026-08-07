import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Check, Clock, MessageCircle, ShieldCheck } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { QuoteQuiz } from '@/components/site/quote-quiz'
import { Reveal } from '@/components/site/reveal'
import { WHATSAPP_CHAT_LINK } from '@/lib/packages'

// Paid-traffic destination only. Deliberately noindex/nofollow and kept out of
// the sitemap: it targets the same intent as /get-a-quote, so letting Google
// index both would split ranking signals between two near-identical pages.
export const metadata: Metadata = {
  title: 'Landing Pages and Websites for South African Businesses',
  description:
    'Custom-built landing pages and websites for South African businesses, delivered in 3–7 days. Fill out the form for a fast quote.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.paperclipstudio.co.za/get-a-quote' },
}

const PROOF_POINTS = [
  { icon: Clock, label: 'Delivered in 3–7 days' },
  { icon: ShieldCheck, label: 'Free quote, no obligation' },
  { icon: MessageCircle, label: 'Quote by email and WhatsApp' },
]

const WHAT_YOU_GET = [
  {
    title: 'Built to convert, not just to look good',
    body: 'Every page is structured around one action — getting the visitor to contact you. Enquiry form, WhatsApp button, clear next step.',
  },
  {
    title: 'Mobile first, because your customers are',
    body: 'Most South African traffic is on a phone. Your site is designed for that screen first, then scaled up — not the other way around.',
  },
  {
    title: 'Found on Google from day one',
    body: 'Proper page titles, metadata, sitemap and local SEO built in at launch, so you are not paying someone to bolt it on later.',
  },
]

const WORK = [
  { src: '/portfolio/eventure-escapes-desktop.jpeg', alt: 'Eventure Escapes luxury travel website designed by Paperclip Studio' },
  { src: '/portfolio/harvest-table-desktop.png', alt: 'The Harvest Table catering website designed by Paperclip Studio' },
  { src: '/portfolio/sea-and-salt-desktop.png', alt: 'Sea & Salt Events Studio website designed by Paperclip Studio' },
]

const TESTIMONIALS = [
  {
    quote:
      'Lucia understood my vision from day one — translating my brand into a site that’s as elegant and considered as the trips themselves.',
    name: 'Emma',
    role: 'Eventure Escapes',
  },
  {
    quote:
      'Finally a web designer who delivers on time and doesn’t overcomplicate everything.',
    name: 'Thabo K.',
    role: 'Electrical Contractor, Pretoria',
  },
  {
    quote:
      'Our catering business had zero online presence. Now we get enquiries through the site every week.',
    name: 'Zanele D.',
    role: 'Catering Company, Johannesburg',
  },
]

// Deliberately not a star rating or review count — there are no real ones to
// cite yet. These are all commitments we actually make, so they survive scrutiny.
const STATS = [
  { value: '3–7', label: 'Days to launch' },
  { value: '2', label: 'Revision rounds included' },
  { value: '50%', label: 'Deposit, balance on delivery' },
  { value: '<1s', label: 'Page load time' },
]

const TECH = [
  {
    title: 'Next.js and React',
    body: 'The same framework used by companies like Nike and OpenAI — not a website builder, and not a theme bought off a marketplace.',
  },
  {
    title: 'Hosted on Vercel',
    body: 'Your site is served from a global edge network, so it loads fast whether the visitor is in Cape Town or London. No shared hosting, no unexplained downtime.',
  },
  {
    title: 'No WordPress, no plugins',
    body: 'Nothing to update, nothing to break, and no plugin vulnerabilities to patch. The most common way a small business site gets hacked simply does not apply.',
  },
  {
    title: 'Built to be found',
    body: 'Page titles, metadata, sitemap, structured data and POPIA groundwork are done at launch — not sold back to you as an SEO retainer later.',
  },
]

const STEPS = [
  { n: '01', title: 'Fill in the form', body: 'Three quick questions. Takes under a minute.' },
  { n: '02', title: 'Get your quote', body: 'A fixed price by email and WhatsApp, usually within a few hours.' },
  { n: '03', title: 'We build it', body: 'Live in 3–7 days from the moment we have your content.' },
]

export default function MetaLandingPage() {
  return (
    <>
      {/* Minimal header. No navigation on purpose — a paid visitor should have
          exactly one thing to do, and every nav link is a way to leave. */}
      <header className="border-b border-[#E0DDDA] bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <a
            href={WHATSAPP_CHAT_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-medium text-charcoal/70 underline underline-offset-4 transition hover:text-charcoal"
          >
            Chat on WhatsApp
          </a>
        </div>
      </header>

      <main className="bg-cream">
        {/* Hero + form. On mobile the headline, subline, proof points and the
            first step of the form all sit above the fold. */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pb-24 md:pt-14">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h1 className="font-serif text-[2rem] italic leading-[1.1] tracking-tight text-charcoal text-balance md:text-[3.25rem]">
                Landing pages and websites for South African businesses.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/75 md:text-xl">
                Fill out the form to get a fast quote.
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {PROOF_POINTS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-[15px] text-charcoal/80">
                    <Icon size={17} strokeWidth={1.8} className="shrink-0 text-steel" />
                    {label}
                  </li>
                ))}
              </ul>

              {/* Desktop-only: fills the column beside the form with proof
                  rather than dead space, and puts a real quote above the fold. */}
              <div className="mt-8 hidden md:block">
                <p className="text-sm leading-relaxed text-charcoal/60">
                  Trusted by event businesses, contractors and caterers across South Africa.
                </p>
                <figure className="mt-6 border-l-2 border-steel pl-5">
                  <blockquote className="font-serif text-lg italic leading-snug text-charcoal">
                    &ldquo;{TESTIMONIALS[1].quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-[13px] text-charcoal/60">
                    <span className="font-semibold text-charcoal">{TESTIMONIALS[1].name}</span> ·{' '}
                    {TESTIMONIALS[1].role}
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* The form is the page. It sits in the first screen on every
                viewport rather than behind a CTA that costs a click. */}
            <div id="quote-form" className="scroll-mt-6">
              <QuoteQuiz source="Meta Ads" />
            </div>
          </div>
        </section>

        {/* Hard numbers rather than a star rating. Every one of these is a
            commitment we actually make, so it holds up if a client checks. */}
        <section className="bg-charcoal">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:py-12">
            {STATS.map((s) => (
              <div key={s.label} className="px-2 text-center">
                <p className="font-serif text-3xl italic text-white md:text-4xl">{s.value}</p>
                <p className="mt-1.5 text-[12px] uppercase tracking-[0.12em] text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What you get */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                What you actually get.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {WHAT_YOU_GET.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="h-full border border-[#E0DDDA] bg-cream p-7">
                    <Check size={20} strokeWidth={2} className="text-steel" />
                    <h3 className="mt-4 text-[17px] font-semibold leading-snug text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal/70">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack. The real differentiator against the Wix/WordPress
            competition, and something a sceptical buyer can go and verify. */}
        <section className="bg-charcoal">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
                Built on proper technology.
              </h2>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/70">
                Most small business sites in South Africa are WordPress themes or drag-and-drop
                builders. Yours will not be.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-2">
              {TECH.map((t, i) => (
                <Reveal key={t.title} delay={i * 80}>
                  <div className="border-l-2 border-steel pl-5">
                    <h3 className="text-[17px] font-semibold text-white">{t.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/65">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recent work */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal>
              <h2 className="font-serif text-3xl italic text-charcoal md:text-4xl">Recent work.</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {WORK.map((w, i) => (
                <Reveal key={w.src} delay={i * 100}>
                  <div className="overflow-hidden border border-[#E0DDDA] bg-white">
                    <Image
                      src={w.src}
                      alt={w.alt}
                      width={800}
                      height={600}
                      className="h-56 w-full object-cover object-top"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal>
              <h2 className="font-serif text-3xl italic text-charcoal md:text-4xl">
                What clients say.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 100}>
                  <figure className="flex h-full flex-col justify-between border border-[#E0DDDA] bg-cream p-7">
                    <blockquote className="font-serif text-lg italic leading-snug text-charcoal">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 text-[13px] text-charcoal/60">
                      <span className="font-semibold text-charcoal">{t.name}</span> · {t.role}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal>
              <h2 className="font-serif text-3xl italic text-charcoal md:text-4xl">How it works.</h2>
            </Reveal>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div>
                    <span className="font-serif text-3xl italic text-steel">{s.n}</span>
                    <h3 className="mt-3 text-[17px] font-semibold text-charcoal">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-charcoal/70">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — sends them back up to the form rather than to another page */}
        <section className="bg-charcoal">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
            <h2 className="font-serif text-3xl italic text-white text-balance md:text-4xl">
              Ready for a website that brings in work?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-white/70">
              Answer three quick questions and we&apos;ll send a fixed-price quote to your email and
              WhatsApp.
            </p>
            <a
              href="#quote-form"
              className="mt-8 inline-flex items-center gap-2 bg-steel px-8 py-4 text-[15px] font-semibold text-charcoal transition hover:bg-[#8FAEC5]"
            >
              Get my free quote
              <ArrowRight size={18} strokeWidth={2} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-cream">
        {/* pb clears the sticky mobile bar so the last line is never hidden behind it */}
        <div className="mx-auto max-w-6xl px-6 py-10 pb-28 text-center md:pb-10">
          <Logo className="mx-auto" />
          <p className="mt-4 text-[13px] text-charcoal/60">
            <a href="mailto:hello@paperclipstudio.co.za" className="hover:text-charcoal">
              hello@paperclipstudio.co.za
            </a>
            {' · '}
            <a href="tel:+27784429357" className="hover:text-charcoal">
              +27 78 442 9357
            </a>
          </p>
          <p className="mt-3 text-[12px] text-charcoal/45">
            © {new Date().getFullYear()} paperclip studio ·{' '}
            <a href="/privacy-policy" className="underline underline-offset-2">
              Privacy
            </a>{' '}
            ·{' '}
            <a href="/terms" className="underline underline-offset-2">
              Terms
            </a>
          </p>
        </div>
      </footer>

      {/* Sticky mobile CTA. Mobile is where paid clicks land and where people
          scroll past the form; this keeps the action one thumb-tap away. */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E0DDDA] bg-cream/95 p-3 backdrop-blur md:hidden">
        <a
          href="#quote-form"
          className="flex w-full items-center justify-center gap-2 bg-charcoal px-6 py-3.5 text-[15px] font-semibold text-white"
        >
          Get my free quote
          <ArrowRight size={18} strokeWidth={2} />
        </a>
      </div>
    </>
  )
}
