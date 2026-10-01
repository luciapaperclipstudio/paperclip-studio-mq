import { Star } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const testimonials = [
  {
    quote:
      'Lucia understood my vision from day one — translating my brand into a site that\u2019s as elegant and considered as the trips themselves.',
    name: 'Emma',
    role: 'Eventure Escapes',
  },
  {
    quote:
      'I have been working with Lucia for over 2 years now and I can confidently say she is the best I have dealt with in 20 years of business.',
    name: 'Daniel',
    role: 'Up-cycled',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>What Clients Say</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl italic text-charcoal md:text-4xl">
            Real results for real businesses.
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-lg border border-[#e0e0e0] bg-cream p-7">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-charcoal">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-charcoal/60"> — {t.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
