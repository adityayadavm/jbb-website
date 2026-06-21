import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  BarChart3, TrendingUp, Target, DollarSign, PieChart, FileText,
  Layers, Clock2, CheckCircle2, ChevronDown, ArrowRight,
  Shield, MessagesSquare, MessageSquare, PhoneCall,
  FileSpreadsheet, Building2, Globe, ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Virtual CFO Services | JBB Business Advisors",
  description: "MIS reporting, cash flow planning, budgeting, financial strategy, KPI monitoring, and management reporting — expert Virtual CFO services for startups and growing businesses in Gurgaon.",
};

const serviceCards = [
  { icon: BarChart3,  title: "MIS Reporting",                    desc: "Monthly Management Information System reports — P&L, balance sheet, cash flows, and business metrics presented in a format that drives management decisions." },
  { icon: DollarSign, title: "Cash Flow Planning",               desc: "Detailed cash flow forecasting, liquidity management, working capital optimisation, and early warning on cash shortfall risks." },
  { icon: Target,     title: "Budgeting & Forecasting",          desc: "Annual budget preparation, monthly variance analysis, rolling forecasts, and departmental cost accountability frameworks." },
  { icon: TrendingUp, title: "Financial Strategy",               desc: "Board-level financial advisory — growth strategy, capital structure optimisation, funding assessment, and strategic financial planning." },
  { icon: PieChart,   title: "KPI Monitoring & Dashboards",      desc: "Design and monitoring of financial and operational KPIs — with dashboards providing real-time visibility into business performance." },
  { icon: FileText,   title: "Management Reporting",             desc: "Board packs, investor-ready financial summaries, and management presentations prepared with professional precision." },
  { icon: Layers,     title: "Cost & Profitability Analysis",    desc: "Product, customer, and channel profitability analysis — identifying margin improvement opportunities and cost reduction levers." },
  { icon: Clock2,     title: "Finance Process Optimisation",     desc: "Review and improvement of finance team processes, accounting workflows, controls, and month-end close timelines." },
];

const deliverables = [
  "Monthly MIS report (P&L, balance sheet, cash flow)",
  "Weekly/monthly cash flow forecast and liquidity review",
  "Annual budget and quarterly rolling forecast",
  "KPI dashboard with agreed financial and operational metrics",
  "Board pack and investor update presentations",
  "Variance analysis report (Actual vs Budget vs Prior Period)",
  "Cost and profitability analysis by product, customer, or segment",
  "Finance process review report with improvement recommendations",
];

const benefits = [
  { icon: CheckCircle2,   title: "CA-Level Financial Expertise", desc: "Qualified CAs providing CFO-grade financial analysis and strategic advisory — at a fraction of full-time CFO cost." },
  { icon: TrendingUp,     title: "Data-Driven Decision Support", desc: "Timely, accurate MIS and financial analysis that gives management the information needed to make confident business decisions." },
  { icon: Target,         title: "Proactive Financial Planning", desc: "We don't just report history — we forecast, flag risks, and recommend actions before problems become crises." },
  { icon: Shield,         title: "Board & Investor Confidence",  desc: "Professional board packs and investor reporting that demonstrate financial control and governance maturity." },
  { icon: MessagesSquare, title: "Responsive & Accessible",      desc: "A dedicated CA available as your finance partner — accessible for queries, decisions, and financial review throughout the month." },
  { icon: Layers,         title: "Integrated Compliance & Finance", desc: "Virtual CFO services linked with tax, GST, and audit teams — providing a complete financial management solution." },
];

const process = [
  { step: "01", title: "Onboarding & Review",      desc: "We review your current financial setup, accounting systems, reporting requirements, and immediate priorities." },
  { step: "02", title: "Baseline & Data Setup",     desc: "We establish your MIS framework, KPI set, budget baseline, and financial reporting templates." },
  { step: "03", title: "Monthly Reporting Cycle",   desc: "Every month: data collection, accounting review, MIS preparation, variance analysis, and management commentary." },
  { step: "04", title: "Strategic Reviews",         desc: "Quarterly strategic financial reviews covering performance against budget, updated forecasts, and advisory on key decisions." },
  { step: "05", title: "Ongoing Advisory",          desc: "Year-round availability for financial queries, board support, investor discussions, and strategic financial planning." },
];

const faqs = [
  { q: "What is a Virtual CFO and who needs one?", a: "A Virtual CFO is a qualified finance professional who provides CFO-level financial management on a part-time or retainer basis — without the cost of a full-time CFO hire. It is ideal for startups, growing SMEs, and businesses that need financial strategy, MIS reporting, and board-level financial guidance but cannot yet justify a full-time CFO." },
  { q: "What does MIS reporting include?", a: "MIS (Management Information System) reporting typically includes a monthly P&L with variance analysis, balance sheet review, cash flow statement, key business metrics, departmental performance, and management commentary. We customise the MIS format based on what your management and board actually need to see." },
  { q: "How is Virtual CFO different from accounting or bookkeeping?", a: "Accounting and bookkeeping are transactional — recording historical financial data. Virtual CFO services are analytical and strategic — interpreting that data, forecasting future performance, advising on business decisions, managing financial risks, and presenting insights to management and investors. Both are complementary, and JBB can provide both." },
  { q: "Can JBB help prepare for investor due diligence?", a: "Yes. We help startups and growth-stage businesses prepare investor-ready financial models, three-statement projections, historical financial summaries, and respond to financial due diligence queries from potential investors. Our transaction advisory team can also support term sheet negotiations." },
  { q: "What is the typical engagement model for Virtual CFO services?", a: "We offer monthly retainer engagements covering MIS preparation, cash flow review, and management advisory. The scope is agreed based on your business size, reporting frequency, and advisory requirements. Engagements typically range from 4 to 20 hours per month, with flexibility to scale as your needs grow." },
];

