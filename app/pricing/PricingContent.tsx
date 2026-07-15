"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap, HelpCircle, ChevronDown, ArrowRight } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────── */

type BillingCycle = "monthly" | "annual";

interface Plan {
  id: string;
  name: string;
  monthlyPrice: string | null;
  annualPrice: string | null;
  badge: string | null;
  description: string;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: "₹0",
    annualPrice: "₹0",
    badge: null,
    description: "Perfect for freelancers just getting started.",
    cta: "Get Started Free",
    ctaHref: "/signup",
    highlighted: false,
    features: [
      "100 invoices / month",
      "Basic templates",
      "WhatsApp & email sharing",
      "UPI QR payment embed",
      "PDF export",
      "Email support",
    ],
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: "₹499",
    annualPrice: "₹4,999",
    badge: "Most Popular",
    description: "For growing businesses that need power and flexibility.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/signup?plan=business",
    highlighted: true,
    features: [
      "Unlimited invoices",
      "All 10+ premium templates",
      "Custom logo & branding",
      "Invoice tracking (sent / opened / paid)",
      "Recurring billing & schedules",
      "Priority support",
      "API access",
      "Automatic payment reminders",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    badge: null,
    description: "For large teams that need custom integrations and SLAs.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlighted: false,
    features: [
      "Everything in Business",
      "Custom integrations & webhooks",
      "Dedicated account manager",
      "99.9% SLA guarantee",
      "On-premise deployment option",
      "Custom contract & invoicing",
      "Compliance & audit exports",
    ],
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — the Business plan comes with a 7-day free trial. No credit card required. You'll be notified before any charge.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. There's no lock-in, no cancellation fee. Cancel from your account settings and your plan stays active until the period ends.",
  },
  {
    q: "Are the invoices GST-compliant?",
    a: "Yes. invogen.in invoices are fully compliant with Indian GST laws, including CGST, SGST, and IGST breakdowns with auto-applied tax slabs.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, credit/debit cards, and net banking via Razorpay. All payments are secured by 256-bit SSL.",
  },
  {
    q: "Can I export my invoices?",
    a: "Yes. Every invoice can be exported as a professional PDF. Business and Enterprise plans also support Excel exports for bulk records.",
  },
  {
    q: "Is there a mobile app?",
    a: "invogen.in is web-first and fully responsive — it works beautifully on mobile browsers. A native app is on our roadmap.",
  },
];

/* ─── FAQ Accordion Item ────────────────────────────────── */
function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-orange-50/40 transition-colors duration-200 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0f172a] text-sm sm:text-base leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 group-hover:text-[#ff7700] ${
            open ? "rotate-180 text-[#ff7700]" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
          {faq.a}
        </p>
      </motion.div>
    </div>
  );
}

/* ─── Plan Card ─────────────────────────────────────────── */
function PlanCard({
  plan,
  billing,
}: {
  plan: Plan;
  billing: BillingCycle;
}) {
  const price =
    billing === "annual" ? plan.annualPrice : plan.monthlyPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-3xl p-8 flex flex-col gap-6 border transition-shadow duration-300 ${
        plan.highlighted
          ? "bg-[#0f172a] border-[#ff7700]/30 shadow-2xl shadow-orange-900/20"
          : "bg-white border-slate-100 shadow-sm hover:shadow-md"
      }`}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-[#ff7700] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            <Zap className="w-3 h-3" />
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div>
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            plan.highlighted ? "text-orange-400" : "text-[#ff7700]"
          }`}
        >
          {plan.name}
        </p>
        <div className="flex items-end gap-1 mb-2">
          {price ? (
            <>
              <span
                className={`text-4xl font-black ${
                  plan.highlighted ? "text-white" : "text-[#0f172a]"
                }`}
              >
                {price}
              </span>
              <span
                className={`text-sm font-medium mb-1 ${
                  plan.highlighted ? "text-slate-400" : "text-slate-500"
                }`}
              >
                /{billing === "annual" ? "yr" : "mo"}
              </span>
            </>
          ) : (
            <span
              className={`text-4xl font-black ${
                plan.highlighted ? "text-white" : "text-[#0f172a]"
              }`}
            >
              Custom
            </span>
          )}
        </div>
        {billing === "annual" && plan.id === "business" && (
          <p className="text-xs text-green-400 font-semibold">
            Save ₹989/year vs monthly
          </p>
        )}
        <p
          className={`text-sm mt-2 leading-relaxed ${
            plan.highlighted ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {plan.description}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={plan.ctaHref}
        className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 ${
          plan.highlighted
            ? "bg-[#ff7700] text-white hover:bg-[#cc5f00] shadow-lg shadow-orange-900/30"
            : "bg-slate-50 text-[#0f172a] border border-slate-200 hover:bg-orange-50 hover:text-[#ff7700] hover:border-[#ff7700]"
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                plan.highlighted
                  ? "bg-[#ff7700]/20 text-[#ff7700]"
                  : "bg-orange-50 text-[#ff7700]"
              }`}
            >
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span
              className={`text-sm leading-snug ${
                plan.highlighted ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ─── Main client component ──────────────────────────────── */
export default function PricingContent() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ff7700] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-orange-100">
            <Zap className="w-3.5 h-3.5" />
            Simple, transparent pricing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] leading-tight mb-5">
            Pricing that grows{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ff7700 0%, #ff9a3c 60%, #ffb347 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with you
            </span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Start free. Upgrade only when you need to. No hidden fees, no
            per-invoice charges.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-slate-100 rounded-xl p-1 gap-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-white text-[#0f172a] shadow-sm"
                  : "text-slate-500 hover:text-[#0f172a]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                billing === "annual"
                  ? "bg-white text-[#0f172a] shadow-sm"
                  : "text-slate-500 hover:text-[#0f172a]"
              }`}
            >
              Annual
              <span className="text-[10px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          All prices inclusive of GST. Billed in INR. Cancel anytime.
        </p>
      </section>

      {/* ── FAQ Section ───────────────────────────────────── */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ff7700] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-orange-100">
            <HelpCircle className="w-3.5 h-3.5" />
            Common questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a]">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl py-16 px-8 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #ff7700 0%, #ff9a3c 100%)",
          }}
        >
          <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 relative z-10">
            Start billing smarter today
          </h2>
          <p className="text-orange-100 font-medium mb-8 max-w-xl mx-auto relative z-10">
            Join 10,000+ Indian businesses already using invogen.in. Your first
            100 invoices are always free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-[#ff7700] font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Free →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
