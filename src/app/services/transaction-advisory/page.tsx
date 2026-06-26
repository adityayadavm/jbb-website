import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  TrendingUp, Search, BarChart3, Layers, Scale, Target,
  DollarSign, Briefcase, CheckCircle2, ChevronDown, ArrowRight,
  Clock, Shield, MessagesSquare, MessageSquare, PhoneCall,
  FileSpreadsheet, Building2, Globe, ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Transaction Advisory Services | JBB Business Advisors",
  description: "Expert M&A advisory, financial due diligence, business valuation, financial modelling, deal structuring, and investment support for transactions of all sizes — Gurgaon.",
};

const serviceCards = [
  { icon: Briefcase,   title: "Mergers & Acquisitions",          desc: "End-to-end M&A advisory — target identification, deal structuring, negotiation support, documentation, and post-merger integration planning." },
  { icon: Search,      title: "Financial Due Diligence",         desc: "In-depth financial, tax, and accounting due diligence to surface risks, liabilities, and quality of earnings before deal completion." },
  { icon: BarChart3,   title: "Business Valuation",              desc: "Independent business valuations using DCF, comparable company analysis, and asset-based approaches for transactions, reporting, and disputes." },
  { icon: TrendingUp,  title: "Financial Modelling",             desc: "Bespoke financial models for transaction scenarios, business planning, fundraising, and management decision-making." },
  { icon: Layers,      title: "Deal Structuring",                desc: "Advisory on optimal deal structure — share deal vs asset deal, consideration mechanisms, earn-outs, conditions precedent, and warranties." },
  { icon: DollarSign,  title: "Investment Support",              desc: "Supporting founders and management through equity fundraising — investor deck review, term sheet negotiation, and cap table advisory." },
  { icon: Scale,       title: "Dispute Valuation",               desc: "Independent valuations and expert opinions for commercial disputes, shareholder disagreements, NCLT proceedings, and arbitration." },
  { icon: Target,      title: "Strategic Advisory",              desc: "Strategic financial advisory for business owners — growth planning, exit preparation, acquisition strategy, and capital allocation." },
];

const deliverables = [
  "Financial due diligence report with risk and quality of earnings analysis",
  "Business valuation report (DCF, market approach, asset approach)",
  "Transaction financial model (three-statement, scenario analysis)",
  "Deal structure memorandum with tax and legal considerations",
  "Investor-ready information memorandum and financial summaries",
  "Term sheet review and negotiation support documentation",
  "Post-transaction integration plan (financial and compliance)",
  "Expert valuation report for dispute or regulatory purposes",
];

const benefits = [
  { icon: CheckCircle2,   title: "CA-Led Transaction Team",      desc: "Experienced CAs with direct M&A and transaction advisory credentials — not just generalist advisors." },
  { icon: Clock,          title: "Deal-Speed Delivery",          desc: "We match transaction timelines — delivering due diligence reports, models, and valuations within agreed deadlines." },
  { icon: Search,         title: "Risk-First Due Diligence",     desc: "Our financial due diligence focuses on deal-critical risks — not routine checklists — so you close transactions confidently." },
  { icon: Shield,         title: "Independent Valuations",       desc: "Credible, defensible valuations backed by robust methodology — accepted by investors, lenders, and regulatory authorities." },
  { icon: MessagesSquare, title: "Founder-Friendly Approach",    desc: "We explain complex financial concepts clearly — ensuring founders and management fully understand every transaction decision." },
  { icon: Layers,         title: "Integrated Tax & Legal View",  desc: "Transaction advisory coordinated with our tax and company law teams — delivering a complete, de-risked transaction picture." },
];

const process = [
  { step: "01", title: "Transaction Scoping",    desc: "We understand the transaction objectives, timeline, deal size, and key stakeholders to scope the advisory engagement." },
  { step: "02", title: "Data Room Review",       desc: "We review financial statements, management accounts, contracts, and all data room documents systematically." },
  { step: "03", title: "Analysis & Modelling",   desc: "Financial analysis, valuation modelling, and due diligence fieldwork are completed by our CA team with rigour." },
  { step: "04", title: "Report & Advisory",      desc: "We deliver formal due diligence reports, valuation reports, or financial models — with clear management presentations." },
  { step: "05", title: "Deal Support & Close",   desc: "We support negotiations, conditions precedent, and completion mechanics — providing advisory until transaction close." },
];

