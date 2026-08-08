import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { AUTHOR, SAME_AS } from '@/app/layout'
import { getPostBySlug, getPosts } from '@/lib/posts'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Post not found | Paperclip Studio' }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  }
}

// Renders the post content convention into semantic HTML:
// "## " -> <h2>, consecutive "- " lines -> <ul>, everything else -> <p>.
function ArticleBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n{2,}/)

  return (
    <div className="text-[16px] leading-relaxed text-muted-foreground">
      {blocks.map((block, i) => {
        const trimmed = block.trim()

        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={i}
              className="mt-12 font-serif text-2xl italic text-charcoal text-balance md:text-3xl"
            >
              {trimmed.replace(/^##\s+/, '')}
            </h2>
          )
        }

        if (trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').map((line) => line.replace(/^-\s+/, ''))
          return (
            <ul key={i} className="mt-5 space-y-2.5 pl-1">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="mt-5">
            {trimmed}
          </p>
        )
      })}
    </div>
  )
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const url = `https://www.paperclipstudio.co.za/blog/${post.slug}`

  // Article schema: what an answer engine reads to decide whether this page is
  // a citable piece of writing, who wrote it and when. Previously absent, which
  // left the articles structurally invisible to them.
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: AUTHOR,
    publisher: {
      '@type': 'Organization',
      name: 'Paperclip Studio',
      url: 'https://www.paperclipstudio.co.za',
      sameAs: SAME_AS,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    inLanguage: 'en-ZA',
    articleSection: post.category,
  }

  // Only emitted when the questions actually render below — marking up content
  // that isn't visible on the page is a structured-data violation.
  const faqLd = post.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}
      <Navbar />
      <main>
        <article>
          {/* Header */}
          <header className="bg-cream">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                <span className="rounded bg-steel/15 px-2.5 py-1 font-semibold text-steel">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-5 font-serif text-4xl italic leading-[1.1] tracking-tight text-charcoal text-balance md:text-5xl">
                {post.title}
              </h1>
            </div>
          </header>

          {/* Body */}
          <div className="bg-white">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
              <ArticleBody content={post.content} />

              {/* CTA box */}
              <aside className="mt-14 border border-[#e0ddda] bg-cream p-8 text-center md:p-10">
                <h2 className="font-serif text-2xl italic text-charcoal text-balance md:text-3xl">
                  Need a website for your business?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  We build AI-powered websites for South African businesses in 3–7 days.
                </p>
                <a
                  href="/get-a-quote"
                  className="mt-6 inline-flex items-center gap-2 rounded bg-steel px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-95"
                >
                  Get a Free Quote &rarr;
                </a>
              </aside>
            </div>
          </div>
          {post.faqs?.length ? (
            <section className="bg-cream">
              <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
                <h2 className="font-serif text-3xl italic text-charcoal">
                  Common questions
                </h2>
                <dl className="mt-8 flex flex-col gap-7">
                  {post.faqs.map((f) => (
                    <div key={f.q}>
                      <dt className="text-[17px] font-semibold leading-snug text-charcoal">
                        {f.q}
                      </dt>
                      <dd className="mt-2 text-[16px] leading-relaxed text-charcoal/75">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  )
}
