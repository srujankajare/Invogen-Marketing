import type { Metadata } from "next";
import { Anton, Bebas_Neue, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "invogen",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  description:
    "Generate branded invoices, accept UPI payments, track invoice status, and grow your business — all from one beautifully designed platform. GST-ready, WhatsApp sharing, and more.",
  keywords: [
    "invoice generator",
    "GST invoice",
    "UPI payment",
    "billing software",
    "invoice maker",
    "online invoicing",
    "freelancer invoice",
    "business invoice",
  ],
  authors: [{ name: "invogen.in" }],
  creator: "invogen.in",
  publisher: "invogen.in",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://invogen.in",
    siteName: "invogen.in",
    title: "invogen",
    description:
      "Generate branded invoices, accept UPI payments, track invoice status, and grow your business — all from one beautifully designed platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "invogen.in — Professional Invoice Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "invogen",
    description:
      "Generate branded invoices, accept UPI payments, track invoice status, and grow your business.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://invogen.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${bebasNeue.variable} ${anton.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ff7700" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
