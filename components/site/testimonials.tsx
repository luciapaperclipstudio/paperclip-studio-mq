import { Star } from 'lucide-react'
import { GOOGLE_MAPS_URL } from '@/app/layout'
import { FEATURED_REVIEWS, GOOGLE_RATING } from '@/lib/reviews'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

// Two of the Google reviews describe marketing work rather than a web build,
// so the heading talks about working with us, not about the websites.
export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel>What Clients Say</SectionLabel>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl italic text-charcoal md:text-4xl">
              What clients say about working with us.
            </h2>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-cream px-4 py-2 text-sm text-charcoal transition hover:border-charcoal"
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow text-yellow" />
                ))}
              </span>
              <span>
                <strong className="font-semibold">{GOOGLE_RATING.score}</strong> on Google ·{' '}
                {GOOGLE_RATING.count} reviews
              </span>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FEATURED_REVIEWS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 100}>
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
                  <span className="text-charcoal/60"> — {t.source}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
