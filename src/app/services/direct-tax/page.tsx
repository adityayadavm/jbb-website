import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Globe, FileText, Building2, Users, Scale,
  CheckCircle2, ChevronDown, ArrowRight,
  Clock, Shield, MessagesSquare, Layers, MessageSquare, PhoneCall,
  FileSpreadsheet, ClipboardCheck, Receipt, Briefcase, Landmark,
} from "lucide-react";

export const metadata = {
  title: "Direct Taxes & Compliance Services | JBB Business Advisors",
  description: "International taxation, transfer pricing, corporate tax advisory, income tax audit, and expat taxation services — expert CA-led direct tax compliance and advisory in Gurgaon.",
};

/* ─── Sub-Services ──────────────────────────────────────────── */
const subServices = [
  {
    icon: Globe,
    title: "International Taxation Services",
    what: "International taxation deals with tax implications arising from cross-border transactions, foreign income, and global business operations. It includes advisory on foreign investments, DTAA applicability, transfer pricing, and structuring of international transactions.",
    scope: [
      "Cross-border transaction structuring",
      "DTAA analysis and advisory",
      "Taxation of foreign income (royalty, FTS, capital gains, etc.)",
      "Permanent Establishment (PE) analysis",
      "FEMA & RBI compliance advisory",
      "Withholding tax advisory and Form 15CA / CB filings",
    ],
    value: "We help businesses optimize global tax structures, avoid double taxation, and ensure compliance with both Indian and international tax regulations. Proper structuring reduces tax exposure and prevents litigation risks.",
  },
  {
    icon: Scale,
    title: "Transfer Pricing Services",
    what: "Transfer Pricing refers to the pricing of transactions between related entities (domestic or international) and ensuring they are conducted at arm's length as per regulatory requirements.",
    scope: [
      "Transfer pricing study and documentation",
      "Benchmarking analysis",
      "Compliance with Indian TP regulations",
      "Filing of Form 3CEB",
      "Advisory on inter-company transactions",
      "APA (Advance Pricing Agreement) support",
    ],
    value: "We ensure that inter-company transactions comply with regulatory norms, reducing the risk of adjustments, penalties, and disputes with tax authorities while maintaining defensible documentation.",
  },
  {
    icon: Building2,
    title: "Corporate Tax Advisory & Compliance",
    what: "This service covers end-to-end tax planning, advisory, and compliance for companies, ensuring alignment with applicable tax laws and optimization of tax liability.",
    scope: [
      "Corporate tax planning and structuring",
      "Income tax return filing",
      "Advance tax computation and advisory",
      "Tax impact analysis on business decisions",
      "Advisory on deductions, exemptions, and incentives",
      "Handling tax notices and assessments",
    ],
    value: "We help businesses manage tax obligations efficiently while identifying opportunities for tax savings and ensuring complete compliance with evolving tax regulations.",
  },
  {
    icon: FileText,
    title: "Income Tax Audit Report Preparation",
    what: "Tax audit involves examination of financial records to ensure compliance with provisions of the Income Tax Act and reporting through prescribed audit reports (Form 3CA / 3CB & 3CD).",
    scope: [
      "Preparation of Tax Audit Report (Form 3CA / 3CB & 3CD)",
      "Review of books of accounts and compliance checks",
      "Identification of disallowances and reporting requirements",
      "Coordination with statutory auditors",
      "Ensuring timely filing and compliance",
    ],
    value: "We ensure accurate and timely tax audit reporting, minimising the risk of penalties, notices, and non-compliance while strengthening financial discipline.",
  },
  {
    icon: Users,
    title: "Expatriate Taxation & Representation Before Authorities",
    what: "Expatriate taxation deals with the tax implications for individuals working across borders — including foreign nationals working in India and Indian residents earning income abroad. It involves determining residential status, taxability of global income, applicability of tax treaties, and ensuring compliance in multiple jurisdictions. Representation before authorities includes handling tax notices, assessments, and proceedings with tax departments.",
    scope: [
      "Determining residential status and taxability of income in India",
      "Advising on DTAA benefits to avoid double taxation",
      "Structuring salary and compensation for tax efficiency",
      "Assisting in claiming foreign tax credits",
      "Preparing and filing income tax returns for expatriates",
      "Drafting and filing responses to tax notices",
      "Representation before income tax authorities during assessments",
      "Handling scrutiny cases and reassessment proceedings",
      "Assisting in appeals and dispute resolution matters",
    ],
    value: "Cross-border employment brings complex tax challenges such as dual taxation, varying tax laws, and compliance requirements across jurisdictions. Professional representation ensures proper handling of matters, timely responses, and effective resolution with authorities.",
  },
];

