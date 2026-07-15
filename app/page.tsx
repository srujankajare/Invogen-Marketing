import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

import Features from "@/components/sections/Features";
import UsedAcrossIndia from "@/components/sections/UsedAcrossIndia";
import InvoiceShowcase from "@/components/sections/InvoiceShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import Templates from "@/components/sections/Templates";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-white overflow-x-clip" style={{
      backgroundImage: "radial-gradient(circle, rgba(255, 119, 0, 0.035) 1.2px, transparent 1.2px)",
      backgroundSize: "32px 32px"
    }}>
      {/* ── Ambient Glowing Blobs to Connect Sections ── */}
      <div className="absolute top-[12vh] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FF7A00]/4 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[80vh] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF7A00]/3 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[180vh] right-[-5%] w-[550px] h-[550px] rounded-full bg-[#FF7A00]/3 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[280vh] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#FF7A00]/4.5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[380vh] right-[-8%] w-[600px] h-[600px] rounded-full bg-[#FF7A00]/3.5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[480vh] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#FF7A00]/4 blur-[140px] pointer-events-none z-0" />

      <Navbar />
      <Hero />

      <Features />
      <UsedAcrossIndia />
      <InvoiceShowcase />
      <HowItWorks />
      <Templates />
      <WhyChooseUs />

      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
