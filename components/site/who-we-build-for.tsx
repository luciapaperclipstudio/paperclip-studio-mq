import {
  Briefcase,
  Camera,
  Hammer,
  BedDouble,
  PartyPopper,
  Scissors,
  Sparkles,
  Stethoscope,
  Wrench,
  ShoppingCart,
} from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

// Mirrors the "What kind of businesses do you build websites for?" FAQ. Saying
// it up front screens out e-commerce enquiries before anyone fills in the form.
const industries = [
  { icon: Wrench, label: 'Trades & repairs', note: 'Plumbers, electricians, mechanics' },
  { icon: Hammer, label: 'Building & home', note: 'Builders, painters, landscapers' },
  { icon: Scissors, label: 'Beauty & wellness', note: 'Salons, spas, studios' },
  { icon: Sparkles, label: 'Cleaning services', note: 'Home, office and specialist' },
  { icon: BedDouble, label: 'Guesthouses & tourism', note: 'B&Bs, lodges, tour operators' },
  { icon: PartyPopper, label: 'Events & catering', note: 'Planners, venues, caterers' },
  { icon: Briefcase, label: 'Consultants & professionals', note: 'Accountants, coaches, agencies' },
  { icon: Stethoscope, label: 'Health practices', note: 'Physios, therapists, clinics' },
  { icon: Camera, label: 'Creatives', note: 'Photographers, designers, studios' },
]

export function WhoWeBuildFor() {
  return (
    <section id="who-we-build-for" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>Who We Build For</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            Websites for businesses that sell a service.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            If customers enquire, book or ask for a quote before they pay you, we&apos;re built for
            you. Every site we make is designed to turn visitors into enquiries and bookings.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 80}>
              <div className="flex h-full items-center gap-4 border border-[#e0ddda] bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-steel/25 text-charcoal">
                  <item.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-charcoal">{item.label}</span>
                  <span className="block text-[13px] text-muted-foreground">{item.note}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex items-start gap-3 border border-dashed border-charcoal/25 p-5">
            <ShoppingCart
              className="mt-0.5 h-5 w-5 shrink-0 text-charcoal/50"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-charcoal/70">
              <span className="font-semibold text-charcoal">We don&apos;t build online shops.</span>{' '}
              If you need to sell products with a cart and checkout, a dedicated e-commerce platform
              will serve you better.{' '}
              <a
                href="/blog/service-website-vs-ecommerce-store"
                className="font-semibold text-charcoal underline underline-offset-2"
              >
                Not sure which you need?
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
