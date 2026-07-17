const items = [
  '3–7 Day Delivery',
  'Mobile-Responsive',
  'SEO-Ready',
  'WhatsApp Integration',
  '100% Custom',
]

export function TrustStrip() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-4 text-center">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-4">
            <span className="text-[13px] uppercase tracking-[0.1em] text-white/90">{item}</span>
            {i < items.length - 1 ? (
              <span className="hidden text-white/30 sm:inline">|</span>
            ) : null}
          </span>
        ))}
      </div>
    </section>
  )
}
