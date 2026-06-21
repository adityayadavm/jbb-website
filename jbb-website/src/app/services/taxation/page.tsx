import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Receipt,
  FileSpreadsheet,
  FileCheck,
  TrendingUp,
  AlertCircle,
  Calculator,
  BarChart3,
  Scale,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Clock,
  Shield,
  MessagesSquare,
  Layers,
  MessageSquare,
  PhoneCall,
  Building2,
  Globe,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

/* ─── SEO Metadata ─────────────────────────────────────────── */
export const metadata = {
  title: "Direct & Indirect Taxation Services | JBB Business Advisors",
  description:
    "End-to-end tax planning, income tax return filing, GST compliance, TDS/TCS, tax assessments, and representation services for individuals, startups, SMEs, and businesses in Gurgaon.",
};

/* ─── Data ──────────────────────────────────────────────────── */
const serviceCards = [
  { icon: Receipt,       title: "Income Tax Return Filing",      desc: "Accurate preparation and e-filing of ITR for individuals, HUFs, firms, LLPs, and companies across all applicable ITR forms." },
  { icon: FileSpreadsheet, title: "GST Registration & Returns",  desc: "GST registration, GSTR-1, GSTR-3B, GSTR-9, GSTR-9C filing, ITC reconciliation, and e-invoicing compliance support." },
  { icon: FileCheck,     title: "TDS & TCS Compliance",          desc: "TDS deduction computation, challan payments, quarterly return filing (24Q/26Q/27Q), and Form 16/16A generation." },
  { icon: TrendingUp,    title: "Tax Planning & Optimisation",   desc: "Structured tax planning leveraging eligible deductions, exemptions, and investment options to reduce your overall tax burden legally." },
  { icon: AlertCircle,   title: "Tax Notices & Assessments",     desc: "Handling scrutiny notices, reassessment proceedings, and departmental queries with appropriate documentation and response drafting." },
  { icon: Calculator,    title: "Advance Tax Calculation",       desc: "Quarterly advance tax estimation and challan filing to avoid interest under Section 234B and 234C." },
  { icon: BarChart3,     title: "Capital Gains Advisory",        desc: "Computation and planning for short-term and long-term capital gains — property, securities, and other assets — including reinvestment options." },
  { icon: Scale,         title: "Representation Before Authorities", desc: "Professional representation before Income Tax Officers, GST authorities, and appellate forums to protect client interests." },
];

const deliverables = [
  "Individual and business ITR preparation and e-filing",
  "GST returns: GSTR-1, GSTR-3B, GSTR-9, GSTR-9C",
  "TDS/TCS computation and quarterly return filing",
  "Tax payment challan generation and payment support",
  "Documentation for assessments, notices, and appeals",
  "Compliance calendar with deadline tracking and alerts",
  "Advisory on deductions, exemptions, and tax-saving options",
  "Response drafting for Income Tax and GST department queries",
];

const benefits = [
  { icon: CheckCircle2,   title: "Accurate Filing",                desc: "Every return is reviewed by qualified CAs before submission — minimising errors and mismatch risk." },
  { icon: Clock,          title: "Deadline Tracking",              desc: "We manage your compliance calendar so you never miss an ITR, GST, or TDS due date." },
  { icon: TrendingUp,     title: "Practical Tax Planning",         desc: "Year-round planning — not just return filing — to help you reduce tax outgo within the law." },
  { icon: Shield,         title: "Assessment Support",             desc: "Experienced handling of notices, scrutiny, and appeals with proper documentation and representation." },
  { icon: MessagesSquare, title: "Transparent Communication",      desc: "Regular updates on filing status, dues, and regulatory changes that affect your tax position." },
  { icon: Layers,         title: "Integrated GST & Income Tax",    desc: "One team managing both direct and indirect taxes — ensuring consistency and reducing compliance gaps." },
];

const process = [
  { step: "01", title: "Initial Consultation",       desc: "We understand your business structure, income sources, and current compliance status to assess requirements." },
  { step: "02", title: "Document Collection",         desc: "We request the relevant documents: bank statements, Form 26AS, TDS certificates, invoices, and prior returns." },
  { step: "03", title: "Tax Review & Computation",   desc: "Our CA team prepares income computation, reviews deductions, and calculates final tax liability accurately." },
  { step: "04", title: "Filing / Representation",    desc: "Returns are filed on the portal or we represent before authorities with appropriate submissions." },
  { step: "05", title: "Compliance Follow-up",       desc: "Post-filing, we track acknowledgements, refund status, and flag any future compliance due dates." },
];

