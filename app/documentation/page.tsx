import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import DocsContent from "./DocsContent";

export const metadata: Metadata = {
  title: "API Documentation — invogen.in | Developer Reference",
  description:
    "Complete API reference for invogen.in. Integrate invoice generation, client management, and payment tracking into your own application.",
  openGraph: {
    title: "API Documentation — invogen.in",
    url: "https://invogen.in/documentation",
  },
};

export default function DocumentationPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Documentation" }]}>
      <DocsContent />
    </PageLayout>
  );
}
