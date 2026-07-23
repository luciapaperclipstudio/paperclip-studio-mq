import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: 'https://paperclipstudio.co.za',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://paperclipstudio.co.za/get-a-quote',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://paperclipstudio.co.za/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
