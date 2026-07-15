"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const featureList = [
  { title: "GST Ready Billing" },
  { title: "Instant UPI QR Payments" },
  { title: "Automatic Tax Calculation" },
  { title: "Digital Signature Support" },
  { title: "Branded PDF Export" },
  { title: "WhatsApp & Email Sharing" }
];

const ModernInvoiceCard = () => (
  <div 
    className="relative w-full aspect-[495/700] bg-white border border-slate-200/40 rounded-[20px] overflow-hidden shadow-sm"
    style={{ isolation: "isolate" }}
  >
    <img
      src="/Modern_Style.svg"
      alt="Modern Style Invoice"
      className="absolute max-w-none"
      style={{
        width: "308%",
        height: "auto",
        left: "50%",
        transform: "translateX(-50.3%) translateY(-8.0%)",
        top: "0"
      }}
    />
  </div>
);

export default function InvoiceShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="invoice-builder"
      className="py-[110px] bg-white border-t border-gray-100 relative overflow-hidden"
      aria-label="Invoice Builder Showcase"
    >
      {/* ── Luxurious Background Elements ── */}
      
      {/* Warm Orange Background Gradient Blob (top right to bottom left) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F2]/30 via-white to-white pointer-events-none" />
      
      {/* Large Blurred Orange Radial Glow behind the invoice */}
      <motion.div 
        animate={{
          scale: isHovered ? 1.25 : 1,
          opacity: isHovered ? 0.18 : 0.14,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[-5%] top-[12%] w-[650px] h-[650px] rounded-full bg-[#FF7A00] blur-[150px] pointer-events-none opacity-[0.14]" 
      />

      {/* Subtle Dotted Pattern in Top-Left Corner */}
      <div 
        className="absolute left-8 top-12 w-40 h-40 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0F172A 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px"
        }}
      />

      {/* Thin Abstract Curved Lines with low opacity */}
      <svg 
        className="absolute left-[-2%] top-[5%] w-[600px] h-[500px] text-[#FF7A00]/5 pointer-events-none" 
        viewBox="0 0 600 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-50,150 Q250,50 350,280 T650,380" stroke="currentColor" strokeWidth="1.2" fill="none" strokeDasharray="6 6" />
        <path d="M-50,220 Q300,120 400,350 T650,450" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>

      {/* ── Layout Container ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-[42%_58%] gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Marketing Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >


            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#0F172A] tracking-tight leading-[105%]">
              Professional invoices that get you <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] bg-clip-text text-transparent">paid faster.</span>
            </h2>

            {/* Description */}
            <p className="text-base text-[#64748B] leading-relaxed max-w-[520px]">
              Create beautiful GST-ready invoices with QR payments, digital signatures, automatic tax calculations, recurring billing, and professional branding—all from one simple invoice builder.
            </p>

            {/* Feature List (only bold text titles) */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4.5 mt-4 max-w-[560px]">
              {featureList.map((item, i) => {
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="text-left"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-[#0F172A] block">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <a
                href="https://app.invogen.in/login?portal=admin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.03, 
                    y: -3,
                    boxShadow: "0 16px 32px rgba(255, 122, 0, 0.25)",
                    backgroundImage: "linear-gradient(to right, #ff8f24, #ffb061)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="h-14 px-8 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] rounded-[18px] shadow-[0_12px_24px_rgba(255,122,0,0.15)] cursor-pointer transition-all duration-300"
                >
                  Create Your First Invoice →
                </motion.button>
              </a>
            </div>

            
          </motion.div>

          {/* ── Right Column: Layered Product Showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center min-h-[600px] py-6 overflow-visible"
          >
            {/* Interactive Motion Container for Layered Depth */}
            <motion.div 
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative w-full max-w-[480px] mx-auto lg:translate-x-[-28px] overflow-visible"
              style={{ perspective: "1200px" }}
            >
              
              {/* Stack Background Card 3 (Faded, Playing Card Fan, Scale 90%) */}
              <div 
                className="absolute inset-0 transition-all duration-500 pointer-events-none z-[1] rounded-[24px]"
                style={{ 
                  opacity: 0.38,
                  transformOrigin: "50% 100%",
                  transform: isHovered 
                    ? "translate(96px, 10px) rotate(11deg) scale(0.90)" 
                    : "translate(80px, 8px) rotate(9deg) scale(0.90)",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)"
                }}
              >
                <ModernInvoiceCard />
              </div>

              {/* Stack Background Card 2 (Faded, Playing Card Fan, Scale 93%) */}
              <div 
                className="absolute inset-0 transition-all duration-500 pointer-events-none z-[2] rounded-[24px]"
                style={{ 
                  opacity: 0.64,
                  transformOrigin: "50% 100%",
                  transform: isHovered 
                    ? "translate(64px, 6px) rotate(7.5deg) scale(0.93)" 
                    : "translate(53px, 5px) rotate(6deg) scale(0.93)",
                  boxShadow: "0 12px 36px rgba(15, 23, 42, 0.08)"
                }}
              >
                <ModernInvoiceCard />
              </div>

              {/* Stack Background Card 1 (Faded, Playing Card Fan, Scale 96%) */}
              <div 
                className="absolute inset-0 transition-all duration-500 pointer-events-none z-[3] rounded-[24px]"
                style={{ 
                  opacity: 0.82,
                  transformOrigin: "50% 100%",
                  transform: isHovered 
                    ? "translate(32px, 2px) rotate(4deg) scale(0.96)" 
                    : "translate(26px, 2px) rotate(3deg) scale(0.96)",
                  boxShadow: "0 15px 45px rgba(15, 23, 42, 0.10)"
                }}
              >
                <ModernInvoiceCard />
              </div>

              {/* Front Invoice Card (Scale 100%, Playing Card Fan Pivot) */}
              <motion.div
                initial={{ y: 0, rotate: 0 }}
                whileHover={{ 
                  y: -12,
                  rotate: -1.5,
                  scale: 1.015,
                  boxShadow: "0 40px 80px rgba(15, 23, 42, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                style={{
                  boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12), 0 8px 24px rgba(15, 23, 42, 0.06)",
                  transformOrigin: "50% 100%"
                }}
                className="relative z-10 cursor-pointer rounded-[24px]"
              >
                <ModernInvoiceCard />
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
