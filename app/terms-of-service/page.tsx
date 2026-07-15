import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import TermsSidebar from "./TermsSidebar";

export const metadata: Metadata = {
  title: "Terms of Service — invogen.in",
  description:
    "Read invogen.in's Terms of Service to understand the rules, rights, and obligations of using our professional invoice generation platform.",
  openGraph: {
    title: "Terms of Service — invogen.in",
    url: "https://invogen.in/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Terms of Service" }]}>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f172a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-[#ff7700]/15 text-[#ff7700] border border-[#ff7700]/30 rounded-full px-4 py-1.5 mb-6">
            Legal Document
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            The rules, rights, and obligations governing your use of
            invogen.in's professional invoice generation platform.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#ff7700]" />
            Last updated: July 15, 2026
          </div>
        </div>
      </section>

      {/* ── Document Body ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-12 items-start">
            {/* Sticky Sidebar (Client) */}
            <TermsSidebar />

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Acceptance & Notice */}
              <div id="intro" className="mb-12 scroll-mt-28">
                <h1 className="text-2xl font-black text-[#0f172a] mb-6">
                  INVOGEN — TERMS AND CONDITIONS
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  These Terms and Conditions (“Terms”) govern access to and use of the Invogen website, marketing pages, application, and related services (together, the “Service”).
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The Service is operated by us.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  By creating an account, accepting these Terms during registration, purchasing a plan, or using the Service, you agree to these Terms on behalf of yourself and, if applicable, the business or organisation Customer represent.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6 font-semibold">
                  If you do not agree, do not use the Service.
                </p>

                <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl mb-8">
                  <h3 className="text-amber-900 font-extrabold text-sm uppercase tracking-wider mb-2">
                    ⚠️ IMPORTANT NOTICE
                  </h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    These Terms describe Invogen as a software platform for creating invoices only. Invogen is not a law firm, chartered accountant, tax advisor, or payment settlement service for your customers. Marketing phrases such as “GST-ready”, “GST templates”, or similar describe product features that help you prepare invoices — they are not a guarantee of tax, legal, or regulatory compliance.
                  </p>
                </div>
              </div>

              {/* 1. WHO WE ARE AND HOW TO CONTACT US */}
              <Section id="contact-us" number={1} title="WHO WE ARE AND HOW TO CONTACT US">
                <p className="text-slate-600 leading-relaxed mb-2">
                  <strong>Product name:</strong> Invogen
                </p>
                <p className="text-slate-600 leading-relaxed mb-2">
                  <strong>Email:</strong> <a href="mailto:contact@invogen.in" className="text-[#ff7700] hover:underline font-medium">contact@invogen.in</a>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Address:</strong> OFFICE NO.1 Marol Neartime Square, Andheri East, Mumbai, Maharashtra 400059.
                </p>
              </Section>

              {/* 2. DESCRIPTION OF THE SERVICE */}
              <Section id="service" number={2} title="DESCRIPTION OF THE SERVICE">
                <p className="text-slate-600 leading-relaxed mb-3">
                  2.1 Invogen provides SAAS platform that allows eligible users to:
                </p>
                <CheckList
                  items={[
                    "create and manage a invoices;",
                    "design and customise invoice and related templates (including tax invoices only);",
                    "manage customers, products, and related business records;",
                    "generate, export, share invoices;",
                    "invite employees or team members with role-based permissions;",
                    "subscribe to paid plans that unlock or continue access to platform features.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4 mb-3">
                  2.2 Invogen may also issue platform subscription invoices to Customers for fees owed to Invogen. Those platform invoices are separate from invoices you create for your own customers.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  2.3 Features, plan limits, templates are available to you depend on your active subscription, plan configuration, and account permissions. We may update, add, or remove features reasonably needed to operate or improve the Service, provided the core invoicing purpose remains available for active paid plans during the purchased term.
                </p>
              </Section>

              {/* 3. ELIGIBILITY AND ACCOUNTS */}
              <Section id="eligibility" number={3} title="ELIGIBILITY AND ACCOUNTS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  3.1 You must be legally capable of entering a binding contract under applicable Indian law. If you register for a business, you represent that you are authorised to bind that business.
                </p>
                <p className="text-slate-600 leading-relaxed mb-3">
                  3.2 Account types include:
                </p>
                <CheckList
                  items={[
                    "Admin — workspace owner or administrator for a company account;",
                    "Employee — user who joins a company workspace (for example via a join code) with limited permissions;",
                    "Platform operators (Super Admin) — Invogen personnel only; not a Customer product.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4 mb-4">
                  3.3 You must provide accurate registration and profile information (including business name, address, tax identifiers such as GSTIN/PAN where you enter them, and contact details) and keep them updated.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  3.4 You are responsible for safeguarding login credentials and for all activity under your account and workspace, including actions by employees you invite. Notify us promptly of unauthorised access.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  3.5 We may require email verification or allow sign-in through Google OAuth where enabled. Use of Google sign-in is also subject to Google’s terms and privacy policy.
                </p>
              </Section>

              {/* 4. WORKSPACES, CONTENT, AND YOUR CUSTOMERS */}
              <Section id="content" number={4} title="WORKSPACES, CONTENT, AND YOUR CUSTOMERS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  4.1 Each Admin registration typically creates one company workspace. Data in a workspace (customers, products, templates, invoices, uploads, settings) is associated with that company only.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  4.2 You retain ownership of content you upload or create in your workspace (“Customer Content”), including logos, signatures, customer data, and invoice content — subject to the licence in Clause 4.3.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  4.3 You grant Invogen a limited, worldwide, non-exclusive licence to host, process, transmit, display, and create derivative technical formats of Customer Content solely to provide, secure, support, and improve the Service (including PDF generation, backups, and troubleshooting).
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  4.4 You are solely responsible for:
                </p>
                <CheckList
                  items={[
                    "the accuracy, legality, and completeness of Customer Content;",
                    "invoices you issue to your customers or third parties;",
                    "calculating, collecting, remitting, and reporting taxes (including GST) related to your own sales;",
                    "complying with tax, accounting, e-invoicing, consumer, and other laws applicable to your business;",
                    "obtaining any consents required to upload personal data of your customers, employees, or contacts.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4 mb-4">
                  4.5 Invogen does not act as your agent, does not become a party to contracts between you and your customers, and does not collect or settle payments your customers owe you unless a separate written product feature expressly says otherwise. Sharing options (e-bill , link, or WhatsApp) are convenience tools only.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  4.6 “Made with Invogen” or similar attribution may appear on documents or templates where your plan or settings require it. You must not remove required platform branding where it is a condition of your plan.
                </p>
              </Section>

              {/* 5. PLANS, FEES, TAXES, AND PAYMENTS */}
              <Section id="plans" number={5} title="PLANS, FEES, TAXES, AND PAYMENTS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  5.1 Access to paid features requires an active subscription plan as offered on our pricing pages or assigned by Invogen. Plan names, prices, billing cycles (monthly, yearly ), features, seats, and limits are as displayed at checkout or in your account at the time of purchase, and may change for future renewals with notice where required.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  5.2 Fees are generally quoted and charged in Indian Rupees (INR) unless we state otherwise. Applicable taxes (including GST on Invogen’s subscription fees) may be charged as configured on the platform and shown at checkout or on platform invoices.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  5.3 Payments for subscriptions and plans are processed through Razorpay or another payment partner we enable. Card/UPI/net-banking processing is handled by that partner under their terms. We do not store full payment card numbers.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  5.4 Promo codes or discounts apply only as stated for that code and may be withdrawn for abuse or error.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  5.5 Unless a specific offer explicitly states a free trial with a stated duration, registration alone does not create a free trial. Any trial access exists only if Invogen expressly grants it for your account.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  5.6 Failure to pay may result in suspension or limited access after the current paid period ends, as shown in your subscription status.
                </p>
              </Section>

              {/* 6. CANCELLATION, PLAN CHANGES, AND REFUNDS */}
              <Section id="cancellation" number={6} title="CANCELLATION, PLAN CHANGES, AND REFUNDS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  6.1 You may request cancellation or plan changes through your account tools where available, or by contacting us at <a href="mailto:contact@invogen.in" className="text-[#ff7700] hover:underline">contact@invogen.in</a>. Invogen may also cancel or change a subscription when you upgrade/switch plans, when payment fails, or for breach of these Terms.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  6.2 Upon cancellation, access generally continues until the end of the then-current paid period already paid for, unless we state otherwise or terminate earlier for misuse. Any plans, if purchased, are licences to use the Service subject to these Terms, not a sale of the software, and remain subject to suspension for breach or non-payment of any applicable maintenance or platform charges stated at purchase.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  6.3 Fees are non-refundable except where:
                </p>
                <CheckList
                  items={[
                    "Indian law requires a refund; or",
                    "Invogen expressly agrees in writing; or",
                    "a published offer states a refund window.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4 mb-4">
                  Duplicate or failed charges should be reported promptly so we can investigate with the payment partner.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  6.4 If you cancel, we are not obligated to export your data beyond tools already available in the Service, except as required by law or our Privacy Policy.
                </p>
              </Section>

              {/* 7. ACCEPTABLE USE */}
              <Section id="acceptable-use" number={7} title="ACCEPTABLE USE">
                <p className="text-slate-600 leading-relaxed mb-4">
                  You must not:
                </p>
                <CheckList
                  items={[
                    "use the Service for unlawful, fraudulent, or harmful purposes;",
                    "upload malware, infringe IP rights, or misuse another person’s data;",
                    "attempt to break security, probe systems without authorisation, or reverse engineer the Service except as permitted by law;",
                    "resell, sublicense, or white-label the Service without our written consent;",
                    "scrape the Service in a way that overloads or harms operations;",
                    "misrepresent that Invogen has verified, certified, or audited your tax compliance;",
                    "use Invogen branding in a misleading way.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4">
                  We may suspend or terminate accounts that violate this Clause.
                </p>
              </Section>

              {/* 8. SUPPORT, AVAILABILITY, AND MAINTENANCE */}
              <Section id="support" number={8} title="SUPPORT, AVAILABILITY, AND MAINTENANCE">
                <p className="text-slate-600 leading-relaxed mb-4">
                  8.1 Support is provided according to your plan description and our operational capacity. Mentions of “priority support” mean preferential handling relative to lower tiers where offered — not a guaranteed response time or 24×7 human availability unless we publish a specific SLA.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  8.2 We aim for high availability but do not guarantee uninterrupted or error-free operation. We may perform maintenance, and may enable maintenance mode that temporarily limits Customer portals while leaving certain public or legal pages available.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  8.3 Third-party services (Razorpay, Google, email/SMTP providers, hosting, browsers) may affect the Service. Their outages are outside our reasonable control.
                </p>
              </Section>

              {/* 9. INTELLECTUAL PROPERTY */}
              <Section id="intellectual-property" number={9} title="INTELLECTUAL PROPERTY">
                <p className="text-slate-600 leading-relaxed mb-4">
                  9.1 Invogen and its licensors own the Service, software, design system, standard templates we supply, trademarks, and branding (excluding Customer Content).
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  9.2 Subject to these Terms and an active eligible subscription, we grant you a limited, non-exclusive, non-transferable, revocable right to use the Service for your internal business purposes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  9.3 Feedback you send us may be used freely to improve the Service without obligation to you.
                </p>
              </Section>

              {/* 10. PRIVACY AND DATA */}
              <Section id="privacy" number={10} title="PRIVACY AND DATA">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our collection and use of personal data is described in the Invogen Privacy Policy available at /legal/privacy (or the privacy link on our marketing site). By using the Service, you also acknowledge that processing necessary to run the Service (accounts, billing, logs, support, security) will occur as described there.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  You are the controller of personal data you store about your customers and employees in your workspace. Invogen processes such data to provide the Service to you.
                </p>
              </Section>

              {/* 11. DISCLAIMERS (PLEASE READ) */}
              <Section id="disclaimers" number={11} title="DISCLAIMERS (PLEASE READ)">
                <p className="text-slate-600 leading-relaxed mb-4">
                  11.1 THE SERVICE IS PROVIDED ON AN “AS AVAILABLE” AND “AS IS” BASIS TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                </p>
                <p className="text-slate-600 leading-relaxed mb-3">
                  11.2 WITHOUT LIMITING CLAUSE 11.1, INVOGEN DOES NOT WARRANT THAT:
                </p>
                <CheckList
                  items={[
                    "documents generated will be accepted by any tax authority, customer, bank, or auditor;",
                    "GST, HSN, tax rates, or calculations are complete or correct for your situation;",
                    "the Service will meet every legal requirement applicable to your industry or location;",
                    "templates labelled for freelancers, agencies, hospitals, export, or other categories constitute legal advice.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4">
                  11.3 You should obtain independent professional advice for tax, accounting, and legal compliance.
                </p>
              </Section>

              {/* 12. LIMITATION OF LIABILITY */}
              <Section id="liability" number={12} title="LIMITATION OF LIABILITY">
                <p className="text-slate-600 leading-relaxed mb-4">
                  12.1 To the maximum extent permitted by applicable law, Invogen shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages; loss of profits, revenue, goodwill, data, or business opportunities; or cost of substitute services — whether arising in contract, tort, or otherwise.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  12.2 To the maximum extent permitted by law, Invogen’s total aggregate liability arising out of or relating to the Service or these Terms shall not exceed the fees you paid to Invogen for the Service in the three (3) months immediately before the event giving rise to the claim (or, if you paid only a lifetime fee, one-twelfth of that lifetime fee).
                </p>
                <p className="text-slate-600 leading-relaxed">
                  12.3 Nothing in these Terms excludes liability that cannot be excluded under Indian law (including for fraud or wilful misconduct where non-waivable).
                </p>
              </Section>

              {/* 13. INDEMNITY */}
              <Section id="indemnity" number={13} title="INDEMNITY">
                <p className="text-slate-600 leading-relaxed">
                  You will indemnify and hold harmless Invogen and its directors, officers, and employees from claims, losses, and expenses (including reasonable legal fees) arising from: (a) your Customer Content; (b) your invoices or dealings with your customers; (c) your breach of these Terms or law; or (d) disputes between Admin and Employee users in your workspace.
                </p>
              </Section>

              {/* 14. SUSPENSION AND TERMINATION */}
              <Section id="suspension" number={14} title="SUSPENSION AND TERMINATION">
                <p className="text-slate-600 leading-relaxed mb-4">
                  14.1 We may suspend or terminate access for non-payment, security risk, legal requirement, or material breach.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  14.2 You may stop using the Service at any time. Provisions that by nature should survive (including ownership, disclaimers, liability limits, indemnity, and governing law) survive termination.
                </p>
              </Section>

              {/* 15. CHANGES TO THE SERVICE OR TERMS */}
              <Section id="changes" number={15} title="CHANGES TO THE SERVICE OR TERMS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  15.1 We may update these Terms. The version and effective date will be shown at the top. Material changes will be posted on the Service or marketing site, and where required we may ask for renewed acceptance at login or registration.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  15.2 Continued use after the effective date of updated Terms constitutes acceptance, except where mandatory law requires a different process.
                </p>
              </Section>

              {/* 16. MARKETING WEBSITES AND COMMUNICATIONS */}
              <Section id="marketing" number={16} title="MARKETING WEBSITES AND COMMUNICATIONS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  16.1 Public marketing pages (including landing and pricing pages) describe the Service generally. Plan-specific entitlements control if there is any conflict between marketing summaries and your checkout or account plan details.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  16.2 You may opt out of non-essential marketing emails where we provide an unsubscribe option. Transactional messages (security, billing, password reset, subscription notices) may still be sent.
                </p>
              </Section>

              {/* 17. GOVERNING LAW AND DISPUTES */}
              <Section id="governing-law" number={17} title="GOVERNING LAW AND DISPUTES">
                <p className="text-slate-600 leading-relaxed">
                  These Terms are governed by the laws of India. Subject to mandatory consumer protections if applicable, courts at Mumbai, Maharashtra shall have exclusive jurisdiction over disputes arising out of these Terms or the Service.
                </p>
              </Section>

              {/* 18. GENERAL */}
              <Section id="general" number={18} title="GENERAL">
                <p className="text-slate-600 leading-relaxed mb-4">
                  18.1 These Terms, together with the Privacy Policy and any plan-specific checkout terms, are the entire agreement regarding the Service and supersede prior informal statements on the same subject.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  18.2 If any provision is unenforceable, the remainder stays in effect.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  18.3 You may not assign these Terms without our consent. We may assign them in connection with a merger, acquisition, or sale of assets.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  18.4 No waiver is effective unless in writing.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  18.5 The English version of these Terms controls if translations differ.
                </p>
              </Section>

              {/* 19. CONTACT FOR LEGAL AND SUPPORT QUERIES */}
              <Section id="queries" number={19} title="CONTACT FOR LEGAL AND SUPPORT QUERIES">
                <p className="text-slate-600 leading-relaxed mb-4">
                  For legal queries, questions about these Terms, or to report violations, please contact us:
                </p>
                <ContactCard
                  email="contact@invogen.in"
                  address="OFFICE NO.1 Marol Neartime Square, Andheri East, Mumbai, Maharashtra 400059."
                />
                <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                  For billing questions related to your Invogen subscription, use the support or billing contacts shown on your platform invoice or account page.
                </p>
              </Section>
            </article>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

/* ── Shared sub-components ── */

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="mb-12 scroll-mt-28">
      <h2 className="flex items-center gap-3 text-xl font-bold text-[#0f172a] mb-4">
        <span className="w-1 h-6 rounded-full bg-[#ff7700] shrink-0" />
        {number}. {title}
      </h2>
      {children}
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="bg-[#0f172a] px-4 py-2.5">
        <p className="text-white text-sm font-semibold">{title}</p>
      </div>
      <div className="p-4 bg-slate-50">{children}</div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed"
        >
          <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#ff7700]/10 flex items-center justify-center">
            <svg
              className="w-2.5 h-2.5 text-[#ff7700]"
              fill="none"
              viewBox="0 0 10 8"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 4l2.5 2.5L9 1"
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContactCard({
  email,
  address,
}: {
  email: string;
  address: string;
}) {
  return (
    <div className="p-5 bg-gradient-to-br from-[#0f172a] to-slate-800 rounded-2xl text-white space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-[#ff7700]">✉</span>
        <a
          href={`mailto:${email}`}
          className="text-[#ff7700] hover:underline font-medium"
        >
          {email}
        </a>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-[#ff7700] mt-0.5">📍</span>
        <p className="text-slate-300 text-sm leading-relaxed">{address}</p>
      </div>
    </div>
  );
}
