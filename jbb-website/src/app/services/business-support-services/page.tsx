import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Users, FileText, ClipboardCheck, BarChart3, Shield, Search,
  Globe, Layers, CheckCircle2, ChevronDown, ArrowRight,
  Clock, MessagesSquare, MessageSquare, PhoneCall,
  Building2, Receipt, FileSpreadsheet, TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Business Support Services | JBB Business Advisors",
  description: "Payroll outsourcing, staff outsourcing, secretarial & ROC compliances, fixed assets management, internal audit, stock audit, and sustainable development reporting — JBB Gurgaon.",
};

/* ─── Sub-Services ──────────────────────────────────────────── */
const subServices = [
  {
    icon: Users,
    title: "Payroll Outsourcing",
    what: "Payroll management involves accurate computation of salaries, statutory deductions, and compliance with labour laws. Errors or delays can lead to employee dissatisfaction and regulatory penalties.",
    scope: [
      "Accurate and timely salary processing",
      "Compliance with PF, ESI, TDS, and labour laws",
      "Proper maintenance of payroll records and reports",
      "Confidential handling of employee data",
      "Monthly payroll MIS and payslip generation",
      "Full and final settlement processing",
    ],
    value: "JBB ensures seamless payroll execution with complete statutory compliance and reporting accuracy — freeing management to focus on core business operations.",
  },
  {
    icon: Globe,
    title: "Staff Outsourcing",
    what: "Staff outsourcing helps businesses manage workforce requirements efficiently without the burden of direct employment complexities. It is especially useful for scaling operations, project-based hiring, and cost optimization.",
    scope: [
      "Flexibility in workforce management",
      "Reduced HR and administrative burden",
      "Compliance with labour and employment regulations",
      "Support for project-based and temporary staffing needs",
      "Onboarding, documentation, and exit management",
      "Focus on core business activities",
    ],
    value: "JBB facilitates reliable and compliant staffing solutions aligned with business needs — enabling cost-effective workforce management without the overhead of direct employment.",
  },
  {
    icon: ClipboardCheck,
    title: "Secretarial & ROC Compliances",
    what: "Companies are required to comply with various provisions under corporate laws, including regular filings with the Registrar of Companies (ROC). Non-compliance may lead to penalties, legal complications, and disqualification of directors.",
    scope: [
      "Incorporation-related filings and post-formation documentation",
      "Annual filings — AOC-4 (financial statements) and MGT-7 (annual return)",
      "Maintenance of statutory registers and records",
      "Board meeting and AGM documentation support",
      "Event-based compliances — director changes, share allotment, registered office change",
      "MCA21 filings and tracking",
    ],
    value: "JBB ensures timely and accurate secretarial compliance — minimising regulatory risks, avoiding penalties, and maintaining good corporate standing with the Registrar of Companies.",
  },
  {
    icon: BarChart3,
    title: "Fixed Assets Management",
    what: "Efficient management of fixed assets is essential for accurate financial reporting, correct tax computation, and operational control. Unmanaged or incorrectly recorded assets create audit risks and misstatements.",
    scope: [
      "Maintenance of fixed asset registers",
      "Asset tagging and identification",
      "Depreciation calculation as per Companies Act and Income Tax Act",
      "Tracking additions, disposals, and transfers",
      "Periodic physical verification of assets",
      "Reconciliation with books of accounts",
    ],
    value: "JBB helps businesses maintain transparency and control over their asset base — ensuring accurate financial reporting, correct depreciation, and clean audit outcomes.",
  },
  {
    icon: Search,
    title: "Internal Audit",
    what: "Internal audit is a key tool for evaluating internal controls, risk management systems, and operational efficiency. It helps identify weaknesses before they become significant business risks or compliance failures.",
    scope: [
      "Risk-based internal audit planning and execution",
      "Evaluation of internal controls and financial processes",
      "Identification of gaps, inefficiencies, and control weaknesses",
      "Review of operational processes and procedures",
      "Fraud risk assessment and prevention advisory",
      "Internal audit reports with actionable recommendations",
    ],
    value: "JBB delivers internal audits that go beyond checkbox compliance — providing management with honest, actionable insights that strengthen controls, reduce risk, and improve operational efficiency.",
  },
  {
    icon: FileText,
    title: "Stock Audit",
    what: "Stock audit involves the physical verification and valuation of inventory held by a business. It is commonly required by banks and financial institutions as part of working capital financing arrangements, and is also valuable as an internal control exercise.",
    scope: [
      "Physical verification of stock / inventory",
      "Reconciliation with book records and financial statements",
      "Valuation of inventory as per applicable norms",
      "Identification of slow-moving, obsolete, or excess stock",
      "Reporting to banks and financial institutions as required",
      "Internal stock audit for management control",
    ],
    value: "JBB ensures accurate and credible stock audit reports — meeting bank and lender requirements, strengthening inventory controls, and identifying opportunities to optimize working capital.",
  },
  {
    icon: Shield,
    title: "Sustainable Development & Sustainability Reporting",
    what: "Sustainable Development and Sustainability Reporting involves helping organizations measure, manage, and communicate their environmental, social, and governance (ESG) performance. It includes BRSR (Business Responsibility and Sustainability Report) compliance for listed companies and voluntary sustainability reporting for others.",
    scope: [
      "ESG framework assessment and gap analysis",
      "BRSR reporting for listed companies (as per SEBI requirements)",
      "Sustainability data collection and analysis",
      "GHG (greenhouse gas) emissions measurement and reporting",
      "Alignment with global frameworks — GRI, SASB, TCFD",
      "Advisory on sustainable business practices and governance",
    ],
    value: "JBB helps businesses build credible sustainability narratives — meeting regulatory requirements, satisfying investor and stakeholder expectations, and creating long-term business value through responsible practices.",
  },
];

