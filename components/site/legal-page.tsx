import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'

export type LegalSection = {
  heading: string
  // Content convention: lines starting with "- " become list items,
  // everything else is a paragraph. Blank lines separate blocks.
  body: string
}

function SectionBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n{2,}/)

  return (
    <>
      {blocks.map((block, i) => {
        const trimmed = block.trim()

        if (trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').map((line) => line.replace(/^-\s+/, ''))
          return (
            <ul key={i} className="mt-4 space-y-2.5 pl-1">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="mt-4">
            {trimmed}
          </p>
        )
      })}
    </>
  )
}

export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: {
  title: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}) {
  return (
    <>
      <Navbar />
      <main>
        <header className="bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <p className="label-caps text-muted-foreground">Legal</p>
            <h1 className="mt-4 font-serif text-4xl italic leading-[1.1] tracking-tight text-charcoal text-balance md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: <span className="font-semibold text-charcoal">{lastUpdated}</span>
            </p>
          </div>
        </header>

        <div className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <div className="text-[16px] leading-relaxed text-muted-foreground">
              {sections.map((section, i) => (
                <section key={i} className={i === 0 ? '' : 'mt-12'}>
                  <h2 className="font-serif text-2xl italic text-charcoal text-balance md:text-3xl">
                    {section.heading}
                  </h2>
                  <SectionBody body={section.body} />
                </section>
              ))}

              <p className="mt-14 border-t border-[#e0ddda] pt-8 text-sm text-muted-foreground">
                This document is provided for general information and does not constitute legal
                advice. For questions about it, contact us at{' '}
                <a
                  href="mailto:hello@paperclipstudio.co.za"
                  className="font-semibold text-steel transition-colors hover:brightness-95"
                >
                  hello@paperclipstudio.co.za
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
