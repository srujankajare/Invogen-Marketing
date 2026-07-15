import type { Metadata } from "next";
import PageLayout from "@/components/ui/PageLayout";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — invogen.in | Invoicing Tips for Indian Businesses",
  description:
    "Tips, guides, and insights for Indian freelancers and business owners on invoicing, GST compliance, getting paid faster, and growing your business.",
  openGraph: {
    title: "Blog — invogen.in",
    url: "https://invogen.in/blog",
  },
};

export default function BlogPage() {
  return (
    <PageLayout breadcrumbs={[{ label: "Blog" }]}>
      <BlogContent />
    </PageLayout>
  );
}