/* ─── Deliverables ──────────────────────────────────────────── */
const deliverables = [
  "Corporate Income Tax Return (ITR) preparation and filing",
  "Tax Audit Report (Form 3CA / 3CB & 3CD)",
  "Transfer Pricing documentation and Form 3CEB",
  "DTAA advisory and Form 15CA / 15CB filings",
  "Residential status and taxability report for expatriates",
  "Expat tax computation and return filing",
  "Responses to tax notices and departmental queries",
  "Representation during assessments and hearings",
  "Advance tax computation and payment schedules",
  "Tax planning and optimization advisory notes",
];

/* ─── Why JBB ───────────────────────────────────────────────── */
const benefits = [
  { icon: CheckCircle2,   title: "End-to-End Tax Coverage",      desc: "From routine ITR filing and TDS compliance to complex cross-border structuring and transfer pricing — we cover the full spectrum of direct tax needs." },
  { icon: Globe,          title: "International Tax Expertise",   desc: "Deep expertise in DTAA analysis, PE risk management, Form 15CA/CB, and global tax structuring for businesses with cross-border operations." },
  { icon: Shield,         title: "Proactive Risk Mitigation",    desc: "We identify potential tax exposures before they become disputes — ensuring your tax position is defensible and well-documented at all times." },
  { icon: Clock,          title: "Deadline-Driven Compliance",   desc: "We track every filing deadline — advance tax, ITR, tax audit, 3CEB — ensuring timely compliance and elimination of avoidable penalties." },
  { icon: MessagesSquare, title: "Effective Representation",     desc: "Professional representation before income tax authorities for notices, scrutiny assessments, appeals, and dispute resolution proceedings." },
  { icon: Layers,         title: "Tax Efficiency Planning",      desc: "We align your tax strategy with your business objectives — identifying legitimate deductions, exemptions, and incentives to reduce effective tax rates." },
];

/* ─── Process ───────────────────────────────────────────────── */
const process = [
  { step: "01", title: "Tax Health Review",        desc: "We review your existing tax compliance status, filings, pending notices, and identify gaps or risks that need immediate attention." },
  { step: "02", title: "Advisory & Structuring",   desc: "We provide tailored tax advisory — on entity structure, transactions, cross-border operations, and business decisions with tax impact." },
  { step: "03", title: "Compliance Execution",     desc: "All tax filings — ITR, TDS returns, advance tax, Form 15CA/CB, transfer pricing documentation — are prepared accurately and filed on time." },
  { step: "04", title: "Audit & Assessment",       desc: "Tax audit reports prepared and filed. Any assessments, notices, or scrutiny cases handled professionally with proper documentation." },
  { step: "05", title: "Ongoing Advisory",         desc: "Continuous tax advisory on new transactions, regulatory changes, and compliance planning — ensuring you are always tax-efficient and fully compliant." },
];

/* ─── FAQs ──────────────────────────────────────────────────── */
const faqs = [
  { q: "Who is required to file a tax audit under Section 44AB?", a: "A tax audit under Section 44AB is mandatory for businesses with total turnover exceeding ₹1 crore (₹10 crore if 95% or more of transactions are digital), and for professionals with gross receipts exceeding ₹50 lakh. The tax audit report (Form 3CA/3CB with 3CD) must be filed by October 31 of the relevant assessment year." },
  { q: "What is DTAA and how does it help in avoiding double taxation?", a: "DTAA (Double Tax Avoidance Agreement) is a bilateral treaty between India and other countries to ensure that the same income is not taxed twice in both countries. For businesses and individuals with cross-border income, DTAA provisions can reduce or eliminate withholding tax on payments like royalties, dividends, interest, and FTS — and provide relief through tax credits or exemptions." },
  { q: "What is Transfer Pricing and why is documentation important?", a: "Transfer Pricing refers to the price at which transactions are conducted between related parties (associated enterprises) — such as goods, services, loans, or IP transfers. Indian TP regulations require that these transactions be at arm's length price. Proper documentation — including a transfer pricing study and benchmarking analysis — is essential to defend the pricing in case of scrutiny and avoid costly adjustments and penalties." },
  { q: "How does expatriate taxation work for foreign nationals working in India?", a: "Foreign nationals working in India are taxed based on their residential status determined under the Income Tax Act. Residents are taxed on global income; non-residents on Indian-sourced income only. DTAA provisions may reduce or eliminate Indian tax liability on certain incomes. We determine residential status, assess taxability, advise on DTAA benefits, structure compensation, and file returns for expatriates." },
  { q: "Can JBB represent us before the Income Tax Department during scrutiny?", a: "Yes. JBB provides comprehensive representation before income tax authorities — including responding to notices, attending hearings, presenting submissions during scrutiny assessments, and filing appeals before the Commissioner of Income Tax (Appeals) and Income Tax Appellate Tribunal (ITAT) if required." },
];

