"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown } from "lucide-react";

const starterFeatures = [
  "Up to 100 Invoices / Month",
  "Professional Templates",
  "GST Support (CGST, SGST, IGST)",
  "PDF Export",
  "UPI QR Code",
  "Email Sharing",
  "Basic Analytics",
  "Standard Support",
];

const businessFeatures = [
  "Unlimited Invoices",
  "All Premium Templates",
  "Team Members (up to 5)",
  "WhatsApp Sharing",
  "Recurring Billing",
  "Invoice Tracking",
  "Advanced Analytics",
  "Priority Support",
  "Custom Branding",
  "API Access",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-white border-t border-gray-100"
      aria-label="Pricing"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#ff7700] flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#ff7700]" />
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-3">
            Simple, honest pricing.
          </h2>
          <p className="text-sm text-gray-500">
            Start free, upgrade when you're ready. No hidden charges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* ── Starter Plan ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 flex flex-col hover:border-[#ff7700]/30 transition-colors duration-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#ff7700]" />
              </div>
              <div>
                <div className="text-base font-bold text-[#0f172a]">Starter</div>
                <div className="text-xs text-gray-400">For freelancers &amp; small businesses</div>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-black text-[#0f172a]">Free</span>
              <span className="text-gray-400 text-sm ml-2">forever</span>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {starterFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <Check className="w-3.5 h-3.5 text-[#ff7700] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="pricing-starter-cta"
              className="w-full py-3 text-sm font-semibold text-[#ff7700] border-2 border-[#ff7700] rounded-xl hover:bg-[#ff7700] hover:text-white transition-all duration-200 cursor-pointer"
            >
              Start Free — No Card Needed
            </motion.button>
          </motion.div>

          {/* ── Business Plan ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-[#0f172a] border-2 border-[#0f172a] rounded-2xl p-8 flex flex-col"
          >
            {/* Popular badge */}
            <div className="absolute -top-3.5 left-6">
              <span className="text-[10px] font-bold px-3 py-1.5 bg-[#ff7700] text-white rounded-full">
                MOST POPULAR
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="w-10 h-10 rounded-xl bg-[#ff7700]/10 border border-[#ff7700]/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#ff7700]" />
              </div>
              <div>
                <div className="text-base font-bold text-white">Business</div>
                <div className="text-xs text-gray-400">For growing &amp; large businesses</div>
              </div>
            </div>

            <div className="mb-2">
              <span className="text-4xl font-black text-white">₹999</span>
              <span className="text-gray-400 text-sm ml-2">/ month</span>
            </div>
            <div className="mb-6 flex items-center gap-2">
              <span className="text-xs text-gray-500 line-through">₹1,999/mo</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#ff7700]/15 text-[#ff7700] rounded-full">
                50% OFF
              </span>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {businessFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <Check className="w-3.5 h-3.5 text-[#ff7700] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="pricing-business-cta"
              className="w-full py-3 text-sm font-semibold text-white bg-[#ff7700] rounded-xl hover:bg-[#e56a00] transition-colors shadow-lg shadow-orange-900/20 cursor-pointer"
            >
              Start Business Plan →
            </motion.button>

            <p className="text-center text-xs text-gray-500 mt-3">
              7-day free trial · Cancel anytime
            </p>
          </motion.div>
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-gray-400 mt-8"
        >
          All plans include free SSL, data backups, and GST compliance.{" "}
          <a href="#faq" className="text-[#ff7700] font-medium hover:underline">
            See FAQ
          </a>
        </motion.p>
      </div>
    </section>
  );
}
