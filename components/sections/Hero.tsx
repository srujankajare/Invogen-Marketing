"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-24 bg-[#FCFBFA] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
      aria-label="Hero section"
    >
      {/* ─── Background Aesthetics ─── */}

      {/* Background Glow Breathing Blob */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF7700]/10 to-[#FF9A3D]/5 blur-[120px] pointer-events-none animate-glow-breathing" />
      
      {/* Soft Glassmorphism Blob */}
      <div className="absolute left-[-5%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-100/20 to-transparent blur-[80px] pointer-events-none" />

      {/* ─── Layout Container ─── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          
          {/* ─── Left Column: Hero Content ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-[#111827] text-5xl sm:text-6xl lg:text-[72px] leading-[90%] tracking-[-2px] mb-6">
              Professional Invoices.<br />
              <span className="text-[#FF7700] bg-gradient-to-r from-[#FF7700] to-[#FF9A3D] bg-clip-text text-transparent">Faster Payments.</span>
            </h1>

            {/* Paragraph Subhead */}
            <p className="font-sans font-normal text-lg lg:text-[20px] text-[#5B6475] leading-relaxed mb-8 max-w-xl">
              Create GST invoices, collect UPI payments, send via WhatsApp or email, and track every payment—all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="https://app.invogen.in/login?portal=admin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 px-14 py-4 min-w-[220px] text-sm font-semibold text-white bg-gradient-to-r from-[#FF7700] to-[#FF8F1F] rounded-xl btn-breathe-glow cursor-pointer"
                >
                  Login <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </motion.button>
              </a>

            </div>
            
            {/* Features below the CTA buttons (only text and logos, no card boxes) */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10 w-full max-w-xl">
              {/* GST Ready */}
              <div className="flex items-center gap-3 select-none">
                <div className="w-8.5 h-8.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-[0_2px_8px_rgba(16,185,129,0.15)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[13px] font-extrabold text-[#111827] tracking-tight">GST Ready</span>
                  <span className="text-[10px] text-[#5B6475] font-semibold mt-0.5">Compliant</span>
                </div>
              </div>

              {/* PDF Download */}
              <div className="flex items-center gap-3 select-none">
                <div className="w-8.5 h-8.5 rounded-xl bg-[#EF4444] flex items-center justify-center text-white flex-shrink-0 shadow-[0_2px_8px_rgba(239,68,68,0.15)]">
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[13px] font-extrabold text-[#111827] tracking-tight">PDF Download</span>
                  <span className="text-[10px] text-[#5B6475] font-semibold mt-0.5">Instant</span>
                </div>
              </div>

              {/* Payment Received */}
              <div className="flex items-center gap-3 select-none">
                <div className="w-8.5 h-8.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-[0_2px_8px_rgba(16,185,129,0.15)]">
                  <span className="text-sm font-extrabold font-heading">₹</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[13px] font-extrabold text-[#111827] tracking-tight">Payment Received</span>
                  <span className="text-[10px] text-[#5B6475] font-semibold mt-0.5">Online</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Right Column: Realistic Floating Invoice ─── */}
          <div className="relative flex items-center justify-center min-h-[550px]">
            {/* Abstract glow ring */}
            <div className="absolute w-[450px] h-[450px] border border-orange-500/5 rounded-full pointer-events-none scale-90" />
            <div className="absolute w-[350px] h-[350px] border border-orange-500/10 rounded-full pointer-events-none scale-100" />
            
            {/* Dotted pattern overlay */}
            <div 
              className="absolute left-10 bottom-10 w-24 h-24 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#111827 1px, transparent 1px)",
                backgroundSize: "12px 12px"
              }}
            />

            {/* Shift wrapper to position the invoice stack */}
            <div className="w-full flex justify-center translate-y-8 lg:translate-y-12 relative max-w-[480px]">
              
              {/* Stack Card 1: Back Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: -40, y: 30, rotate: -12 }}
                animate={{ opacity: 0.35, scale: 0.9, x: -30, y: 0, rotate: -8 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute w-full pointer-events-none"
                style={{
                  aspectRatio: "305.25 / 431.879",
                  filter: "blur(2.5px) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.04))",
                  zIndex: 10,
                }}
              >
                <div className="w-full h-full relative overflow-hidden rounded-[20px] border border-slate-200/50 bg-white">
                  <img
                    src="/hero_invoice.svg"
                    alt="Invoice Mockup Back"
                    className="absolute select-none pointer-events-none"
                    style={{
                      width: "471.64%",
                      maxWidth: "none",
                      height: "auto",
                      left: "-185.91%",
                      top: "-43.78%",
                    }}
                    draggable={false}
                  />
                </div>
              </motion.div>

              {/* Stack Card 2: Back Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 40, y: 30, rotate: 16 }}
                animate={{ opacity: 0.45, scale: 0.92, x: 35, y: 10, rotate: 12 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="absolute w-full pointer-events-none"
                style={{
                  aspectRatio: "305.25 / 431.879",
                  filter: "blur(1.5px) drop-shadow(0 12px 24px rgba(0, 0, 0, 0.05))",
                  zIndex: 20,
                }}
              >
                <div className="w-full h-full relative overflow-hidden rounded-[20px] border border-slate-200/50 bg-white">
                  <img
                    src="/hero_invoice.svg"
                    alt="Invoice Mockup Back Right"
                    className="absolute select-none pointer-events-none"
                    style={{
                      width: "471.64%",
                      maxWidth: "none",
                      height: "auto",
                      left: "-185.91%",
                      top: "-43.78%",
                    }}
                    draggable={false}
                  />
                </div>
              </motion.div>

              {/* Main Card: Front */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                whileHover={{ scale: 1.03, rotate: 3, y: -8 }}
                className="animate-float-invoice w-full relative overflow-visible sheen-active cursor-pointer"
                style={{
                  filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.08)) drop-shadow(0 12px 24px rgba(0, 0, 0, 0.04))",
                  zIndex: 30,
                  transformOrigin: "center center",
                }}
              >
                <div 
                  className="w-full relative overflow-hidden rounded-[24px] border border-orange-500/10 bg-white"
                  style={{
                    aspectRatio: "305.25 / 431.879",
                  }}
                >
                  <img
                    src="/hero_invoice.svg"
                    alt="Invoice Mockup"
                    className="absolute select-none pointer-events-none"
                    style={{
                      width: "471.64%",
                      maxWidth: "none",
                      height: "auto",
                      left: "-185.91%",
                      top: "-43.78%",
                    }}
                    draggable={false}
                  />
                </div>
              </motion.div>

            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