/* ─── Deliverables ──────────────────────────────────────────── */
const deliverables = [
  "Monthly payroll processing and payslip generation",
  "PF, ESI, TDS, and professional tax compliance certificates",
  "Annual secretarial compliance calendar and filings (AOC-4, MGT-7)",
  "Board meeting and AGM documentation and minutes",
  "Fixed asset register with depreciation schedules",
  "Internal audit reports with risk ratings and recommendations",
  "Stock audit report with physical verification findings",
  "BRSR / ESG / sustainability reports (as applicable)",
  "MCA21 filings and ROC acknowledgement records",
  "Statutory registers and event-based compliance records",
];

/* ─── Why JBB ───────────────────────────────────────────────── */
const benefits = [
  { icon: CheckCircle2,   title: "Single Partner for All Support Needs",  desc: "From payroll and secretarial to internal audit and ESG — JBB provides integrated business support so you never need to manage multiple vendors." },
  { icon: Clock,          title: "Never Miss a Statutory Deadline",        desc: "We track every compliance deadline — ROC filings, payroll dates, board meetings, and audit timelines — with proactive reminders and execution." },
  { icon: Shield,         title: "Reduce Compliance Risk",                 desc: "Systematic, process-driven execution of every compliance obligation — reducing the risk of penalties, disqualification, and regulatory scrutiny." },
  { icon: Layers,         title: "Scalable Support for Every Stage",       desc: "Whether you are a startup needing basic payroll and secretarial support or a growing company requiring full-scale internal audit — we scale with you." },
  { icon: MessagesSquare, title: "Transparent Communication",              desc: "Regular compliance status updates, deadline trackers, and clear reporting — keeping you informed without operational burden." },
  { icon: BarChart3,      title: "Operational Efficiency",                 desc: "Outsourcing support functions to JBB frees your management to focus on core business activities while we handle the compliance backbone." },
];

/* ─── Process ───────────────────────────────────────────────── */
const process = [
  { step: "01", title: "Compliance Assessment",    desc: "We review your current compliance status, identify gaps, and understand your specific operational and regulatory requirements." },
  { step: "02", title: "Setup & Onboarding",       desc: "We set up systems, processes, registers, and compliance calendars tailored to your business — ensuring a smooth transition." },
  { step: "03", title: "Ongoing Execution",        desc: "Our team handles recurring compliance tasks — payroll, ROC filings, board documentation, asset registers, and periodic audits." },
  { step: "04", title: "Reporting & Review",       desc: "Structured reports, audit findings, and compliance summaries are shared with management on a regular basis." },
  { step: "05", title: "Advisory & Improvement",  desc: "We identify areas for improvement — in controls, processes, or compliance posture — and provide practical recommendations." },
];

/* ─── FAQs ──────────────────────────────────────────────────── */
const faqs = [
  { q: "What is payroll outsourcing and why should I consider it?", a: "Payroll outsourcing involves delegating salary computation, statutory deductions (PF, ESI, TDS), payslip generation, and compliance filings to a dedicated external team. It reduces the risk of errors, ensures full statutory compliance, protects confidentiality of employee compensation data, and frees HR and finance teams for higher-value tasks. It is particularly valuable for growing businesses that don't have a full-time payroll team." },
  { q: "What are the mandatory annual secretarial filings for a private limited company?", a: "Every private limited company must file AOC-4 (financial statements with MCA) and MGT-7 / MGT-7A (annual return) each year. Additional event-based filings are required for changes in directors, registered office, share capital, or other key events. JBB manages the full secretarial compliance calendar — ensuring all filings are completed accurately and on time." },
  { q: "Why is a stock audit important and when is it required?", a: "A stock audit is commonly required by banks and NBFCs as part of working capital financing — particularly for cash credit and overdraft limits secured against inventory. It verifies that the stock pledged as collateral actually exists and is correctly valued. Internally, a stock audit helps identify slow-moving or obsolete inventory, reconcile records, and strengthen inventory controls." },
  { q: "What is BRSR and who is required to file it?", a: "BRSR (Business Responsibility and Sustainability Report) is a mandatory disclosure requirement introduced by SEBI for the top 1,000 listed companies (by market capitalization) in India. It requires companies to report on environmental, social, and governance metrics across specified indicators. JBB assists listed companies with BRSR data collection, gap analysis, and full report preparation." },
  { q: "Can JBB conduct internal audits on a periodic basis?", a: "Yes. We offer quarterly or half-yearly internal audit retainers for companies requiring ongoing assurance. Each cycle produces a formal internal audit report with findings, risk ratings, management observations, and action plans — supporting board-level governance and oversight requirements." },
];

