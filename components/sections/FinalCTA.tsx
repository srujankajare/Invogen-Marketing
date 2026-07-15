"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const points = [
  "Free forever plan available",
  "No credit card required",
  "Set up in under 2 minutes",
];

export default function FinalCTA() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const customEvent = e as CustomEvent;
      setShowLogo(!customEvent.detail.isInView);
    };
    window.addEventListener("footer-scroll", handleScroll);
    return () => window.removeEventListener("footer-scroll", handleScroll);
  }, []);

  return (
    <section
      id="cta"
      className="py-20 bg-[#ff7700]"
      aria-label="Call to Action"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {showLogo && (
              <motion.div
                layoutId="invogen-moving-logo"
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
                className="mb-6 flex"
              >
                <Link href="/" className="inline-block group select-none" aria-label="invogen.in Home">
                  <span className="text-2xl font-black tracking-tighter leading-none block">
                    Inv<span className="text-orange-200">ogen</span><span className="text-white">.in</span>
                  </span>
                </Link>
              </motion.div>
            )}
            <div className="text-orange-100 text-xs font-semibold uppercase tracking-widest mb-4">
              Get started today
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Start invoicing in
              <br />
              under 60 seconds.
            </h2>
            <p className="text-orange-100 text-sm leading-relaxed max-w-sm">
              Join 10,000+ Indian businesses who bill smarter with invogen.in. No setup fees. No contracts.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <ul className="flex flex-col gap-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-orange-50">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                id="final-cta-trial"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-[#ff7700] bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Start for Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="final-cta-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white border-2 border-white/40 rounded-xl hover:border-white/70 transition-colors cursor-pointer"
              >
                Book a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
