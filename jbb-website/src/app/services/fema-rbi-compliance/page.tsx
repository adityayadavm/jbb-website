import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Globe, ArrowUpDown, Banknote, FileText, ShieldCheck, TrendingUp,
  BarChart3, Scale, CheckCircle2, ChevronDown, ArrowRight,
  Clock, Shield, MessagesSquare, Layers, MessageSquare, PhoneCall,
  FileSpreadsheet, Building2, ClipboardCheck, Receipt,
} from "lucide-react";

export const metadata = {
  title: "FEMA & RBI Compliance Services | JBB Business Advisors",
  description: "Expert FEMA advisory, RBI reporting, FDI, ODI, overseas investments, cross-border transactions, and foreign exchange compliance for Indian businesses and multinationals — Gurgaon.",
};

const serviceCards = [
  { icon: ArrowUpDown,  title: "FDI Compliance",                  desc: "Advisory on inward foreign direct investment — eligible sectors, prohibited activities, pricing guidelines, downstream investment, and FDI reporting to RBI." },
  { icon: Globe,        title: "ODI — Overseas Direct Investment", desc: "Guidance on outbound investments by Indian entities, prescribed limits, permissible structures, APR filing, and RBI compliance for overseas subsidiaries." },
  { icon: Banknote,     title: "FEMA Advisory",                    desc: "Comprehensive FEMA analysis on cross-border transactions, permissibility under current account and capital account regulations, and compounding applications." },
  { icon: FileText,     title: "RBI Reporting & Filings",          desc: "Filing of FCGPR, FCTRS, FLA, APR, and other RBI returns on the FIRMS portal — timely and accurate." },
  { icon: ShieldCheck,  title: "External Commercial Borrowings",   desc: "Structuring and compliance for ECB — automatic route, approved route, hedging requirements, and end-use monitoring." },
  { icon: TrendingUp,   title: "Cross-Border Transactions",        desc: "Transaction-level FEMA review for mergers, acquisitions, joint ventures, royalty, technical know-how, and service payments involving foreign entities." },
  { icon: BarChart3,    title: "Compounding of Offences",          desc: "Assistance in filing compounding applications with RBI for FEMA violations — preparation of submissions, representation, and settlement." },
  { icon: Scale,        title: "Liaison & Project Office Setup",   desc: "FEMA compliance for liaison offices, branch offices, and project offices of foreign companies in India — establishment, RBI registration, and annual reporting." },
];

const deliverables = [
  "FDI reporting on FIRMS portal (FCGPR, FCTRS)",
  "Annual Return on Foreign Liabilities & Assets (FLA)",
  "Annual Performance Report (APR) for overseas investments",
  "ODI structuring memos and RBI application support",
  "ECB compliance: hedging, end-use, and RBI reporting",
  "FEMA transaction review notes and advisory opinions",
  "Compounding application drafting and representation",
  "FEMA compliance calendar and periodic health checks",
];

const benefits = [
  { icon: CheckCircle2,   title: "Deep FEMA Expertise",           desc: "Specialised knowledge of FEMA 1999, FEMA regulations, and all RBI master directions applicable to cross-border transactions." },
  { icon: Clock,          title: "Timely RBI Filings",            desc: "We track all FIRMS portal deadlines for FCGPR, FLA, APR, and other returns — eliminating late-filing penalties and compounding risk." },
  { icon: Globe,          title: "End-to-End FDI & ODI Support",  desc: "From initial structuring advisory to post-investment reporting — complete coverage across inbound and outbound foreign investment." },
  { icon: Shield,         title: "Compounding & Defence",         desc: "Experienced in preparing compounding applications for FEMA violations, with a track record of favourable settlements." },
  { icon: MessagesSquare, title: "Regulatory Updates",            desc: "Proactive alerts on RBI circular changes, new FEMA rules, and regulatory guidance affecting your foreign exchange transactions." },
  { icon: Layers,         title: "Integrated Cross-Border Team",  desc: "FEMA advisory coordinated with our tax, audit, and company law teams for complete cross-border transaction support." },
];

const process = [
  { step: "01", title: "Transaction Review",    desc: "We review the proposed transaction, applicable FEMA regulations, and permissibility under current or capital account rules." },
  { step: "02", title: "Structuring Advisory",  desc: "We advise on the optimal structure — route, pricing, documentation, and regulatory approvals required." },
  { step: "03", title: "Documentation",         desc: "We prepare all required documents — board resolutions, valuation reports, filings, and regulatory submissions." },
  { step: "04", title: "RBI Filing",            desc: "All returns filed on FIRMS portal with accurate data, within prescribed timelines, and with acknowledgements shared." },
  { step: "05", title: "Ongoing Compliance",    desc: "Post-transaction monitoring, APR filings, and FEMA compliance calendar management for the entire investment lifecycle." },
];

