import type { Metadata } from 'next'
import { Cpu, Smartphone, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'

export const metadata: Metadata = {
  title: 'About Paperclip Studio | AI Website Design South Africa',
  description:
    'Meet the South African studio building AI-powered websites for small businesses. Fast turnaround, honest pricing, real results.',
}

const stats = [
  { value: '10+', label: 'Websites delivered' },
  { value: '3–7 day', label: 'Turnaround' },
  { value: '100%', label: 'South African clients' },
]

const beliefs = [
  {
    icon: Cpu,
    title: 'AI does the heavy lifting',
    body: 'We use the best AI tools available so we can build faster and charge less, without cutting corners on quality.',
  },
  {
    icon: Smartphone,
    title: 'Mobile first, always',
    body: 'More than 70% of South African web traffic is mobile. Every site we build looks perfect on a phone before anything else.',
  },
  {
    icon: TrendingUp,
    title: 'Websites that earn their keep',
    body: "A website that doesn't convert is just an expense. We build with leads and enquiries as the goal.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel>About Paperclip Studio</SectionLabel>
              <h1 className="mt-4 font-serif text-4xl italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-5xl">
                The Studio Behind Your Website
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
                We&apos;re a small South African studio that uses AI to build fast, beautiful
                websites — without the agency price tag.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2. Founder / story */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <Reveal>
              <div className="overflow-hidden border border-[#e0ddda] bg-cream">
                <img
                  src="/founder.jpg"
                  alt="Founder of Paperclip Studio"
                  className="aspect-[7/8] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                Built by someone who gets it
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Paperclip Studio started with a simple frustration: watching South African small
                  businesses get quoted tens of thousands of rands for slow, cookie-cutter websites
                  that never brought in a single lead. Great local businesses deserved better than
                  overpriced, underwhelming work — so we decided to do something about it.
                </p>
                <p>
                  By pairing years of design and web experience with the latest AI tooling, we build
                  sharp, fast, mobile-ready websites in days instead of months — and pass the savings
                  straight on to you. No bloated agency retainers, no jargon, no runaround. Just
                  honest work for business owners who need to be online yesterday.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. Stats / proof bar */}
        <section className="bg-charcoal">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 text-center sm:grid-cols-3 md:py-16">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <p className="font-serif text-4xl italic text-steel md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/70">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. What we believe */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Reveal>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
                What we believe
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {beliefs.map((belief, i) => (
                <Reveal key={belief.title} delay={i * 100}>
                  <article className="flex h-full flex-col border border-[#e0ddda] bg-white p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded bg-steel/15 text-steel">
                      <belief.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-charcoal">{belief.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {belief.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="bg-charcoal">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
            <h2 className="max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
              Ready to work together?
            </h2>
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