const faqs = [
  { q: "What does financial due diligence involve?", a: "Financial due diligence involves a systematic review of a target company's historical financial statements, accounting policies, revenue and cost quality, working capital patterns, off-balance sheet liabilities, contingent risks, and related party transactions. The output is a due diligence report that quantifies deal risks and informs pricing and deal structure." },
  { q: "What valuation methodology does JBB use?", a: "We use multiple valuation approaches depending on context: Discounted Cash Flow (DCF) for going-concern businesses, Comparable Company Analysis (CCA) using listed peer multiples, Comparable Transaction Analysis for M&A reference, and Net Asset Value (NAV) for asset-heavy businesses or holding companies. The choice of methodology is discussed and agreed with the client upfront." },
  { q: "What is an earn-out and when is it used?", a: "An earn-out is a deal mechanism where part of the purchase consideration is contingent on future performance of the acquired business. It bridges valuation gaps between buyer and seller — common in founder-led businesses, technology companies, or where future revenue visibility is uncertain. We advise on structuring, measuring, and documenting earn-out arrangements." },
  { q: "Can JBB help a startup prepare for a funding round?", a: "Yes. We assist startups with investor-ready financial modelling, valuation analysis, information memorandum preparation, cap table structuring, and term sheet review. We also provide guidance on ESOP schemes, CCPS structuring, and FEMA compliance for foreign investment." },
  { q: "What is the difference between a share deal and an asset deal?", a: "In a share deal, the buyer acquires the target company's shares — taking on all its assets and liabilities. In an asset deal, the buyer acquires specific assets (and may assume some liabilities). The choice has significant tax, STAMP duty, employee, and regulatory implications. We advise on the optimal structure based on the specific transaction context." },
];

const relatedServices = [
  { icon: ClipboardCheck, title: "Audit & Assurance",            desc: "Statutory, internal, and tax audits — and financial due diligence for transactions.", href: "/services/audit-assurance" },
  { icon: FileSpreadsheet,title: "GST Advisory & Compliance",    desc: "GSTR filing, ITC reconciliation, and GST compliance for businesses.", href: "/services/gst-advisory" },
  { icon: Building2,      title: "Company Law & Secretarial",    desc: "ROC filings, board resolutions, MCA21 compliance, and secretarial audit.", href: "/services/company-law-secretarial" },
  { icon: Globe,          title: "FEMA & RBI Compliance",        desc: "FDI, ODI, RBI reporting, and cross-border transaction advisory.", href: "/services/fema-rbi-compliance" },
];

export default function TransactionAdvisoryPage() {
  return (
    <>
      <section className="hero-gradient hero-bg-meeting relative overflow-hidden min-h-[55vh] flex items-center">
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
            <span style={{ color: "var(--color-grey-200)" }}>Transaction Advisory</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Transaction{" "}<span style={{ color: "var(--color-gold-500)" }}>Advisory Services</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            Mergers and acquisitions advisory, financial due diligence, business valuation, financial modelling, deal structuring, and investment support for transactions of all sizes.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Mergers & Acquisitions", "Due Diligence", "Business Valuation", "Financial Modelling", "Deal Structuring", "Investment Support"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Transaction+Advisory+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Qualified Chartered Accountants", "M&A Experienced Team", "Independent & Objective", "Confidential Engagements"].map((item) => (
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
                Transactions Executed with <span className="text-gradient-gold">Precision, Confidence & Clarity</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                JBB Business Advisors provides end-to-end transaction advisory services — from initial financial due diligence and independent valuation through deal structuring, negotiation support, and post-transaction compliance. We support acquirers, sellers, and investors across the full transaction lifecycle.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                Every transaction carries financial, tax, and regulatory complexity that generic advisory cannot address. Our CA-led transaction team combines financial modelling expertise, accounting rigour, and practical deal experience to help clients navigate complexity and close transactions with confidence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "7+", label: "Years of Practice" }, { value: "50+", label: "Clients Supported" }, { value: "3", label: "Chartered Accountants" }, { value: "100%", label: "Client Satisfaction" }].map(({ value, label }) => (
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
          <SectionHeading eyebrow="Our Scope" title="What We Help With" accentWord="Help With" subtitle="Comprehensive transaction advisory covering M&A, due diligence, valuation, modelling, and investment support." align="center" />
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
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every transaction advisory engagement delivers formal, well-documented outputs — providing the evidence and analysis required to make informed decisions and close transactions with confidence.</p>
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
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for Transaction Advisory" accentWord="JBB for Transactions" subtitle="CA-led advisory that combines financial rigour, tax intelligence, and practical deal experience to support your transactions." align="center" dark />
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
          <SectionHeading eyebrow="How We Work" title="Our Transaction Advisory Process" accentWord="Transaction Advisory Process" subtitle="Five structured steps delivering rigorous analysis and confident transaction execution from first call to deal close." align="center" />
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about M&A advisory, due diligence, valuation, and deal structuring — answered clearly." align="center" />
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
            Planning a Transaction? Get Expert <span style={{ color: "var(--color-gold-500)" }}>Financial Advisory Support.</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Speak with JBB Business Advisors for rigorous due diligence, independent valuations, and deal advisory that helps you transact with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Transaction+Advisory+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