/* ─── Related Services ──────────────────────────────────────── */
const relatedServices = [
  { icon: Building2,       title: "Business Formation & Advisory",      desc: "All entity types — Pvt Ltd, LLP, OPC, Partnership, and more.", href: "/services/business-formation-advisory" },
  { icon: Receipt,         title: "Direct Taxes & Compliance",          desc: "ITR filing, TDS compliance, tax planning, and assessment handling.", href: "/services/direct-taxes-compliance" },
  { icon: FileSpreadsheet, title: "Goods and Services Tax",             desc: "GST registration, GSTR filing, ITC reconciliation, and GST notices.", href: "/services/goods-and-services-tax" },
  { icon: TrendingUp,      title: "Transaction Advisory Services",      desc: "M&A, due diligence, business valuation, and deal structuring.", href: "/services/transaction-advisory-services" },
];

export default function BusinessSupportServicesPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[55vh] flex items-center"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(5,10,20,0.30) 0%, rgba(5,10,20,0.70) 70%), linear-gradient(rgba(5,10,20,0.65), rgba(5,10,20,0.65)), url('/bg/business-support-teamwork.jpg') center center / cover no-repeat",
        }}
      >
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
            <span style={{ color: "var(--color-grey-200)" }}>Business Support Services</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Business Support{" "}<span style={{ color: "var(--color-gold-500)" }}>Services</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            Payroll, secretarial compliance, internal audit, fixed assets, stock audit, and sustainability reporting — integrated operational support so your business runs smoothly and stays compliant.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Payroll Outsourcing", "ROC Compliances", "Internal Audit", "Stock Audit", "Fixed Assets", "ESG Reporting"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Business+Support+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Single Partner for All Support Needs", "Never Miss a Statutory Deadline", "Qualified CAs & Compliance Experts", "Scalable for Every Business Stage"].map((item) => (
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
                Compliance Handled. <span className="text-gradient-gold">You Focus on Growth.</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                In today&rsquo;s dynamic business environment, organisations require robust backend support to ensure smooth operations, regulatory compliance, and informed decision-making. Business Support Services play a critical role in strengthening internal processes, improving efficiency, and allowing management to focus on core strategic functions.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                At JBB Business Advisors, we provide integrated support services that enhance operational control, ensure compliance, and drive sustainable business performance — from payroll and secretarial to internal audit and sustainability reporting.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "7", label: "Support Service Areas" }, { value: "100+", label: "Clients Supported" }, { value: "CA-Led", label: "Every Engagement" }, { value: "Zero", label: "Missed Deadlines" }].map(({ value, label }) => (
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

      {/* ─── SUB-SERVICES ────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="Our Services" title="Business Support Services We Offer" accentWord="Support Services We Offer" subtitle="Seven integrated service areas that handle your operational compliance backbone — from payroll to sustainability reporting." align="center" />
          <div className="space-y-6">
            {subServices.map(({ icon: Icon, title, what, scope, value }, idx) => (
              <div key={title} className="bg-white rounded border border-[var(--color-grey-100)] overflow-hidden">
                <div className="flex items-center gap-4 px-8 py-5" style={{ background: "var(--color-navy-900)", borderBottom: "2px solid var(--color-gold-500)" }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.20)", border: "1px solid rgba(201,168,76,0.35)" }}>
                    <Icon size={18} style={{ color: "#d4b86a" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5" style={{ color: "var(--color-gold-400)" }}>Service {String(idx + 1).padStart(2, "0")}</p>
                    <h3 className="font-semibold text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>{title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-grey-100)]">
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>Overview</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{what}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>Scope of Services</p>
                    <ul className="space-y-2">
                      {scope.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <CheckCircle2 size={11} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-600)" }} />
                          <span className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>Value to Client</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{value}</p>
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
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every business support engagement delivers structured, accurate, and compliant outputs — keeping your operational backbone strong and your management informed.</p>
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
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for Business Support" accentWord="JBB for Business Support" subtitle="Integrated, process-driven business support that keeps your compliance backbone strong and your management free to focus on growth." align="center" dark />
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
          <SectionHeading eyebrow="How We Work" title="Our Business Support Process" accentWord="Business Support Process" subtitle="A five-step approach that takes your business from compliance assessment to ongoing managed support with clear reporting." align="center" />
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about payroll outsourcing, secretarial compliance, internal audit, and sustainability reporting — answered clearly." align="center" />
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
            Strengthen Your <span style={{ color: "var(--color-gold-500)" }}>Business Compliance Backbone</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Connect with JBB Business Advisors for integrated business support — from payroll and secretarial compliance to internal audit and sustainability reporting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Business+Support+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
