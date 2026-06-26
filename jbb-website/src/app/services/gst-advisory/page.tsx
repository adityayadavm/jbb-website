import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  FileText, ClipboardCheck, AlertCircle, BarChart3, Scale,
  CheckCircle2, ChevronDown, ArrowRight,
  Clock, Shield, MessagesSquare, Layers, MessageSquare, PhoneCall,
  FileSpreadsheet, Building2, Receipt, Globe,
} from "lucide-react";

export const metadata = {
  title: "GST Advisory & Compliance Services | JBB Business Advisors",
  description: "GST registration, return filing, GST audit & reconciliation, consultancy, and litigation support — expert CA-led GST compliance and advisory in Gurgaon.",
};

/* ─── Sub-Services ──────────────────────────────────────────── */
const gstReturns = [
  { form: "GSTR-1",  desc: "Details of outward supplies (sales)",            due: "11th of next month (monthly) / 13th (QRMP quarterly)" },
  { form: "GSTR-3B", desc: "Summary return of tax liability and ITC",         due: "20th of next month (monthly) / 22nd or 24th (QRMP)" },
  { form: "GSTR-2B", desc: "Auto-generated ITC statement (reference only)",   due: "N/A — auto-generated" },
  { form: "GSTR-9",  desc: "Annual return summarizing yearly GST transactions", due: "31st December following the financial year" },
  { form: "GSTR-9C", desc: "Reconciliation statement between books and GST",  due: "31st December following the financial year" },
  { form: "CMP-08",  desc: "Quarterly statement for composition scheme taxpayers", due: "18th of next month after quarter" },
  { form: "GSTR-4",  desc: "Annual return for composition taxpayers",         due: "30th April following the financial year" },
  { form: "GSTR-7/8", desc: "For TDS and TCS compliance under GST",          due: "10th of next month" },
];

const registrationDocs = [
  "PAN Card of proprietor / entity",
  "Aadhaar Card of proprietor / directors / partners",
  "Certificate of Incorporation / Partnership Deed (for companies and firms)",
  "Address proof of business place (electricity bill / rent agreement)",
  "Bank account details (cancelled cheque / bank statement)",
  "Board resolution / authorization letter (for companies)",
  "PAN & Aadhaar of directors / partners",
  "Passport size photographs",
];

/* ─── Deliverables ──────────────────────────────────────────── */
const deliverables = [
  "GST registration certificate (GSTIN)",
  "GSTR-1 and GSTR-3B — monthly / quarterly filing",
  "GSTR-2B reconciliation and ITC verification",
  "Annual return (GSTR-9) preparation and filing",
  "Reconciliation statement (GSTR-9C) preparation",
  "GST consultancy notes on transactions and structuring",
  "Replies to GST notices and show cause notices",
  "Representation during GST audits and assessments",
  "Input tax credit optimization reports",
  "GST compliance health check and gap analysis",
];

/* ─── Why JBB ───────────────────────────────────────────────── */
const benefits = [
  { icon: CheckCircle2, title: "Compliance Accuracy",          desc: "Error-free GST filings, timely returns, and accurate ITC reconciliation — reducing the risk of penalties, notices, and interest." },
  { icon: BarChart3,    title: "Advisory Excellence",          desc: "Structuring transactions for GST efficiency, advising on applicability, RCM, exemptions, and ITC eligibility across your business operations." },
  { icon: Shield,       title: "Risk Mitigation",             desc: "Proactive identification of GST exposures, mismatch risks, and compliance gaps — addressed before they become regulatory issues." },
  { icon: Clock,        title: "Deadline Management",         desc: "We track all GST due dates — GSTR-1, 3B, annual returns, and reconciliation statements — ensuring not a single filing is missed." },
  { icon: MessagesSquare, title: "Notice & Litigation Support", desc: "Professional handling of GST notices, departmental queries, and representation during audits, assessments, and appellate proceedings." },
  { icon: Layers,       title: "ITC Optimisation",            desc: "We ensure maximum legitimate input tax credit is claimed and reconciled — improving cash flow and reducing effective GST costs." },
];

/* ─── Process ───────────────────────────────────────────────── */
const process = [
  { step: "01", title: "Registration & Setup",     desc: "Obtaining GSTIN, setting up GST records, configuring return frequency (monthly / QRMP), and establishing a compliance calendar." },
  { step: "02", title: "Transaction Review",       desc: "Reviewing sales, purchases, and expenses each period to classify transactions correctly, verify ITC eligibility, and identify RCM obligations." },
  { step: "03", title: "Return Preparation",       desc: "Preparing GSTR-1 (outward supplies) and GSTR-3B (summary return) accurately — with reconciliation against books and GSTR-2B." },
  { step: "04", title: "Filing & Payment",         desc: "Filing returns on time and computing net GST liability after eligible ITC — with payment support and challan management." },
  { step: "05", title: "Annual Reconciliation",    desc: "Preparing GSTR-9 (annual return) and GSTR-9C (reconciliation statement) — reconciling GST returns with audited books of accounts." },
];

