import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing — invogen.in | Simple, Transparent Plans",
  description:
    "Flexible pricing for every Indian business. Start free, upgrade when you grow. GST invoicing, UPI payments, and more — from ₹0/month.",
  keywords: [
    "invoice software pricing India",
    "GST billing software price",
    "invoice generator free plan",
    "business billing subscription",
  ],
  openGraph: {
    title: "Pricing — invogen.in",
    description:
      "Simple, transparent pricing for Indian businesses. Start free or go unlimited from ₹499/month.",
    url: "https://invogen.in/pricing",
  },
};

export default function PricingPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Pricing" }]}>
      <PricingContent />
    </PageLayout>
  );
}
