import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import PrivacySidebar from "./PrivacySidebar";

export const metadata: Metadata = {
  title: "Privacy Policy — invogen.in",
  description:
    "Read invogen.in's privacy policy to understand how we collect, use, and protect your personal data in accordance with Indian data protection laws.",
  openGraph: {
    title: "Privacy Policy — invogen.in",
    url: "https://invogen.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Privacy Policy" }]}>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f172a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-[#ff7700]/15 text-[#ff7700] border border-[#ff7700]/30 rounded-full px-4 py-1.5 mb-6">
            Legal Document
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            How invogen.in collects, uses, and protects your personal data — in
            full compliance with Indian data protection laws.
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
            <PrivacySidebar />

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Acceptance & Notice */}
              <div id="intro" className="mb-12 scroll-mt-28">
                <h1 className="text-2xl font-black text-[#0f172a] mb-6">
                  INVOGEN — PRIVACY POLICY
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This Privacy Policy explains how we collect, use, store, share, and protect information when you visit our marketing websites, create an account, or use the Invogen application and related Services.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  It should be read together with our Terms and Conditions. Capitalised terms used but not defined here have the meaning given in the Terms where applicable.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6 font-semibold">
                  By using the Service, you acknowledge this Privacy Policy. If you do not agree, do not use the Service.
                </p>

                <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl mb-8">
                  <h3 className="text-amber-900 font-extrabold text-sm uppercase tracking-wider mb-2">
                    ⚠️ IMPORTANT NOTICE
                  </h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Invogen is a business invoicing SAAS platform. We process account and billing data to run the Service. Business data you enter about your own customers, products, and invoices is primarily controlled by your organisation. Marketing phrases such as “Encrypted” or “Razorpay Secure” describe security practices and payment-partner safeguards — they are not a promise of absolute security or a certification by a regulator.
                  </p>
                </div>
              </div>

              {/* 1. WHO WE ARE AND HOW TO CONTACT US */}
              <Section id="contact-us" number={1} title="WHO WE ARE AND HOW TO CONTACT US">
                <p className="text-slate-600 leading-relaxed mb-2">
                  <strong>Product name:</strong> Invogen
                </p>
                <p className="text-slate-600 leading-relaxed mb-2">
                  <strong>Privacy / support email:</strong> <a href="mailto:contact@invogen.in" className="text-[#ff7700] hover:underline font-medium">contact@invogen.in</a>
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Registered address:</strong> OFFICE NO.1 Marol Neartime Square, Andheri East, Mumbai, Maharashtra 400059.
                </p>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  For privacy requests, email contact@invogen.in with the subject line “Privacy Request”.
                </p>
              </Section>

              {/* 2. SCOPE — WHO THIS POLICY COVERS */}
              <Section id="scope" number={2} title="SCOPE — WHO THIS POLICY COVERS">
                <p className="text-slate-600 leading-relaxed mb-3">
                  2.1 This Policy covers:
                </p>
                <CheckList
                  items={[
                    "visitors to Invogen marketing and public pages (including landing and pricing pages);",
                    "Admin users who register and manage a company workspace;",
                    "Employee users who join a workspace;",
                    "individuals whose business contact details are stored by a Customer inside Invogen (for example customer names, emails, GSTIN on invoices) — see Clause 4.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4">
                  2.2 Platform operators (Super Admin) are Invogen personnel. Their use of internal tooling is covered by Invogen’s internal policies; this document is the public-facing Customer/user policy.
                </p>
              </Section>

              {/* 3. ROLES: CONTROLLER AND PROCESSOR */}
              <Section id="roles" number={3} title="ROLES: CONTROLLER AND PROCESSOR">
                <p className="text-slate-600 leading-relaxed mb-4">
                  3.1 For account registration data, subscription billing with Invogen, support tickets you send us, and Service usage needed to operate Invogen, we act as a data controller (or similar role under applicable Indian law).
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  3.2 For Customer Content stored in your workspace — including your clients’ personal and business data, invoices, templates, logos, signatures, and uploads — your organisation is typically the data controller. Invogen acts as a service provider / processor and processes that data only to provide the Service to you, as instructed by your use of the product, and as described in this Policy and our Terms.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  3.3 If you are an Admin, you are responsible for ensuring you have a lawful basis and any required notices/consents to upload personal data of your employees, customers, and contacts into Invogen.
                </p>
              </Section>

              {/* 4. INFORMATION WE COLLECT */}
              <Section id="collection" number={4} title="INFORMATION WE COLLECT">
                <p className="text-slate-600 leading-relaxed mb-4">
                  4.1 Information you provide directly:
                </p>
                <div className="space-y-4 mb-6">
                  <InfoCard title="Account and Profile">
                    <CheckList
                      items={[
                        "Name, email address, password (stored in hashed form)",
                        "Phone number (if provided), role (Admin / Employee)",
                        "Portal preference, and authentication-related details",
                      ]}
                    />
                  </InfoCard>
                  <InfoCard title="Company / Workspace Profile">
                    <CheckList
                      items={[
                        "Business name, address, country, GSTIN, PAN",
                        "Bank or payment display details you choose to store for invoices",
                        "Invoice/tax settings, employee join codes, and similar business settings",
                      ]}
                    />
                  </InfoCard>
                  <InfoCard title="Branding and Media">
                    <CheckList
                      items={[
                        "Company logo, signature images, template images",
                        "Other files you upload as part of the Service",
                      ]}
                    />
                  </InfoCard>
                  <InfoCard title="Business Records You Create">
                    <CheckList
                      items={[
                        "Customers, products, discounts",
                        "Invoice and related document content (line items, HSN/SAC, totals, notes, share settings)",
                        "PDF or export artefacts generated by the Service, and recurring invoice configuration",
                      ]}
                    />
                  </InfoCard>
                  <InfoCard title="Support and Communications">
                    <CheckList
                      items={[
                        "Messages, tickets, and emails you send to us",
                        "Agreement records (acceptance of Terms and Privacy with metadata)",
                      ]}
                    />
                  </InfoCard>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">
                  4.2 Information from Google sign-in (if you use it):<br />
                  If Google OAuth is enabled and you choose “Sign in with Google”, we receive identifiers and profile information Google shares for authentication (such as name, email, and Google account ID), subject to your Google account settings and Google’s policies. We use this to create or log you into your Invogen account.
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  4.3 Payment and subscription information:<br />
                  When you purchase or renew a plan, we process plan selection, billing cycle, subscription status, payment status, amounts, taxes applied on platform fees, promo/discount codes, and related platform invoice records. Card, UPI, and net-banking credentials are collected and processed by Razorpay (or another payment partner we enable). We do not store full payment card numbers on Invogen servers. We may store payment references, order/payment IDs, and webhook status updates needed for billing and support.
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  4.4 Information collected automatically:
                </p>
                <CheckList
                  items={[
                    "Technical and security data: IP address, browser/device type, timestamps, authentication tokens, and server logs used for security, debugging, and reliability.",
                    "Cookies and similar technologies: we use cookies such as a refresh-token cookie for session continuity, and browser storage (localStorage for access tokens and sessionStorage for checkout cart state) to keep you signed in.",
                    "Product usage: in-app notifications and activity needed to operate features (for example invoice created, subscription renewals, support updates). We do not currently operate third-party advertising pixels.",
                  ]}
                />

                <p className="text-slate-600 leading-relaxed mt-4">
                  4.5 Information from your use of email and sharing features:<br />
                  If you send invoices or notifications by email through the Service, we process recipient addresses and message metadata required for delivery via our email/SMTP provider. Share methods you select (for example email, public link, or WhatsApp as a recorded method) may store related metadata in your workspace.
                </p>
              </Section>

              {/* 5. HOW WE USE INFORMATION */}
              <Section id="usage" number={5} title="HOW WE USE INFORMATION">
                <p className="text-slate-600 leading-relaxed mb-3">
                  We use information to:
                </p>
                <CheckList
                  items={[
                    "create and manage accounts, workspaces, roles, and permissions;",
                    "provide invoicing, templates, PDF generation, reports, and related product features;",
                    "process subscriptions, platform invoices, renewals, upgrades, cancellations, and payment status;",
                    "send transactional messages (verification, password reset, billing, subscription expiry/renewal, support updates);",
                    "provide customer support and investigate abuse or security incidents;",
                    "maintain security, prevent fraud, enforce Terms, and comply with law;",
                    "operate maintenance mode and Service reliability;",
                    "improve the Service based on aggregated or operational feedback;",
                    "display required platform branding (for example “Made with Invogen”) where your plan or settings require it.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4 font-semibold">
                  We do not sell your personal data.
                </p>
              </Section>

              {/* 6. LEGAL BASES AND LAWFUL USE (INDIA) */}
              <Section id="legal-basis" number={6} title="LEGAL BASES AND LAWFUL USE (INDIA)">
                <p className="text-slate-600 leading-relaxed">
                  We process personal data for legitimate uses connected with providing the Service, fulfilling contracts with you, complying with legal obligations, and securing our systems. Where consent is required (for example certain optional communications or Google sign-in permissions), we rely on that consent, which you may withdraw subject to limits needed to keep your account secure and deliver the Service you requested.
                </p>
              </Section>

              {/* 7. HOW WE SHARE INFORMATION */}
              <Section id="sharing" number={7} title="HOW WE SHARE INFORMATION">
                <p className="text-slate-600 leading-relaxed mb-3">
                  We may share information with:
                </p>
                <CheckList
                  items={[
                    "Razorpay (or other enabled payment partners) — to process payments and subscriptions and handle payment webhooks;",
                    "Google — if you use Google sign-in;",
                    "Email / SMTP infrastructure providers — to send transactional and (where enabled) service emails;",
                    "Hosting, database, and infrastructure providers that store or process data on our behalf (including MongoDB or equivalent hosting used for application data and uploaded media);",
                    "Professional advisors or authorities when required by law, regulation, legal process, or to protect rights, safety, and integrity of the Service;",
                    "A buyer or successor in connection with a merger, acquisition, or sale of assets, subject to continued confidentiality safeguards.",
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4 mb-4">
                  We require service providers to use personal data only to perform services for us and not for their own unrelated marketing, except where you interact with them under their own terms (for example completing a Razorpay checkout).
                </p>
                <p className="text-green-800 font-semibold text-sm bg-green-50 border border-green-200 rounded-xl p-4">
                  🔒 We do not sell personal data to data brokers.
                </p>
              </Section>

              {/* 8. WORKSPACE DATA AND YOUR CUSTOMERS */}
              <Section id="workspace-data" number={8} title="WORKSPACE DATA AND YOUR CUSTOMERS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  8.1 Admins and authorised Employees can access Customer Content within their company workspace according to permissions. Invogen personnel may access workspace data only as needed for support, security, billing disputes, legal compliance, or Service operation, and subject to internal access controls.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  8.2 Public or shared invoice links expose the document content you choose to share. You control what you share.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  8.3 Invogen is not responsible for how your organisation uses exports, PDFs, emails, or shared links after data leaves the Service.
                </p>
              </Section>

              {/* 9. COOKIES AND BROWSER STORAGE */}
              <Section id="cookies" number={9} title="COOKIES AND BROWSER STORAGE">
                <p className="text-slate-600 leading-relaxed mb-4">
                  9.1 Essential cookies / storage are used for authentication, security, and checkout continuity. These are required for the Service to function as designed.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  9.2 You can clear cookies and browser storage in your browser settings, but you may be signed out or lose incomplete checkout state.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  9.3 If we introduce non-essential analytics or marketing cookies in future, we will update this Policy and use an appropriate notice/consent mechanism where required.
                </p>
              </Section>

              {/* 10. SECURITY */}
              <Section id="security" number={10} title="SECURITY">
                <p className="text-slate-600 leading-relaxed mb-4">
                  10.1 We use reasonable technical and organisational measures appropriate to a SaaS product of this type, which may include password hashing, authenticated API access, role-based permissions, HTTPS in production deployments, and restricted administrative access.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  10.2 No method of transmission or storage is 100% secure. You are responsible for safeguarding account credentials, join codes, and devices.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  10.3 Marketing statements such as “Encrypted” refer to industry-standard transport/security practices for the Service and/or payment-partner checkout security — not end-to-end encryption of all workspace data against every threat, and not a guarantee against unauthorised access.
                </p>
              </Section>

              {/* 11. DATA RETENTION */}
              <Section id="retention" number={11} title="DATA RETENTION">
                <p className="text-slate-600 leading-relaxed mb-4">
                  11.1 We retain account, subscription, and billing records for as long as your account is active and thereafter as needed for legitimate business purposes, tax/accounting records, dispute resolution, and legal compliance.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  11.2 Workspace data is retained while your organisation’s account exists and the Service stores it. After cancellation or deletion requests, we may delete or anonymise data within a reasonable period, except where retention is required by law or for security/audit purposes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  11.3 Backups and logs may persist for a limited additional period before rotation.
                </p>
              </Section>

              {/* 12. YOUR RIGHTS AND CHOICES */}
              <Section id="rights" number={12} title="YOUR RIGHTS AND CHOICES">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Depending on applicable law (including India’s Digital Personal Data Protection framework as applicable), you may have rights to:
                </p>
                <CheckList
                  items={[
                    "Access personal data we hold about you as an account holder;",
                    "Correct inaccurate account data;",
                    "Request deletion of account personal data, subject to legal retention needs;",
                    "Withdraw consent where processing is consent-based;",
                    "Raise a grievance using the contact in Clause 1."
                  ]}
                />
                <p className="text-slate-600 leading-relaxed mt-4 mb-4">
                  To exercise rights, email <a href="mailto:hello@invogen.app" className="text-[#ff7700] hover:underline">hello@invogen.app</a>. We may need to verify your identity. If your request relates to data inside a Customer workspace (for example a person listed as a customer on an invoice), we may redirect you to the Admin organisation that controls that workspace.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  You may update many profile and company fields directly in the product settings.
                </p>
              </Section>

              {/* 13. CHILDREN */}
              <Section id="children" number={13} title="CHILDREN">
                <p className="text-slate-600 leading-relaxed">
                  The Service is intended for business use by adults. We do not knowingly collect personal data from children for the purpose of offering the Service to them. If you believe a child has provided personal data improperly, contact us and we will take appropriate steps.
                </p>
              </Section>

              {/* 14. INTERNATIONAL AND CROSS-BORDER PROCESSING */}
              <Section id="international" number={14} title="INTERNATIONAL AND CROSS-BORDER PROCESSING">
                <p className="text-slate-600 leading-relaxed">
                  Invogen is operated with a primary focus on India (including INR billing and GST-oriented features). Your information may be processed on infrastructure located in India or in other countries where our service providers operate. Where cross-border transfer occurs, we take steps consistent with applicable law and our provider contracts.
                </p>
              </Section>

              {/* 15. THIRD-PARTY SITES AND SERVICES */}
              <Section id="third-party" number={15} title="THIRD-PARTY SITES AND SERVICES">
                <p className="text-slate-600 leading-relaxed">
                  The Service may link to third-party sites or open third-party checkout or OAuth screens (Razorpay, Google). Their privacy practices are governed by their own policies. This Privacy Policy does not cover those third parties.
                </p>
              </Section>

              {/* 16. MARKETING COMMUNICATIONS */}
              <Section id="marketing" number={16} title="MARKETING COMMUNICATIONS">
                <p className="text-slate-600 leading-relaxed mb-4">
                  16.1 We may send service/transactional emails that are necessary for the account (security, billing, subscription status). These are not marketing opt-out emails in the ordinary sense.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  16.2 If we send optional product news or marketing emails, you may unsubscribe where an unsubscribe mechanism is provided.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  16.3 Marketing website copy must remain consistent with this Policy: do not claim we “never store any data”, “fully anonymous usage”, or “bank-grade certified encryption” unless those claims are separately true and documented.
                </p>
              </Section>

              {/* 17. CHANGES TO THIS POLICY */}
              <Section id="changes" number={17} title="CHANGES TO THIS POLICY">
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. The version and effective date appear at the top. Material changes will be posted on the Service or marketing site (including /legal/privacy) and, where required, we may request renewed acceptance during registration or login.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Continued use after the effective date constitutes acknowledgement of the updated Policy, except where mandatory law requires otherwise.
                </p>
              </Section>

              {/* 18. GOVERNING LAW */}
              <Section id="governing-law" number={18} title="GOVERNING LAW">
                <p className="text-slate-600 leading-relaxed">
                  This Privacy Policy is governed by the laws of India. For disputes relating to privacy and the Service, the dispute provisions in our Terms and Conditions apply (courts at Mumbai, Maharashtra subject to mandatory protections that cannot be waived).
                </p>
              </Section>

              {/* 19. CONTACT AND GRIEVANCE */}
              <Section id="grievance" number={19} title="CONTACT AND GRIEVANCE">
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have an unresolved privacy concern, contact us:
                </p>
                <ContactCard
                  email="contact@invogen.in"
                  address="OFFICE NO.1 Marol Neartime Square, Andheri East, Mumbai, Maharashtra 400059."
                />
                <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                  We will aim to acknowledge and address grievances within a reasonable time.
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
