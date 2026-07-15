import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — invogen.in | Get in Touch",
  description:
    "Reach out to the invogen.in team for support, billing questions, partnerships, or feature requests. We're here to help Indian businesses invoice smarter.",
  openGraph: {
    title: "Contact Us — invogen.in",
    url: "https://invogen.in/contact",
  },
};

export default function ContactPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Contact" }]}>
      <ContactContent />
    </PageLayout>
  );
}
