"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ZoomIn } from "lucide-react";

const templates = [
  {
    id: "modern-style",
    name: "Modern Style",
    image: "/Modern_Style.svg",
    width: "308%",
    translateX: "-50.3%",
    translateY: "-8.0%"
  },
  {
    id: "minimalist-grid",
    name: "Minimalist Grid",
    image: "/Minimalist_Grid.svg",
    width: "295%",
    translateX: "-50.0%",
    translateY: "-7.4%"
  },
  {
    id: "corporate-standard",
    name: "Corporate Standard",
    image: "/Corporate_Standard.svg",
    width: "332%",
    translateX: "-50.0%",
    translateY: "-10.4%"
  },
  {
    id: "freelancer-format",
    name: "Freelancer Format",
    image: "/Freelancer_Format.svg",
    width: "302%",
    translateX: "-50.0%",
    translateY: "-8.3%"
  },
  {
    id: "gst-india-compliant",
    name: "GST India Compliant",
    image: "/GST_India_Compliant.svg",
    width: "298%",
    translateX: "-50.0%",
    translateY: "-7.7%"
  }
];

export default function Templates() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeTemplate = templates[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % templates.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + templates.length) % templates.length);
  };

  return (
    <section
      id="templates"
      className="py-[100px] bg-white border-t border-slate-100 relative"
      style={{ overflowX: "hidden" }}
      aria-label="Invoice Templates"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

        {/* Two-column layout — left is selection list, right is horizontal stacking carousel */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">

          {/* LEFT — Intro Header + pill buttons with up/down controls */}
          <div
            className="flex flex-col gap-8 w-full lg:w-[380px] flex-shrink-0 lg:-ml-10"
            style={{ position: "relative", zIndex: 20, isolation: "isolate" }}
          >
            {/* Intro Text */}
            <div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#FF7A00] flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-[#FF7A00]" />
                Templates
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-none mb-4">
                Pick your invoice style.
              </h2>
              <p className="text-slate-500 text-lg font-medium">
                Professional designs for every industry. Fully compliant with GST standards.
              </p>
            </div>

            {/* Pill buttons + arrows */}
            <div className="flex gap-4 items-start w-full">
              {/* Up/Down Arrows */}
              <div className="flex flex-col gap-2 mt-1">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                  aria-label="Previous template"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                  aria-label="Next template"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Selection pills */}
              <div className="flex-1 flex flex-col gap-3">
                {templates.map((tpl, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={tpl.id}
                    onClick={() => {
                      if (isActive) {
                        setIsModalOpen(true);
                      } else {
                        setActiveIdx(i);
                      }
                    }}
                    className={`w-full text-center py-4 px-6 tracking-tight rounded-2xl transition-[background-color,color,box-shadow,transform,font-size] duration-300 ease-out cursor-pointer ${
                      isActive
                        ? "bg-[#FF7A00] text-white shadow-lg shadow-orange-500/20 scale-[1.04] text-lg font-black"
                        : "bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 border border-slate-200/50 hover:scale-[1.01] text-sm font-extrabold"
                    }`}
                  >
                    {tpl.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

          <div
            className="flex-1 w-full max-w-[480px] mx-auto lg:translate-x-10 relative mt-10 lg:mt-0 h-[480px] sm:h-[620px] lg:h-[740px]"
            style={{ position: "relative", zIndex: 10 }}
          >
            {templates.map((tpl, i) => {
              // Calculate index relative to activeIndex (Center: 0, Left: -1, Right: 1, Rest: 999)
              let relativeIndex = 999;
              if (i === activeIdx) {
                relativeIndex = 0;
              } else if (i === (activeIdx - 1 + templates.length) % templates.length) {
                relativeIndex = -1;
              } else if (i === (activeIdx + 1) % templates.length) {
                relativeIndex = 1;
              }

              const isVisible = relativeIndex !== 999;

              // Stack styling
              const scale = relativeIndex === 0 ? 1 : 0.86;
              const xOffset = relativeIndex === 0 ? 0 : relativeIndex === -1 ? -220 : 220;
              const yOffset = relativeIndex === 0 ? 0 : 16;
              const rotate = relativeIndex === 0 ? 0 : relativeIndex === -1 ? -5 : 5;
              const opacity = relativeIndex === 0 ? 1 : relativeIndex === -1 ? 0.75 : 0.75;
              const zIndex = relativeIndex === 0 ? 30 : 10;

              return (
                <motion.div
                  key={tpl.id}
                  animate={{
                    scale,
                    x: xOffset,
                    y: yOffset,
                    rotate,
                    opacity: isVisible ? opacity : 0,
                    zIndex,
                    pointerEvents: relativeIndex === 0 ? "auto" : "none",
                  }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    maxWidth: "440px",
                    overflow: "hidden",
                    isolation: "isolate",
                    boxShadow: "0 10px 20px rgba(15, 23, 42, 0.12), 0 20px 48px rgba(15, 23, 42, 0.18), 0 40px 96px rgba(15, 23, 42, 0.12)",
                    transition: "box-shadow 300ms ease-in-out"
                  }}
                  className="aspect-[495/700] cursor-pointer group bg-white border border-slate-200/40 rounded-sm"
                  onClick={() => {
                    if (relativeIndex === 0) {
                      setIsModalOpen(true);
                    }
                  }}
                >
                  <img
                    src={tpl.image}
                    alt={tpl.name}
                    className="absolute max-w-none"
                    style={{
                      width: tpl.width || "300%",
                      height: "auto",
                      left: "50%",
                      transform: `translateX(${tpl.translateX || "-50%"}) translateY(${tpl.translateY || "-7%"})`,
                      top: "0"
                    }}
                  />
                  {relativeIndex === 0 && (
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-md text-slate-800 font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 pointer-events-none select-none">
                        <ZoomIn className="w-4 h-4 text-[#FF7A00]" />
                        Click to Zoom
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ── Pop-up Lightbox Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              aria-label="Close preview"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative max-w-4xl w-full h-full max-h-[85vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative h-full max-h-[80vh] aspect-[495/700] bg-white border border-slate-200/40 rounded-sm overflow-hidden"
                style={{
                  isolation: "isolate",
                  boxShadow: "0 10px 20px rgba(15, 23, 42, 0.12), 0 20px 48px rgba(15, 23, 42, 0.18), 0 40px 96px rgba(15, 23, 42, 0.12)"
                }}
              >
                <img
                  src={activeTemplate.image}
                  alt={activeTemplate.name}
                  className="absolute max-w-none"
                  style={{
                    width: activeTemplate.width || "300%",
                    height: "auto",
                    left: "50%",
                    transform: `translateX(${activeTemplate.translateX || "-50%"}) translateY(${activeTemplate.translateY || "-7%"})`,
                    top: "0"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
