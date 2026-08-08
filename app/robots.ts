import type { MetadataRoute } from 'next'

// The wildcard rule already permits AI crawlers, but naming them makes the
// intent explicit rather than incidental — several publishers block these by
// default, so an unambiguous allow is worth stating if you want to be cited in
// AI answers.
const AI_CRAWLERS = [
  'GPTBot', // OpenAI — training and ChatGPT browsing
  'OAI-SearchBot', // OpenAI — search indexing
  'ChatGPT-User', // OpenAI — user-initiated fetches
  'ClaudeBot', // Anthropic
  'Claude-User',
  'PerplexityBot',
  'Google-Extended', // Google — Gemini and AI Overviews grounding
  'Applebot-Extended',
  'meta-externalagent', // Meta AI
  'Bingbot',
  'DuckDuckBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/api/',
      })),
    ],
    sitemap: 'https://www.paperclipstudio.co.za/sitemap.xml',
  }
}
