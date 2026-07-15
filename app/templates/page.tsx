import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import TemplatesContent from "./TemplatesContent";

export const metadata: Metadata = {
  title: "Invoice Templates — invogen.in | 10+ Professional Designs",
  description:
    "Browse 10+ professionally designed invoice templates for freelancers, startups, clinics, agencies, e-commerce, law firms and enterprises. GST-ready and fully customisable.",
  keywords: [
    "invoice templates India",
    "GST invoice template",
    "professional invoice design",
    "freelancer invoice template",
    "business invoice format",
  ],
  openGraph: {
    title: "Invoice Templates — invogen.in",
    description:
      "10+ professional invoice templates built for Indian businesses. Pick, customise, and send in minutes.",
    url: "https://invogen.in/templates",
  },
};

export default function TemplatesPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Templates" }]}>
      <TemplatesContent />
    </PageLayout>
  );
}
