import { BadgeCheck, KeyRound, RefreshCw, ShieldCheck } from 'lucide-react'
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
    icon: ShieldCheck,
    title: 'Unhappy? Get your deposit back',
    body: 'If you’re not happy with the first preview of your website, we refund your deposit in full.',
    link: { href: '/terms#money-back-guarantee', label: 'Terms apply' },
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
                {'link' in p && p.link ? (
                  <a
                    href={p.link.href}
                    className="mt-3 text-[13px] font-semibold text-charcoal underline underline-offset-2 hover:text-charcoal/70"
                  >
                    {p.link.label}
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
