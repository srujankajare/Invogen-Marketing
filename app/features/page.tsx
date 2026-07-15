import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/ui/PageLayout";
import {
  Check,
  Zap,
  Shield,
  QrCode,
  Send,
  BarChart3,
  Repeat,
  Palette,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — invogen.in | GST Invoice, UPI Payments & More",
  description:
    "Explore all invogen.in features: GST invoicing, UPI QR payments, WhatsApp sharing, invoice tracking, recurring billing, custom branding, and 10+ templates.",
  keywords: [
    "GST invoice features",
    "UPI payment invoice",
    "WhatsApp invoice sharing",
    "invoice tracking India",
  ],
  openGraph: {
    title: "Features — invogen.in",
    description:
      "Everything you need to bill smarter. GST invoicing, UPI payments, WhatsApp sharing and more.",
    url: "https://invogen.in/features",
  },
};

const features = [
  {
    icon: Zap,
    name: "Instant GST Invoicing",
    description:
      "Generate compliant CGST, SGST, IGST invoices in under 30 seconds with auto-fill.",
  },
  {
    icon: QrCode,
    name: "UPI QR Payments",
    description:
      "Embed dynamic UPI QR codes directly in invoices. Customers scan and pay instantly.",
  },
  {
    icon: Send,
    name: "WhatsApp & Email Sharing",
    description:
      "Share invoices in one click via WhatsApp Web or email — no downloads needed.",
  },
  {
    icon: BarChart3,
    name: "Real-time Tracking",
    description:
      "Know when invoices are sent, opened, viewed, paid, or overdue in real-time.",
  },
  {
    icon: FileText,
    name: "10+ Premium Templates",
    description:
      "Choose from designer-crafted templates built for freelancers, startups, clinics, and more.",
  },
  {
    icon: Repeat,
    name: "Recurring Billing",
    description:
      "Set schedules and auto-generate recurring invoices. Never miss a billing cycle again.",
  },
  {
    icon: Palette,
    name: "Custom Branding",
    description:
      "Add your logo, brand colors, and digital signature to every invoice you send.",
  },
  {
    icon: Shield,
    name: "GST & Tax Compliance",
    description:
      "Fully compliant with Indian GST laws. Auto-applies the correct tax slabs for each transaction.",
  },
];

export default function FeaturesPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Features" }]}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ff7700] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-orange-100">
          <Zap className="w-3.5 h-3.5" />
          Packed with power
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] leading-tight mb-6">
          Every feature you need to{" "}
          <span
            className="gradient-text"
            style={{
              background: "linear-gradient(135deg, #ff7700 0%, #ff9a3c 60%, #ffb347 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            bill smarter.
          </span>
        </h1>

        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Built for Indian businesses. GST-compliant, UPI-ready, and designed to
          save you hours every week.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/signup"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-base shadow-lg"
            style={{
              background: "linear-gradient(90deg, #ff7700 0%, #ff9a3c 50%, #ff7700 100%)",
              backgroundSize: "200% auto",
            }}
          >
            Start Free →
          </Link>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-[#0f172a] font-bold text-base hover:border-[#ff7700] hover:text-[#ff7700] transition-all duration-200"
          >
            See Templates
          </Link>
        </div>
      </section>

      {/* ── Feature Cards Grid ───────────────────────────────── */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff7700] mb-4 group-hover:bg-orange-100 transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0f172a] mb-2 text-base leading-snug">
                  {feature.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Checklist Highlights ─────────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "GSTIN auto-validation",
            "Multi-currency support",
            "PDF & Excel export",
            "Client portal access",
            "Tax summary reports",
            "Bulk invoice generation",
            "Digital signature support",
            "Automatic payment reminders",
            "Secure cloud storage",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#ff7700] flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-[#0f172a]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA Banner ────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl py-16 px-8 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #ff7700 0%, #ff9a3c 100%)",
          }}
        >
          {/* decorative blobs */}
          <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 rounded-full bg-white/10 pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 relative z-10">
            Ready to invoice smarter?
          </h2>
          <p className="text-orange-100 font-medium mb-8 max-w-xl mx-auto relative z-10">
            Join thousands of Indian businesses already billing faster with
            invogen.in
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-[#ff7700] font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Free →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
