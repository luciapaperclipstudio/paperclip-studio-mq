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

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
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
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
              </div>
              <h1 className="mt-5 font-serif text-4xl italic leading-[1.1] tracking-tight text-charcoal text-balance md:text-5xl">
                {post.title}
              </h1>
            </div>
          </header>

          {/* Body */}
          <div className="bg-white">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
              <div
                className="text-[16px] leading-relaxed text-muted-foreground"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {post.content}
              </div>

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
