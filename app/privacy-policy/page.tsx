import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/site/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | Paperclip Studio',
  description:
    'How Paperclip Studio collects, uses, and protects your personal information in accordance with the Protection of Personal Information Act (POPIA).',
}

const sections: LegalSection[] = [
  {
    heading: '1. Who we are',
    body: `Paperclip Studio ("we", "us", or "our") is a web design studio operating in South Africa. We are the responsible party (as defined in the Protection of Personal Information Act, 4 of 2013, or "POPIA") for the personal information we process about you.

If you have any questions about this policy or how we handle your information, you can reach us at hello@paperclipstudio.co.za.`,
  },
  {
    heading: '2. Scope of this policy',
    body: `This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you visit our website, request a quote, or engage our services. It applies to all personal information we process and should be read together with our Terms & Conditions.

By using our website or providing us with your personal information, you acknowledge that you have read and understood this policy.`,
  },
  {
    heading: '3. Personal information we collect',
    body: `We only collect personal information that is adequate, relevant, and not excessive for the purposes set out below. Depending on how you interact with us, this may include:

- Contact details such as your name, business name, email address, and phone or WhatsApp number.
- Project information you share with us, such as your business description, content, images, and requirements.
- Enquiry and quote details, including the package and add-ons you select.
- Technical information collected automatically, such as your IP address, browser type, device information, and pages visited.
- Communications between you and us, including emails and messages.`,
  },
  {
    heading: '4. How we collect your information',
    body: `We collect personal information directly from you when you complete our quote or contact forms, email or message us, or engage us for a project.

We also collect certain information automatically through cookies and similar technologies, and through third-party analytics and advertising tools (see the section on cookies and third parties below).`,
  },
  {
    heading: '5. Why we process your information (purpose)',
    body: `In line with POPIA, we process your personal information for specific, explicitly defined, and lawful purposes, including to:

- Respond to your enquiries and provide you with a quote.
- Deliver, manage, and support the web design services you request.
- Communicate with you about your project, our services, and account or billing matters.
- Improve our website, services, and customer experience.
- Comply with our legal and regulatory obligations.
- Where you have consented, send you marketing communications about our services (you may opt out at any time).`,
  },
  {
    heading: '6. Legal basis for processing',
    body: `We process your personal information on one or more of the following lawful bases recognised under POPIA: with your consent; because it is necessary to conclude or perform a contract with you; to comply with a legal obligation; or because it is necessary to pursue our legitimate interests (such as running and improving our business), provided these are not overridden by your rights.`,
  },
  {
    heading: '7. Cookies and analytics',
    body: `Our website uses cookies and similar technologies to help it function, remember your preferences, and understand how visitors use the site.

We use Google Analytics to measure website traffic and the Meta (Facebook) Pixel to measure and improve our advertising. These tools may set cookies and collect information such as your IP address and browsing activity. You can control or disable cookies through your browser settings, although some parts of the site may not work as intended if you do.`,
  },
  {
    heading: '8. Sharing your information',
    body: `We do not sell your personal information. We may share it with trusted third parties only where necessary, including:

- Service providers and operators who help us run our business and website (for example, hosting, form processing, and analytics providers), who are required to protect your information.
- Payment processors to handle deposits and payments.
- Authorities or regulators where we are legally required to disclose information.

Some of these providers may process or store information outside South Africa. Where this happens, we take reasonable steps to ensure your information receives an adequate level of protection, as required by POPIA.`,
  },
  {
    heading: '9. How long we keep your information',
    body: `We keep your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to meet any legal, accounting, or reporting requirements. When it is no longer needed, we securely delete or de-identify it.`,
  },
  {
    heading: '10. How we protect your information',
    body: `We take appropriate, reasonable technical and organisational measures to safeguard your personal information against loss, unauthorised access, and misuse, as required by POPIA. While we take security seriously, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: '11. Your rights under POPIA',
    body: `Subject to the conditions in POPIA, you have the right to:

- Be notified that we are collecting your personal information.
- Request access to the personal information we hold about you.
- Request that we correct or delete personal information that is inaccurate, outdated, or no longer required.
- Object, on reasonable grounds, to the processing of your personal information.
- Withdraw your consent where processing is based on consent.
- Lodge a complaint with the Information Regulator.

To exercise any of these rights, contact us at hello@paperclipstudio.co.za. We may need to verify your identity before acting on your request.`,
  },
  {
    heading: '12. Complaints to the Information Regulator',
    body: `If you believe we have not handled your personal information lawfully, you may lodge a complaint with the Information Regulator of South Africa.

Information Regulator (South Africa)
Email: complaints.IR@justice.gov.za
Website: inforegulator.org.za`,
  },
  {
    heading: '13. Changes to this policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or the law. The latest version will always be available on this page, with the "last updated" date shown above. We encourage you to review it periodically.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains how we collect, use, and protect your personal information in accordance with South Africa's Protection of Personal Information Act (POPIA)."
      lastUpdated="1 November 2024"
      sections={sections}
    />
  )
}
