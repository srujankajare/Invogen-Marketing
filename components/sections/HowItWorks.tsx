"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Create Account",
    description: "Sign up free in 30 seconds. No credit card required. Experience compliance made simple from day one.",
  },
  {
    step: "02",
    title: "Save Client Info",
    description: "Enter client details once. invogen.in securely saves and auto-fills business data, shipping info, and GSTINs for all future invoices.",
  },
  {
    step: "03",
    title: "Generate Invoice",
    description: "Input items, adjust quantities, and watch our builder calculate taxes, discounts, and totals instantly. Auto-generates GST line items automatically.",
  },
  {
    step: "04",
    title: "Send & Get Paid",
    description: "Send dynamic invoice links instantly via WhatsApp or Email. Customers can scan the auto-generated UPI QR code to pay you in one click.",
  },
];

function PhoneInHand({ side, stepIndex }: { side: "left" | "right"; stepIndex: number }) {
  const renderScreen = () => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="flex-1 flex flex-col justify-between p-5 pt-12 bg-[#090D1A] text-white h-full">
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#FF7A00] flex items-center justify-center text-[10px] font-black">i</div>
                <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400">Invogen Onboarding</span>
              </div>
              <h4 className="text-base font-extrabold text-white">Create Account</h4>
              <p className="text-[10px] text-slate-400 -mt-2.5">Start billing in 30 seconds.</p>
              
              <div className="flex flex-col gap-2.5 mt-1">
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-slate-400 uppercase">Full Name</label>
                  <div className="px-3 py-1.5 bg-[#1E293B] border border-slate-700 rounded-lg text-[10px] font-medium text-white flex items-center justify-between">
                    <span>Fabian Engler</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-slate-400 uppercase">Email Address</label>
                  <div className="px-3 py-1.5 bg-[#1E293B] border border-slate-700 rounded-lg text-[10px] font-medium text-white">
                    fabian@engler.design
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-slate-400 uppercase">Password</label>
                  <div className="px-3 py-1.5 bg-[#1E293B] border border-slate-700 rounded-lg text-[10px] font-mono text-slate-400 tracking-wider">
                    ••••••••••••
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 flex flex-col gap-2">
              <button className="w-full py-2 bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] text-white text-[10px] font-bold rounded-lg shadow-md shadow-orange-500/10 flex items-center justify-center">
                Create Account →
              </button>
              <div className="text-[7px] text-center text-slate-500">
                Terms of Service apply.
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex-1 flex flex-col justify-between p-5 pt-12 bg-[#090D1A] text-white h-full">
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#FF7A00]/25 border border-[#FF7A00]/45 flex items-center justify-center text-[10px] font-black text-[#FF7A00]">C</div>
                <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400">Directory</span>
              </div>
              <h4 className="text-base font-extrabold text-white">New Client</h4>
              <p className="text-[10px] text-slate-400 -mt-2.5">Save business profiles for one-click billing.</p>
              
              <div className="flex flex-col gap-2.5 mt-1">
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-slate-400 uppercase">Client Name</label>
                  <div className="px-3 py-1.5 bg-[#1E293B] border border-slate-700 rounded-lg text-[10px] font-medium text-white">
                    Acme Corporation
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-slate-400 uppercase">GSTIN (Optional)</label>
                  <div className="px-3 py-1.5 bg-[#1E293B] border border-slate-700 rounded-lg text-[10px] font-medium text-white flex items-center justify-between">
                    <span>27AAACA1234Q1ZO</span>
                    <span className="text-[7px] text-green-500 bg-green-500/10 px-1.5 py-0.2 rounded font-bold">VERIFIED</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-slate-400 uppercase">Billing Address</label>
                  <div className="px-3 py-1.5 bg-[#1E293B] border border-slate-700 rounded-lg text-[9px] font-medium text-white leading-relaxed">
                    BKC, Bandra East, Mumbai, MH 400051
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 flex flex-col gap-2">
              <button className="w-full py-2 bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] text-white text-[10px] font-bold rounded-lg shadow-md shadow-orange-500/10 flex items-center justify-center">
                Save Client Info
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex-1 flex flex-col justify-between p-4 pt-12 bg-[#090D1A] text-white h-full">
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div>
                  <span className="text-[7px] font-bold text-[#FF7A00] uppercase tracking-wider block">Draft Invoice</span>
                  <h4 className="text-[10px] font-extrabold text-white">#INV-2024-001</h4>
                </div>
                <div className="text-right">
                  <span className="text-[7px] text-slate-400 uppercase block">Due Date</span>
                  <span className="text-[8px] font-bold text-white">15 Jul 2024</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-bold text-slate-400 uppercase block">Line Items</span>
                <div className="space-y-1">
                  <div className="flex justify-between items-center bg-[#1E293B]/40 p-2 rounded-lg border border-slate-800">
                    <div>
                      <div className="text-[9px] font-bold text-white">UI/UX Design</div>
                      <div className="text-[7px] text-slate-400">10 hours @ ₹3,000</div>
                    </div>
                    <span className="text-[9px] font-bold text-white">₹30,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#1E293B]/40 p-2 rounded-lg border border-slate-800">
                    <div>
                      <div className="text-[9px] font-bold text-white">Frontend Dev</div>
                      <div className="text-[7px] text-slate-400">15 hours @ ₹4,000</div>
                    </div>
                    <span className="text-[9px] font-bold text-white">₹60,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E293B]/80 p-2 rounded-lg border border-slate-800 space-y-1">
                <div className="flex justify-between text-[8px] text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">₹90,000</span>
                </div>
                <div className="flex justify-between text-[8px] text-slate-400">
                  <span>CGST (9%)</span>
                  <span className="font-semibold text-white">₹8,100</span>
                </div>
                <div className="flex justify-between text-[8px] text-slate-400">
                  <span>SGST (9%)</span>
                  <span className="font-semibold text-white">₹8,100</span>
                </div>
                <div className="h-px bg-slate-800 my-1" />
                <div className="flex justify-between text-[9px] font-extrabold">
                  <span className="text-[#FF7A00]">Total Value</span>
                  <span className="text-white">₹1,06,200</span>
                </div>
              </div>
            </div>
            
            <div className="mt-2">
              <button className="w-full py-2 bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] text-white text-[10px] font-bold rounded-lg shadow-md shadow-orange-500/10 flex items-center justify-center">
                Generate Final Invoice
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex-1 flex flex-col justify-between p-5 pt-12 bg-[#090D1A] text-white h-full">
            <div className="flex flex-col items-center text-center gap-3 mt-2">
              <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-white">Invoice Shared Successfully!</h4>
                <p className="text-[8px] text-slate-400">UPI QR attachment included for faster payouts</p>
              </div>
              
              <div className="w-full bg-[#1E293B]/60 p-3 rounded-xl border border-slate-800 flex flex-col items-center gap-1.5 mt-1">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">UPI QR Code</span>
                <div className="w-24 h-24 bg-white rounded-lg p-2 relative flex items-center justify-center shadow">
                  <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full opacity-90">
                    {[...Array(25)].map((_, i) => {
                      // Deterministic mock QR code pattern to prevent hydration mismatch (1 is dark, 0 is transparent)
                      const qrPattern = [
                        1, 1, 0, 1, 1,
                        1, 0, 1, 0, 1,
                        0, 0, 1, 1, 0,
                        1, 1, 0, 1, 1,
                        1, 1, 0, 1, 1
                      ];
                      return (
                        <div key={i} className={`rounded-sm ${qrPattern[i] ? "bg-slate-900" : "bg-transparent"}`} />
                      );
                    })}
                  </div>
                  <div className="absolute w-5 h-5 bg-white rounded-md flex items-center justify-center shadow border border-slate-100">
                    <span className="text-[6px] font-black text-blue-600 tracking-tighter">UPI</span>
                  </div>
                </div>
                <span className="text-[7px] font-semibold text-slate-400">Scan to pay with any UPI App</span>
              </div>
            </div>
            
            <div className="mt-2 flex gap-2">
              <button className="flex-1 py-2 bg-[#25D366] text-white text-[9px] font-bold rounded-lg flex items-center justify-center shadow-md">
                WhatsApp
              </button>
              <button className="flex-1 py-2 bg-[#1E293B] border border-slate-700 text-white text-[9px] font-bold rounded-lg flex items-center justify-center">
                Download PDF
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const isRight = side === "right";

  return (
    <div className="relative select-none scale-[0.8] sm:scale-100 flex items-center justify-center cursor-pointer" style={{ width: "320px", height: "620px", perspective: 1000 }}>
      {/* 3D tilting phone container */}
      <motion.div
        whileHover={{
          rotateY: isRight ? 8 : -8,
          rotateX: 4,
          scale: 1.03,
          filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.12))",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Real hand holding iPhone photo mockup */}
        <img
          src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80"
          alt="Real hand holding phone"
          className="w-full h-full object-contain pointer-events-none z-10"
          style={{
            transform: isRight ? "scaleX(1)" : "scaleX(-1)", // Mirror horizontally for left hand
          }}
        />

        {/* Screen Overlay aligned perfectly with the phone screen in the photo */}
        <div 
          className="absolute overflow-hidden bg-[#090D1A] shadow-inner sheen-active sheen-dark"
          style={{
            top: "14.2%",
            left: isRight ? "14.8%" : "auto",
            right: isRight ? "auto" : "14.8%",
            width: "70.4%",
            height: "71.6%",
            borderRadius: "32px",
            zIndex: 20
          }}
        >
          {/* Dynamic Island Overlay for additional realism */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-black rounded-full z-50 flex items-center justify-end px-2">
            <div className="w-1 h-1 rounded-full bg-slate-900" />
          </div>

          {/* Status Bar */}
          <div className="absolute top-1.5 w-full px-4 flex justify-between items-center text-white text-[8px] font-semibold z-40 select-none opacity-90">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.79-1.79C9.09 19.68 10.49 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
              <div className="w-3.5 h-1.8 border border-white rounded-[2px] p-[1px] flex items-center justify-start"><div className="w-full h-full bg-white rounded-[0.5px]" /></div>
            </div>
          </div>

          {renderScreen()}

          {/* Home Indicator Bar */}
          <div className="absolute bottom-1 w-16 h-0.8 bg-white/40 rounded-full left-1/2 -translate-x-1/2 z-40" />
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="workflow"
      className="bg-white text-[#0F172A] relative"
      aria-label="How It Works"
    >
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16 text-center relative z-20">
        <div className="mb-14 overflow-visible py-2 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[180px] font-black uppercase tracking-[0.08em] leading-none inline-block pb-4 px-2 sm:px-6"
            style={{
              backgroundImage: "linear-gradient(to bottom, #1E293B 0%, #475569 60%, #64748B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              willChange: "opacity, transform",
            }}
          >
            WORKFLOW
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-12 text-4xl sm:text-6xl font-black text-[#0F172A] tracking-tight leading-none mb-10"
          >
            Up and running in <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] bg-clip-text text-transparent">3 minutes.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="text-slate-500 text-lg max-w-xl mx-auto font-medium"
          >
            No complex setup, no credit cards. Just a clean 4-step workflow designed to save you hours of admin work.
          </motion.p>
        </div>
      </div>

      {/* Sticky scroll stacking steps */}
      <div className="relative">
        {steps.map((step, idx) => {
          const isAlternate = idx % 2 !== 0;
          const isStepOne = idx === 0;
          // Soft color themes for alternate steps to look extremely premium in light mode
          const bgColors = [
            "bg-white",
            "bg-[#FCFBFA]", // soft alabaster cream
            "bg-[#F8F9FA]", // soft clean white-gray
            "bg-[#F7FAF8]"  // soft clean mint-white
          ];
          return (
            <div
              key={step.title}
              className={`sticky top-0 h-screen w-full flex items-center justify-center ${bgColors[idx]} overflow-hidden border-t border-slate-100/80 shadow-[0_-20px_50px_rgba(15,23,42,0.02)]`}
              style={{ zIndex: (idx + 1) * 10 }}
            >
              {/* Radial glow background for depth */}
              <div className="absolute inset-0 bg-transparent pointer-events-none" />
              <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] rounded-full bg-[#FF7A00]/3 blur-[140px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full h-full flex items-center relative z-20">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-24 sm:gap-16 lg:gap-16">
                  
                  <div className={`flex flex-col text-left w-full lg:w-[40%] z-20 ${isAlternate ? "lg:order-2" : "lg:order-1"} -mt-28 lg:mt-0`}>
                    <div className="text-6xl sm:text-7xl font-black text-[#0F172A] tracking-tight mb-3 sm:mb-5">
                      STEP {idx + 1}
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FF7A00] uppercase tracking-tight leading-none mb-5 sm:mb-10 whitespace-nowrap">
                      {step.title}
                    </div>
                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* SVG Illustration Column (60% width on desktop, swaps position for Step 2 & 4) */}
                  <div className={`flex justify-center items-center w-full lg:w-[60%] relative ${isAlternate ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative select-none w-full max-w-[800px] flex items-center justify-center">
                      {/* Soft orange glow behind illustration */}
                      <div className={`absolute ${idx === 1 ? "w-[90%] h-[90%] blur-[100px]" : "w-[80%] h-[80%] blur-[80px]"} rounded-full bg-[#FF7A00]/8 pointer-events-none z-0 ${(idx === 2 || idx === 3) ? "-translate-x-10" : ""}`} />
                      <img
                        src={`/step_${idx + 1}.svg`}
                        alt={`${step.title} Step`}
                        className={`relative z-10 transition-transform duration-300 origin-center translate-y-10 sm:translate-y-0 ${
                          idx === 1
                            ? "scale-[2.7] sm:scale-[1.0] lg:scale-[2.6]"
                            : (idx === 2 || idx === 3)
                              ? "scale-[2.4] sm:scale-[0.9] lg:scale-[1.8] lg:-translate-x-10"
                              : "scale-[2.5] sm:scale-[1.0] lg:scale-[1.8]"
                        }`}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "none",
                          maxHeight: "none",
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