const faqs = [
  { q: "What is FDI and when does RBI reporting apply?", a: "Foreign Direct Investment (FDI) involves a non-resident investing in Indian company shares or convertible instruments. RBI reporting via the FIRMS portal is required: FCGPR within 30 days of allotment, FCTRS within 60 days of share transfer, and FLA return by July 15 every year." },
  { q: "What is ODI and who needs to file an APR?", a: "Overseas Direct Investment (ODI) refers to investment by Indian entities in foreign entities. Annual Performance Reports (APR) must be filed for each overseas investment by December 31 of every year through the authorised dealer bank, covering financial performance of the overseas entity." },
  { q: "What are the FEMA implications of paying royalty or technical know-how fees abroad?", a: "Payments of royalty, technical know-how fees, and brand fees to foreign entities are current account transactions under FEMA. They are generally permitted without RBI approval, but are subject to limits under FEMA Notification 10 and pricing guidelines under the automatic route." },
  { q: "Can JBB help with compounding of FEMA violations?", a: "Yes. We assist clients who have inadvertently violated FEMA provisions — preparing the compounding application, computing the proposed compounding fee, drafting the submission, and representing before the RBI Compounding Authority." },
  { q: "What is ECB and what compliance is required?", a: "External Commercial Borrowing (ECB) refers to foreign currency borrowings by Indian entities from eligible lenders abroad. Compliance includes RBI reporting via the ECB-2 return (monthly), hedging requirements for INR ECBs, end-use monitoring, and all-in cost ceiling adherence." },
];

const relatedServices = [
  { icon: Receipt,        title: "Direct & Indirect Taxation",   desc: "ITR filing, TDS compliance, tax planning, and assessment handling.", href: "/services/direct-tax" },
  { icon: FileSpreadsheet,title: "GST Advisory & Compliance",    desc: "GSTR filing, ITC reconciliation, GST audit, and notice handling.", href: "/services/gst-advisory" },
  { icon: Building2,      title: "Company Law & Secretarial",    desc: "ROC filings, board resolutions, MCA21 compliance, and secretarial audit.", href: "/services/company-law-secretarial" },
  { icon: ClipboardCheck, title: "Audit & Assurance",            desc: "Statutory, internal, and tax audits conducted with technical rigour.", href: "/services/audit-assurance" },
];

export default function FemaRbiPage() {
  return (
    <>
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
            <span style={{ color: "var(--color-grey-200)" }}>FEMA & RBI Compliance</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            FEMA &amp; RBI{" "}<span style={{ color: "var(--color-gold-500)" }}>Compliance Services</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            FDI and ODI structuring, RBI reporting, FEMA advisory, overseas investments, ECB compliance, and cross-border transaction support for Indian companies and multinationals.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["ODI", "FDI", "FEMA Advisory", "RBI Reporting", "Overseas Investments", "Cross-Border"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+FEMA+and+RBI+Compliance+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Qualified Chartered Accountants", "Specialised FEMA Expertise", "End-to-End RBI Compliance", "Confidential Advisory"].map((item) => (
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
                Cross-Border Compliance That Is <span className="text-gradient-gold">Structured, Accurate & Risk-Free</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                JBB Business Advisors provides specialised FEMA and RBI compliance services for Indian companies engaging in cross-border transactions — FDI from foreign investors, ODI into overseas entities, ECBs, royalty and technical know-how payments, and all associated RBI reporting.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                With FEMA regulations evolving continuously and penalties for non-compliance significant, businesses need expert guidance at every stage — from initial structuring to ongoing RBI filings. Our CA team provides practical, transaction-level FEMA advisory backed by deep regulatory expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "7+", label: "Years of FEMA Practice" }, { value: "50+", label: "Clients Served" }, { value: "100%", label: "On-Time RBI Filings" }, { value: "3", label: "Chartered Accountants" }].map(({ value, label }) => (
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
          <SectionHeading eyebrow="Our Scope" title="What We Help With" accentWord="Help With" subtitle="Comprehensive FEMA and RBI compliance covering FDI, ODI, ECB, reporting, and cross-border transaction advisory." align="center" />
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
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every FEMA engagement produces structured documentation and RBI filings — ensuring your cross-border compliance is accurate, complete, and traceable.</p>
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
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for FEMA Compliance" accentWord="JBB for FEMA" subtitle="Specialised cross-border regulatory expertise that keeps your foreign exchange transactions permissible, documented, and penalty-free." align="center" dark />
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
          <SectionHeading eyebrow="How We Work" title="Our FEMA Compliance Process" accentWord="FEMA Compliance Process" subtitle="A five-step structured approach ensuring every cross-border transaction is compliant, documented, and reported to RBI on time." align="center" />
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about FEMA, RBI reporting, FDI, ODI, and cross-border transactions — answered clearly." align="center" />
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
            Need Expert FEMA Advisory and <span style={{ color: "var(--color-gold-500)" }}>RBI Compliance Support?</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Speak with JBB Business Advisors for accurate RBI filings, cross-border transaction advisory, and comprehensive FEMA compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+FEMA+and+RBI+Compliance+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
