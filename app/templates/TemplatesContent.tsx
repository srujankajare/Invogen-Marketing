"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Sparkles, ArrowRight } from "lucide-react";

const CATEGORIES = [
  "All",
  "Freelancer",
  "Startup",
  "Clinic",
  "Retail",
  "Creative Agency",
  "Law Firm",
  "E-Commerce",
  "Enterprise",
] as const;

type Category = (typeof CATEGORIES)[number];

interface Template {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  accent: string;       // gradient / color for the preview bar
  bgFrom: string;
  bgTo: string;
  textColor: string;
  badge: string;
  preview: string;      // visual descriptor used for the mock preview bar
}

const templates: Template[] = [
  {
    id: 1,
    name: "Classic Professional",
    category: "Freelancer",
    accent: "#f1f5f9",
    bgFrom: "#f8fafc",
    bgTo: "#e2e8f0",
    textColor: "#0f172a",
    badge: "bg-slate-100 text-slate-600",
    preview: "Clean minimal white",
  },
  {
    id: 2,
    name: "Bold Startup",
    category: "Startup",
    accent: "#ff7700",
    bgFrom: "#0f172a",
    bgTo: "#1e293b",
    textColor: "#ff7700",
    badge: "bg-orange-50 text-orange-600",
    preview: "Dark header, orange accent",
  },
  {
    id: 3,
    name: "Medical Invoice",
    category: "Clinic",
    accent: "#38bdf8",
    bgFrom: "#e0f2fe",
    bgTo: "#bae6fd",
    textColor: "#0369a1",
    badge: "bg-sky-50 text-sky-600",
    preview: "Light blue accent",
  },
  {
    id: 4,
    name: "Retail Receipt",
    category: "Retail",
    accent: "#22c55e",
    bgFrom: "#dcfce7",
    bgTo: "#bbf7d0",
    textColor: "#15803d",
    badge: "bg-green-50 text-green-600",
    preview: "Green accent",
  },
  {
    id: 5,
    name: "Creative Studio",
    category: "Creative Agency",
    accent: "#a855f7",
    bgFrom: "#7c3aed",
    bgTo: "#a855f7",
    textColor: "#ffffff",
    badge: "bg-purple-50 text-purple-600",
    preview: "Purple gradient",
  },
  {
    id: 6,
    name: "Law Firm Invoice",
    category: "Law Firm",
    accent: "#475569",
    bgFrom: "#0f172a",
    bgTo: "#1e293b",
    textColor: "#94a3b8",
    badge: "bg-slate-100 text-slate-700",
    preview: "Dark navy",
  },
  {
    id: 7,
    name: "E-Commerce Invoice",
    category: "E-Commerce",
    accent: "#14b8a6",
    bgFrom: "#ccfbf1",
    bgTo: "#99f6e4",
    textColor: "#0f766e",
    badge: "bg-teal-50 text-teal-600",
    preview: "Teal accent",
  },
  {
    id: 8,
    name: "Enterprise Invoice",
    category: "Enterprise",
    accent: "#64748b",
    bgFrom: "#f1f5f9",
    bgTo: "#e2e8f0",
    textColor: "#334155",
    badge: "bg-slate-100 text-slate-600",
    preview: "Corporate gray",
  },
];

/* ─── Animated template card ──────────────────────────────── */
function TemplateCard({ template }: { template: Template }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Coloured preview bar */}
      <div
        className="h-36 w-full relative overflow-hidden flex items-end p-4"
        style={{
          background: `linear-gradient(135deg, ${template.bgFrom} 0%, ${template.bgTo} 100%)`,
        }}
      >
        {/* Mock invoice lines */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 gap-2 opacity-60">
          <div
            className="h-3 w-24 rounded-full opacity-60"
            style={{ background: template.textColor }}
          />
          <div
            className="h-2 w-36 rounded-full opacity-40"
            style={{ background: template.textColor }}
          />
          <div
            className="h-2 w-20 rounded-full opacity-30"
            style={{ background: template.textColor }}
          />
          <div className="mt-2 flex gap-2">
            <div
              className="h-6 w-16 rounded-md opacity-20"
              style={{ background: template.textColor }}
            />
            <div
              className="h-6 w-12 rounded-md opacity-40"
              style={{ background: template.accent }}
            />
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-[#0f172a]/60 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={`/templates/${template.id}/preview`}
            className="flex items-center gap-1.5 bg-white text-[#0f172a] text-xs font-bold px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ff7700] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Preview
          </Link>
          <Link
            href={`/signup?template=${template.id}`}
            className="flex items-center gap-1.5 bg-[#ff7700] text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#cc5f00] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Use Template
          </Link>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-bold text-[#0f172a] text-base leading-tight">
            {template.name}
          </h3>
          <span
            className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${template.badge}`}
          >
            {template.category}
          </span>
        </div>
        <p className="text-xs text-slate-400 mb-4">{template.preview}</p>

        {/* CTA buttons — visible without hover on mobile */}
        <div className="flex gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <Link
            href={`/templates/${template.id}/preview`}
            className="flex-1 flex items-center justify-center gap-1.5 border border-slate-200 text-[#0f172a] text-xs font-semibold py-2 rounded-lg hover:border-[#ff7700] hover:text-[#ff7700] transition-colors"
          >
            <Eye className="w-3 h-3" />
            Preview
          </Link>
          <Link
            href={`/signup?template=${template.id}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#ff7700] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#cc5f00] transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            Use
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main client component ──────────────────────────────── */
export default function TemplatesContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

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
            <Sparkles className="w-3.5 h-3.5" />
            10+ premium designs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] leading-tight mb-5">
            Professional templates for{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ff7700 0%, #ff9a3c 60%, #ffb347 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              every business
            </span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Pick a design, customise your brand details, and start sending
            professional GST invoices in minutes.
          </p>
        </motion.div>
      </section>

      {/* ── Category Filter Pills ─────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#ff7700] text-white border-[#ff7700] shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#ff7700] hover:text-[#ff7700]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Template Grid ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-400"
          >
            No templates found for this category.
          </motion.div>
        )}
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl py-14 px-8 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #ff7700 0%, #ff9a3c 100%)",
          }}
        >
          <div className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute bottom-[-20px] left-[-20px] w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
          <h2 className="text-3xl font-black text-white mb-3 relative z-10">
            Start creating beautiful invoices for free
          </h2>
          <p className="text-orange-100 font-medium mb-8 max-w-lg mx-auto relative z-10">
            No credit card required. Your first 100 invoices are on us.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-[#ff7700] font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 relative z-10"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
