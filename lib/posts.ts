export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedDate: string
  metaTitle: string
  metaDescription: string
  content: string
}

// Post content lives here. Start empty — add entries to this array to publish.
const posts: Post[] = []

// Newest first, based on publishedDate.
export function getPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
