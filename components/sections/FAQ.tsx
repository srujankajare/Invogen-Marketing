"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "gst",
    question: "Can I create GST invoices?",
    answer:
      "Yes, invogen.in is fully GST-compliant. It automatically calculates CGST, SGST, and IGST based on intra-state or inter-state transactions. Just enter your GSTIN and your client's GSTIN — the system handles everything else.",
  },
  {
    id: "branding",
    question: "Can I add my own branding?",
    answer:
      "Absolutely. You can upload your company logo, set brand colors, add your signature, and customize the invoice header and footer. Business plan users get advanced options including custom fonts and watermarks.",
  },
  {
    id: "whatsapp",
    question: "Can I send invoices via WhatsApp?",
    answer:
      "Yes — with one click. invogen.in generates a shareable PDF link that you can send directly through WhatsApp. Your client can view, download, and pay directly from the link without any app.",
  },


  {
    id: "security",
    question: "Is my data safe?",
    answer:
      "Your data is encrypted in transit (TLS 1.3) and at rest (AES-256). We perform daily backups and store data on ISO 27001-certified servers in India. We never share your data with third parties.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("gst");

  return (
    <section
      id="faq"
      className="py-28 bg-[#F8F8F8] relative overflow-hidden border-t border-gray-100/50 flex items-center justify-center"
      style={{
        backgroundImage: "url('/FAQ.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="inline-flex flex-wrap items-center justify-center gap-2 text-[56px] sm:text-[68px] md:text-[72px] font-black text-black tracking-tight leading-none">
            Common Question
            <span className="text-[#ff7700] font-black text-[68px] sm:text-[80px] md:text-[90px] relative top-[-4px]">?</span>
          </h2>
        </motion.div>

        {/* Accordion List Container with 12px spacing between items */}
        <div className="flex flex-col gap-3" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                role="listitem"
                className="border border-[#E8A97A] rounded-[10px] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:brightness-[1.01] cursor-pointer bg-[#FBC39F]"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className={`w-full min-h-[56px] flex items-center justify-between px-6 py-4.5 text-left transition-colors duration-300 cursor-pointer ${
                    isOpen ? "bg-[#FF9A57]" : "bg-[#FBC39F]"
                  }`}
                >
                  <span className="text-[17px] sm:text-[19px] font-semibold text-[#0f172a] leading-tight">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0 text-black shadow-sm"
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="p-5 bg-[#FCE7DA] border-t border-[#E8A97A]/40 text-left">
                        <p className="text-[14px] sm:text-[15px] text-[#333] font-normal leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
