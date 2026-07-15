import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/ui/PageLayout";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — invogen.in | Our Story, Mission & Team",
  description:
    "Learn about invogen.in — built to simplify invoicing for India's 63 million+ MSMEs, freelancers, and growing businesses. Our story, mission, values, and team.",
  openGraph: {
    title: "About Us — invogen.in",
    url: "https://invogen.in/about",
  },
};

export default function AboutPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "About Us" }]}
      bgImage="/about_bg.png"
      transparentBreadcrumbs={true}
    >
      <AboutContent />
    </PageLayout>
  );
}
