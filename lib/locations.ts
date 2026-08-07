export type LocationPage = {
  slug: string
  city: string
  h1: string
  heroSubheading: string
  /** Short intro line shown above the pricing/packages grid, tailored to the city. */
  servicesIntro: string
  cityBlurb: string
  metaTitle: string
  metaDescription: string
}

export const locations: LocationPage[] = [
  {
    slug: 'web-designer-cape-town',
    city: 'Cape Town',
    h1: 'AI-Powered Web Design in Cape Town',
    heroSubheading:
      'Professional websites for Cape Town businesses — built with AI, delivered in 3–7 days.',
    servicesIntro:
      'The same honest packages we offer every Cape Town business — clear pricing, no agency markup, and a site that is live within the week.',
    cityBlurb:
      "Cape Town has one of the most competitive small business landscapes in South Africa. Whether you're in the CBD, the Winelands, or the Southern Suburbs, your website needs to stand out and convert. We build AI-powered websites that look premium and get found on Google — without the agency price tag.",
    metaTitle: 'Web Designer Cape Town | AI-Powered Websites in 3–7 Days',
    metaDescription:
      'Professional AI-powered websites for Cape Town businesses. Mobile-first, SEO-optimised, and delivered in 3–7 days. Custom quote within 24 hours.',
  },
  {
    slug: 'web-designer-johannesburg',
    city: 'Johannesburg',
    h1: 'AI-Powered Web Design in Johannesburg',
    heroSubheading:
      'Websites built for Joburg businesses — fast, professional, and ready to convert.',
    servicesIntro:
      'Straightforward packages for Joburg businesses that need to move fast — fixed pricing, quick turnaround, and no drawn-out agency process.',
    cityBlurb:
      'Johannesburg moves fast, and so should your website. From Sandton to Soweto, businesses across Joburg need an online presence that works as hard as they do. We use AI to cut build time and cost without cutting corners — so you get a professional website without waiting months or paying agency rates.',
    metaTitle: 'Web Designer Johannesburg | AI Websites in 3–7 Days',
    metaDescription:
      'AI-powered websites for Johannesburg businesses. Fast turnaround, built to convert. Custom quote within 24 hours.',
  },
  {
    slug: 'web-designer-durban',
    city: 'Durban',
    h1: 'AI-Powered Web Design in Durban',
    heroSubheading:
      'Durban businesses deserve a website that actually works. We build yours in 3–7 days.',
    servicesIntro:
      'Websites built for Durban businesses — from the beachfront to Umhlanga — with a professional site delivered in days, not months.',
    cityBlurb:
      "Durban's business community is growing fast — from the beachfront hospitality strip to the industrial south and the booming suburbs of Umhlanga and Ballito. If your business doesn't have a professional website yet, you're handing enquiries to competitors who do. We build AI-powered websites that get found on Google and turn visitors into leads.",
    metaTitle: 'Web Designer Durban | AI Websites in 3–7 Days',
    metaDescription:
      'Professional AI-powered websites for Durban businesses. Mobile-ready, SEO-optimised, delivered in 3–7 days. Custom quote within 24 hours.',
  },
]

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((location) => location.slug === slug)
}
