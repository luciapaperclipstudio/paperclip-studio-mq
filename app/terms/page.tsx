import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/site/legal-page'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Paperclip Studio',
  description:
    'The terms and conditions governing your use of the Paperclip Studio website and web design services, in accordance with South African law.',
}

const sections: LegalSection[] = [
  {
    heading: '1. Introduction',
    body: `These Terms & Conditions ("Terms") govern your use of the Paperclip Studio website and the web design and related services we provide ("Services"). They form a binding agreement between you and Paperclip Studio ("we", "us", or "our"), a web design studio operating in South Africa.

By using our website or engaging our Services, you agree to these Terms. If you do not agree, please do not use our website or Services.`,
  },
  {
    heading: '2. Information about us (ECTA disclosure)',
    body: `As required by the Electronic Communications and Transactions Act, 25 of 2002 ("ECTA"), our details are:

- Business name: Paperclip Studio
- Nature of business: Web design and development services
- Location: South Africa
- Email: hello@paperclipstudio.co.za
- Phone: +27 78 442 9357`,
  },
  {
    heading: '3. Our services',
    body: `We design and build websites and landing pages, and provide related services described on our website. The specific deliverables, timelines, and price for your project will be set out in the quote or proposal we provide and agree with you.

We aim to deliver most projects within 3 to 7 business days, depending on the package selected and how quickly you provide the content and feedback we need. Any estimated timelines are given in good faith and may be affected by delays in receiving materials from you.`,
  },
  {
    heading: '4. Quotes and orders',
    body: `Quotes we provide are valid for the period stated in the quote, or for 30 days where no period is stated. A project begins once you have accepted a quote and we have received the required deposit.

Prices are quoted in South African Rand (ZAR). Unless stated otherwise, quotes reflect the scope agreed at the time. Work outside the agreed scope may be quoted and charged separately.`,
  },
  {
    heading: '5. Payment terms',
    body: `Unless otherwise agreed in writing:

- A deposit of 50% of the total project fee is payable before we begin work.
- The remaining balance is payable on completion, before final delivery or handover of the website.
- We accept payment by EFT, card (via our payment providers), and PayPal for international clients.

Ownership of the final website and its files transfers to you once payment has been received in full.`,
  },
  {
    heading: '6. Your responsibilities',
    body: `To allow us to deliver your project, you agree to:

- Provide accurate, lawful content and materials (such as text, images, and logos) in a timely manner.
- Confirm that you own or have the right to use all content you supply to us.
- Review and provide feedback within the timeframes we agree.
- Keep your login details and any credentials we provide secure.

Delays in providing content or feedback may affect your delivery timeline.`,
  },
  {
    heading: '7. Revisions and scope',
    body: `Each package includes the number of revision rounds stated in your quote. Additional revisions, new pages, or features beyond the agreed scope may be charged at our applicable rates and quoted before we proceed.`,
  },
  {
    heading: '8. Intellectual property',
    body: `Any content you provide to us remains your property. Once you have paid in full, you own the final delivered website and its content.

We retain ownership of any underlying tools, frameworks, code libraries, and pre-existing materials we use to build websites, as well as the right to reuse general techniques and know-how. Unless you request otherwise, we may display your completed project in our portfolio and marketing materials.`,
  },
  {
    heading: '9. Third-party services',
    body: `Your website may rely on third-party services such as hosting, domains, plugins, fonts, and analytics or advertising tools. These are subject to their own terms and pricing, and we are not responsible for their availability, performance, or actions. Any ongoing costs for such services (for example hosting or domain renewals) are your responsibility unless we agree otherwise.`,
  },
  {
    heading: '10. Cancellations and refunds',
    body: `If you cancel a project after work has begun, the deposit is non-refundable, as it covers work already carried out and reserved capacity. Where work has progressed beyond the value of the deposit, we may invoice you for the additional work completed up to the date of cancellation.

Nothing in these Terms limits any rights you may have under the Consumer Protection Act, 68 of 2008 ("CPA"), where it applies to you.`,
  },
  {
    heading: '11. Warranties and disclaimers',
    body: `We provide our Services with reasonable skill and care. Other than as expressly stated in these Terms or required by law (including the CPA where applicable), our Services and website are provided "as is", and we do not guarantee that the website will be uninterrupted, error-free, or that it will achieve any particular commercial result, such as specific search rankings or sales.`,
  },
  {
    heading: '12. Limitation of liability',
    body: `To the maximum extent permitted by law, we will not be liable for any indirect, incidental, or consequential loss, or loss of profits, revenue, or data, arising from your use of our website or Services. Our total liability arising from or in connection with a project will not exceed the total fees you have paid us for that project.

Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including under the CPA.`,
  },
  {
    heading: '13. Privacy',
    body: `We process your personal information in accordance with our Privacy Policy and the Protection of Personal Information Act (POPIA). Please review our Privacy Policy to understand how we handle your information.`,
  },
  {
    heading: '14. Governing law',
    body: `These Terms are governed by and interpreted in accordance with the laws of the Republic of South Africa, and you agree to the jurisdiction of the South African courts in relation to any dispute arising from them.`,
  },
  {
    heading: '15. Changes to these Terms',
    body: `We may update these Terms from time to time. The latest version will always be available on this page, with the "last updated" date shown above. Your continued use of our website or Services after changes are posted constitutes acceptance of the updated Terms.`,
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern your use of our website and services. Please read them carefully. They are drafted in line with South African law, including ECTA and the Consumer Protection Act."
      lastUpdated="1 November 2024"
      sections={sections}
    />
  )
}
