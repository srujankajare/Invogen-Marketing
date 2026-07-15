"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MousePointerClick, Sparkles, LayoutTemplate } from "lucide-react";
import Image from "next/image";

/* ─── Feature data ─────────────────────────────────────────────── */
const features = [
  {
    id: "drag-drop",
    title: "Drag & Drop",
    icon: MousePointerClick,
    description:
      "Rearrange line items, sections, and blocks instantly — just grab and move. No menus, no forms, no friction. Build your perfect invoice layout the same way you'd rearrange sticky notes on a whiteboard.",
    visual: (
      <div className="w-full h-full relative bg-transparent">
        <div className="w-full h-full relative">
          <Image
            src="/drag_&_drop.svg"
            alt="Drag and drop elements to design invoice"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>
    ),
  },

  {
    id: "three-step",
    title: "3-Step Invoice Generation",
    icon: Sparkles,
    description:
      "From zero to a sent invoice in under 60 seconds. Step 1 — Fill in your client details. Step 2 — Add your line items and apply GST. Step 3 — Preview and send via Email, WhatsApp, or PDF. It really is that fast.",
    visual: (
      <div className="w-full h-full relative bg-transparent">
        <div className="w-full h-full relative">
          <Image
            src="/3_step.svg"
            alt="3-step invoice generation process"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>
    ),
  },
  {
    id: "templates",
    title: "Modern Templates",
    icon: LayoutTemplate,
    description:
      "Choose from a curated library of professionally designed invoice templates — from clean and corporate to vibrant and creative. Every template is GST-ready, fully customisable with your brand colours, logo, and signature.",
    visual: (
      <div className="w-full h-full relative bg-transparent">
        <div className="w-full h-full relative lg:-translate-y-10">
          <Image
            src="/modern_template.svg"
            alt="Modern invoice templates"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>
    ),
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function Features() {
  const [activeId, setActiveId] = useState<string>("drag-drop");

  const activeFeature = features.find((f) => f.id === activeId)!;

  return (
    <section id="features" className="py-[90px] bg-white border-t border-gray-100 relative" aria-label="Features section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section Heading & Tagline ── */}
        <div className="mb-14 overflow-visible py-2 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[180px] font-black uppercase tracking-[0.08em] leading-none inline-block pb-4 px-2 sm:px-6"
            style={{
              backgroundImage: "linear-gradient(to bottom, #1E293B 0%, #475569 60%, #64748B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              willChange: "opacity, transform",
            }}
          >
            FEATURES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-[#0F172A] text-xl sm:text-2xl lg:text-3xl font-medium max-w-4xl leading-relaxed mx-auto"
          >
            Built for how you actually work.
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-start">
          {/* LEFT — Accordion list */}
          <div className="w-full lg:w-[35%] flex flex-col">
            {features.map((feat, idx) => {
              const isOpen = feat.id === activeId;
              return (
                <div key={feat.id} className="border-b border-slate-100 last:border-0">
                  <button
                    onClick={() => setActiveId(feat.id)}
                    className="w-full text-left py-6 flex items-center justify-between gap-4 group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-snug transition-colors duration-300 ${
                        isOpen ? "text-[#0F172A]" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {feat.title}
                    </span>
                    <span
                      className={`flex-shrink-0 mt-1 transition-colors duration-200 ${
                        isOpen ? "text-[#FF7A00]" : "text-slate-350 group-hover:text-slate-400"
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 1.6, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-base text-slate-500 leading-relaxed max-w-md font-medium">
                          {feat.description}
                        </p>
                        {/* Show visual below text on mobile only */}
                        <div
                          className={`lg:hidden rounded-2xl overflow-hidden mb-4 h-64 transition-all duration-300 ${
                            feat.id === "drag-drop" || feat.id === "three-step" || feat.id === "templates"
                              ? "bg-transparent"
                              : "border border-slate-100 shadow-md bg-white"
                          }`}
                        >
                          {feat.visual}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT — Contextual visual panel (desktop only) */}
          <div className="hidden lg:block flex-1 sticky top-28 self-start lg:-mr-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={`rounded-[28px] overflow-hidden transition-all duration-300 ${
                  activeId === "drag-drop" || activeId === "three-step" || activeId === "templates"
                    ? "bg-transparent"
                    : "border border-slate-100 shadow-[0_24px_64px_rgba(15,23,42,0.08)] bg-white"
                }`}
                style={{ height: "600px" }}
              >
                {activeFeature.visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