const relatedServices = [
  { icon: ClipboardCheck, title: "Audit & Assurance",            desc: "Statutory, internal, and tax audits for businesses of all sizes.", href: "/services/audit-assurance" },
  { icon: FileSpreadsheet,title: "GST Advisory & Compliance",    desc: "GSTR filing, ITC reconciliation, and GST compliance.", href: "/services/gst-advisory" },
  { icon: Globe,          title: "Transaction Advisory",         desc: "M&A advisory, due diligence, valuation, and investment support.", href: "/services/transaction-advisory" },
  { icon: Building2,      title: "Company Law & Secretarial",    desc: "ROC filings, board resolutions, and MCA21 compliance.", href: "/services/company-law-secretarial" },
];

export default function VirtualCFOPage() {
  return (
    <>
      <section className="hero-gradient hero-bg-office relative overflow-hidden min-h-[55vh] flex items-center">
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
            <span style={{ color: "var(--color-grey-200)" }}>Virtual CFO</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Virtual CFO{" "}<span style={{ color: "var(--color-gold-500)" }}>Services</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            MIS reporting, cash flow planning, budgeting, financial strategy, KPI monitoring, and management reporting — expert CFO-level financial advisory for startups and growing businesses.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["MIS Reporting", "Cash Flow Planning", "Budgeting", "Financial Strategy", "KPI Monitoring", "Management Reporting"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Virtual+CFO+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Qualified Chartered Accountants", "CFO-Grade Advisory", "Monthly Retainer Model", "Confidential Client Handling"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[11px] font-medium hero-label" >
                <CheckCircle2 size={13} style={{ color: "var(--color-gold-500)", flexShrink: 0 }} />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div className="prose">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>Overview</span>
              </div>
              <h2 className="mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>
                CFO-Level Financial Intelligence <span className="text-gradient-gold">Without the Full-Time Cost</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                JBB Business Advisors provides Virtual CFO services for startups, SMEs, and growth-stage businesses that need strategic financial management but are not ready for a full-time CFO hire. Our CA team acts as your finance partner — providing MIS, forecasting, board support, and strategic financial advisory.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                Financial clarity drives better business decisions. With JBB as your Virtual CFO, management gets timely, accurate reporting, proactive financial guidance, and a qualified CA available whenever financial judgment is needed — enabling confident growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "7+", label: "Years of Practice" }, { value: "50+", label: "Businesses Supported" }, { value: "3", label: "Chartered Accountants" }, { value: "100%", label: "Monthly On-Time Delivery" }].map(({ value, label }) => (
                <div key={label} className="p-5 rounded text-center" style={{ background: "var(--color-grey-50)", border: "1px solid var(--color-grey-100)" }}>
                  <p className="font-bold mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 3vw, 2.2rem)", color: "var(--color-navy-900)" }}>{value}</p>
                  <div className="w-6 h-0.5 rounded mx-auto mb-2" style={{ background: "var(--color-gold-500)" }} />
                  <p className="text-[10px] uppercase tracking-widest leading-snug" style={{ color: "var(--color-grey-500)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="Our Scope" title="What We Help With" accentWord="Help With" subtitle="Comprehensive Virtual CFO services covering financial reporting, planning, strategy, and board-level advisory for growing businesses." align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300" style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }}>
                  <Icon size={16} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <h3 className="font-semibold mb-2 leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.9rem" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>Deliverables</span>
              </div>
              <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>Key <span className="text-gradient-gold">Service Deliverables</span></h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every Virtual CFO engagement produces consistent, structured financial outputs that give management and stakeholders full visibility and confidence in your financial position.</p>
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

      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />
        <div className="container-jbb relative z-10">
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB as Your Virtual CFO" accentWord="JBB as Your CFO" subtitle="Qualified CAs providing strategic financial intelligence, proactive planning, and board-ready reporting — on a cost-effective retainer." align="center" dark />
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

      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="How We Work" title="Our Virtual CFO Engagement Process" accentWord="Virtual CFO Process" subtitle="Five steps to embed CFO-level financial management into your business — from onboarding to ongoing strategic advisory." align="center" />
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

      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about Virtual CFO services, MIS reporting, and financial management advisory — answered clearly." align="center" />
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
            Ready for CFO-Level Financial Intelligence <span style={{ color: "var(--color-gold-500)" }}>for Your Business?</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Speak with JBB Business Advisors to discuss your Virtual CFO requirements and design an engagement that fits your business size and growth ambitions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Virtual+CFO+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
