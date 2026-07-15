import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  transparentBreadcrumbs?: boolean;
}

export default function PageLayout({
  children,
  breadcrumbs,
  bgImage,
  transparentBreadcrumbs,
}: PageLayoutProps) {
  const bgStyle = bgImage
    ? {
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "100% 100vh",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage:
          "radial-gradient(circle, rgba(255, 119, 0, 0.025) 1.2px, transparent 1.2px)",
        backgroundSize: "32px 32px",
      };

  return (
    <div
      className="relative bg-white overflow-x-clip min-h-screen"
      style={bgStyle}
    >
      {/* Ambient glows */}
      {!bgImage && (
        <>
          <div className="absolute top-[5vh] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF7A00]/3 blur-[130px] pointer-events-none z-0" />
          <div className="absolute top-[60vh] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#FF7A00]/3 blur-[120px] pointer-events-none z-0" />
        </>
      )}

      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="pt-16" />

      <Breadcrumbs items={breadcrumbs} transparent={transparentBreadcrumbs} />

      <main className="relative z-10">{children}</main>

      <Footer />
    </div>
  );
}
