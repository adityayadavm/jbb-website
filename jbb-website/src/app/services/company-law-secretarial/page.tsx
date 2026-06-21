import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Building2, FileText, Users, ShieldCheck, ClipboardList, BookOpen,
  BarChart3, Scale, CheckCircle2, ChevronDown, ArrowRight,
  Clock, Shield, MessagesSquare, Layers, MessageSquare, PhoneCall,
  FileSpreadsheet, Globe, ClipboardCheck, Receipt,
} from "lucide-react";

export const metadata = {
  title: "Company Law & Secretarial Services | JBB Business Advisors",
  description: "Expert ROC filings, annual compliance, board resolutions, secretarial audit, MCA21 filings, and corporate governance advisory under the Companies Act — Gurgaon.",
};

const serviceCards = [
  { icon: FileText,      title: "ROC Filings & MCA21",           desc: "Preparation and filing of all MCA21 forms including AOC-4, MGT-7, DIR-3 KYC, CHG-1, and other statutory e-forms." },
  { icon: ClipboardList, title: "Annual Compliance",              desc: "Board meetings, AGM facilitation, statutory registers, annual returns, and compliance calendar management." },
  { icon: Users,         title: "Board & General Meetings",       desc: "Drafting of board resolutions, minutes of meetings, notices, and agenda preparation as per Companies Act 2013." },
  { icon: ShieldCheck,   title: "Secretarial Audit",              desc: "Mandatory secretarial audit under Section 204 for listed companies and specified classes — report and compliance review." },
  { icon: Building2,     title: "Corporate Governance",           desc: "Advisory on corporate governance frameworks, board composition, related party transactions, and SEBI compliances." },
  { icon: BookOpen,      title: "Statutory Registers & Records",  desc: "Maintenance of all statutory registers required under the Companies Act — members, directors, charges, and more." },
  { icon: Scale,         title: "Charge Creation & Modification", desc: "Filing of charge creation, modification, and satisfaction forms with ROC for secured lending and banking transactions." },
  { icon: BarChart3,     title: "Share Capital & Transfers",      desc: "Allotment of shares, share transfer forms, SH-4, SH-7, bonus issue, rights issue, and ESOP documentation." },
];

const deliverables = [
  "MCA21 e-form filing for all statutory events",
  "Annual return (MGT-7) and financial statements (AOC-4)",
  "Board resolution drafts and meeting minutes",
  "Secretarial audit report under Section 204",
  "DIR-3 KYC and DIN maintenance for directors",
  "Statutory registers: members, directors, charges",
  "Charge filing and satisfaction (CHG-1, CHG-4)",
  "Corporate governance advisory and compliance calendar",
];

const benefits = [
  { icon: CheckCircle2,   title: "MCA Compliance Experts",       desc: "In-depth knowledge of MCA21 V3, all e-forms, and Companies Act 2013 requirements across all filing categories." },
  { icon: Clock,          title: "Deadline Management",          desc: "We track all ROC deadlines, board meeting intervals, and AGM timelines — preventing penalties and prosecution risk." },
  { icon: Building2,      title: "Full Lifecycle Support",       desc: "From incorporation through annual compliance, restructuring, and eventual winding up — one team, no gaps." },
  { icon: Shield,         title: "Secretarial Audit Ready",      desc: "Our records and documentation practices ensure your secretarial audit is clean and free from adverse remarks." },
  { icon: MessagesSquare, title: "Responsive Communication",     desc: "Regular compliance updates, notice of upcoming filings, and clear communication on every action taken." },
  { icon: Layers,         title: "Integrated Advisory",          desc: "Company law seamlessly integrated with tax, FEMA, and audit teams for complete corporate compliance coverage." },
];

const process = [
  { step: "01", title: "Corporate Review",           desc: "We assess your company's current compliance status, outstanding filings, and upcoming obligations." },
  { step: "02", title: "Document Collection",         desc: "We gather MOA, AOA, directors' details, financial statements, and prior MCA filings for our records." },
  { step: "03", title: "Drafting & Preparation",      desc: "Board resolutions, minutes, forms, and reports are prepared with legal accuracy and reviewed by our CS team." },
  { step: "04", title: "Filing & Submission",         desc: "All e-forms are filed on MCA21 with digital signatures and acknowledgements shared promptly." },
  { step: "05", title: "Ongoing Compliance",          desc: "We maintain your compliance calendar and proactively prepare for all upcoming secretarial requirements." },
];

