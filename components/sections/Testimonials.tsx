"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    company: "Sharma Textiles",
    city: "Mumbai",
    role: "Owner",
    initials: "PS",
    rating: 5,
    text: "invogen.in cut my invoicing time from 2 hours a week to just 5 minutes. The GST auto-calculation alone is worth it — no more errors.",
    tag: "GST Invoicing",
  },
  {
    name: "Karthik Nair",
    company: "Pixel Craft Agency",
    city: "Bengaluru",
    role: "Founder",
    initials: "KN",
    rating: 5,
    text: "My clients always comment on how professional my invoices look. The WhatsApp sharing feature means I get paid the same day I send.",
    tag: "WhatsApp Sharing",
  },
  {
    name: "Rohit Deshmukh",
    company: "Deshmukh Tech Labs",
    city: "Pune",
    role: "Independent Developer",
    initials: "RD",
    rating: 5,
    text: "Creating compliant invoices used to be a chore. Now, I just pick a template, fill in the details, and share the PDF in seconds. Outstanding tool.",
    tag: "PDF Sharing",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#ff7700] text-[#ff7700]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 border-t border-gray-100"
      aria-label="Customer Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#ff7700] flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#ff7700]" />
            Customer Stories
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight max-w-md leading-tight">
              Real businesses. Real results.
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff7700] text-[#ff7700]" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#0f172a]">4.9</span>
              <span className="text-xs text-gray-400">from 2,400+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md hover:border-orange-200 transition-all duration-200"
            >
              {/* Rating */}
              <Stars count={t.rating} />

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Tag */}
              <span className="self-start text-[10px] font-semibold px-2.5 py-1 bg-orange-50 text-[#ff7700] rounded-full border border-orange-100">
                {t.tag}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#ff7700] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0f172a]">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role} · {t.company}, {t.city}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
