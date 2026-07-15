"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Receipt,
  Calculator,
  CreditCard,
  User,
  Code,
  Search,
  ArrowRight,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    count: "12 articles",
    description: "Create your account, set up your profile, and send your first invoice.",
    color: "from-orange-100 to-amber-50",
    iconBg: "bg-[#ff7700]",
  },
  {
    icon: Receipt,
    title: "Billing & Invoices",
    count: "18 articles",
    description: "Creating, editing, sending, and managing all your invoices.",
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: Calculator,
    title: "GST & Taxes",
    count: "10 articles",
    description: "GST calculations, tax slabs, compliance, and filing guides.",
    color: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-500",
  },
  {
    icon: CreditCard,
    title: "Payments & UPI",
    count: "8 articles",
    description: "Setting up UPI QR codes, tracking payments, and reconciliation.",
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-500",
  },
  {
    icon: User,
    title: "Account & Settings",
    count: "6 articles",
    description: "Profile, billing, team management, and security settings.",
    color: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-500",
  },
  {
    icon: Code,
    title: "API & Integrations",
    count: "5 articles",
    description: "API documentation, webhooks, and third-party integrations.",
    color: "from-slate-100 to-slate-50",
    iconBg: "bg-slate-700",
  },
];

const popularArticles = [
  "How to create your first GST invoice",
  "Setting up UPI QR code for payments",
  "How to add your company logo and signature",
  "Understanding CGST, SGST and IGST",
  "How to send invoices via WhatsApp",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HelpContent() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Hero + Search */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#ff7700] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <MessageCircle className="w-3.5 h-3.5" />
          Support
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4 font-heading">
          How can we{" "}
          <span className="gradient-text">help you?</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
          Search our knowledge base or browse categories below.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            id="help-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, guides, and FAQs…"
            className="w-full pl-13 pr-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-100/80 text-[#0f172a] placeholder:text-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-[#ff7700]/40 focus:border-[#ff7700] transition-all duration-200"
          />
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 text-sm text-slate-500"
            >
              <p className="font-medium text-[#0f172a] mb-2">Suggested results for &quot;{searchQuery}&quot;</p>
              {popularArticles
                .filter((a) => a.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((a) => (
                  <a
                    key={a}
                    href="#"
                    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-orange-50 text-slate-600 hover:text-[#ff7700] transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    {a}
                  </a>
                ))}
              {popularArticles.filter((a) => a.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <p className="text-slate-400 py-2">No articles match. Try a different term.</p>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
      >
        {helpCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.a
              key={cat.title}
              variants={cardVariants}
              href="#"
              id={`help-cat-${cat.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="group rounded-2xl border border-slate-100 bg-white p-6 flex items-start gap-5 hover:shadow-xl hover:shadow-orange-100/40 hover:border-orange-100 transition-all duration-300 card-hover"
            >
              <div
                className={`${cat.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h2 className="text-base font-bold text-[#0f172a] group-hover:text-[#ff7700] transition-colors duration-200 font-heading">
                    {cat.title}
                  </h2>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#ff7700] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                </div>
                <p className="text-xs text-[#ff7700] font-semibold mb-1.5">{cat.count}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{cat.description}</p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Popular Articles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-extrabold text-[#0f172a] mb-7 font-heading">
          Popular Articles
        </h2>
        <div className="rounded-2xl border border-slate-100 bg-white divide-y divide-slate-50 overflow-hidden shadow-sm">
          {popularArticles.map((article, i) => (
            <motion.a
              key={article}
              href="#"
              id={`help-article-${i + 1}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-orange-50/50 group transition-colors duration-150"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-slate-300 w-5 text-right tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#0f172a] font-medium group-hover:text-[#ff7700] transition-colors duration-150">
                  {article}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#ff7700] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-gradient-to-br from-[#0f172a] to-slate-800 p-12 text-center text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff7700]/10 to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#ff7700]/10 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="w-14 h-14 bg-[#ff7700] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-500/30">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold mb-2 font-heading">
            Still need help?
          </h2>
          <p className="text-slate-300 mb-7">
            Contact our support team — we typically respond within 2 hours.
          </p>
          <a
            href="/contact"
            id="help-contact-cta"
            className="inline-flex items-center gap-2 bg-[#ff7700] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
          >
            Contact Support
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
