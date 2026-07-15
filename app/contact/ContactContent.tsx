"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1 },
});

const subjectOptions = [
  "General Inquiry",
  "Technical Support",
  "Billing",
  "Partnership",
  "Feature Request",
];

const officeInfo: Array<{ icon: string; label: string; value: string; href?: string }> = [
  {
    icon: "📍",
    label: "Address",
    value: "OFFICE NO.1 Marol Neartime Square, Andheri East, Mumbai, Maharashtra 400059.",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "contact@invogen.in",
    href: "mailto:contact@invogen.in",
  },
  {
    icon: "🕐",
    label: "Hours",
    value: "Monday–Friday, 9:00 AM – 6:00 PM IST",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactContent() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[#0f172a] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff7700]/40 transition-all";
  const inputNormal = `${inputBase} border-gray-200`;
  const inputError = `${inputBase} border-red-400 ring-2 ring-red-100`;

  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff7700]/6 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div {...stagger(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff7700]/30 bg-[#ff7700]/5 text-[#ff7700] text-sm font-medium mb-6">
              💬 We&apos;re here to help
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-black text-[#0f172a] leading-tight mb-4"
            {...stagger(1)}
          >
            Get in{" "}
            <span className="gradient-text">touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-500 leading-relaxed"
            {...stagger(2)}
          >
            Have a question, need support, or want to explore a partnership?
            We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* ── Contact Form ── */}
          <motion.div {...fadeUp} className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-black text-[#0f172a] mb-2">
                Send us a message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                We typically respond within one business day.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-4xl mb-5">
                    ✅
                  </div>
                  <h3 className="text-2xl font-black text-[#0f172a] mb-2">
                    Message received!
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    Thanks for reaching out. Our team will get back to you within
                    one business day at{" "}
                    <span className="text-[#ff7700] font-semibold">
                      {form.email}
                    </span>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-sm text-[#ff7700] underline underline-offset-2 hover:text-[#cc5f00] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Arjun Sharma"
                      className={errors.name ? inputError : inputNormal}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className={errors.email ? inputError : inputNormal}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`${errors.subject ? inputError : inputNormal} appearance-none bg-white`}
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                    >
                      <option value="">Select a subject…</option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help…"
                      className={`${errors.message ? inputError : inputNormal} resize-none`}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-shimmer text-white font-bold py-4 rounded-2xl text-base shadow-lg mt-2"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* ── Office Info + Map ── */}
          <motion.div
            {...stagger(1)}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Office card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-black text-[#0f172a] mb-6">
                Our Office
              </h2>
              <div className="space-y-5">
                {officeInfo.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7700]/8 flex items-center justify-center text-lg shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-[#0f172a] font-medium hover:text-[#ff7700] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#0f172a] font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visiting Card — 3D Flip on Hover */}
            <div className="flex items-center justify-center py-4">
              <div
                className="group"
                style={{
                  perspective: "1200px",
                  width: "100%",
                  maxWidth: "480px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%", /* 16:9 card ratio */
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="group-hover:[transform:rotateY(180deg)]"
                >
                  {/* Front face */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src="/card_front.png"
                      alt="invogen.in visiting card — front"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  {/* Back face */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src="/card_back.png"
                      alt="invogen.in visiting card — back"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </div>

                {/* Hint label */}
                <p className="text-center text-xs text-gray-400 mt-3 font-medium tracking-wide">
                  Hover to flip
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