/* ─── Related Services ──────────────────────────────────────── */
const relatedServices = [
  { icon: FileSpreadsheet, title: "GST Advisory & Compliance",   desc: "GSTR filing, ITC reconciliation, GST audit, and notice handling.", href: "/services/gst-advisory" },
  { icon: ClipboardCheck,  title: "Company Law & Secretarial",   desc: "ROC filings, board resolutions, MCA21 compliance, and secretarial audit.", href: "/services/company-law-secretarial" },
  { icon: Briefcase,       title: "FEMA & RBI Compliance",       desc: "Cross-border investment, ECB, ODI, and RBI filing support.", href: "/services/fema-rbi-compliance" },
  { icon: Landmark,        title: "Transaction Advisory",        desc: "M&A structuring, due diligence, and deal advisory support.", href: "/services/transaction-advisory" },
];

export default function DirectTaxPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="hero-gradient hero-bg-tax relative overflow-hidden min-h-[55vh] flex items-center">
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
            <span style={{ color: "var(--color-grey-200)" }}>Direct Taxes & Compliance</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Direct Taxes{" "}<span style={{ color: "var(--color-gold-500)" }}>& Compliance</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            End-to-end direct tax advisory and compliance — from routine filings to complex cross-border structuring, transfer pricing, and representation before tax authorities.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["International Taxation", "Transfer Pricing", "Corporate Tax", "Tax Audit", "Expat Taxation", "Tax Representation"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Direct+Tax+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Qualified Chartered Accountants", "DTAA & Cross-Border Expertise", "Full Compliance Coverage", "Representation Before Authorities"].map((item) => (
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
                Optimised Taxation. <span className="text-gradient-gold">Zero Surprises.</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                Direct taxation plays a critical role in shaping the financial efficiency and compliance framework of any business. With evolving tax laws, increased scrutiny, and global business integration, managing direct tax matters requires both technical expertise and strategic planning.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                At JBB Business Advisors, we provide end-to-end direct tax advisory and compliance services — ranging from routine filings to complex cross-border structuring — ensuring accuracy, compliance, and tax efficiency. Our approach focuses on minimising tax exposure, mitigating risks, and aligning tax strategies with business objectives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "5", label: "Core Service Areas" }, { value: "DTAA", label: "Treaty Analysis" }, { value: "TP", label: "Transfer Pricing" }, { value: "Full", label: "Representation Support" }].map(({ value, label }) => (
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
          <SectionHeading eyebrow="Our Services" title="Direct Tax Services We Offer" accentWord="Tax Services We Offer" subtitle="Five integrated direct tax service areas covering routine compliance, strategic advisory, cross-border taxation, and representation before authorities." align="center" />
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
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>What it Means</p>
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
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every direct tax engagement delivers complete, accurate, and submission-ready outputs — from tax returns and audit reports to representation documentation and advisory notes.</p>
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
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for Direct Tax Services" accentWord="JBB for Direct Tax" subtitle="Technical expertise, proactive planning, and professional representation — everything your business needs for full direct tax compliance and efficiency." align="center" dark />
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
          <SectionHeading eyebrow="How We Work" title="Our Tax Advisory Process" accentWord="Tax Advisory Process" subtitle="A five-step structured approach that ensures your tax position is always compliant, efficient, and well-defended." align="center" />
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

      {/* ─── RELATED ─────────────────────────────────────────── */}
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about direct tax compliance, international taxation, transfer pricing, and representation — answered clearly." align="center" />
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
            Manage Your Taxes with <span style={{ color: "var(--color-gold-500)" }}>Confidence & Efficiency</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Connect with JBB Business Advisors for expert direct tax advisory, compliance filing, and professional representation — ensuring your tax position is always accurate, defensible, and optimised.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Direct+Tax+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
