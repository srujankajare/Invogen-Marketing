import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | invogen.in",
  description: "The page you are looking for does not exist. Return to invogen.in to create professional invoices.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 119, 0, 0.04) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF7A00]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[-10%] w-[400px] h-[400px] rounded-full bg-[#FF7A00]/4 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl">
        {/* Large 404 */}
        <div className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter mb-0">
          <span className="text-[#0f172a]">4</span>
          <span className="bg-gradient-to-r from-[#ff7700] to-[#ff9a3c] bg-clip-text text-transparent">0</span>
          <span className="text-[#0f172a]">4</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight mb-4 -mt-4">
          Page not found
        </h1>
        <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed mb-10">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#ff7700] to-[#ff8f1f] text-white text-sm font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all"
          >
            ← Back to Home
          </Link>
          <Link
            href="/help-center"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:border-[#ff7700] hover:text-[#ff7700] transition-all bg-white"
          >
            Visit Help Center
          </Link>
        </div>
      </div>

      {/* Footer note */}
      <p className="relative z-10 mt-16 text-xs text-slate-400 font-medium">
        © 2026 <span className="text-[#ff7700]">invogen.in</span> — Professional Invoice Generator for India
      </p>
    </div>
  );
}