/* ─── FAQs ──────────────────────────────────────────────────── */
const faqs = [
  { q: "Who needs to register for GST?", a: "GST registration is mandatory for businesses with aggregate turnover exceeding ₹40 lakhs (for goods) or ₹20 lakhs (for services) — subject to state-specific thresholds. It is also mandatory for inter-state supply of goods or services, e-commerce sellers, persons liable under Reverse Charge Mechanism, and casual taxable persons. Voluntary registration is also permitted for those seeking input tax credit or enhanced credibility." },
  { q: "What is the difference between GSTR-1 and GSTR-3B?", a: "GSTR-1 is a return reporting details of all outward supplies (sales) made during the period — it populates the recipient's GSTR-2B for ITC purposes. GSTR-3B is a monthly or quarterly summary return declaring total tax liability (output GST) and input tax credit claimed, with net GST payment. Both must be filed correctly and consistently." },
  { q: "Is GST audit by a Chartered Accountant mandatory?", a: "Mandatory GST audit by a CA has been removed under current provisions. However, GSTR-9C (reconciliation statement between GST returns and audited financial statements) is required for businesses exceeding the prescribed turnover limit. GSTR-9C is filed on a self-certification basis and reconciles turnover, tax paid, and ITC as per books versus GST returns." },
  { q: "How does ITC (Input Tax Credit) work and how can we maximize it?", a: "ITC allows businesses to offset GST paid on purchases against GST collected on sales. To claim ITC, the purchase must appear in GSTR-2B (auto-populated from supplier's GSTR-1), the goods or services must be used for business purposes, payment to the supplier must be made within 180 days, and tax must have been actually paid by the supplier. We ensure systematic ITC reconciliation and maximize eligible credit." },
  { q: "What happens if we receive a GST notice or show cause notice?", a: "A GST notice or SCN (Show Cause Notice) requires a formal written response within the prescribed timeline. Failure to respond can result in ex-parte orders, penalties, and demand creation. JBB handles all aspects — reviewing the notice, preparing a detailed factual and legal response, attending hearings, and ensuring the matter is resolved effectively with authorities." },
];

/* ─── Related Services ──────────────────────────────────────── */
const relatedServices = [
  { icon: Receipt,         title: "Direct & Indirect Taxation",  desc: "ITR filing, TDS compliance, tax planning, and assessment handling.", href: "/services/direct-tax" },
  { icon: ClipboardCheck,  title: "Company Law & Secretarial",   desc: "ROC filings, board resolutions, MCA21 compliance, and secretarial audit.", href: "/services/company-law-secretarial" },
  { icon: Building2,       title: "Business Incorporation",      desc: "Private Limited, LLP, OPC, and all entity types — end-to-end formation.", href: "/services/business-incorporation" },
  { icon: Globe,           title: "FEMA & RBI Compliance",       desc: "Cross-border investment, ECB, ODI, and RBI filing support.", href: "/services/fema-rbi-compliance" },
];

