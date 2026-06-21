import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LinkedInButton from "@/components/LinkedInButton";
import ServiceQuickNav from "@/components/ServiceQuickNav";

export const metadata: Metadata = {
  title: "JBB Business Advisors Private Limited | CA, Tax, Legal & Compliance Advisory",
  description:
    "JBB Business Advisors Private Limited — a leading CA, tax, legal, compliance, and business advisory firm based in Gurgaon. Expert guidance for GST, income tax, company law, FEMA, and more.",
  keywords: [
    "business advisory",
    "CA firm Gurgaon",
    "tax consultant",
    "GST compliance",
    "company secretary",
    "legal advisory",
    "FEMA compliance",
    "JBB Business Advisors",
  ],
  authors: [{ name: "JBB Business Advisors Private Limited" }],
  openGraph: {
    type: "website",
    title: "JBB Business Advisors Private Limited",
    description:
      "Expert CA, Tax, Legal & Compliance advisory services in Gurgaon, India.",
    siteName: "JBB Business Advisors",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <Navbar />
        <ServiceQuickNav />
        <main>{children}</main>
        <Footer />
        <LinkedInButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
