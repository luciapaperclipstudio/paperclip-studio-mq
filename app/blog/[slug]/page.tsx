import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
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

  return (
    <>
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
        </article>
      </main>
      <Footer />
    </>
  )
}
