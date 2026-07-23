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

// Post content lives here. Add entries to this array to publish.
// Content convention: lines starting with "## " become <h2>, lines starting
// with "- " become list items, everything else is a paragraph.
const posts: Post[] = [
  {
    slug: 'how-much-does-a-website-cost-in-south-africa',
    title: 'How Much Does a Website Cost in South Africa in 2024?',
    metaTitle: 'How Much Does a Website Cost in South Africa? (2024 Pricing Guide)',
    metaDescription:
      "From R500 DIY builders to R80,000 agency sites — here's what South African businesses actually pay for a website, and what you get at each price point.",
    category: 'Pricing & Budgeting',
    readTime: '6 min read',
    publishedDate: '2024-11-01',
    excerpt:
      "South African website pricing ranges from R500 to R80,000+ depending on who builds it and how. Here's what each price point actually gets you.",
    content: `## The honest answer: it depends on who builds it

If you have ever asked around for website pricing in South Africa, you have probably been given wildly different numbers — R500 here, R45,000 there. It is genuinely confusing, and the truth is that the price of a website in South Africa depends almost entirely on who builds it and how.

A website is not a single product with a fixed price tag. It is a service, and like any service the cost reflects the skill, time, and tools behind it. A student building sites after hours charges very differently to a downtown Sandton agency with a full creative team. Both might deliver "a website", but what you actually get — and what it does for your business — can be worlds apart.

Below we break down the four main routes South African businesses take, what each one really costs in rands, and which one makes the most sense for a typical small business.

## Option 1: DIY website builders (R0–R500/month)

Platforms like Wix, Squarespace, and Weebly let you build a site yourself using drag-and-drop templates. On paper this is the cheapest option, with free tiers and paid plans usually landing between R150 and R500 per month once you add a custom domain and remove the platform branding.

The appeal is obvious: low upfront cost and full control. The catch is what it costs you in other ways.

- Your time. A decent DIY site takes most business owners 20–40 hours to build properly — time you are not spending running your business.
- The template look. Because thousands of other businesses use the same templates, your site rarely feels bespoke or memorable.
- Limited SEO control. These builders handle the basics, but fine-tuning for Google — the thing that actually brings you customers — is often restricted.
- Ongoing cost. R300 a month feels small, but over three years that is more than R10,000, and you never actually own the site.

DIY works if you are pre-revenue, testing an idea, or genuinely enjoy the tinkering. For most established South African businesses, the hidden time cost outweighs the low sticker price.

## Option 2: Freelance web designer (R3,000–R15,000 once-off)

Hiring a freelance web designer is the classic middle ground, and for good reason. Typical South African freelancer rates for a small business site land somewhere between R3,000 and R15,000 as a once-off, depending on the number of pages and the designer's experience.

The upside is a custom-built site and a real human who understands your brief. The trade-off is that quality varies enormously. A great freelancer is worth every rand; a cheap one can leave you with a half-finished site and unanswered WhatsApps.

Two things to watch. First, revision cycles: without a clear scope, "just one more change" can stretch a two-week project into two months. Second, availability — most freelancers juggle several clients, so timelines slip when they get busy. Get the scope, revision limit, and delivery date in writing before you pay a deposit.

## Option 3: Web design agency (R15,000–R80,000+)

At the top end sit web design agencies. For R15,000 to R80,000 and beyond, you get a polished, professionally managed process — strategy, custom design, copywriting, and a team that handles everything.

For large corporates, funded startups, or businesses where the website is the core of the operation, this level of investment makes sense. You are paying for accountability, capacity, and a brand-defining result.

For most small South African businesses, though, an agency is simply overkill. You are covering the cost of account managers, office space, and a design team you do not really need for a five-page site. The work is excellent, but the price rarely matches the return for a small operation.

## Option 4: AI-powered studio (R1,800–R7,500 once-off)

This is the newest option, and it changes the maths. AI-powered studios — the approach we take at Paperclip Studio — use modern AI tooling to handle the slow, repetitive parts of building a site: first drafts, layout, boilerplate code, and content structure.

Here is the honest version: AI does not replace the designer, it removes the grunt work. That means a professional, custom site can be built in days rather than weeks, which is why our packages run from R1,800 to R7,500 as a once-off rather than the R15,000-plus an agency would charge for comparable quality.

You still get a real person reviewing every decision, tuning the design, and making sure the site reflects your business. The difference is speed and price — not a drop in quality. It is not magic, and it is not right for every enormous project, but for a small business that wants a sharp, fast, conversion-focused site without the agency bill, it is hard to beat.

## What should a small business in South Africa actually pay?

For the vast majority of small businesses, the sweet spot is a professionally built site in the R3,500–R7,500 range.

Here is the logic. DIY costs you time you cannot get back. Agencies cost money that does not match the return for a small operation. A professionally built R3,500–R7,500 site sits right in the middle: custom, credible, and built properly, without the corporate price tag.

The real test is not the sticker price at all — it is whether the site earns its cost back. A well-built website that brings in even two or three extra enquiries a month has usually paid for itself within the first quarter. Think of it as a salesperson that works 24/7, not a once-off expense.

## What's included vs what costs extra?

Website quotes in South Africa are not always apples to apples, so it helps to know what usually sits inside a standard quote versus what gets added on top.

Typically included in a standard quote:

- The design and build of the agreed pages
- Mobile-responsive layout
- Basic on-page SEO setup
- A contact form or enquiry button
- Deployment to your domain

Usually charged as extras:

- Hosting (often a small monthly or annual fee)
- Your domain name registration and renewal
- Ongoing monthly maintenance or support
- Professional copywriting
- Photography or custom imagery

None of these extras are traps — they are legitimate costs. The important thing is to ask upfront exactly what your quote covers so there are no surprises later.

## Bottom line

Website pricing in South Africa ranges from R500 DIY builders to R80,000 agency projects, but for most small businesses the honest sweet spot is a professionally built site between R3,500 and R7,500. The right choice is the one that pays for itself in leads, not the cheapest number you can find.

If you want a fast, professionally built site without the agency price tag, our packages start at R1,800. Get a free quote and we will tell you honestly which option fits your business — even if that turns out not to be us.`,
  },
]

// Newest first, based on publishedDate.
export function getPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
