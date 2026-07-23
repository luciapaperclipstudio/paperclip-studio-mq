type Variant = 'band' | 'inline'

// Reusable "Get a Free Quote →" call-to-action used sporadically down the page.
export function QuoteCta({
  variant = 'inline',
  title = 'Ready to get your business online?',
  subtitle = 'Get a free, no-obligation quote in minutes.',
  ctaLabel = 'Get a Free Quote →',
  ctaHref = '/get-a-quote',
}: {
  variant?: Variant
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}) {
  if (variant === 'band') {
    return (
      <section className="bg-charcoal">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
          <h2 className="max-w-2xl font-serif text-3xl italic text-white text-balance md:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-white/70 leading-relaxed">{subtitle}</p>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded bg-steel px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-95"
          >
            {ctaLabel}
          </a>
        </div>
      </section>
    )
  }

  return (
    <div className="flex justify-center py-4">
      <a
        href="/get-a-quote"
        className="inline-flex items-center gap-2 rounded bg-steel px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-95"
      >
        Get a Free Quote &rarr;
      </a>
    </div>
  )
}
