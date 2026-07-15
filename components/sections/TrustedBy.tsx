"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  ShoppingBag,
  Coffee,
  Factory,
  Lightbulb,
  Heart,
  Rocket,
  Building2,
  Palette,
  Monitor,
  Camera,
  Truck,
} from "lucide-react";

const categories = [
  { icon: Briefcase, label: "Freelancers" },
  { icon: Building2, label: "Agencies" },
  { icon: ShoppingBag, label: "Retail Stores" },
  { icon: Coffee, label: "Restaurants" },
  { icon: Factory, label: "Manufacturers" },
  { icon: Lightbulb, label: "Consultants" },
  { icon: Heart, label: "Healthcare" },
  { icon: Rocket, label: "Startups" },
  { icon: Palette, label: "Designers" },
  { icon: Monitor, label: "IT Firms" },
  { icon: Camera, label: "Photographers" },
  { icon: Truck, label: "Logistics" },
];

const doubled = [...categories, ...categories];

const stats = [
  { value: "10,000+", label: "Active Businesses" },
  { value: "5 Lakh+", label: "Invoices Generated" },
  { value: "₹250 Cr+", label: "Payments Processed" },
  { value: "4.9 / 5", label: "Average Rating" },
];

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="py-16 bg-gray-50 border-y border-gray-100 overflow-hidden"
      aria-label="Trusted by section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#ff7700] flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#ff7700]" />
              Used Across India
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
              Businesses of every kind choose invogen.in
            </h2>
          </div>
          <p className="text-sm text-gray-400 sm:text-right max-w-xs leading-relaxed">
            From solo freelancers to large enterprises — invogen.in works for everyone.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative" aria-label="Scrolling list of business categories">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f9fafb, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f9fafb, transparent)" }}
        />
        <div className="flex animate-marquee gap-4 w-max py-2">
          {doubled.map((cat, i) => (
            <div
              key={`${cat.label}-${i}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm whitespace-nowrap select-none"
            >
              <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                <cat.icon className="w-3.5 h-3.5 text-[#ff7700]" />
              </div>
              <span className="text-sm font-medium text-[#0f172a]">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mt-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="text-2xl md:text-3xl font-extrabold text-[#ff7700]">{stat.value}</span>
            <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
