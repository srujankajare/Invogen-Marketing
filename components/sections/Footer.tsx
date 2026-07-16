"use client";

import { motion } from "framer-motion";

// Inline SVGs for social platforms (lucide-react v0.500+ removed branded icons)


const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Workflow", href: "/#workflow" },
    { label: "Templates", href: "/#templates" },
    { label: "Pricing", href: "/pricing" },
  ],

  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/invogen.in?igsh=dzhzcHY1NDJ4Z3E2", label: "Instagram" },
  { icon: YoutubeIcon, href: "https://youtube.com/@user-invogen?si=8YNeF_rBsoPdr51o", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden" role="contentinfo">
      {/* Subtle warm orange gradient bloom */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[450px] h-[450px] rounded-full bg-[#ff7700]/4.5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[8%] top-[-10%] w-[350px] h-[350px] rounded-full bg-[#ff7700]/3.5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Giant Centered Text Logo */}
        <div className="w-full flex justify-center mb-16 border-b border-white/5 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-center"
          >
            <Link href="/" className="inline-block group select-none" aria-label="invogen.in Home">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[115px] font-black tracking-tighter leading-none block">
                Inv<span className="text-[#ff7700]">ogen</span><span className="text-white">.in</span>
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              The smartest invoice generator for Indian businesses. Create, send,
              and get paid — all in one place.
            </p>

            <div className="flex gap-2.5" role="list" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  role="listitem"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff7700]/70 hover:bg-[#ff7700]/15 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <social.icon />
                </a>
              ))}
            </div>


          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label} role="listitem">
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#ff7700] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>



        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Copyright © 2026{" "}
            <span className="text-[#ff7700]">invogen.in</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