export default function GSTAdvisoryPage() {
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
            <span style={{ color: "var(--color-grey-200)" }}>GST Advisory & Compliance</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            GST Advisory{" "}<span style={{ color: "var(--color-gold-500)" }}>& Compliance</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            GST registration, return filing, reconciliation, consultancy, and representation before authorities — building a strong compliance framework that reduces risk and optimises ITC.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["GST Registration", "GSTR Filing", "ITC Reconciliation", "GSTR-9 / 9C", "GST Consultancy", "GST Litigation"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+GST+Advisory+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Qualified Chartered Accountants", "Fast GST Registration", "ITC Optimisation", "Full Representation Support"].map((item) => (
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
                GST as a <span className="text-gradient-gold">Controlled Function, Not a Risk</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                Our GST practice is built on a three-layered approach: Compliance Accuracy — ensuring error-free filings and documentation; Advisory Excellence — structuring transactions for tax efficiency; and Risk Mitigation — identifying and addressing exposures proactively.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                With JBB Business Advisors, businesses benefit from a strong compliance framework, optimised input tax credit, seamless handling of GST processes, professional representation before authorities, and continuous support in navigating evolving GST regulations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "5", label: "Service Areas" }, { value: "2–3", label: "Day GST Registration" }, { value: "ITC", label: "Optimisation Focus" }, { value: "Full", label: "Representation Cover" }].map(({ value, label }) => (
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

      {/* ─── GST REGISTRATION ────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="Service 01" title="GST Registration & Cancellation" accentWord="GST Registration" subtitle="We handle fast-track GST registration within 2–3 working days for businesses with complete documentation and Aadhaar authentication — enabling quick business commencement and immediate ITC access." align="center" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Applicability */}
            <div className="bg-white rounded border border-[var(--color-grey-100)] overflow-hidden">
              <div className="px-6 py-4" style={{ background: "var(--color-navy-900)" }}>
                <h4 className="font-semibold text-white text-sm" style={{ fontFamily: "var(--font-display)" }}>When GST Registration is Mandatory</h4>
              </div>
              <ul className="p-6 space-y-3">
                {[
                  "Turnover exceeding ₹40 lakhs (goods) / ₹20 lakhs (services) — subject to state conditions",
                  "Inter-state supply of goods or services",
                  "E-commerce sellers or operators",
                  "Persons liable under Reverse Charge Mechanism (RCM)",
                  "Casual taxable persons and non-resident taxable persons",
                  "Input Service Distributors (ISD)",
                  "Businesses required to deduct / collect TDS / TCS under GST",
                  "Voluntary registration for ITC benefits and business credibility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-600)" }} />
                    <span className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Documents */}
            <div className="bg-white rounded border border-[var(--color-grey-100)] overflow-hidden">
              <div className="px-6 py-4" style={{ background: "var(--color-navy-900)" }}>
                <h4 className="font-semibold text-white text-sm" style={{ fontFamily: "var(--font-display)" }}>Documents Required for GST Registration</h4>
              </div>
              <ul className="p-6 space-y-3">
                {registrationDocs.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-600)" }} />
                    <span className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GST RETURNS TABLE ───────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading eyebrow="Service 02" title="GST Return Filing" accentWord="GST Return Filing" subtitle="We manage all GST return filings — GSTR-1, GSTR-3B, GSTR-2B reconciliation, annual returns (GSTR-9), and reconciliation statements (GSTR-9C) — ensuring timely, accurate compliance." align="center" />
          <div className="overflow-x-auto rounded border border-[var(--color-grey-100)]">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-navy-900)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Return Form</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Description</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {gstReturns.map(({ form, desc, due }, i) => (
                  <tr key={form} style={{ background: i % 2 === 0 ? "var(--color-grey-50)" : "#ffffff", borderBottom: "1px solid var(--color-grey-100)" }}>
                    <td className="px-6 py-4">
                      <span className="font-bold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>{form}</span>
                    </td>
                    <td className="px-6 py-4 text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{desc}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium" style={{ color: "var(--color-gold-700)" }}>{due}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── GST AUDIT & LITIGATION ──────────────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GST Audit */}
            <div className="bg-white rounded border border-[var(--color-grey-100)] overflow-hidden">
              <div className="px-6 py-5" style={{ background: "var(--color-navy-900)", borderBottom: "2px solid var(--color-gold-500)" }}>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--color-gold-400)" }}>Service 03</p>
                <h3 className="font-semibold text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>GST Audit & Reconciliation (GSTR-9C)</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>GSTR-9C is a reconciliation statement reconciling turnover, tax paid, and input tax credit as per GST returns with the audited financial statements. It ensures that data reported under GST aligns with books of accounts.</p>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>Key Process Steps</p>
                  <ul className="space-y-2">
                    {["Reconciliation of turnover declared in GST returns vs financial statements", "Matching of tax liability and tax paid", "Verification of input tax credit claimed", "Identification of discrepancies and reporting of adjustments", "Certification based on self-certification requirements"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={11} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-600)" }} />
                        <span className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* GST Litigation */}
            <div className="bg-white rounded border border-[var(--color-grey-100)] overflow-hidden">
              <div className="px-6 py-5" style={{ background: "var(--color-navy-900)", borderBottom: "2px solid var(--color-gold-500)" }}>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--color-gold-400)" }}>Service 04</p>
                <h3 className="font-semibold text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>GST Litigation & Representation Before Authorities</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>GST litigation involves handling disputes, notices, assessments, and proceedings initiated by tax authorities. We adopt a structured litigation strategy combining technical analysis with practical representation for timely resolution and protection of client interests.</p>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-gold-600)" }}>Our Scope</p>
                  <ul className="space-y-2">
                    {["Drafting replies to notices, show cause notices, and departmental queries", "Representation during assessments, audits, and investigations", "Handling scrutiny and reassessment proceedings", "Filing appeals before appellate authorities", "Advisory on dispute resolution and settlement strategies", "Liaison with GST authorities for effective case management"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={11} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-600)" }} />
                        <span className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
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
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every GST engagement delivers complete, accurate, and submission-ready outputs — from registration and return filing to reconciliation statements and litigation support documentation.</p>
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
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for GST Compliance" accentWord="JBB for GST" subtitle="Compliance accuracy, advisory excellence, and risk mitigation — three pillars of our GST practice." align="center" dark />
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
          <SectionHeading eyebrow="How We Work" title="Our GST Compliance Process" accentWord="GST Compliance Process" subtitle="A five-step structured approach to GST registration, return filing, reconciliation, and ongoing advisory." align="center" />
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about GST registration, return filing, ITC, reconciliation, and notices — answered clearly." align="center" />
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
            Make GST a <span style={{ color: "var(--color-gold-500)" }}>Controlled Business Function</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Connect with JBB Business Advisors for expert GST registration, return filing, ITC optimisation, and professional representation — ensuring GST becomes a managed compliance function rather than a business risk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+GST+Advisory+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
