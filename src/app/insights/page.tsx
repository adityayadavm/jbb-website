import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import InsightsGrid from "@/components/InsightsGrid";
import NewsletterCTA from "@/components/NewsletterCTA";
import { BookOpen, Bell } from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata = {
  title: "Insights & Advisory Updates | JBB Business Advisors Private Limited",
  description:
    "Practical guidance, regulatory updates, tax insights, and business advisory perspectives from JBB Business Advisors — covering GST, income tax, corporate law, IBC, and more.",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function InsightsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO                                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-[60vh] flex items-center"
        style={{
          backgroundColor: "rgb(2,10,25)",
          backgroundImage: "linear-gradient(rgba(2,10,25,0.78), rgba(2,10,25,0.72)), url('/bg/hero-consulting.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
              Knowledge Hub
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-white mb-5 animate-fade-in-up delay-100 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Insights &{" "}
            <span style={{ color: "var(--color-gold-500)" }}>Advisory Updates</span>
          </h1>

          <p
            className="hero-p text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-200"
          >
            Practical guidance, regulatory updates, tax insights, and business
            advisory perspectives from JBB Business Advisors.
          </p>

          {/* Topic chips */}
          <div className="flex flex-wrap gap-2 mt-8 animate-fade-in-up delay-300">
            {["GST", "Income Tax", "Company Law", "IBC", "Audit", "International Tax", "Business Structuring"].map((chip) => (
              <span
                key={chip}
                className="hero-badge text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-xs" style={{ color: "var(--color-grey-400)" }}>
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-grey-200)" }}>Insights</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* INSIGHTS GRID (client — filter + cards)                 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <InsightsGrid />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* NEWSLETTER / STAY UPDATED CTA                           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />

        <div className="container-jbb relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.30)",
              }}
            >
              <Bell size={22} style={{ color: "#d4b86a" }} />
            </div>

            <SectionHeading
              eyebrow="Stay Informed"
              title="Stay Ahead of Regulatory Changes"
              accentWord="Regulatory Changes"
              subtitle="Follow JBB Insights for practical updates on taxation, compliance, audit, business structuring, and advisory matters that affect your business."
              align="center"
              dark
            />

            <NewsletterCTA />

            {/* Trust note */}
            <p
              className="text-[11px] mt-6 flex items-center justify-center gap-2"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <BookOpen size={11} />
              All insights are prepared by qualified Chartered Accountants and
              legal professionals at JBB Business Advisors.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FINAL CTA                                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/40 to-transparent" />

        <div className="container-jbb text-center relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
            <p
              className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-gold-600)" }}
            >
              Get Started
            </p>
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
          </div>

          <h2
            className="mb-4 mx-auto max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-navy-900)",
            }}
          >
            Need Advisory Support{" "}
            <span className="text-gradient-gold">for Your Business?</span>
          </h2>

          <p
            className="text-base leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "var(--color-grey-600)" }}
          >
            Our team of Chartered Accountants, Company Secretaries, advocates,
            and insolvency professionals is ready to guide you through complex
            regulatory and business challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">
              Book Consultation
            </Button>
            <Button as="link" href="/contact" variant="outline-navy" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
