"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutContent() {
  return (
    <div className="overflow-hidden bg-transparent">
      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-112px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-0">

          {/* Left: stacked invoice cards (renders second on mobile, first on desktop) */}
          <div className="md:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[500px] md:h-[600px] w-full max-w-xl mx-auto order-2 md:order-1 mt-6 md:mt-0">
            <motion.div
              initial={{ opacity: 0, rotate: 15, x: 20 }}
              whileInView={{ opacity: 1, rotate: 15, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, zIndex: 20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-[26%] sm:left-[28%] md:left-[8%] top-[2%] w-[230px] sm:w-[300px] md:w-[340px] lg:w-[370px] aspect-[1/1.41] rounded-lg shadow-[0_15px_45px_rgba(15,23,42,0.12)] overflow-hidden origin-center cursor-pointer bg-transparent"
              style={{ isolation: "isolate" }}
            >
              <img
                src="/Modern_Style.svg"
                alt="Modern Style Invoice Template"
                className="absolute max-w-none pointer-events-none"
                style={{ width: "308%", height: "auto", left: "50%", transform: "translateX(-50.3%) translateY(-8.0%)", top: "0" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 15, x: -40 }}
              whileInView={{ opacity: 1, rotate: 15, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, zIndex: 20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="absolute left-[2%] sm:left-[4%] md:left-[-15%] top-[10%] w-[230px] sm:w-[300px] md:w-[340px] lg:w-[370px] aspect-[1/1.41] rounded-lg shadow-[0_25px_50px_rgba(15,23,42,0.18)] overflow-hidden origin-center cursor-pointer z-10 bg-transparent"
              style={{ isolation: "isolate" }}
            >
              <img
                src="/GST_India_Compliant.svg"
                alt="GST India Compliant Invoice Template"
                className="absolute max-w-none pointer-events-none"
                style={{ width: "332%", height: "auto", left: "50%", transform: "translateX(-50.0%) translateY(-10.8%)", top: "0" }}
              />
            </motion.div>
          </div>

          {/* Right: headline text (renders first on mobile, second on desktop) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-end text-center md:text-right md:-mt-20 md:relative md:-top-10 w-full ml-auto order-1 md:order-2">
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[44px] sm:text-[58px] md:text-[70px] lg:text-[84px] xl:text-[94px] font-black text-[#FF3B30] leading-[1.05] tracking-tight block md:whitespace-nowrap text-center md:text-right relative md:-top-20"
            >
              WE ARE BUILDING
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-[44px] sm:text-[58px] md:text-[70px] lg:text-[84px] xl:text-[94px] font-black text-[#8C4F1D] leading-[1.05] tracking-tight block md:whitespace-nowrap text-center md:text-right relative md:-top-16"
            >
              THE FUTURE
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight block md:whitespace-nowrap text-center md:text-right relative md:-top-12 mt-2"
            >
              OF SMART INVOICING FOR
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight block md:whitespace-nowrap text-center md:text-right relative md:-top-12 mt-1"
            >
              EVERY BUSINESS IN INDIA
            </motion.span>
          </div>
        </div>
      </section>

      {/* ── Our Story Section ── */}
      <OurStorySection />

    </div>
  );
}

function OurStorySection() {
  return (
    <section 
      className="relative bg-white overflow-hidden py-16 [--our-story-size:75px] sm:[--our-story-size:130px] md:[--our-story-size:180px] lg:[--our-story-size:260px] [--headline-size:9.5px] sm:[--headline-size:13px] md:[--headline-size:17px] lg:[--headline-size:22px] [--headline-spacing:0.12em] sm:[--headline-spacing:0.18em] md:[--headline-spacing:0.22em] lg:[--headline-spacing:0.25em]" 
      style={{ padding: "0" }}
    >
      {/* Oversized editorial text container — clips top & bottom */}
      <div 
        className="relative flex items-center justify-center [--story-header-height:120px] sm:[--story-header-height:180px] md:[--story-header-height:220px] lg:[--story-header-height:260px]" 
        style={{ height: "var(--story-header-height)" }}
      >

        {/* Decorative oversized "OUR STORY" — gradient, cropped */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        >
          <motion.span
            initial={{ x: "-100%", opacity: 0, scaleX: 1.12 }}
            whileInView={{ x: 0, opacity: 1, scaleX: 1.12 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-black uppercase leading-none tracking-tighter whitespace-nowrap"
            style={{
              fontFamily: "var(--font-anton), 'Anton', 'sans-serif'",
              fontSize: "var(--our-story-size)",
              background: "linear-gradient(160deg, #FF3B30 0%, #FF7A3D 55%, #FFA87A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.05em",
              lineHeight: 1,
              maskImage: "linear-gradient(to bottom, #000 0%, #000 42%, transparent 42%, transparent 58%, #000 58%, #000 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 42%, transparent 42%, transparent 58%, #000 58%, #000 100%)",
            }}
          >
            OUR STORY
          </motion.span>
        </div>

        {/* Centered foreground headline — overlaps the giant text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h2
            className="font-bold text-[#1A1A1A] uppercase whitespace-nowrap"
            style={{
              fontSize: "var(--headline-size)",
              letterSpacing: "var(--headline-spacing)",
              fontFamily: "'Plus Jakarta Sans', 'Inter', 'General Sans', sans-serif",
            }}
          >
            Every Business Deserves Better Invoicing
          </h2>
        </motion.div>
      </div>

      {/* Story Narrative Content */}
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-16 sm:pt-10 sm:pb-20 text-center space-y-8 relative z-10">
        <motion.p
          {...fadeUp}
          className="text-gray-700 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Most invoice software is either too expensive, too complicated, or designed only for large businesses.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3 pt-2 pb-2"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            We started with one simple belief
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-[#0f172a] tracking-tight">
            “Creating an invoice should take minutes—not hours”
          </p>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Our goal is to build an invoice platform that works for everyone in India, whether you&apos;re issuing your first invoice or managing thousands every month.
        </motion.p>
      </div>
    </section>
  );
}


