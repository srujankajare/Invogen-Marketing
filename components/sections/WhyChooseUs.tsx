"use client";

import { motion } from "framer-motion";
import { 
  X, 
  Check, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const rows = [
  { 
    label: "Invoice Creation", 
    traditional: "Manual templates, copy-pasting client info. Takes hours of admin work.", 
    ours: "30-second generator with auto-fill clients, smart items, and instant calc.", 
    tag: "Time Saved"
  },
  { 
    label: "Professional Templates", 
    traditional: "Basic grids, standard spreadsheets, or generic invoice formats.", 
    ours: "10+ premium, designer-made layouts curated for startups, solo creators, & CAs.", 
    tag: "Design quality"
  },
  { 
    label: "GST Calculations", 
    traditional: "Manual calculations, prone to human error & auditing issues.", 
    ours: "Automatic calculation of CGST, SGST, IGST with compliant line-item tables.", 
    tag: "Compliance"
  },
  { 
    label: "WhatsApp Sharing", 
    traditional: "Downloading the PDF, opening email/chat, uploading, and typing a message.", 
    ours: "One-click sharing via WhatsApp Web or ebill or pdf.", 
    tag: "Delivery"
  },
  { 
    label: "Invoice Tracking", 
    traditional: "No read receipts. Constant chasing up with clients to check invoice status.", 
    ours: "Real-time audit log: Sent, Opened, Viewed, Paid, or Overdue status tracking.", 
    tag: "Visibility"
  },
  { 
    label: "Custom Branding", 
    traditional: "Fixed, unbranded templates without your company colors or signature.", 
    ours: "Add your logo, company brand theme, and authorized digital signature.", 
    tag: "Branding"
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-white border-t border-gray-100 relative"
      aria-label="Why Choose invogen.in"
    >
      {/* Decorative ambient radial glow */}
      <div className="absolute left-[-10%] top-[40%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-100/20 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center lg:text-left"
        >
          <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff7700] flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-5 h-px bg-[#ff7700]" />
            Comparison
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-none">
            Why businesses switch to <span className="bg-gradient-to-r from-[#ff7700] to-[#ff9a3c] bg-clip-text text-transparent">invogen.in</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl font-medium mx-auto lg:mx-0">
            Stop wasting hours on spreadsheets and manual invoicing. Experience smart billing.
          </p>
        </motion.div>

        {/* ── Desktop Comparison Grid (lg and up) ── */}
        <div className="hidden lg:block border border-slate-200/80 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.03)] bg-slate-50/20">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200/80 items-stretch">
            
            {/* Feature Column Header */}
            <div className="px-8 py-6 flex items-center text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              Billing Features
            </div>
            
            {/* Traditional Column Header */}
            <div className="px-8 py-6 text-center border-x border-slate-200/80 flex flex-col justify-center bg-slate-100/50">
              <div className="text-sm font-bold text-slate-500 tracking-tight flex items-center justify-center gap-1.5">
                Traditional Billing
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Spreadsheets &amp; Manual</div>
            </div>
            
            {/* invogen.in Column Header */}
            <div className="px-8 py-6 text-center flex flex-col justify-center bg-gradient-to-r from-orange-500/[0.03] to-orange-500/[0.06] relative">
              {/* Highlight top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff7700]" />
              <div className="text-sm font-extrabold text-[#ff7700] tracking-tight flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                invogen.in
              </div>
              <div className="text-[10px] text-[#ff7700]/70 font-bold uppercase tracking-widest mt-1">Smart &amp; Automated</div>
            </div>

          </div>

          {/* Table Body Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-3 border-t border-slate-200/60 hover:bg-slate-50/50 transition-colors duration-200 items-stretch group"
            >
              {/* Feature Label */}
              <div className="px-8 py-5.5 flex items-center">
                <div className="flex flex-col">
                  <span className="text-base font-bold text-slate-800 tracking-tight">{row.label}</span>
                  <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider mt-0.5">{row.tag}</span>
                </div>
              </div>

              {/* Traditional Column Text */}
              <div className="px-8 py-5.5 flex items-center gap-3 border-x border-slate-200/50 bg-slate-50/10 text-slate-450">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <span className="text-sm leading-relaxed font-medium">{row.traditional}</span>
              </div>

              {/* invogen.in Column Text (Highlighted) */}
              <div className="px-8 py-5.5 flex items-center gap-3 bg-gradient-to-r from-orange-500/[0.01] to-orange-500/[0.03] text-slate-700 relative">
                {/* Active left marker */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ff7700]/30" />
                <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span className="text-sm leading-relaxed font-bold text-slate-700">{row.ours}</span>
              </div>

            </motion.div>
          ))}

          {/* Table Footer CTA bar */}
          <div className="bg-[#ff7700] px-8 py-6.5 flex items-center justify-between gap-6 relative overflow-hidden">
            {/* Ambient shine inside the footer */}
            <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-0.5">
              <div className="text-white font-extrabold text-lg tracking-tight">Ready to switch to professional invoicing?</div>
              <div className="text-orange-100 text-xs font-semibold">Join thousands of Indian businesses already saving hours on invogen.in</div>
            </div>
            
            <a
              href="https://app.invogen.in/login?portal=admin"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                id="comparison-cta"
                className="px-6 py-3.5 bg-white text-[#ff7700] font-extrabold text-sm rounded-xl shadow-lg shadow-orange-700/25 hover:shadow-orange-700/35 transition-all cursor-pointer flex items-center gap-2 group"
              >
                Start Billing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </div>

        </div>

        {/* ── Mobile/Tablet Stack Comparison Cards (lg and below) ── */}
        <div className="lg:hidden flex flex-col gap-6">
          {rows.map((row, i) => (
            <motion.div
              key={`mobile-${row.label}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2) }}
              className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm bg-white"
            >
              {/* Card Title */}
              <div className="px-5 py-4 bg-slate-50 border-b border-slate-200/60 flex items-center">
                <div className="flex flex-col text-left">
                  <span className="text-base font-bold text-slate-800">{row.label}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{row.tag}</span>
                </div>
              </div>

              {/* Card comparative rows */}
              <div className="p-5 flex flex-col gap-4">
                
                {/* Traditional */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wide">Traditional Billing</span>
                    <p className="text-sm text-slate-450 mt-0.5 leading-relaxed font-medium">{row.traditional}</p>
                  </div>
                </div>

                {/* invogen.in */}
                <div className="flex items-start gap-2.5 pt-3 border-t border-slate-100">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-[#ff7700] font-extrabold uppercase tracking-wide">invogen.in</span>
                    <p className="text-sm text-slate-700 mt-0.5 leading-relaxed font-bold">{row.ours}</p>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}

          {/* Mobile Footer CTA card */}
          <div className="bg-[#ff7700] rounded-2xl p-6 text-center flex flex-col gap-5 shadow-lg shadow-orange-500/10">
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-extrabold text-base tracking-tight">Ready to switch to professional invoicing?</h3>
              <p className="text-orange-100 text-xs font-semibold">Join thousands of Indian businesses already saving hours on invogen.in</p>
            </div>
            
            <a
              href="https://app.invogen.in/login?portal=admin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button
                id="comparison-cta-mobile"
                className="w-full py-3.5 bg-white text-[#ff7700] font-extrabold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Start Billing
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
