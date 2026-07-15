import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import HelpContent from "./HelpContent";

export const metadata: Metadata = {
  title: "Help Center — invogen.in | Support & Guides",
  description:
    "Find answers to your questions about invoicing, GST compliance, UPI payments, and more. Browse our help articles or contact support.",
  openGraph: {
    title: "Help Center — invogen.in",
    url: "https://invogen.in/help-center",
  },
};

export default function HelpCenterPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Help Center" }]}>
      <HelpContent />
    </PageLayout>
  );
}
