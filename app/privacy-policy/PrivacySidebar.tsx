"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Acceptance & Notice" },
  { id: "contact-us", label: "1. Who We Are" },
  { id: "scope", label: "2. Scope" },
  { id: "roles", label: "3. Roles" },
  { id: "collection", label: "4. Information We Collect" },
  { id: "usage", label: "5. How We Use Info" },
  { id: "legal-basis", label: "6. Legal Bases (India)" },
  { id: "sharing", label: "7. How We Share Info" },
  { id: "workspace-data", label: "8. Workspace Data" },
  { id: "cookies", label: "9. Cookies & Storage" },
  { id: "security", label: "10. Security" },
  { id: "retention", label: "11. Data Retention" },
  { id: "rights", label: "12. Your Rights & Choices" },
  { id: "children", label: "13. Children" },
  { id: "international", label: "14. Cross-Border Processing" },
  { id: "third-party", label: "15. Third-Party Services" },
  { id: "marketing", label: "16. Marketing Info" },
  { id: "changes", label: "17. Policy Changes" },
  { id: "governing-law", label: "18. Governing Law" },
  { id: "grievance", label: "19. Grievance & Contact" },
];

export default function PrivacySidebar() {
  const [activeSection, setActiveSection] = useState("introduction");

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
