import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ClipboardCheck, BarChart3, ShieldCheck, FileText,
  TrendingUp, BookOpen, CheckCircle2, ChevronDown, ArrowRight,
  Clock, Shield, MessagesSquare, Layers, MessageSquare, PhoneCall,
  FileSpreadsheet, Building2, Globe, Receipt, Users, Lightbulb,
} from "lucide-react";

export const metadata = {
  title: "Accounting, Reporting & Assurance Services | JBB Business Advisors",
  description: "Accounting outsourcing, MIS reporting, financial statement preparation, fractional CFO services, and assurance & financial review — expert CA-led finance services in Gurgaon.",
};

/* ─── Sub-Services ──────────────────────────────────────────── */
const subServices = [
  {
    icon: BookOpen,
    title: "Accounting Outsourcing Services",
    what: "Accounting outsourcing involves delegating your day-to-day financial operations to a team of professionals who manage your books with accuracy, consistency, and compliance. This includes recording transactions, maintaining ledgers, managing payables and receivables, performing reconciliations, and preparing periodic financial reports.",
    why: "Inaccurate or delayed financial records can lead to poor decision-making, compliance risks, and cash flow issues. Outsourcing helps businesses reduce operational costs, eliminate dependency on in-house resources, and gain access to expert knowledge without the burden of managing a full-time accounting team.",
    how: [
      "Setting up and streamlining your accounting systems and processes",
      "Maintaining accurate and real-time books of accounts",
      "Handling vendor, customer, and bank reconciliations",
      "Preparing periodic financial statements and MIS reports",
      "Ensuring compliance with applicable accounting standards and tax regulations",
      "Providing ongoing support and insights to improve financial efficiency",
    ],
  },
  {
    icon: BarChart3,
    title: "MIS and Management Reporting",
    what: "MIS and Management Reporting involve the preparation and presentation of structured financial and operational reports that provide a clear view of business performance. These reports include key metrics, variance analysis, cash flow summaries, budget comparisons, and customized dashboards tailored to management needs.",
    why: "Timely and accurate information is essential for effective decision-making. Without proper MIS, businesses often rely on incomplete or outdated data, leading to inefficiencies and missed opportunities. Well-designed management reports help track performance, identify trends, control costs, and improve profitability.",
    how: [
      "Understanding your business model and key performance drivers",
      "Designing customized MIS formats and reporting dashboards",
      "Preparing periodic reports (weekly / monthly / quarterly)",
      "Conducting variance analysis (Actual vs Budget / Forecast)",
      "Providing actionable insights on profitability, cost control, and cash flow",
      "Assisting in budgeting and forecasting processes",
    ],
  },
  {
    icon: FileText,
    title: "Financial Statement Preparation",
    what: "Financial Statement Preparation involves transforming your day-to-day accounting data into structured, compliant, and decision-ready financial statements — including the Profit & Loss Account, Balance Sheet, Cash Flow Statement, and detailed schedules and notes that explain the numbers behind the business.",
    why: "Well-prepared financial statements are the foundation of every critical business and compliance decision. Inconsistent or poorly prepared financials can lead to incorrect business decisions, delays in audits and statutory filings, higher risk of non-compliance and penalties, and reduced confidence from investors, lenders, and stakeholders.",
    how: [
      "Converting raw accounting data into structured and meaningful financial statements",
      "Ensuring compliance with applicable accounting standards and regulatory formats",
      "Preparing detailed schedules, notes, and supporting workings for complete transparency",
      "Reviewing and identifying inconsistencies, gaps, or misclassifications",
      "Coordinating with auditors to ensure a smooth and efficient audit process",
      "Preparing audit-ready and filing-ready financials for statutory and regulatory purposes",
    ],
  },
  {
    icon: TrendingUp,
    title: "Fractional CFO Services",
    what: "Fractional CFO Services provide access to experienced financial leadership on a part-time or need-based basis, without the cost of hiring a full-time Chief Financial Officer. It involves strategic oversight of your finance function — covering financial planning, cash flow management, budgeting, risk assessment, and business decision support.",
    why: "As businesses grow, financial decisions become more complex. Without strategic financial oversight, companies often face poor cash flow management, unplanned expenses, inefficient capital allocation, and lack of clarity on profitability. A Fractional CFO brings structure, discipline, and forward-looking insights to your finances.",
    how: [
      "Developing financial strategies aligned with your business goals",
      "Preparing budgets, forecasts, and financial models",
      "Monitoring cash flows and working capital management",
      "Analyzing profitability, cost structures, and key business drivers",
      "Supporting decision-making on investments, expansion, and funding",
      "Acting as a bridge between management, investors, bankers, and auditors",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Assurance & Financial Review",
    what: "Assurance & Financial Review involves an independent and systematic evaluation of your financial records, reporting processes, and internal controls to ensure accuracy, reliability, and compliance. Unlike a full statutory audit, this service focuses on reviewing financial data, identifying inconsistencies, and validating whether the financial information truly reflects business performance.",
    why: "Inaccurate or unchecked financial data can lead to serious business and compliance risks. A structured financial review helps identify errors, omissions, or misclassifications; strengthens internal controls; ensures compliance with accounting standards; and improves reliability of financial reports for management and stakeholders.",
    how: [
      "Conducting detailed review of financial statements and underlying records",
      "Identifying discrepancies, unusual transactions, and potential risk areas",
      "Evaluating accounting practices and ensuring compliance with applicable standards",
      "Reviewing internal controls and suggesting improvements",
      "Performing analytical review and variance analysis to highlight key trends",
      "Assisting in preparing audit-ready financials and reducing audit adjustments",
    ],
  },
];

/* ─── Key Deliverables ──────────────────────────────────────── */
const deliverables = [
  "Accurate books of accounts with real-time financial data",
  "Periodic MIS reports and management dashboards",
  "Profit & Loss Account, Balance Sheet, and Cash Flow Statement",
  "Detailed schedules, notes, and supporting workings",
  "Budget vs Actuals variance analysis reports",
  "Cash flow planning and monitoring reports",
  "Financial models and scenario analysis",
  "Assurance review reports with observations and recommendations",
  "Pre-audit review and readiness support documentation",
  "Investor / lender ready financial reports",
];

/* ─── Why JBB ───────────────────────────────────────────────── */
const benefits = [
  { icon: CheckCircle2,   title: "CA-Led Finance Function",      desc: "Every engagement led by qualified Chartered Accountants — ensuring technical accuracy, regulatory compliance, and professional reliability." },
  { icon: Clock,          title: "Timely and Accurate Reporting", desc: "We focus on delivering financial information on time — so management can make informed decisions without delays." },
  { icon: Layers,         title: "Scalable Support",             desc: "Our services scale with your business — from a startup needing basic bookkeeping to an enterprise requiring full CFO-level oversight." },
  { icon: Shield,         title: "Strong Compliance Framework",  desc: "We ensure all financial records and statements are fully compliant with applicable accounting standards and regulatory requirements." },
  { icon: MessagesSquare, title: "Actionable Insights",          desc: "Beyond preparing numbers — we interpret them. We highlight trends, flag risks, and provide recommendations that drive better decisions." },
  { icon: Lightbulb,      title: "Strategic Financial Partner",  desc: "We act as your extended finance team — providing CFO-level thinking, financial discipline, and strategic clarity at every stage of growth." },
];

/* ─── Process ───────────────────────────────────────────────── */
const process = [
  { step: "01", title: "Business Understanding", desc: "We begin by understanding your business model, industry, existing systems, and the specific financial challenges you face." },
  { step: "02", title: "System & Process Setup",  desc: "We set up or streamline your accounting systems, chart of accounts, and reporting templates aligned with your requirements." },
  { step: "03", title: "Ongoing Execution",       desc: "Our team manages daily / weekly / monthly accounting operations, reconciliations, payroll, and statutory compliance tasks." },
  { step: "04", title: "Reporting & Review",      desc: "Periodic MIS reports, financial statements, and management dashboards are prepared, reviewed, and shared with stakeholders." },
  { step: "05", title: "Advisory & Insights",     desc: "We provide ongoing advisory on financial performance, cost control, cash flow, and key business decisions alongside reporting." },
];

/* ─── FAQs ──────────────────────────────────────────────────── */
const faqs = [
  { q: "What is accounting outsourcing and why should I consider it?", a: "Accounting outsourcing involves delegating your day-to-day financial operations — bookkeeping, reconciliations, payroll, statutory filings — to a dedicated team of professionals. It helps businesses reduce costs, improve accuracy, ensure timely compliance, and gain access to expert knowledge without managing a full-time accounting team. It is especially valuable for growing businesses and startups." },
  { q: "What is MIS reporting and how does it help management decisions?", a: "MIS (Management Information System) reporting transforms your financial data into structured reports — including key metrics, variance analysis, cash flow summaries, and budget comparisons — tailored to management needs. It provides timely, accurate information for strategic decision-making, performance tracking, and cost control." },
  { q: "Who needs Fractional CFO Services?", a: "Fractional CFO Services are ideal for growing businesses that need strategic financial leadership but may not yet require or afford a full-time CFO. This includes startups scaling operations, SMEs preparing for fundraising or expansion, and businesses facing complex financial decisions that need expert guidance on planning, cash flow, and profitability." },
  { q: "What is the difference between a financial review and a statutory audit?", a: "A statutory audit is a mandatory independent audit of financial statements required by law, resulting in a formal audit opinion. An assurance or financial review is a proactive, internal-purpose evaluation of financial records, controls, and reporting quality — designed to identify errors, strengthen controls, and ensure reliability without the scope and formality of a full audit." },
  { q: "Can JBB prepare financial statements compliant with Ind AS?", a: "Yes. Our team prepares financial statements compliant with applicable accounting standards — including Ind AS (Indian Accounting Standards) and IGAAP — along with detailed schedules, notes, and workings required for statutory filing, audit, and investor reporting." },
];

/* ─── Related Services ──────────────────────────────────────── */
const relatedServices = [
  { icon: Receipt,         title: "Direct & Indirect Taxation",  desc: "ITR filing, TDS compliance, tax planning, and assessment handling.", href: "/services/direct-tax" },
  { icon: FileSpreadsheet, title: "GST Advisory & Compliance",   desc: "GSTR filing, ITC reconciliation, GST audit, and notice handling.", href: "/services/gst-advisory" },
  { icon: ClipboardCheck,  title: "Company Law & Secretarial",   desc: "ROC filings, board resolutions, MCA21 compliance, and secretarial audit.", href: "/services/company-law-secretarial" },
  { icon: Building2,       title: "Business Incorporation",      desc: "Private Limited, LLP, OPC, and all entity types — end-to-end formation.", href: "/services/business-incorporation" },
];

export default function AuditAssurancePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="hero-gradient hero-bg-consulting relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[540px] h-[540px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>
        <div className="container-jbb relative z-10 py-24">
          <div className="flex items-center gap-2 mb-6 text-[11px]" style={{ color: "var(--color-grey-400)" }}>
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--color-gold-400)] transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: "var(--color-grey-200)" }}>Accounting, Reporting & Assurance</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Accounting, Reporting{" "}<span style={{ color: "var(--color-gold-500)" }}>& Assurance</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            From day-to-day bookkeeping to CFO-level strategic oversight — we ensure your financial data is accurate, timely, decision-ready, and fully compliant.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Accounting Outsourcing", "MIS Reporting", "Financial Statements", "Fractional CFO", "Assurance Review"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Accounting+and+Assurance+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Qualified Chartered Accountants", "Scalable Finance Support", "Compliance-First Approach", "CFO-Level Strategic Insights"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[11px] font-medium hero-label">
                <CheckCircle2 size={13} style={{ color: "var(--color-gold-500)", flexShrink: 0 }} />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div className="prose">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>Overview</span>
              </div>
              <h2 className="mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>
                Accurate Books. <span className="text-gradient-gold">Confident Decisions.</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                Efficient accounting is the backbone of every successful business. From maintaining accurate books of accounts to preparing decision-ready financial statements and providing CFO-level strategic guidance — JBB Business Advisors provides end-to-end finance support that scales with your business.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                We act as your extended finance team — delivering reliability, transparency, and strategic support so you can focus on growing your business with confidence. Our services cover everything from basic bookkeeping to complex management reporting and assurance review.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "5", label: "Core Service Areas" }, { value: "100+", label: "Clients Served" }, { value: "Ind AS", label: "Compliance Standards" }, { value: "CA-Led", label: "Every Engagement" }].map(({ value, label }) => (
                <div key={label} className="p-5 rounded text-center" style={{ background: "var(--color-grey-50)", border: "1px solid var(--color-grey-100)" }}>
                  <p className="font-bold mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", color: "var(--color-navy-900)" }}>{value}</p>
                  <div className="w-6 h-0.5 rounded mx-auto mb-2" style={{ background: "var(--color-gold-500)" }} />
                  <p className="text-[10px] uppercase tracking-widest leading-snug" style={{ color: "var(--color-grey-500)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUB-SERVICES (What / Why / How) ─────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="Our Services" title="What We Offer" accentWord="What We Offer" subtitle="Five integrated service areas that cover the full spectrum of accounting, financial reporting, and assurance needs for your business." align="center" />
          <div className="space-y-8">
            {subServices.map(({ icon: Icon, title, what, why, how }, idx) => (
              <div key={title} className="bg-white rounded border border-[var(--color-grey-100)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-4 px-8 py-5" style={{ background: "var(--color-navy-900)", borderBottom: "2px solid var(--color-gold-500)" }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.20)", border: "1px solid rgba(201,168,76,0.35)" }}>
                    <Icon size={18} style={{ color: "#d4b86a" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5" style={{ color: "var(--color-gold-400)" }}>Service {String(idx + 1).padStart(2, "0")}</p>
                    <h3 className="font-semibold text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>{title}</h3>
                  </div>
                </div>
                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-grey-100)]">
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>What it Means</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{what}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>Why it Matters</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{why}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>How JBB Can Help</p>
                    <ul className="space-y-2">
                      {how.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 size={11} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-600)" }} />
                          <span className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DELIVERABLES ────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>Deliverables</span>
              </div>
              <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>Key <span className="text-gradient-gold">Service Deliverables</span></h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every engagement delivers accurate, compliant, and decision-ready financial outputs — from bookkeeping records to strategic CFO reports and assurance documentation.</p>
            </div>
            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-200)] transition-colors duration-200">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-600)" }} />
                  <span className="text-sm" style={{ color: "var(--color-grey-700)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── WHY JBB ─────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />
        <div className="container-jbb relative z-10">
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for Accounting & Assurance" accentWord="JBB for Accounting" subtitle="Expert CA-led accounting, insightful management reporting, and strategic financial oversight — all under one roof." align="center" dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.28)" }}>
                  <Icon size={18} style={{ color: "#d4b86a" }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "0.92rem", color: "#ffffff" }}>{title}</h4>
                <p className="text-[11px] leading-relaxed" style={{ color: "#cbd5e1" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="How We Work" title="Our Engagement Process" accentWord="Engagement Process" subtitle="A five-step approach that takes your finance function from setup through to ongoing strategic reporting and advisory." align="center" />
          <div className="relative">
            <div className="absolute top-9 left-0 right-0 h-px hidden lg:block" style={{ background: "linear-gradient(to right, transparent, var(--color-gold-300), transparent)" }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center group">
                  <div className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-5 shrink-0 group-hover:shadow-[0_0_0_6px_rgba(201,168,76,0.15)] transition-all duration-300" style={{ background: "var(--color-navy-900)", border: "2px solid var(--color-gold-500)" }}>
                    <span className="font-bold text-base" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-400)" }}>{step}</span>
                  </div>
                  <h4 className="font-semibold mb-2 leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.88rem" }}>{title}</h4>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED SERVICES ────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading eyebrow="Also From JBB" title="Explore Related Services" accentWord="Related Services" subtitle="Discover other compliance and advisory services offered by JBB Business Advisors." align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map(({ icon: Icon, title, desc, href }) => (
              <div key={title} className="bg-[var(--color-grey-50)] p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group flex flex-col">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4 shrink-0 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300" style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }}>
                  <Icon size={16} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <h3 className="font-semibold mb-2 leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.9rem" }}>{title}</h3>
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--color-grey-600)" }}>{desc}</p>
                <Link href={href} className="inline-flex items-center gap-1.5 text-[11px] font-semibold transition-colors duration-200" style={{ color: "var(--color-gold-700)" }}>Learn More<ArrowRight size={11} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about accounting outsourcing, MIS reporting, fractional CFO, and financial review — answered clearly." align="center" />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }, idx) => (
              <details key={idx} open={idx === 0} className="group border border-[var(--color-grey-100)] rounded overflow-hidden" style={{ background: "var(--color-grey-50)" }}>
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none hover:bg-[var(--color-grey-100)] transition-colors duration-200">
                  <span className="font-semibold text-sm pr-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>{q}</span>
                  <ChevronDown size={16} className="shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: "var(--color-gold-600)" }} />
                </summary>
                <div className="px-6 pb-5 pt-1 prose"><p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{a}</p></div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200" style={{ color: "var(--color-gold-700)" }}>
              <ArrowRight size={14} className="rotate-180" />View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />
        <div className="absolute -right-16 top-0 bottom-0 w-72 bg-gradient-to-l from-[var(--color-gold-500)]/4 to-transparent pointer-events-none" />
        <div className="container-jbb text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-400)" }}>Get Started</p>
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
          </div>
          <h2 className="mb-4 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Ready to Strengthen Your <span style={{ color: "var(--color-gold-500)" }}>Finance Function?</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Whether you need bookkeeping, management reporting, financial statement preparation, or CFO-level guidance — connect with JBB Business Advisors for expert, reliable finance support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Accounting+and+Assurance+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
