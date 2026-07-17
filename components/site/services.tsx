import { FileText, Laptop, Rocket } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const services = [
  {
    icon: FileText,
    title: 'Starter Landing Page',
    description:
      'One powerful page to capture leads, run ads, and get found on Google. Hero, services, contact form, and map — live in 3–5 days.',
    price: 'From R1,800',
    tag: '3–5 days',
    popular: false,
  },
  {
    icon: Laptop,
    title: 'Business Website',
    description:
      'A full 3–5 page website for your business. Home, About, Services, Gallery, and Contact — all mobile-optimised with WhatsApp integration.',
    price: 'From R3,500',
    tag: '5–7 days',
    popular: true,
  },
  {
    icon: Rocket,
    title: 'Premium + Ads-Ready',
    description:
      'A full website plus a dedicated landing page built for Google or Meta Ads. Includes pixel setup, Analytics, and one revision round.',
    price: 'From R7,500',
    tag: 'Priority delivery',
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col rounded-lg border border-[#e0e0e0] bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(51,51,51,0.3)]">
                {s.popular ? (
                  <span className="absolute -right-2 top-5 rounded-l bg-yellow px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal">
                    Most Popular
                  </span>
                ) : null}
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-charcoal/15 bg-white text-charcoal">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-serif text-2xl italic text-charcoal">{s.price}</span>
                  <span className="rounded-full border border-charcoal/15 px-3 py-1 text-[11px] font-medium text-charcoal/70">
                    {s.tag}
                  </span>
                </div>
                <a
                  href="#pricing"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-steel transition-colors hover:text-charcoal"
                >
                  Learn more &rarr;
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
