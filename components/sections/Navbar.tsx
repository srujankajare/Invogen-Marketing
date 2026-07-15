"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", sectionId: "hero" },
  { href: "/about", label: "About", sectionId: null },
  { href: "https://app.invogen.in/plans", label: "Pricing", sectionId: null },
  { href: "/#features", label: "Features", sectionId: "features" },
  { href: "/#workflow", label: "Workflow", sectionId: "workflow" },
  { href: "/contact", label: "Contact", sectionId: null },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      // Active section detection (homepage only)
      const sections = ["pricing", "templates", "workflow", "features", "hero"];
      let found = false;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActiveSection(id);
          found = true;
          break;
        }
      }
      if (!found && window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileOpen(false);
    if (link.sectionId && isHomePage) {
      document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (!isHomePage) {
      // On inner pages: match by pathname
      if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
        return pathname === link.href;
      }
      return false;
    }
    // On homepage: match by scroll section
    return link.sectionId ? activeSection === link.sectionId : false;
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md border-b border-orange-500/10 shadow-[0_4px_30px_rgba(255,119,0,0.03)]"
            : "bg-transparent backdrop-blur-none border-b border-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="invogen.in Home"
            >
              <Image
                src="/logo-v2.png"
                alt="invogen.in logo"
                width={48}
                height={48}
                className="object-contain bg-transparent transition-transform group-hover:scale-105"
                priority
              />
              <span className="text-2xl font-black tracking-tight text-[#0f172a]">
                invo<span className="text-[#ff7700]">gen</span><span className="text-[#0f172a]">.in</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                const isExternal = link.sectionId && isHomePage;
                return isExternal ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      active ? "text-[#ff7700]" : "text-gray-600 hover:text-[#ff7700]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff7700]"
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                    rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      active ? "text-[#ff7700]" : "text-gray-600 hover:text-[#ff7700]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff7700]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">

              <a
                href="https://app.invogen.in/login?portal=admin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7700]/10 hover:bg-[#ff7700]/20 text-[#ff7700] transition-all cursor-pointer border border-[#ff7700]/20"
                  id="nav-profile"
                  aria-label="Profile"
                >
                  <UserCircle size={22} strokeWidth={1.8} />
                </motion.button>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#ff7700] hover:bg-orange-50 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-md md:hidden"
          >
            <div className="w-full px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const active = isLinkActive(link);
                const isScrollLink = link.sectionId && isHomePage;
                return isScrollLink ? (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link)}
                    className={`text-left px-4 py-3 text-lg font-semibold rounded-xl transition-colors cursor-pointer ${
                      active ? "text-[#ff7700] bg-orange-50" : "text-gray-700 hover:text-[#ff7700] hover:bg-orange-50"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      target={link.href.startsWith("https://") ? "_blank" : undefined}
                      rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-lg font-semibold rounded-xl transition-colors ${
                        active ? "text-[#ff7700] bg-orange-50" : "text-gray-700 hover:text-[#ff7700] hover:bg-orange-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 mt-2">

                <a
                  href="https://app.invogen.in/login?portal=admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-lg font-semibold text-[#ff7700] text-center rounded-xl border border-[#ff7700]/30 bg-[#ff7700]/5 hover:bg-[#ff7700]/10 transition-colors cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <UserCircle size={20} strokeWidth={1.8} />
                  Profile
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
