import type { Faq } from './posts'

export type LocationPage = {
  slug: string
  city: string
  /** Other names people search with, e.g. "Joburg" for Johannesburg. Used in
   * copy and as schema alternateName so engines treat them as the same place. */
  alternateNames: string[]
  /** Suburbs and nearby areas, named in copy and schema areaServed. */
  areas: string[]
  h1: string
  heroSubheading: string
  /** Short intro line shown above the pricing/packages grid, tailored to the city. */
  servicesIntro: string
  cityBlurb: string
  metaTitle: string
  metaDescription: string
  /** City-specific questions. Rendered visibly on the page and emitted as
   * FAQPage schema alongside the general FAQ, so the two must stay in sync. */
  faqs: Faq[]
}

// Copy leads with "web design" / "website design" + the city, because that is
// what people type. AI is mentioned as how we work, not as the headline: most
// buyers are not searching for AI websites, but it is what makes the studio
// different, so it stays in the body copy and entity descriptions.
//
// We work remotely, so nothing here claims an office in the city. Schema on
// these pages describes a service with an areaServed, not a local address.
export const locations: LocationPage[] = [
  {
    slug: 'web-designer-cape-town',
    city: 'Cape Town',
    alternateNames: ['Kaapstad', 'Mother City'],
    areas: ['City Bowl', 'Southern Suburbs', 'Northern Suburbs', 'Atlantic Seaboard', 'Winelands', 'West Coast'],
    h1: 'Web Design in Cape Town',
    heroSubheading:
      'Custom websites for Cape Town businesses — designed to stand out, built to bring in enquiries, and live in 3–7 days.',
    servicesIntro:
      'The same honest packages we offer every Cape Town business — clear scope, no agency markup, and a site that is live within the week.',
    cityBlurb:
      "Cape Town has one of the most competitive small business markets in South Africa, especially in tourism, hospitality, food and creative services. Whether you're in the City Bowl, the Southern or Northern Suburbs, the Atlantic Seaboard or the Winelands, your website has to look the part and turn visitors into enquiries. We're an innovative web design studio: we design every site by hand and use AI tools to speed up the build, so you get a premium website without the agency price tag or the months-long wait.",
    metaTitle: 'Web Design Cape Town | Website Designer, Live in 3–7 Days',
    metaDescription:
      'Website design for Cape Town businesses. Custom, mobile-first websites that get found on Google, delivered in 3–7 days. Free quote within 24 hours.',
    faqs: [
      {
        q: 'How much does website design cost in Cape Town?',
        a: 'It depends on the size of the site. A single landing page costs far less than a multi-page business website with booking or ads tracking. We quote a fixed price for your exact scope within 24 hours, with no hidden extras.',
      },
      {
        q: 'Do I need to meet you in person in Cape Town?',
        a: 'No. We work with Cape Town businesses remotely through a short brief, email and video calls. Most clients never need a meeting, and it is one of the reasons we can deliver in days rather than weeks.',
      },
      {
        q: 'Can you help my Cape Town business show up on Google?',
        a: 'Yes. Every site is built with on-page SEO for your service and area, and we can set up or improve your Google Business Profile so you appear in the map results when people search near you.',
      },
    ],
  },
  {
    slug: 'web-designer-johannesburg',
    city: 'Johannesburg',
    alternateNames: ['Joburg', 'Jozi', 'Jo’burg', 'eGoli'],
    areas: ['Sandton', 'Rosebank', 'Randburg', 'Midrand', 'Fourways', 'Soweto', 'Roodepoort', 'East Rand'],
    h1: 'Web Design in Johannesburg (Joburg)',
    heroSubheading:
      'Websites for Joburg businesses — fast, professional, built to convert, and live in 3–7 days.',
    servicesIntro:
      'Straightforward packages for Joburg businesses that need to move fast — fixed scope, quick turnaround, and no drawn-out agency process.',
    cityBlurb:
      'Joburg moves fast, and so should your website. From Sandton and Rosebank to Midrand, Fourways and Soweto, businesses across Johannesburg need an online presence that works as hard as they do. We are an innovative web design studio that pairs hands-on design with AI-assisted building, which cuts build time and cost without cutting corners. You get a professional Joburg website in days, not months, and without paying agency rates.',
    metaTitle: 'Web Design Johannesburg (Joburg) | Websites in 3–7 Days',
    metaDescription:
      'Website design for Joburg and Johannesburg businesses, from Sandton to Soweto. Custom, mobile-first sites delivered in 3–7 days. Free quote in 24 hours.',
    faqs: [
      {
        q: 'How much does a website cost in Joburg?',
        a: 'Prices in Johannesburg range widely, from cheap DIY builders to agencies charging tens of thousands. We quote a fixed price for your exact scope within 24 hours, so you know the full cost before anything starts.',
      },
      {
        q: 'Do you design websites for businesses in Sandton, Midrand and the East Rand?',
        a: 'Yes. We work with businesses across greater Johannesburg and Gauteng, including Sandton, Rosebank, Randburg, Midrand, Fourways, Soweto and the East and West Rand. Everything is done remotely, so location is never a barrier.',
      },
      {
        q: 'How quickly can my Johannesburg website go live?',
        a: 'Most websites are live within 3–7 business days of receiving your content. A single landing page can be faster.',
      },
    ],
  },
  {
    slug: 'web-designer-durban',
    city: 'Durban',
    alternateNames: ['eThekwini'],
    areas: ['Umhlanga', 'Ballito', 'Berea', 'Westville', 'Pinetown', 'Durban North', 'South Coast'],
    h1: 'Web Design in Durban',
    heroSubheading:
      'Durban businesses deserve a website that actually brings in work. We build yours in 3–7 days.',
    servicesIntro:
      'Websites built for Durban businesses — from the beachfront to Umhlanga — with a professional site delivered in days, not months.',
    cityBlurb:
      "Durban's business community is growing fast, from the beachfront hospitality strip and the Berea to Umhlanga, Ballito, Westville and Pinetown. If your business doesn't have a professional website yet, you're handing enquiries to competitors who do. We're an innovative web design studio that designs every site by hand and uses AI to build faster, so Durban businesses get a site that gets found on Google and turns visitors into leads.",
    metaTitle: 'Web Design Durban | Website Designer, Live in 3–7 Days',
    metaDescription:
      'Website design for Durban, Umhlanga and Ballito businesses. Custom, mobile-first websites that get found on Google, delivered in 3–7 days. Free quote.',
    faqs: [
      {
        q: 'How much does website design cost in Durban?',
        a: 'It depends on what you need. A landing page for adverts costs less than a full business website. We send a fixed-price quote for your scope within 24 hours, with no surprise costs later.',
      },
      {
        q: 'Do you work with businesses in Umhlanga and Ballito?',
        a: 'Yes. We work with businesses across Durban and KwaZulu-Natal, including Umhlanga, Ballito, Westville, Pinetown, the Berea and the South Coast. Everything is handled remotely.',
      },
      {
        q: 'Can you build a website for a Durban guesthouse or tourism business?',
        a: 'Yes. Hospitality and tourism sites are a good fit for us: strong photography, clear room or package information, and an enquiry flow that makes booking easy on a phone.',
      },
    ],
  },
  {
    slug: 'web-designer-pretoria',
    city: 'Pretoria',
    alternateNames: ['Tshwane', 'Jacaranda City'],
    areas: ['Centurion', 'Menlyn', 'Hatfield', 'Brooklyn', 'Waterkloof', 'Montana', 'Midrand'],
    h1: 'Web Design in Pretoria',
    heroSubheading:
      'Professional websites for Pretoria and Centurion businesses — designed to convert, and live in 3–7 days.',
    servicesIntro:
      'Clear packages for Pretoria businesses — a fixed scope, an honest price, and a professional website live within the week.',
    cityBlurb:
      'Pretoria is full of established professional practices, trades and family businesses that still rely on word of mouth, which makes a strong website a real advantage. From Centurion and Menlyn to Hatfield, Brooklyn and Montana, we help Tshwane businesses look as credible online as they are in person. We are an innovative web design studio: every site is designed by hand and built with the help of AI tools, so you get a polished, fast website in days rather than months.',
    metaTitle: 'Web Design Pretoria | Website Designer, Live in 3–7 Days',
    metaDescription:
      'Website design for Pretoria and Centurion businesses. Custom, mobile-first websites that get found on Google, delivered in 3–7 days. Free quote in 24 hours.',
    faqs: [
      {
        q: 'How much does a website cost in Pretoria?',
        a: 'It depends on the size and features of the site. We quote a fixed price for your exact scope within 24 hours, so you know the full cost before we start.',
      },
      {
        q: 'Do you design websites for businesses in Centurion?',
        a: 'Yes. We work with businesses across Pretoria and Tshwane, including Centurion, Menlyn, Hatfield, Brooklyn, Waterkloof and Montana. Everything is done remotely, so you never need to travel.',
      },
      {
        q: 'Can you redesign my existing Pretoria business website?',
        a: 'Yes. Many Pretoria businesses have a site that is outdated or not bringing in enquiries. We can rebuild it with a modern design, clearer structure and proper SEO, usually within a week.',
      },
    ],
  },
]

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((location) => location.slug === slug)
}
