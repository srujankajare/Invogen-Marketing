"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Acceptance & Notice" },
  { id: "contact-us", label: "1. Who We Are" },
  { id: "service", label: "2. Description of Service" },
  { id: "eligibility", label: "3. Eligibility & Accounts" },
  { id: "content", label: "4. Workspaces & Content" },
  { id: "plans", label: "5. Plans & Fees" },
  { id: "cancellation", label: "6. Cancellation & Refunds" },
  { id: "acceptable-use", label: "7. Acceptable Use" },
  { id: "support", label: "8. Support & Availability" },
  { id: "intellectual-property", label: "9. Intellectual Property" },
  { id: "privacy", label: "10. Privacy & Data" },
  { id: "disclaimers", label: "11. Disclaimers" },
  { id: "liability", label: "12. Limitation of Liability" },
  { id: "indemnity", label: "13. Indemnity" },
  { id: "suspension", label: "14. Suspension & Termination" },
  { id: "changes", label: "15. Changes to Terms" },
  { id: "marketing", label: "16. Marketing" },
  { id: "governing-law", label: "17. Governing Law" },
  { id: "general", label: "18. General" },
  { id: "queries", label: "19. Legal Queries" },
];

export default function TermsSidebar() {
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden lg:block w-56 shrink-0 sticky top-24 self-start">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
        On this page
      </p>
      <nav>
        <ul className="space-y-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? "bg-[#ff7700]/10 text-[#ff7700] font-semibold border-l-2 border-[#ff7700]"
                    : "text-slate-500 hover:text-[#0f172a] hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
