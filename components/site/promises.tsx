import { BadgeCheck, Eye, KeyRound, RefreshCw } from 'lucide-react'
import { REVISION_ROUNDS } from '@/lib/packages'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

// Every line here is a commitment we actually keep. Don't add one that isn't.
const promises = [
  {
    icon: KeyRound,
    title: 'You own everything',
    body: 'Your domain is registered in your name, and you get the logins to your website and hosting. If we ever stop working together, you keep it all.',
  },
  {
    icon: BadgeCheck,
    title: 'A fixed price, agreed up front',
    body: 'Your quote is a fixed price for a clear scope. 50% to start, 50% when your site is ready. No surprise invoices.',
  },
  {
    icon: Eye,
    title: 'See it before you pay the balance',
    body: 'You review a live preview of your finished website before the final payment is due.',
  },
  {
    icon: RefreshCw,
    title: `${REVISION_ROUNDS} rounds of changes included`,
    body: 'Tell us what you’d like changed and we’ll update it, twice, at no extra cost.',
  },
]

export function Promises() {
  return (
    <section id="promises" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>Our Promises</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-charcoal text-balance md:text-4xl">
            No lock-ins. No surprises.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="flex h-full flex-col border border-[#e0ddda] bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-steel/25 text-charcoal">
                  <p.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-charcoal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
