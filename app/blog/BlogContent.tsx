"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    title: "How to Create a GST Invoice in Under 60 Seconds",
    category: "GST & Taxes",
    date: "June 15, 2026",
    readTime: "4 min read",
    excerpt:
      "Learn the exact fields required for a GST-compliant invoice and how invogen.in automates every calculation for you.",
  },
  {
    title: "UPI QR Codes on Invoices: Get Paid 3x Faster",
    category: "Payments",
    date: "June 10, 2026",
    readTime: "5 min read",
    excerpt:
      "Adding a UPI QR code to your invoice can reduce payment time from days to minutes. Here's how.",
  },
  {
    title: "Invoice Tracking: Stop Chasing Clients for Payments",
    category: "Tips & Tricks",
    date: "June 5, 2026",
    readTime: "6 min read",
    excerpt:
      "With real-time invoice tracking, you'll know exactly when your client opened your invoice — no more follow-up guesswork.",
  },
  {
    title: "Best Invoice Templates for Freelancers in India 2026",
    category: "Templates",
    date: "May 28, 2026",
    readTime: "7 min read",
    excerpt:
      "We've curated the top invoice template styles that make freelancers look more professional and get paid faster.",
  },
  {
    title: "WhatsApp Business Invoicing: The Complete Guide",
    category: "Tips & Tricks",
    date: "May 20, 2026",
    readTime: "5 min read",
    excerpt:
      "Learn how to send professional invoices directly via WhatsApp and follow up with payment reminders automatically.",
  },
  {
    title: "GST Registration for Freelancers: When Do You Need It?",
    category: "GST & Taxes",
    date: "May 15, 2026",
    readTime: "8 min read",
    excerpt:
      "Understand the GST threshold, registration process, and how to stay compliant as a self-employed professional in India.",
  },
];

const categories = ["All", "GST & Taxes", "Payments", "Tips & Tricks", "Templates"];

const categoryGradients: Record<string, string> = {
  "GST & Taxes": "from-orange-200 to-amber-100",
  Payments: "from-blue-100 to-indigo-50",
  "Tips & Tricks": "from-emerald-100 to-teal-50",
  Templates: "from-purple-100 to-pink-50",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts[0];
  const rest = posts.slice(1);

  const filteredRest =
    activeCategory === "All"
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  const showFeatured = activeCategory === "All" || featured.category === activeCategory;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#ff7700] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <Tag className="w-3.5 h-3.5" />
          invogen.in Blog
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4 font-heading">
          Insights for India&apos;s{" "}
          <span className="gradient-text">businesses</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Tips, guides, and deep-dives for Indian freelancers and business owners
          on invoicing, GST compliance, and getting paid faster.
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-14"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            id={`blog-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-[#ff7700] text-white border-[#ff7700] shadow-md shadow-orange-200"
                : "bg-white text-slate-600 border-slate-200 hover:border-[#ff7700] hover:text-[#ff7700]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Featured Article */}
      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.article
            key="featured"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="group rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 mb-10 overflow-hidden card-hover"
          >
            {/* Gradient image placeholder */}
            <div
              className={`h-52 bg-gradient-to-br ${
                categoryGradients[featured.category] ?? "from-orange-100 to-orange-50"
              } flex items-center justify-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7700]/10 to-transparent" />
              <span className="text-6xl opacity-25">📄</span>
              <div className="absolute top-4 left-6">
                <span className="bg-[#ff7700] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <span className="inline-block bg-orange-50 text-[#ff7700] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 border border-orange-100">
                {featured.category}
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a] mb-3 leading-tight group-hover:text-[#ff7700] transition-colors duration-200 font-heading">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-3xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-5 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#ff7700] font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>

      {/* Blog Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filteredRest.length === 0 && (
            <motion.p
              variants={cardVariants}
              className="col-span-full text-center text-slate-400 py-16 text-lg"
            >
              No articles in this category yet. Check back soon!
            </motion.p>
          )}
          {filteredRest.map((post) => (
            <motion.article
              key={post.title}
              variants={cardVariants}
              className="group rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-orange-100/40 transition-all duration-300 overflow-hidden flex flex-col card-hover"
            >
              {/* Card top gradient */}
              <div
                className={`h-28 bg-gradient-to-br ${
                  categoryGradients[post.category] ?? "from-slate-100 to-slate-50"
                } flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <span className="text-3xl opacity-20">📋</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block bg-orange-50 text-[#ff7700] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 border border-orange-100 self-start">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2 leading-snug group-hover:text-[#ff7700] transition-colors duration-200 font-heading flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400 mt-auto">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#ff7700] font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 text-sm"
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center rounded-3xl bg-gradient-to-br from-[#0f172a] to-slate-800 p-12 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff7700]/10 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-3 font-heading">
            Ready to create GST-perfect invoices?
          </h2>
          <p className="text-slate-300 mb-7 text-lg">
            Join 50,000+ Indian businesses using invogen.in
          </p>
          <a
            href="/"
            id="blog-cta-start"
            className="inline-flex items-center gap-2 bg-[#ff7700] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 btn-breathe-glow"
          >
            Start for free — no credit card
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