const faqs = [
  {
    q: "Do you handle both individual and business taxation?",
    a: "Yes. We provide taxation services for salaried individuals, HUFs, self-employed professionals, partnership firms, LLPs, private limited companies, and startups across all applicable ITR forms.",
  },
  {
    q: "Can JBB help with GST notices?",
    a: "Absolutely. We handle GST scrutiny notices, demand orders, and department queries — reviewing the notice, preparing a detailed response, and representing clients before GST authorities where required.",
  },
  {
    q: "Do you provide tax planning before filing?",
    a: "Yes. For most clients, we conduct a pre-filing tax planning review to identify eligible deductions under Chapter VI-A, HRA, LTA, capital gains reinvestment options, and other lawful tax-saving opportunities.",
  },
  {
    q: "Can you represent before tax authorities?",
    a: "Yes. Our team includes qualified CAs with experience in handling Income Tax scrutiny assessments, GST audits, and appeals before the Commissioner of Income Tax (Appeals) and GST appellate authorities.",
  },
  {
    q: "How often should a business review its tax compliance?",
    a: "Ideally, businesses should conduct a quarterly review — covering TDS compliance, GST returns, advance tax, and ITC reconciliation. An annual comprehensive review before ITR filing is essential for accuracy.",
  },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function TaxationPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════ */}
      {/* HERO                                                      */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="hero-gradient hero-bg-tax relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[540px] h-[540px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-[11px]" style={{ color: "var(--color-grey-400)" }}>
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--color-gold-400)] transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: "var(--color-grey-200)" }}>Taxation</span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>
              Service Area
            </span>
          </div>

          <h1
            className="text-white mb-5 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Direct &amp; Indirect{" "}
            <span style={{ color: "var(--color-gold-500)" }}>Taxation Services</span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mb-8" style={{ color: "var(--color-grey-300)" }}>
            End-to-end tax planning, return filing, compliance management, tax
            assessments, and representation support for individuals, startups,
            SMEs, and growing businesses.
          </p>

          {/* Service chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Income Tax", "GST", "TDS / TCS", "Tax Planning", "Assessments", "Representation"].map((chip) => (
              <span
                key={chip}
                className="text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full border border-white/15 bg-white/6 text-white/70"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">
              Book Consultation
            </Button>
            <a
              href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Taxation+Services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200"
              style={{
                fontSize: "0.875rem",
                padding: "1rem 2rem",
                color: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(255,255,255,0.28)",
                background: "transparent",
              }}
            >
              <MessageSquare size={15} />
              WhatsApp Us
            </a>
            <Link
              href="/contact?subject=Callback+Request"
              className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200"
              style={{
                fontSize: "0.875rem",
                padding: "1rem 2rem",
                color: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <PhoneCall size={14} />
              Request Callback
            </Link>
          </div>

          {/* ── Trust bar ── */}
          <div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {[
              "Qualified Chartered Accountants",
              "7+ Years Experience",
              "End-to-End Compliance Support",
              "Confidential Client Handling",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-[11px] font-medium"
                style={{ color: "rgba(255,255,255,0.62)" }}
              >
                <CheckCircle2 size={13} style={{ color: "var(--color-gold-500)", flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SERVICE OVERVIEW                                          */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div className="prose">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>
                  Overview
                </span>
              </div>
              <h2
                className="mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
              >
                Tax Compliance Made{" "}
                <span className="text-gradient-gold">Clear, Accurate & Timely</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                JBB Business Advisors helps clients manage direct and indirect
                tax obligations with precision. From income tax return filing and
                GST compliance to TDS, tax planning, notices, and assessments,
                our team ensures every requirement is handled professionally and
                on time.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                With a team of qualified Chartered Accountants experienced in
                both direct and indirect taxation, we provide integrated advisory
                that goes beyond routine compliance — helping businesses and
                individuals optimise their tax positions while staying fully
                compliant with Indian tax laws.
              </p>
            </div>

            {/* Stats box */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "7+",  label: "Years of Tax Practice" },
                { value: "50+", label: "Clients Served" },
                { value: "2",   label: "Tax Disciplines: Direct & Indirect" },
                { value: "3",   label: "Chartered Accountants on Team" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded text-center"
                  style={{ background: "var(--color-grey-50)", border: "1px solid var(--color-grey-100)" }}
                >
                  <p
                    className="font-bold mb-1"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 3vw, 2.2rem)", color: "var(--color-navy-900)" }}
                  >
                    {value}
                  </p>
                  <div className="w-6 h-0.5 rounded mx-auto mb-2" style={{ background: "var(--color-gold-500)" }} />
                  <p className="text-[10px] uppercase tracking-widest leading-snug" style={{ color: "var(--color-grey-500)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* WHAT WE HELP WITH                                         */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Our Scope"
            title="What We Help With"
            accentWord="Help With"
            subtitle="Comprehensive taxation services covering every compliance obligation and advisory need across direct and indirect taxes."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }}
                >
                  <Icon size={16} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <h3
                  className="font-semibold mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.9rem" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* KEY DELIVERABLES                                          */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>
                  Deliverables
                </span>
              </div>
              <h2
                className="mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
              >
                Key{" "}
                <span className="text-gradient-gold">Service Deliverables</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                Every engagement includes structured, documented outputs so you
                always know exactly what has been filed, submitted, and tracked on
                your behalf.
              </p>
            </div>

            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-200)] transition-colors duration-200"
                >
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-gold-600)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--color-grey-700)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* WHY CHOOSE JBB                                            */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />

        <div className="container-jbb relative z-10">
          <SectionHeading
            eyebrow="Why JBB"
            title="Why Choose JBB for Taxation"
            accentWord="JBB for Taxation"
            subtitle="Beyond just filing returns — we deliver structured, proactive tax management that protects and benefits your business."
            align="center"
            dark
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded group"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.28)" }}
                >
                  <Icon size={18} style={{ color: "#d4b86a" }} />
                </div>
                <h4
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.92rem", color: "#ffffff" }}
                >
                  {title}
                </h4>
                <p className="text-[11px] leading-relaxed" style={{ color: "#cbd5e1" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* PROCESS                                                   */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Taxation Engagement Process"
            accentWord="Engagement Process"
            subtitle="A structured five-step process ensures every client engagement is handled with accuracy, transparency, and care."
            align="center"
          />

          {/* Step timeline */}
          <div className="relative">
            {/* Connector line — desktop only */}
            <div
              className="absolute top-9 left-0 right-0 h-px hidden lg:block"
              style={{ background: "linear-gradient(to right, transparent, var(--color-gold-300), transparent)" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center group">
                  {/* Step number circle */}
                  <div
                    className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-5 shrink-0 group-hover:shadow-[0_0_0_6px_rgba(201,168,76,0.15)] transition-all duration-300"
                    style={{
                      background: "var(--color-navy-900)",
                      border: "2px solid var(--color-gold-500)",
                    }}
                  >
                    <span
                      className="font-bold text-base"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-400)" }}
                    >
                      {step}
                    </span>
                  </div>
                  <h4
                    className="font-semibold mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.88rem" }}
                  >
                    {title}
                  </h4>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* RELATED SERVICES                                          */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Also From JBB"
            title="Explore Related Services"
            accentWord="Related Services"
            subtitle="Discover other compliance and advisory services offered by JBB Business Advisors."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileSpreadsheet,
                title: "GST Advisory & Compliance",
                desc: "End-to-end GST registration, returns, ITC reconciliation, e-invoicing, and advisory for businesses of all sizes.",
                href: "/services/gst-advisory",
              },
              {
                icon: Building2,
                title: "Company Law & Secretarial",
                desc: "ROC filings, board resolutions, MCA21 compliance, incorporation, and full secretarial practice under the Companies Act.",
                href: "/services",
              },
              {
                icon: ClipboardCheck,
                title: "Audit & Assurance",
                desc: "Statutory audits, internal audits, forensic accounting, and management audits conducted with technical rigour.",
                href: "/services",
              },
              {
                icon: Globe,
                title: "FEMA & RBI Compliance",
                desc: "Foreign exchange compliance, RBI reporting, FDI/ODI structuring, and FEMA advisory for cross-border transactions.",
                href: "/services",
              },
            ].map(({ icon: Icon, title, desc, href }) => (
              <div
                key={title}
                className="bg-[var(--color-grey-50)] p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4 shrink-0 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }}
                >
                  <Icon size={16} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <h3
                  className="font-semibold mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.9rem" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--color-grey-600)" }}>
                  {desc}
                </p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold transition-colors duration-200"
                  style={{ color: "var(--color-gold-700)" }}
                >
                  Learn More
                  <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* FAQ                                                       */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            accentWord="Asked Questions"
            subtitle="Common questions about JBB's taxation services answered clearly."
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group border border-[var(--color-grey-100)] rounded overflow-hidden"
                style={{ background: "var(--color-grey-50)" }}
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none hover:bg-[var(--color-grey-100)] transition-colors duration-200">
                  <span
                    className="font-semibold text-sm pr-4"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    size={16}
                    className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                    style={{ color: "var(--color-gold-600)" }}
                  />
                </summary>
                <div className="px-6 pb-5 pt-1 prose">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Back to services */}
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: "var(--color-gold-700)" }}
            >
              <ArrowRight size={14} className="rotate-180" />
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* FINAL CTA                                                 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />
        <div className="absolute -right-16 top-0 bottom-0 w-72 bg-gradient-to-l from-[var(--color-gold-500)]/4 to-transparent pointer-events-none" />

        <div className="container-jbb text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-400)" }}>
              Get Started
            </p>
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
          </div>

          <h2
            className="mb-4 mx-auto max-w-2xl"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Need Reliable Tax Advisory and{" "}
            <span style={{ color: "var(--color-gold-500)" }}>Compliance Support?</span>
          </h2>

          <p
            className="text-base leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Speak with JBB Business Advisors for accurate filing, timely
            compliance, and practical taxation guidance tailored to your
            business needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">
              Book Consultation
            </Button>
            <a
              href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Taxation+Services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200"
              style={{
                fontSize: "0.875rem",
                padding: "1rem 2rem",
                color: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(255,255,255,0.28)",
                background: "transparent",
              }}
            >
              <MessageSquare size={15} />
              WhatsApp Us
            </a>
            <Link
              href="/contact?subject=Callback+Request"
              className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200"
              style={{
                fontSize: "0.875rem",
                padding: "1rem 2rem",
                color: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <PhoneCall size={14} />
              Request Callback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
