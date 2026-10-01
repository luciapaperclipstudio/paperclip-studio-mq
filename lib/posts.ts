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
  {
    slug: 'do-i-need-a-website-if-i-have-facebook',
    title: 'Do I Need a Website If I Have a Facebook Page?',
    metaTitle: 'Do I Need a Website If I Have a Facebook Page? (South Africa)',
    metaDescription:
      'A straight answer for South African small businesses weighing up a website against a Facebook or Instagram page, including when a page really is enough.',
    category: 'Web Design Advice',
    readTime: '6 min read',
    publishedDate: '2026-08-09',
    excerpt:
      'A Facebook page is a good place to be found. It is a bad place to be the only place you can be found. Here is how to tell which you are.',
    content: `## The short answer

A Facebook page is a good place to be found. It is a bad place to be the only place you can be found.

If your business runs entirely off a Facebook or Instagram page and you are wondering whether a website is worth it, the honest answer depends on what you need it to do. For some businesses a page really is enough. For most South African service businesses, it quietly costs them work they never hear about.

Here is how to tell which one you are.

## What a Facebook page genuinely does well

It would be dishonest to pretend social pages are useless. They are not.

- They are free, and they take minutes to set up.
- People already spend hours a day on them, so your posts appear where attention already is.
- Messaging is instant and familiar. A customer can ask a question without leaving the app.
- Reviews and recommendations spread naturally between friends, which is powerful in local markets.

For a business built on regular posting and word of mouth, that combination is genuinely effective. If most of your work comes from people tagging friends in the comments, your page is doing real work.

## Where it starts costing you

The trouble is that a page is a room in somebody else's building.

**You do not own it.** Meta decides who sees your posts, and what your page is allowed to say and do. Pages get restricted, mistakenly flagged, or hacked, and there is often no phone number to call. Businesses lose years of content and followers overnight, and the only real defence is having somewhere else that is yours.

**Almost nobody finds you on Google.** This is the big one. When someone types plumber near me or guest house in Hermanus, Google shows websites and Google Business Profiles. Facebook pages rank poorly for those searches, if at all. Every one of those people is ready to buy right now, and they are not seeing you.

**It looks less established.** Fair or not, a company with only a Facebook page reads as smaller and newer than one with a proper site. When someone is deciding who to trust with a job worth thousands of rands, that impression matters.

**You cannot control the journey.** A page puts your phone number next to your competitors adverts, unrelated posts, and whatever the algorithm decides to show next. A website has one job and no distractions.

**You learn almost nothing.** You can see likes and reach. You cannot see that eleven people looked at your pricing and only one enquired, which is the kind of thing that tells you what to fix.

## What changes when you have both

The businesses that do best do not choose. They use each for what it is good at.

Social is where you build familiarity. You post the work, the before and afters, the team, the day to day. People follow along and get comfortable with you.

The website is where that familiarity turns into an enquiry. It answers the practical questions, shows the work properly, and gives one clear way to get in touch. It also gets you into Google search results, which social simply cannot do.

In practice the flow looks like this: someone sees your work on Instagram, wants to check you are real, taps the link in your bio, lands on a site that looks professional and answers their questions, and fills in the form. The page created the interest. The site closed it.

## When a page really is enough

Some cases where a website would be a waste of money:

- You are testing an idea and do not know yet whether there is a business in it.
- Your work comes entirely from a fixed group of repeat clients who already have your number.
- You are fully booked and turning work away.

If that is you, spend the money elsewhere. A website is a tool for getting more enquiries, and if you do not need more enquiries you do not need the tool.

## How to decide

Ask yourself one question: if someone hears your business name from a friend and searches for it on Google tonight, what do they find?

If the answer is nothing, or a Facebook page that has not been posted to in three weeks, that is the gap. Every person who does that search and finds nothing is a customer who was already interested and went elsewhere.

You do not need anything elaborate. For most service businesses a single well built page that says what you do, shows the work, proves you are real, and makes it easy to get in touch will do more than a large site nobody planned properly.`,
    faqs: [
      {
        q: 'Do I need a website if I already have a Facebook page?',
        a: 'If you want to be found on Google, you do. Facebook pages rank poorly in search results, so anyone typing something like plumber near me will not see you. A page is good for building familiarity, but it does not capture people searching for your service right now.',
      },
      {
        q: 'Is a website better than a Facebook page for a small business?',
        a: 'They do different jobs. Social builds familiarity with people who already follow you. A website captures people actively searching, works on Google, and is something you own outright. Most successful small businesses use both.',
      },
      {
        q: 'What happens to my Facebook page if it gets restricted?',
        a: 'You can lose access to your followers, content and messages with very little recourse. Pages get flagged in error and appeals can take weeks. That is the main argument for having a website you control, rather than renting your entire online presence.',
      },
      {
        q: 'Can I just use my Instagram bio link instead of a website?',
        a: 'A bio link only helps people who are already on your profile. It does nothing for someone searching Google. It also cannot answer questions, show your full portfolio, or capture an enquiry properly.',
      },
    ],
  },
  {
    slug: 'why-is-my-website-not-getting-enquiries',
    title: 'Why Isn’t My Website Getting Any Enquiries?',
    metaTitle: 'Why Is My Website Not Getting Enquiries? A Diagnostic Guide',
    metaDescription:
      'Work out whether your website has a traffic problem or a conversion problem, and what to fix first. A practical checklist for South African businesses.',
    category: 'Web Design Advice',
    readTime: '7 min read',
    publishedDate: '2026-08-10',
    excerpt:
      'A website with no enquiries has one of two problems, and they need opposite fixes. Diagnose which one you have before spending money on a redesign.',
    content: `## First, work out which problem you have

A website that produces no enquiries has one of two problems, and they need completely different fixes. Either nobody is visiting, or people are visiting and leaving without contacting you.

Guessing wastes months. Open Google Analytics, or your hosting dashboard if that is all you have, and look at how many people visited in the last thirty days.

Under roughly a hundred visitors a month is a traffic problem. Several hundred visitors and almost no enquiries is a conversion problem. Fixing the wrong one is why so many businesses redesign a site that was never getting visitors in the first place.

## If almost nobody is visiting

**Check you are actually in Google.** Search for your exact business name. If your site does not come up first, something is badly wrong. Then search site: followed by your domain. If nothing appears, Google has not indexed you at all, and nothing else you do matters until that is fixed.

**Check your Google Business Profile.** For local service businesses this sends more customers than the website does. If your profile is unclaimed, unverified or half filled in, you are invisible in the map results where most local searches end.

**Check what your pages are actually about.** Many small business sites have a home page titled Home and nothing that mentions what they do or where they do it. If your page title does not contain the service and the town, Google has very little to work with.

**Be realistic about time.** A new site does not rank quickly. Three to six months before meaningful search traffic is normal, and longer in competitive markets. If your site went live last month, the honest answer is that it is too early.

## If people visit but do not enquire

This is more common, and usually more fixable.

**There is no obvious next step.** Look at your home page on a phone. Is there one clear thing to do, visible without scrolling? Not a menu with eight options. One action. Most sites bury the contact form at the bottom of a long page and wonder why nobody fills it in.

**It is too slow.** Every extra second of load time loses visitors, and on South African mobile data that gets worse. If your site takes more than about three seconds on a phone, a meaningful share of people are gone before they see anything.

**It does not work properly on a phone.** Most of your visitors are on mobile. Text that needs pinching, buttons too small to tap, forms that are painful to complete. Open your own site on your phone and try to enquire. If it is annoying for you, it is worse for a stranger.

**Nothing proves you are real.** No photos of actual work, no reviews, no names, no faces. Someone about to spend money on a service they cannot inspect first needs reassurance. Stock photos actively work against you.

**Your form asks too much.** Every extra field costs you submissions. Ask for what you genuinely need to respond, and get the rest in the conversation afterwards.

**It does not answer the obvious question.** People want a sense of cost, timing and process before they get in touch. A site that answers none of that leaves them to assume, and the safest assumption is to keep looking.

## The five second test

Give your home page to someone who does not know your business. Let them look for five seconds, then take it away and ask three things: what does this business do, where do they do it, and what would you do next if you wanted to hire them.

If they cannot answer all three, that is your problem, and no amount of traffic will fix it.

## What to fix first

In order, because effort should follow impact:

- Make sure Google has indexed the site at all.
- Claim and complete your Google Business Profile.
- Put one clear action at the top of the home page, visible on a phone without scrolling.
- Add real photos of real work, and any genuine reviews you have.
- Cut your enquiry form down to the fields you truly need.
- Only then think about redesigning anything.

Most sites that produce no enquiries do not need a rebuild. They need someone to decide what the site is for, and then make that one thing obvious.`,
    faqs: [
      {
        q: 'Why is my website not getting any enquiries?',
        a: 'Either nobody is visiting, or visitors are leaving without contacting you. Check your visitor numbers first. Under about a hundred a month is a traffic problem. Several hundred with no enquiries is a conversion problem, and the two need completely different fixes.',
      },
      {
        q: 'How long does a new website take to get traffic from Google?',
        a: 'Three to six months is normal for meaningful search traffic, and longer in competitive markets. A site that launched a few weeks ago has not had time. Google Business Profile and paid ads work far faster if you need enquiries sooner.',
      },
      {
        q: 'Does my website need to be on the first page of Google?',
        a: 'For your own business name, yes, and that should happen quickly. For competitive service terms it takes months of work. In the meantime the local map results, driven by your Google Business Profile, are usually a faster route to local customers.',
      },
      {
        q: 'Should I redesign my website if it is not working?',
        a: 'Usually not first. Most sites that produce no enquiries have a clarity problem rather than a design problem. Make the next step obvious, add real proof, and shorten the form before spending money on a rebuild.',
      },
    ],
  },
  {
    slug: 'why-your-business-needs-an-online-presence',
    title: 'Why Your Business Needs an Online Presence (Even If Word of Mouth Works)',
    metaTitle: 'Why Your Business Needs an Online Presence in South Africa',
    metaDescription:
      'Why a website, Google Business Profile and reviews matter for South African small businesses, what each one does, and where to start if you have none of them.',
    category: 'Web Design Advice',
    readTime: '6 min read',
    publishedDate: '2026-10-01',
    excerpt:
      'Word of mouth still works. But the person who hears your name now checks you online before they call. Here is what they should find, and why each piece matters.',
    content: `## Word of mouth now goes through Google

Plenty of good South African businesses have run for years on referrals alone. A happy customer tells a neighbour, the neighbour calls, and the work keeps coming. That still happens. What has changed is the step in the middle.

Today, when someone hears your name, they look you up before they pick up the phone. They search your business name, glance at your reviews, check whether you look established, and only then decide whether to call you or the next name on the list.

If that search turns up nothing, an outdated page, or a phone number that no longer works, the referral dies quietly. You never hear about it. That is the real cost of having no online presence: not the customers who never knew you existed, but the ones who were already sent your way and still went elsewhere.

## What an online presence actually means

An online presence is not one thing. It is a small set of places that together answer a customer's questions before they contact you. For most local businesses, three pieces do almost all of the work.

- A Google Business Profile, so you appear on Google Maps and in local search results.
- A website you own, which explains what you do, shows your work, and makes it easy to enquire.
- Genuine reviews, which give strangers a reason to trust you.

Social media pages are useful on top of these, but they are not a replacement for any of them.

## Your Google Business Profile: the front door

When someone searches for a service near them, the first thing Google usually shows is a map with three businesses underneath it. Those three get most of the calls.

A Google Business Profile is what puts you in that list. It is free, it shows your hours, location, phone number, photos and reviews, and it lets people call or get directions with one tap. For trades, guesthouses, restaurants, cleaners and most other local services, it often brings in more customers than the website does.

If you have not claimed yours, someone may already have created a basic listing for you, with the wrong hours or an old number. Claiming and completing it is the single fastest improvement most small businesses can make.

## Your website: the place you own

A Google profile gets you noticed. A website does the convincing.

It is the one place online where you control everything: what you say, how your work is shown, what questions get answered, and what the visitor is asked to do next. It cannot be restricted by a platform, it does not show your competitors next to you, and it ranks in Google searches in a way social pages do not.

A website also makes a small business look established. Fair or not, someone deciding who to trust with a job worth thousands of rands takes a proper site more seriously than a Facebook page or a WhatsApp number alone.

It does not need to be large. For most service businesses a clear, fast site that says what you do, where you work, shows real examples and makes contacting you easy will outperform a big site nobody planned properly.

## Reviews: the proof

People trust other customers far more than they trust anything a business says about itself. Reviews on your Google profile do two jobs at once: they reassure the person reading them, and they help Google decide which businesses to show first.

Ask for reviews right after you have done good work, while the customer is happy. Send them a direct link so it takes thirty seconds. Reply to every review, including the occasional bad one, calmly and briefly. Future customers read those replies as closely as the reviews themselves.

## What it costs you to wait

Every month without an online presence is a month of people searching for exactly what you offer and finding someone else. Your competitors are not necessarily better. They are just easier to find and easier to check.

The good news is that this is one of the few areas where a small business can genuinely compete with a large one. A local plumber with a complete Google profile, forty honest reviews and a clear website can outrank a national chain in their own town.

## Where to start

If you have none of this yet, do it in this order:

- Claim and fully complete your Google Business Profile, with real photos and accurate hours.
- Ask your last ten happy customers for a Google review.
- Get a simple, mobile-friendly website on your own domain name.
- Link them all together, so your profile points to your site and your site points back to your reviews.

None of it needs to be perfect on day one. It needs to exist, be accurate, and make it easy for the next person who hears your name to say yes.`,
    faqs: [
      {
        q: 'Why does a small business need an online presence?',
        a: 'Because almost everyone checks a business online before contacting it, even after a personal recommendation. If they find nothing, or something outdated, many quietly choose someone else. An online presence makes sure the customers you already earned through word of mouth actually reach you.',
      },
      {
        q: 'Is a Google Business Profile enough without a website?',
        a: 'It is a strong start and often the fastest way to get local enquiries. But a profile has limited space to explain your services, show your work properly or answer questions. A website does that job, and helps your profile rank better too. Most businesses do best with both.',
      },
      {
        q: 'What should a small business website include?',
        a: 'At minimum: what you do, where you work, real photos or examples of your work, reviews or testimonials, and one clear way to get in touch. It must load quickly and work properly on a phone, because that is where most visitors will see it.',
      },
      {
        q: 'Is social media a replacement for a website?',
        a: 'No. Social media is useful for staying visible to people who already follow you, but it ranks poorly in Google searches and you do not own the page. A website and Google Business Profile capture people who are actively searching for your service right now.',
      },
    ],
  },
  {
    slug: 'who-owns-your-website-domain-and-hosting',
    title: 'Who Actually Owns Your Website? Domains, Hosting and Logins Explained',
    metaTitle: 'Who Owns Your Website and Domain? A Guide for SA Businesses',
    metaDescription:
      'Many South African businesses discover too late that their web designer owns their domain. How to check who controls your website, and how to protect it.',
    category: 'Web Design Advice',
    readTime: '6 min read',
    publishedDate: '2026-10-01',
    excerpt:
      'Plenty of businesses only find out their domain is registered in someone else’s name when something goes wrong. Five minutes now can save you your website and your email.',
    content: `## The problem nobody checks until it is too late

Here is a situation that is far more common than it should be. A business paid someone to build their website a few years ago. The designer registered the domain, set up the hosting and the email, and everything worked. Then the designer moved on, stopped answering, or the relationship ended badly.

Now the business cannot update its own website. The domain renewal notices go to someone else's inbox. And one day the site and the company email simply stop working, because a renewal nobody saw was never paid.

None of this usually involves anyone acting in bad faith. It happens because nobody explained what the business was supposed to own. This article is that explanation.

## The three things that make up your website

Your website is not one thing you buy. It is three separate things, and you should control all of them.

- The domain name, such as yourbusiness.co.za. This is your address on the internet, and your email usually depends on it too.
- The hosting, which is the server where your website's files actually live.
- The website itself, meaning its content, design and the logins used to edit it.

Of the three, the domain matters most. Hosting can be moved and a website can be rebuilt, but if you lose your domain you lose your address, your Google rankings and very often your email, all at once.

## How to check who owns your domain

For a .co.za domain, you can look up the registered owner using the ZACR WHOIS lookup on the registry's website. For .com and other domains, any WHOIS lookup tool will do. Search for your domain and look at the registrant name and email.

The registrant should be your business, or you personally, with an email address you actually check. If it shows your web designer's name, an agency you no longer use, or an email address nobody at your company can access, that is worth fixing now, while everyone is still on good terms.

## What you should have access to

Whoever built your site, you should be able to answer yes to each of these:

- The domain is registered in your business's name.
- You have your own login to the domain registrar, or at least know who the registrar is.
- You know when the domain renews, and the renewal reminders reach you.
- You have a login to your hosting account, or a clear written agreement about who manages it.
- You have an administrator login to your website, not just an editor account.
- You have a copy of your website's content and images somewhere you control.

A good web designer will happily hand all of this over. It is perfectly normal for them to manage things day to day on your behalf. It is not normal for you to have no access at all.

## Keep the important logins safe

Once you have the logins, store them somewhere sensible: a password manager is best, and a sealed document in the office safe is better than nothing. Use an email address for the domain and hosting accounts that belongs to the business rather than to one staff member, so access does not walk out the door when someone leaves.

Turn on two-factor authentication wherever it is offered. Domains do get stolen, and a hijacked domain can be used to intercept your email and impersonate you to your customers.

## What to ask before hiring a web designer

Before you sign, ask these questions and get the answers in writing:

- Will the domain be registered in my business's name?
- Will I get my own login to the domain and hosting?
- If we stop working together, what exactly will you hand over, and is there a fee for it?
- Who is responsible for renewing the domain, and who gets the reminders?

Anyone who is reluctant to answer clearly is telling you something important.

## If you are already locked out

Start by asking politely. Most designers will transfer a domain into your name when asked, because it was always yours in their mind too. A .co.za transfer is a fairly routine process between registrars.

If the person cannot be reached, contact the registrar directly with proof that the business is yours, such as your company registration documents and evidence of past payments. It takes longer, but it can usually be resolved. The important thing is to start before the renewal date, not after it.

Five minutes checking today is far cheaper than rebuilding your website, your email and your search rankings from scratch.`,
    faqs: [
      {
        q: 'Who should own my website domain name?',
        a: 'Your business should be the registered owner, with an email address you control. A web designer can manage it for you, but the domain should be in your name so you never lose your website or email if the relationship ends.',
      },
      {
        q: 'How do I find out who owns my .co.za domain?',
        a: 'Use the WHOIS lookup on the ZA Central Registry (ZACR) website and search for your domain. It shows the registrant details. If the owner is not your business, ask whoever registered it to transfer it into your name.',
      },
      {
        q: 'What happens if my domain name expires?',
        a: 'Your website and any email on that domain stop working. If it is not renewed within the grace period, the domain can be released and registered by someone else, including competitors or people who resell expired domains.',
      },
      {
        q: 'Can I move my website away from my web designer?',
        a: 'Yes. You can transfer the domain to a registrar of your choice and move or rebuild the website elsewhere. It is far easier if the domain is already in your name and you have copies of your content, which is why it is worth checking now.',
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
