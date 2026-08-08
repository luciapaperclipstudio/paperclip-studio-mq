export type Faq = { q: string; a: string }

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
  // Rendered visibly at the end of the article AND emitted as FAQPage schema.
  // Both must stay in sync: marking up questions that aren't on the page is a
  // structured-data violation, so the schema is only emitted when these render.
  faqs?: Faq[]
}

// Post content lives here. Add entries to this array to publish.
// Content convention: lines starting with "## " become <h2>, lines starting
// with "- " become list items, everything else is a paragraph.
const posts: Post[] = [
  {
    slug: 'ai-website-builder-vs-hiring-web-designer-south-africa',
    title: 'AI Website Builder vs Hiring a Web Designer: Which is Right for Your Business?',
    metaTitle: 'AI Website Builder vs Web Designer South Africa: Which Should You Choose?',
    metaDescription:
      'Comparing AI website builders to hiring a web designer in South Africa — cost, quality, turnaround time, and which option actually makes sense for a small business.',
    category: 'Web Design Advice',
    readTime: '7 min read',
    publishedDate: '2024-11-08',
    excerpt:
      "AI website tools are faster and cheaper than ever — but does that mean you should skip the designer? Here's an honest comparison for South African small businesses.",
    content: `## The question every small business owner is asking right now

A few years ago, getting a professional website meant one thing: you hired someone to build it. Today, a wave of AI website builders — Wix ADI, Framer AI, Durable, and a dozen others — promise to spin up a full site in minutes, often for the price of a monthly coffee habit. Type in what your business does, and the tool generates pages, copy, and images on the spot.

So the obvious question follows: if AI can build a website in ten minutes for next to nothing, why would anyone still pay a web designer?

It is a fair question, and the honest answer is more nuanced than either the AI hype crowd or the traditional designers will tell you. Both options have a real place. The trick is knowing which one fits your business, your budget, and — most importantly — what you actually need the website to do. Let us walk through it properly.

## What AI website builders actually do well

It would be easy to dismiss AI builders, but that would not be honest. They are genuinely impressive at certain things, and for the right person they are a great fit.

Speed is the headline. You can go from nothing to a live, functioning website in an afternoon. For a business that needs a basic online presence yesterday, that is hard to argue with.

Cost is the other big draw. Most AI builders run on affordable monthly subscriptions, so there is little upfront commitment. If you are testing an idea or running a side hustle, you are not risking much.

- The templates are genuinely decent — modern, mobile-responsive, and a long way from the clunky drag-and-drop sites of a decade ago.
- They handle the technical basics for you: hosting, security certificates, and mobile layouts are sorted automatically.
- For very simple needs — a one-page site, a coming-soon page, a basic portfolio — the output is often perfectly good.

If your requirements are modest and your budget is close to zero, an AI builder is a sensible starting point. There is no shame in that, and anyone who tells you otherwise is usually trying to sell you something more expensive.

## Where AI website builders fall short

The cracks appear once your needs go beyond the basics — and for most real businesses, they do.

The first problem is that AI sites tend to look generic. The tools pull from the same pool of templates and patterns, so your site ends up looking like thousands of others. It works, but it rarely feels like you, and it rarely stands out from a competitor using the same tool.

The deeper problem is that AI builders give you a website, not a strategy. They do not ask why someone visits your site, what action you want that visitor to take, or how to guide them towards booking, buying, or enquiring. There is no conversion thinking behind the layout — just blocks arranged attractively.

- SEO control is usually limited. You get the basics, but the finer tuning that actually helps you rank on Google is often locked away or missing entirely.
- There is no real copywriting strategy. AI-generated text reads smoothly but says little, and it rarely speaks to your specific customer.
- You are locked into a monthly subscription. Stop paying and the site can disappear — you are renting, not owning.
- When something breaks, you are on your own. There is no one to call, just a help centre and a support queue.

For a business that depends on its website to bring in work, those shortfalls are not minor. They are the difference between a site that looks fine and a site that actually earns its keep.

## What a web designer brings that AI can't

A good web designer is not competing with AI on speed or price. They are offering something different: judgement.

A designer starts with strategy — who your customers are, what they need to see, and what you want them to do. That thinking shapes every decision, from the layout to the wording of a single button. It is the part AI simply does not do, because it does not understand your business or your market.

Then there is the craft that quietly makes a site work: conversion-optimised copy that speaks to your customer, a proper SEO structure that gives you a real chance on Google, schema markup so search engines understand your business, and local knowledge of what actually resonates with a South African audience.

And crucially, you get a person. Someone who takes your brief, pushes back when something will not work, fixes things when they break, and takes responsibility for the result. When your business depends on the outcome, having someone accountable is worth a great deal.

The catch, of course, is cost and time. Traditional design has always meant higher prices and longer timelines — which is exactly the gap that a newer model has stepped in to fill.

## The best of both worlds: AI-assisted design studios

There is a third option that often gets lost in the "AI versus designer" framing, and it is arguably the most practical for small businesses: designers who use AI as a tool rather than a replacement.

This is the approach we take at Paperclip Studio. The idea is simple. AI is genuinely brilliant at the slow, repetitive parts of building a site — first drafts, layout scaffolding, boilerplate code, content structure. So we let it do that work, which cuts build time and cost dramatically.

But the strategic and quality layer stays firmly human. A designer still decides how the site should be structured to convert, writes and shapes the copy, tunes the SEO, and reviews every decision before it ships. You get the speed and affordability that AI makes possible, without losing the strategy and accountability that pure AI builders miss.

In practice that means a professional, custom-built site in days rather than weeks, at a price closer to an AI subscription than an agency invoice. It is not the right fit for every enormous project, but for a typical small business it hits a sweet spot the other options struggle to reach.

## So which should you choose? A simple decision framework

Cutting through all of it, here is a straightforward way to decide.

- If you need something live in the next 24 hours and have zero budget, use a DIY AI builder. It will not be remarkable, but it will get you online today, and you can upgrade later.
- If you want a genuinely professional result but cannot justify R15,000 or more, an AI-assisted studio is almost certainly your best value. You get the strategy and quality of a designer at a fraction of the traditional cost and timeline.
- If you are a large business with complex needs — multiple stakeholders, custom functionality, a big brand to protect — a traditional agency is worth the higher investment for the capacity and accountability it brings.

Most small South African businesses land squarely in the middle option, and that is not a coincidence. It is the point where quality and affordability finally overlap.

## The real question isn't AI vs designer — it's what outcome do you need?

Here is the thing to hold onto through all the noise about tools and technology: your website has a job to do. That job is to generate leads, bookings, or sales for your business. Nothing else really matters.

An AI builder, a freelance designer, an AI-assisted studio, a full agency — these are just different ways of arriving at the same destination. The right choice is not the newest, the cheapest, or the most impressive-sounding. It is the one that gets you a website that actually achieves your outcome.

So do not ask "should I use AI or hire a designer?" Ask "what do I need this website to do, and which option gets me there best?" Answer that honestly, and the decision usually makes itself.

If you would like a straight answer about which route fits your business, we are happy to help — even if that turns out to be a simple builder rather than us. Get a free quote and we will point you in the right direction.`,
  },
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

## Option 4: AI-powered studio

This is the newest option, and it changes the maths. AI-powered studios — the approach we take at Paperclip Studio — use modern AI tooling to handle the slow, repetitive parts of building a site: first drafts, layout, boilerplate code, and content structure.

Here is the honest version: AI does not replace the designer, it removes the grunt work. That means a professional, custom site can be built in days rather than weeks, which is why a studio like ours can deliver comparable quality for a fraction of the R15,000-plus an agency would charge.

You still get a real person reviewing every decision, tuning the design, and making sure the site reflects your business. The difference is speed and price — not a drop in quality. It is not magic, and it is not right for every enormous project, but for a small business that wants a sharp, fast, conversion-focused site without the agency bill, it is hard to beat.

## What should a small business in South Africa actually pay?

For the vast majority of small businesses, the sweet spot is a professionally built custom site — comfortably above what DIY can produce, well below what an agency charges.

Here is the logic. DIY costs you time you cannot get back. Agencies cost money that does not match the return for a small operation. A professionally built site sits right in the middle: custom, credible, and built properly, without the corporate price tag.

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

Website pricing in South Africa ranges from R500 DIY builders to R80,000 agency projects, but for most small businesses the honest sweet spot is a professionally built custom site somewhere in between. The right choice is the one that pays for itself in leads, not the cheapest number you can find.

If you want a fast, professionally built site without the agency price tag, get a free quote and we will tell you honestly which option fits your business — even if that turns out not to be us.`,
  },
  {
    slug: 'popia-compliance-for-small-business-websites',
    title: 'POPIA and Your Website: What South African Businesses Actually Need',
    metaTitle: 'POPIA Website Compliance in South Africa: What Your Site Needs',
    metaDescription:
      'A plain-English guide to what POPIA requires from a small business website in South Africa — privacy policy, consent, contact forms, and the mistakes that catch people out.',
    category: 'Compliance & Legal',
    readTime: '5 min read',
    publishedDate: '2026-07-28',
    excerpt:
      'If your website has a contact form, POPIA applies to you. Here is what that actually means for a small South African business, without the legal jargon.',
    content: `## POPIA applies to almost every business website

The Protection of Personal Information Act came into full force in July 2021, and a surprising number of South African business owners still assume it is something only banks and big corporates need to worry about. It is not.

POPIA governs what happens when you collect, store, or use someone's personal information. A name and an email address in a contact form is personal information. So is a phone number, an IP address, or a WhatsApp number. If your website has a contact form, an enquiry form, or a newsletter signup, you are processing personal information and POPIA applies to you.

The good news is that for a typical small business website, compliance is far less painful than the acronym suggests. It is mostly about being honest and specific about what you do with the information people give you.

## The four things your website actually needs

Most small business sites need the same handful of things in place.

- A privacy policy that says what you collect, why you collect it, how long you keep it, and who else sees it. Vague boilerplate copied from a template site is worse than useless, because it will not match what you actually do.
- A lawful reason for collecting each piece of information. For a contact form the reason is obvious: someone asked you to get back to them. For a marketing list it is not, which is why marketing needs its own explicit opt-in.
- A way for people to reach you about their data. POPIA gives people the right to ask what you hold about them and to ask you to delete it. You need a working contact route for that, and someone who reads it.
- Security appropriate to what you hold. For most sites this means HTTPS, a reputable host, and not emailing spreadsheets of customer details around.

## Consent is narrower than people think

The most common mistake we see is treating a single tick box as blanket permission. It is not.

If someone fills in your enquiry form, you have permission to reply to their enquiry. You do not automatically have permission to add them to a monthly newsletter, share their details with a partner business, or message them on WhatsApp about an unrelated promotion two years later. Each of those is a different purpose, and POPIA works on the basis that consent is specific.

The practical version: keep a separate, unticked opt-in for marketing, and honour it.

## Cookies and analytics

If you run Google Analytics, a Meta Pixel, or any advertising tracking, you are collecting information about visitors before they have typed anything. That needs disclosing in your privacy policy, and in most cases it needs a cookie notice that lets people decline non-essential tracking.

A cookie banner that offers no way to say no is not consent. It is a notification.

## What happens if you ignore it

The Information Regulator can issue enforcement notices, and non-compliance can carry administrative fines or, in serious cases, criminal liability. In practice, small businesses are rarely the first target of a regulator with limited capacity.

The more realistic risk is commercial. Larger clients increasingly ask about POPIA compliance during procurement, and a missing privacy policy is an easy reason to be passed over. It also does you no favours with customers who are, quite reasonably, more careful about their data than they were a few years ago.

## Getting it sorted

None of this requires a lawyer for a straightforward small business site. It requires someone to write a privacy policy that reflects what your site genuinely does, add a cookie notice if you are running tracking, and make sure your forms only ask for what you need.

We include POPIA setup as an add-on when we build a site, because it is far easier to do properly at build time than to retrofit later.

One caveat worth stating plainly: this article is general guidance, not legal advice. If you process sensitive information, handle children's data, or move personal information outside South Africa, talk to someone qualified.

Get a free quote and we will tell you what your site needs.`,
    faqs: [
      {
        q: 'Does POPIA apply to a small business website?',
        a: 'Yes. POPIA governs any collection of personal information, and a name and email address in a contact form counts. If your site has an enquiry form or a newsletter signup, it applies to you regardless of company size.',
      },
      {
        q: 'What does a POPIA-compliant website actually need?',
        a: 'A privacy policy that accurately describes what you collect and why, a lawful reason for collecting each item, a working contact route for data requests, and security appropriate to what you hold — HTTPS and a reputable host for most small sites.',
      },
      {
        q: 'Do I need a cookie banner in South Africa?',
        a: 'If you run Google Analytics, a Meta Pixel or any advertising tracking, you are collecting data before a visitor types anything. That needs disclosing, and in most cases a cookie notice that genuinely lets people decline non-essential tracking. A banner with no way to say no is a notification, not consent.',
      },
      {
        q: 'What happens if I ignore POPIA?',
        a: 'The Information Regulator can issue enforcement notices and fines. In practice the more immediate risk for a small business is commercial: larger clients increasingly ask about compliance during procurement, and a missing privacy policy is an easy reason to be passed over.',
      },
    ],
  },
  {
    slug: 'get-your-business-on-google-maps-south-africa',
    title: 'How to Get Your Business Showing Up on Google Maps in South Africa',
    metaTitle: 'Google Business Profile South Africa: How to Get Found on Maps',
    metaDescription:
      'A step-by-step guide to setting up and ranking a Google Business Profile in South Africa, including verification, the signals that matter, and how to handle reviews.',
    category: 'Local SEO',
    readTime: '6 min read',
    publishedDate: '2026-08-05',
    excerpt:
      'For most local businesses, the Google map results send more customers than the website does. Here is how to claim your spot and climb it.',
    content: `## The map results matter more than your website

Search for "plumber in Randburg" or "hair salon Sea Point" and look at what Google shows first. Above the normal blue links sits a map with three businesses listed beneath it. That block is called the local pack, and for most service businesses it captures the majority of the clicks.

Here is the part people miss: appearing there is not controlled by your website. It is controlled by your Google Business Profile, which is a separate free listing you claim and manage. You can have an excellent website and be invisible on the map, or a mediocre one and dominate it.

If you serve customers in a specific place, this is usually the highest-return hour of work available to you.

## Claiming your profile

Go to google.com/business and search for your business name. One of two things happens.

- A listing already exists that you have never touched. Google creates these automatically from other sources, and they are often wrong. Claim it rather than making a new one, or you end up with duplicates competing against each other.
- Nothing exists, and you create it from scratch.

Either way you will fill in a name, category, address or service area, phone number, and website.

Two decisions matter more than the rest. Your primary category is the single strongest signal for what searches you appear in, so choose the most specific one that fits rather than something broad. And if you visit customers rather than receiving them, set yourself up as a service-area business and hide the address, otherwise you are publishing your home address.

## Verification is where people get stuck

Google needs to confirm the business is real. Depending on the category and how the listing looks, you may be asked for a postcard to your address, a phone call, an email, or increasingly a short video showing your premises, signage, and equipment.

Video verification catches people out, so be ready to film your storefront or vehicle signage, some tools or stock, and then yourself accessing something that proves you run the place. Failed verifications can be appealed, but it is much less painful to get it right the first time.

Nothing you do to the profile will show publicly until verification completes.

## What actually moves you up the rankings

Google weighs three things: relevance, distance, and prominence. You cannot change where a searcher is standing, so the work goes into the other two.

- Complete every field. Hours, services, description, attributes, opening date. Sparse profiles rank below complete ones, and it costs nothing to fix.
- Add real photos, and keep adding them. Profiles with recent photos get noticeably more engagement, and Google reads that engagement as a quality signal. Phone photos of actual work beat stock imagery every time.
- Keep your name, address, and phone number identical everywhere it appears online. Inconsistent details across directories genuinely dilute your ranking.
- Post updates occasionally. Offers, new services, seasonal notes. It is a small signal, but it is a signal.

## Reviews are the lever most people neglect

Review volume, recency, and rating all feed local ranking, and they influence whether someone clicks you over the business above you.

The reliable way to get them is to ask, immediately after you have done good work, with a direct link. Most satisfied customers are willing and simply never think of it.

Two things to avoid. Do not buy reviews, because Google is good at spotting them and the penalty is severe. And do not leave negative reviews unanswered. A calm, specific, non-defensive reply is read by every future customer, and it often matters more than the complaint itself.

## Where your website fits in

Your profile links to your website, and Google looks at that site when deciding how much to trust the listing. A site that clearly states where you operate, what you do, and how to contact you reinforces the profile. A site with no location mentioned anywhere gives Google nothing to work with.

The two work together: the profile wins you the visibility, the website converts it.

We set up and optimise Google Business Profiles as an add-on when we build a site, including the location signals that connect the two. Get a free quote if you would like it handled.`,
    faqs: [
      {
        q: 'How do I get my business on Google Maps in South Africa?',
        a: 'Claim or create a Google Business Profile at google.com/business, fill in your category, address or service area, phone number and website, then complete verification. Nothing appears publicly until verification is done.',
      },
      {
        q: 'Why is my business not showing up on Google Maps?',
        a: 'The most common reasons are that verification was never completed, that a duplicate unclaimed listing is competing with yours, or that the profile is too sparse. Google ranks on relevance, distance and prominence, and an incomplete profile loses on prominence.',
      },
      {
        q: 'Do I need a website to rank on Google Maps?',
        a: 'No, but it helps. Your profile links to your site, and Google uses that site to judge how much to trust the listing. A site that states clearly where you operate and what you do reinforces the profile.',
      },
      {
        q: 'How do I get more Google reviews?',
        a: 'Ask directly, immediately after doing good work, with a link that goes straight to the review form. Never buy reviews — Google detects them and the penalty is severe. Always reply to negative reviews calmly, because every future customer reads that reply.',
      },
    ],
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
