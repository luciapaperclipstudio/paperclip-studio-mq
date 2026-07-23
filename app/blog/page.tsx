import type { Metadata } from 'next'
import { Footer } from '@/components/site/footer'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { SectionLabel } from '@/components/site/section-label'
import { getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Resources & Guides | Paperclip Studio',
  description: 'Practical advice for South African businesses going online.',
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <SectionLabel>Blog</SectionLabel>
              <h1 className="mt-4 font-serif text-4xl italic leading-[1.05] tracking-tight text-charcoal text-balance md:text-5xl">
                Resources &amp; Guides
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
                Practical advice for South African businesses going online.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            {posts.length === 0 ? (
              <Reveal>
                <div className="mx-auto max-w-md border border-[#e0ddda] bg-cream px-8 py-16 text-center">
                  <h2 className="font-serif text-2xl italic text-charcoal">Coming soon</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    We&apos;re putting together practical guides to help your business get online.
                    Check back shortly.
                  </p>
                </div>
              </Reveal>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {posts.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 2) * 100}>
                    <article className="flex h-full flex-col border border-[#e0ddda] bg-white p-8">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        <span className="rounded bg-steel/15 px-2.5 py-1 font-semibold text-steel">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="mt-5 font-serif text-2xl italic text-charcoal text-balance">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <a
                        href={`/blog/${post.slug}`}
                        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-steel transition-colors hover:text-charcoal"
                      >
                        Read more &rarr;
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
