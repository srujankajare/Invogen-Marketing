"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  BookOpen,
  Menu,
  X,
  Copy,
  Check,
  Zap,
  Code2,
} from "lucide-react";

// ─── Sidebar Data ──────────────────────────────────────────────────
const sidebarSections = [
  {
    title: "Getting Started",
    items: ["Introduction", "Quick Start", "Authentication", "Rate Limits"],
  },
  {
    title: "Invoice API",
    items: ["List Invoices", "Create Invoice", "Update Invoice", "Delete Invoice"],
  },
  {
    title: "Client API",
    items: ["List Clients", "Create Client", "Update Client"],
  },
  {
    title: "Webhooks",
    items: ["Overview", "Events", "Payload Format"],
  },
  {
    title: "SDKs",
    items: ["JavaScript SDK", "Python SDK", "PHP SDK"],
  },
];

// ─── Code Blocks ───────────────────────────────────────────────────
const curlAuthExample = `curl -X GET 'https://api.invogen.in/v1/invoices' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'`;

const createInvoiceExample = `curl -X POST 'https://api.invogen.in/v1/invoices' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "client_id": "cli_abc123",
    "items": [
      {
        "description": "Web Design Services",
        "quantity": 1,
        "unit_price": 25000,
        "gst_rate": 18
      }
    ],
    "due_date": "2026-07-30",
    "currency": "INR"
  }'`;

const invoiceResponseExample = `{
  "success": true,
  "data": {
    "id": "inv_xK9mP2qRtL",
    "invoice_number": "INV-2026-0042",
    "status": "draft",
    "client_id": "cli_abc123",
    "subtotal": 25000,
    "gst_amount": 4500,
    "total": 29500,
    "currency": "INR",
    "due_date": "2026-07-30",
    "created_at": "2026-06-30T10:45:00Z",
    "pdf_url": "https://cdn.invogen.in/invoices/inv_xK9mP2qRtL.pdf",
    "upi_qr_url": "https://cdn.invogen.in/qr/inv_xK9mP2qRtL.png"
  }
}`;

// ─── Code Block Component ──────────────────────────────────────────
function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-5">
      <div className="flex items-center justify-between bg-[#0f172a] rounded-t-xl px-4 py-2.5 border-b border-white/10">
        <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="bg-[#0f172a] text-green-400 p-4 rounded-b-xl text-xs overflow-x-auto font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ─── Badge Component ───────────────────────────────────────────────
function HttpBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-emerald-100 text-emerald-700",
    POST: "bg-blue-100 text-blue-700",
    PUT: "bg-amber-100 text-amber-700",
    DELETE: "bg-red-100 text-red-700",
    PATCH: "bg-purple-100 text-purple-700",
  };
  return (
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded font-mono ${colors[method] ?? "bg-slate-100 text-slate-700"}`}
    >
      {method}
    </span>
  );
}

// ─── Main Content ──────────────────────────────────────────────────
function QuickStartContent() {
  return (
    <motion.div
      key="quick-start"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#ff7700] rounded-xl flex items-center justify-center shadow-md shadow-orange-200">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-[#0f172a] font-heading">
            Quick Start Guide
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-0.5">invogen.in API v1</p>
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed mb-6">
        The invogen.in REST API gives you programmatic access to invoices, clients,
        and payments. Use it to embed invoice generation into your own product, automate
        billing workflows, or build custom integrations. All requests use HTTPS and
        return JSON responses.
      </p>

      {/* Base URL */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-[#0f172a] mb-3 font-heading flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#ff7700]" />
          Base URL
        </h2>
        <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-3 font-mono text-sm text-[#ff7700] font-semibold">
          https://api.invogen.in/v1
        </div>
      </div>

      {/* Authentication */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-[#0f172a] mb-2 font-heading">
          Authentication
        </h2>
        <p className="text-slate-600 text-sm mb-1 leading-relaxed">
          All API requests require a Bearer token. Generate your API key from{" "}
          <a href="#" className="text-[#ff7700] underline underline-offset-2 font-medium hover:opacity-80">
            Settings → API Keys
          </a>
          . Never expose your key in client-side code.
        </p>
        <CodeBlock
          code={`# Pass your API key in the Authorization header\nAuthorization: Bearer YOUR_API_KEY`}
          language="http"
        />
        <h3 className="text-sm font-bold text-[#0f172a] mb-2 mt-4">Example Request</h3>
        <CodeBlock code={curlAuthExample} language="bash" />
      </div>

      {/* Create Invoice */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-[#0f172a] mb-2 font-heading flex items-center gap-3">
          Create an Invoice
          <HttpBadge method="POST" />
          <span className="text-xs font-mono text-slate-400 font-normal">
            /invoices
          </span>
        </h2>
        <p className="text-slate-600 text-sm mb-3 leading-relaxed">
          Creates a new invoice in draft state. GST (CGST + SGST or IGST) is
          automatically computed based on client state and HSN/SAC codes.
          A UPI QR code and PDF are generated instantly.
        </p>
        <CodeBlock code={createInvoiceExample} language="bash" />
      </div>

      {/* Response Format */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-[#0f172a] mb-2 font-heading">
          Response Format
        </h2>
        <p className="text-slate-600 text-sm mb-3 leading-relaxed">
          All responses follow a consistent envelope:
        </p>
        <CodeBlock code={invoiceResponseExample} language="json" />

        {/* Response field table */}
        <div className="overflow-x-auto rounded-xl border border-slate-100 mt-4">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#0f172a] text-xs uppercase tracking-wide">
                  Field
                </th>
                <th className="text-left px-4 py-3 font-semibold text-[#0f172a] text-xs uppercase tracking-wide">
                  Type
                </th>
                <th className="text-left px-4 py-3 font-semibold text-[#0f172a] text-xs uppercase tracking-wide">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                ["id", "string", "Unique invoice identifier prefixed with inv_"],
                ["invoice_number", "string", "Human-readable invoice number (e.g. INV-2026-0042)"],
                ["status", "string", "One of: draft, sent, viewed, paid, overdue"],
                ["gst_amount", "number", "Total GST computed (CGST + SGST or IGST)"],
                ["total", "number", "Final payable amount in the smallest currency unit"],
                ["pdf_url", "string", "Hosted, branded PDF URL for this invoice"],
                ["upi_qr_url", "string", "Pre-generated UPI QR code image URL"],
              ].map(([field, type, desc]) => (
                <tr key={field} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-[#ff7700] font-semibold">
                    {field}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-500">{type}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rate Limits */}
      <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">
        <h2 className="text-sm font-bold text-[#0f172a] mb-2 flex items-center gap-2 font-heading">
          <span className="w-5 h-5 bg-[#ff7700] rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-black">!</span>
          </span>
          Rate Limits
        </h2>
        <p className="text-sm text-slate-600">
          The API is rate-limited to <strong>100 requests / minute</strong> on the Free plan
          and <strong>1,000 requests / minute</strong> on Pro+. Exceeding limits returns{" "}
          <code className="bg-orange-100 px-1 py-0.5 rounded text-xs font-mono text-orange-700">
            429 Too Many Requests
          </code>
          .
        </p>
      </div>
    </motion.div>
  );
}

function PlaceholderContent({ section }: { section: string }) {
  return (
    <motion.div
      key={section}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.3 }}
      className="py-16 text-center"
    >
      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <BookOpen className="w-7 h-7 text-slate-400" />
      </div>
      <h1 className="text-2xl font-extrabold text-[#0f172a] mb-2 font-heading">
        {section}
      </h1>
      <p className="text-slate-400 max-w-sm mx-auto text-sm">
        This section is coming soon. Check back for the full{" "}
        <span className="text-[#ff7700] font-medium">{section}</span> documentation.
      </p>
    </motion.div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────
export default function DocsContent() {
  const [activeSection, setActiveSection] = useState("Quick Start");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between mb-6 bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ff7700] rounded-lg flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[#0f172a] font-heading text-sm">
            {activeSection}
          </span>
        </div>
        <button
          id="docs-sidebar-toggle"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {mobileSidebarOpen ? (
            <X className="w-5 h-5 text-slate-600" />
          ) : (
            <Menu className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.aside
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mb-6 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden"
          >
            <SidebarNav
              activeSection={activeSection}
              onSelect={(s) => {
                setActiveSection(s);
                setMobileSidebarOpen(false);
              }}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block flex-shrink-0 w-[280px]">
          <div className="sticky top-24 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-50 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ff7700] rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0f172a] font-heading leading-none">
                  invogen.in
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">API v1</p>
              </div>
            </div>
            <SidebarNav
              activeSection={activeSection}
              onSelect={setActiveSection}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 bg-white border border-slate-100 rounded-2xl shadow-sm p-7 lg:p-10">
          <AnimatePresence mode="wait">
            {activeSection === "Quick Start" ? (
              <QuickStartContent key="quick-start" />
            ) : (
              <PlaceholderContent key={activeSection} section={activeSection} />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// ─── Sidebar Nav ───────────────────────────────────────────────────
function SidebarNav({
  activeSection,
  onSelect,
}: {
  activeSection: string;
  onSelect: (section: string) => void;
}) {
  return (
    <nav className="p-3 space-y-0.5 max-h-[70vh] overflow-y-auto no-scrollbar">
      {sidebarSections.map((section) => (
        <div key={section.title} className="mb-1">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-2">
            {section.title}
          </p>
          {section.items.map((item) => (
            <button
              key={item}
              id={`docs-nav-${item.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => onSelect(item)}
              className={`w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-150 cursor-pointer ${
                activeSection === item
                  ? "bg-orange-50 text-[#ff7700] font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#0f172a]"
              }`}
            >
              <span>{item}</span>
              {activeSection === item && (
                <ChevronRight className="w-3.5 h-3.5 text-[#ff7700] flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}
