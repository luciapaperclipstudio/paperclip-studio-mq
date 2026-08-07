import type { MetadataRoute } from 'next'
import { locations } from '@/lib/locations'
import { getPosts } from '@/lib/posts'

const BASE = 'https://paperclipstudio.co.za'

// Generated from the same data the pages render from, so a new blog post or
// location page is submitted to Google without anyone remembering to add it
// here. Previously this listed three URLs by hand and omitted every post and
// location page on the site.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/get-a-quote`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/work`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${BASE}/locations/${location.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Posts carry their own publish date rather than today's, so Google isn't
  // told an old article changed every time the site redeploys.
  const postPages: MetadataRoute.Sitemap = getPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...locationPages, ...postPages]
}
