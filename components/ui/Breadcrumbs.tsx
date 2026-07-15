"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  transparent?: boolean;
}

export default function Breadcrumbs({ items, transparent }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full px-4 sm:px-6 lg:px-10 py-3 relative z-10 transition-colors ${
        transparent
          ? "bg-transparent border-transparent"
          : "border-b border-slate-100/60 bg-white/60 backdrop-blur-sm"
      }`}
    >
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: allItems.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              item: item.href ? `https://invogen.in${item.href}` : undefined,
            })),
          }),
        }}
      />
      <ol className="flex items-center gap-1.5 text-sm max-w-7xl mx-auto">
        {allItems.map((item, i) => {
          const isLast = i === allItems.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i === 0 && (
                <Home className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              )}
              {isLast ? (
                <span
                  className="font-semibold text-[#ff7700]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href!}
                  className="text-slate-500 hover:text-[#ff7700] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