const faqs = [
  { q: "What is the annual compliance requirement for a private limited company?", a: "A private limited company must hold at least 4 board meetings per year, conduct one AGM, file AOC-4 (financial statements) and MGT-7/7A (annual return) with the ROC, and maintain all statutory registers updated. Companies with turnover above ₹250 crore also need a secretarial audit." },
  { q: "What is DIR-3 KYC and when must it be done?", a: "DIR-3 KYC is the annual Know Your Customer process for directors holding a DIN (Director Identification Number). It must be filed every year between April and September to keep the DIN active. Failure results in DIN deactivation and a late fee of ₹5,000 for reactivation." },
  { q: "What is a secretarial audit and who needs it?", a: "Secretarial audit is a review of a company's compliance with corporate laws, SEBI regulations, and other applicable statutes. It is mandatory for listed companies and unlisted public companies with paid-up capital above ₹10 crore or turnover above ₹250 crore. The audit is conducted by a Practicing Company Secretary." },
  { q: "What happens if ROC filings are not done on time?", a: "Late ROC filings attract significant penalties — typically 2x to 12x the normal filing fee depending on delay duration. Persistent non-compliance can result in strike-off of the company and director disqualification under Section 164(2) of the Companies Act." },
  { q: "Can JBB help with post-incorporation annual compliance?", a: "Yes. We offer a complete annual compliance package for private limited companies and LLPs — covering board meetings, AGM, ROC filings, DIR-3 KYC, statutory registers, and secretarial audit where applicable — on a fixed annual retainer." },
];

const relatedServices = [
  { icon: Receipt,        title: "Direct & Indirect Taxation",   desc: "ITR filing, TDS compliance, tax planning, and assessment handling.", href: "/services/direct-tax" },
  { icon: FileSpreadsheet,title: "GST Advisory & Compliance",    desc: "GSTR filing, ITC reconciliation, GST audit, and notice handling.", href: "/services/gst-advisory" },
  { icon: ClipboardCheck, title: "Audit & Assurance",            desc: "Statutory, internal, and tax audits conducted with technical rigour.", href: "/services/audit-assurance" },
  { icon: Globe,          title: "FEMA & RBI Compliance",        desc: "FDI, ODI, RBI reporting, and cross-border transaction advisory.", href: "/services/fema-rbi-compliance" },
];

export default function CompanyLawPage() {
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
            <span style={{ color: "var(--color-grey-200)" }}>Company Law & Secretarial</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Company Law &amp;{" "}<span style={{ color: "var(--color-gold-500)" }}>Secretarial Services</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            ROC filings, annual compliance, board resolutions, secretarial audit, MCA21 filings, and corporate governance advisory for private limited companies, LLPs, and public companies.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["ROC Filings", "Annual Compliance", "Board Resolutions", "Secretarial Audit", "MCA Filings", "Corporate Governance"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Company+Law+and+Secretarial+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Qualified Company Secretaries & CAs", "7+ Years Experience", "MCA21 Compliance Experts", "Confidential Client Handling"].map((item) => (
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
                Corporate Compliance That Is <span className="text-gradient-gold">Accurate, Timely & Risk-Free</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                JBB Business Advisors provides end-to-end company law and secretarial services — from routine MCA filings and board meeting support to secretarial audits and corporate governance advisory. Our team ensures every compliance obligation is met accurately and on time.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                With the Companies Act 2013 requirements growing increasingly complex, businesses need experienced secretarial professionals managing their corporate compliance. We eliminate the risk of penalties, director disqualification, and company strike-off through proactive, structured compliance management.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "7+", label: "Years of Practice" }, { value: "50+", label: "Companies Served" }, { value: "100%", label: "On-Time Filings" }, { value: "3", label: "Qualified CAs & CSs" }].map(({ value, label }) => (
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
          <SectionHeading eyebrow="Our Scope" title="What We Help With" accentWord="Help With" subtitle="Complete company law and secretarial services covering every MCA requirement, board obligation, and corporate governance need." align="center" />
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
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every secretarial engagement produces structured, documented outputs ensuring full traceability of corporate actions and filings.</p>
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
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for Company Law" accentWord="JBB for Company Law" subtitle="Proactive secretarial management that protects directors, avoids penalties, and keeps your company perpetually compliant." align="center" dark />
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
          <SectionHeading eyebrow="How We Work" title="Our Company Law Engagement Process" accentWord="Engagement Process" subtitle="Five structured steps to ensure your company's secretarial compliance is always current, accurate, and penalty-free." align="center" />
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about company law, ROC filings, secretarial audit, and MCA compliance — answered clearly." align="center" />
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
            Need Reliable Company Law &amp; <span style={{ color: "var(--color-gold-500)" }}>Secretarial Support?</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Speak with JBB Business Advisors for accurate MCA filings, proactive compliance management, and expert secretarial services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Company+Law+and+Secretarial+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
