import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Building2, Users, Briefcase, FileText, CreditCard, Globe,
  CheckSquare, Scale, CheckCircle2, ChevronDown, ArrowRight,
  Clock, Shield, MessagesSquare, Layers, MessageSquare, PhoneCall,
  FileSpreadsheet, ClipboardCheck, Receipt, Home, Landmark, HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "Business Formation & Advisory Services | JBB Business Advisors",
  description: "Expert business formation advisory — Private Limited, LLP, OPC, Partnership, Sole Proprietorship, Section 8, HUF. Structure selection and end-to-end incorporation support.",
};

/* ─── Entity Types ──────────────────────────────────────────── */
const entityTypes = [
  { icon: Building2,    title: "Private Limited Company",     desc: "Most preferred for startups and growing businesses. Separate legal identity, limited liability, investor-ready, and eligible for government schemes." },
  { icon: Landmark,     title: "Public Limited Company",      desc: "For large-scale businesses planning IPOs or raising capital from the public. High credibility with SEBI and stock exchange compliance." },
  { icon: Users,        title: "Limited Liability Partnership (LLP)", desc: "Combines partnership flexibility with corporate limited liability. Ideal for professionals and service firms with simpler compliance." },
  { icon: Briefcase,    title: "One Person Company (OPC)",    desc: "A corporate structure for solo entrepreneurs. Full control, limited liability, and better credibility than a proprietorship." },
  { icon: HeartHandshake, title: "Partnership Firm",          desc: "Traditional structure for two or more persons carrying on business together. Simple formation with shared management and responsibilities." },
  { icon: Home,         title: "Sole Proprietorship",         desc: "Simplest form for individual entrepreneurs. Easy setup, minimal compliance, full control — ideal for freelancers and small traders." },
  { icon: Globe,        title: "Section 8 (Non-Profit) Company", desc: "For NGOs, foundations, and charitable organizations. High credibility, tax benefits, and preferred for institutional funding." },
  { icon: Scale,        title: "Trusts & Societies",          desc: "Traditional non-profit structures for charitable, religious, and community purposes. Easier to form with lower compliance than Section 8." },
  { icon: FileText,     title: "Hindu Undivided Family (HUF)", desc: "Unique family business structure for tax optimization and succession planning. Separate PAN, independent taxation, and wealth pooling." },
];

/* ─── Deliverables ──────────────────────────────────────────── */
const deliverables = [
  "Certificate of Incorporation and CIN number",
  "MOA and AOA (customised for your business structure)",
  "PAN and TAN for the company / entity",
  "DIN / DPIN for all directors / designated partners",
  "GST registration certificate (if applicable)",
  "DPIIT recognition letter (for startups)",
  "First auditor appointment and initial board resolution",
  "Post-incorporation compliance calendar",
  "LLP Agreement / Partnership Deed / Trust Deed (as applicable)",
  "MSME (Udyam) registration (if applicable)",
];

/* ─── Why JBB Benefits ──────────────────────────────────────── */
const benefits = [
  { icon: CheckCircle2,   title: "Structure First Approach",   desc: "We don't just file forms — we help you choose the right structure based on your business model, funding plans, tax efficiency, and compliance capacity." },
  { icon: Clock,          title: "Fast Turnaround",            desc: "With all documents in place, most incorporations are completed within 7–10 working days. We track every step and keep you informed." },
  { icon: Building2,      title: "All Entity Types Covered",   desc: "From Pvt Ltd and LLP to Section 8 companies, trusts, HUFs, and sole proprietorships — we handle registration for all legal structures." },
  { icon: Shield,         title: "Legal Accuracy",             desc: "MOA, AOA, LLP agreements, and partnership deeds drafted by qualified professionals — ensuring legal soundness and commercial alignment." },
  { icon: MessagesSquare, title: "End-to-End Guidance",        desc: "Beyond incorporation — we guide founders on initial compliances, banking, registrations, and early-stage regulatory requirements." },
  { icon: Layers,         title: "Integrated Compliance Setup", desc: "Incorporation connected with GST, TAN, PAN, and year-one compliance planning — all managed by one team under one roof." },
];

/* ─── Process ───────────────────────────────────────────────── */
const process = [
  { step: "01", title: "Structure Advisory",      desc: "We discuss your business model, funding plans, tax efficiency, and shareholding structure to recommend the optimal entity type." },
  { step: "02", title: "Name Reservation",        desc: "We apply for name approval via RUN / LLP-RUN on MCA21, with preferred and alternate options, and handle resubmissions if needed." },
  { step: "03", title: "Document Preparation",    desc: "MOA, AOA, consent letters, address proof, declarations, and all required documents are prepared, reviewed, and signed." },
  { step: "04", title: "MCA / Authority Filing",  desc: "SPICe+ / FiLLiP / prescribed forms filed with DSC — tracked until the Certificate of Incorporation or Registration is issued." },
  { step: "05", title: "Post-Setup Compliance",   desc: "PAN, TAN, GST registration, bank account support, first board meeting, and compliance calendar — all handled as part of our package." },
];

/* ─── Structure Decision Guide ──────────────────────────────── */
const decisionGuide = [
  {
    category: "Small Businesses & Individual Entrepreneurs",
    desc: "Starting small, testing a business idea, or working independently.",
    structures: ["Sole Proprietorship – Minimal compliance, full control, ideal for freelancers and small traders.", "HUF – Suitable for families managing ancestral or family income for tax optimization."],
    bestFor: "Low cost, easy setup, and full control",
  },
  {
    category: "Growing Businesses & Startups",
    desc: "Planning to scale, bring in partners, or seek funding.",
    structures: ["Private Limited Company – Most preferred for startups, offering scalability and investor readiness.", "LLP – Suitable for professionals and partnerships seeking limited liability with simpler compliance.", "OPC – Ideal for solo entrepreneurs wanting a corporate structure."],
    bestFor: "Growth, limited liability, and structured operations",
  },
  {
    category: "Large Businesses & Fundraising",
    desc: "Goal is expansion, external funding, or public investment.",
    structures: ["Public Limited Company – Suitable for large-scale businesses planning IPOs or raising capital from the public."],
    bestFor: "Large operations, high credibility, and capital access",
  },
  {
    category: "Non-Profit & Social Objectives",
    desc: "Focus is on charitable, social, or non-commercial activities.",
    structures: ["Section 8 Company – High credibility, preferred for NGOs and institutional funding organizations.", "Trust / Society – Easier to form, suitable for community and charitable activities."],
    bestFor: "Social impact, grants, and non-profit operations",
  },
];

/* ─── FAQs ──────────────────────────────────────────────────── */
const faqs = [
  { q: "What is the difference between a Private Limited Company and an LLP?", a: "A Private Limited Company has shareholders and directors, offers limited liability, is easier to raise external funding for, and is governed by the Companies Act 2013. An LLP has designated partners, offers limited liability, has simpler governance and lower compliance costs, but is less suited for equity fundraising. We advise on the right choice based on your business plan." },
  { q: "How long does it take to incorporate a Private Limited Company?", a: "With all documents in order, incorporation typically takes 7–10 working days. The timeline depends on MCA21 processing speed and availability of your preferred company name. We provide a realistic estimate after reviewing your requirements." },
  { q: "What documents are required for company incorporation?", a: "For directors and shareholders: PAN card, Aadhaar / Passport, address proof (bank statement or utility bill), and passport-size photographs. For the registered office: address proof and NOC from the property owner. We provide a detailed checklist tailored to your chosen entity type." },
  { q: "What is the difference between a Section 8 Company, a Trust, and a Society?", a: "A Section 8 Company is registered under the Companies Act and offers the highest regulatory credibility — preferred for institutional grants and government recognition. A Trust is created by a deed under the Indian Trusts Act — simpler but with fewer compliance requirements. A Society is formed under the Societies Registration Act and is member-governed. Each suits different organizational purposes and scales." },
  { q: "What are the compliance requirements in the first year after incorporation?", a: "In the first year, a newly incorporated company must: appoint a statutory auditor within 30 days, hold the first board meeting within 30 days, open a bank account and deposit share capital, file INC-20A (commencement of business), and file AOC-4 and MGT-7 annually. JBB handles all of this as part of our incorporation package." },
  { q: "Can JBB help me choose the right structure for my business?", a: "Yes — structure selection is the most important part of our process. We evaluate your business model, funding requirements, tax implications, number of founders, and long-term objectives before recommending the most suitable legal structure. This advisory is provided as part of every engagement." },
];

/* ─── Related Services ──────────────────────────────────────── */
const relatedServices = [
  { icon: Receipt,         title: "Direct & Indirect Taxation",  desc: "ITR filing, TDS compliance, tax planning, and assessment handling.", href: "/services/direct-tax" },
  { icon: FileSpreadsheet, title: "GST Advisory & Compliance",   desc: "GSTR filing, ITC reconciliation, GST audit, and notice handling.", href: "/services/gst-advisory" },
  { icon: ClipboardCheck,  title: "Company Law & Secretarial",   desc: "ROC filings, board resolutions, MCA21 compliance, and secretarial audit.", href: "/services/company-law-secretarial" },
  { icon: Globe,           title: "Audit & Assurance",           desc: "Statutory, internal, and tax audits conducted with technical rigour.", href: "/services/audit-assurance" },
];

export default function BusinessIncorporationPage() {
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
            <span style={{ color: "var(--color-grey-200)" }}>Business Formation & Advisory</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--color-gold-400)" }}>Service Area</span>
          </div>
          <h1 className="text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Business Formation{" "}<span style={{ color: "var(--color-gold-500)" }}>& Advisory</span>
          </h1>
          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8">
            Starting a business is more than just registration — it&rsquo;s about choosing the right structure, setting a strong foundation, and ensuring everything is aligned for long-term growth.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Private Limited", "LLP", "OPC", "Partnership Firm", "Sole Proprietorship", "Section 8", "Trust & Society", "HUF"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5">{chip}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Business+Formation+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
              <MessageSquare size={15} />WhatsApp Us
            </a>
            <Link href="/contact?subject=Callback+Request" className="inline-flex items-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
              <PhoneCall size={14} />Request Callback
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {["All Entity Types Covered", "Structure-First Advisory", "7–10 Day Turnaround", "Post-Setup Compliance Support"].map((item) => (
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
                The Right Foundation — <span className="text-gradient-gold">From Day One</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                Business Formation & Advisory focuses on helping entrepreneurs and organisations make the right decisions at the very beginning. From selecting the appropriate legal structure to obtaining necessary registrations and setting up compliance frameworks, every step plays a critical role in how efficiently the business operates in the future.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                At JBB, we work closely with clients to understand their business model, funding plans, and growth vision before recommending the most suitable structure — whether it is a private limited company, LLP, partnership, or proprietorship. Beyond incorporation, we assist in securing all essential registrations and ensure the business is fully compliant from day one.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                Our approach is practical and forward-looking. We don&rsquo;t just complete formalities — we guide clients on structuring, regulatory positioning, and operational readiness so that there are no surprises later.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "9+", label: "Entity Types Covered" }, { value: "50+", label: "Entities Incorporated" }, { value: "7–10", label: "Days Average Turnaround" }, { value: "3", label: "Qualified CAs & CSs" }].map(({ value, label }) => (
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

      {/* ─── ENTITY TYPES ────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="What We Cover" title="All Business Structures We Assist With" accentWord="Structures We Assist With" subtitle="We assist in setting up all types of business entities in India — advising on the right structure based on your business model, funding plans, and long-term vision." align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entityTypes.map(({ icon: Icon, title, desc }) => (
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
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>Every engagement delivers a complete set of legal documents, registrations, and post-formation compliance support — so your business or organization starts on a solid, compliant foundation.</p>
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

      {/* ─── STRUCTURE DECISION GUIDE ────────────────────────── */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />
        <div className="container-jbb relative z-10">
          <SectionHeading eyebrow="Structure Selection Guide" title="Which Business Structure is Right for You?" accentWord="Right for You?" subtitle="Choosing the right business structure impacts your taxation, compliance, funding ability, and long-term growth. At JBB, we simplify this decision by aligning your goals with the most suitable legal structure." align="center" dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {decisionGuide.map(({ category, desc, structures, bestFor }) => (
              <div key={category} className="p-6 rounded" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <h4 className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "#ffffff" }}>{category}</h4>
                <p className="text-[11px] mb-4 italic" style={{ color: "rgba(255,255,255,0.60)" }}>{desc}</p>
                <ul className="space-y-2 mb-4">
                  {structures.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-400)" }} />
                      <span className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-gold-400)" }}>Best for: </span>
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.65)" }}>{bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY JBB ─────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="Why JBB" title="Why Choose JBB for Business Formation" accentWord="JBB for Business Formation" subtitle="Expert guidance on entity structure, fast and accurate registration, and complete post-formation support — all in one place." align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.25)" }}>
                  <Icon size={18} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "0.92rem", color: "var(--color-navy-900)" }}>{title}</h4>
                <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading eyebrow="How We Work" title="Our Formation Process" accentWord="Formation Process" subtitle="Five steps to take your business from concept to legally incorporated entity with all registrations complete." align="center" />
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
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading eyebrow="Also From JBB" title="Explore Related Services" accentWord="Related Services" subtitle="Discover other compliance and advisory services offered by JBB Business Advisors." align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map(({ icon: Icon, title, desc, href }) => (
              <div key={title} className="bg-white p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group flex flex-col">
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
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accentWord="Asked Questions" subtitle="Common questions about business formation, structure selection, incorporation timelines, and post-setup compliance — answered clearly." align="center" />
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
            Start Your Business Journey <span style={{ color: "var(--color-gold-500)" }}>with Confidence</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Whether you are launching, scaling, or restructuring — connect with JBB Business Advisors for expert structure advisory, fast incorporation, and complete post-registration compliance support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">Book Consultation</Button>
            <a href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+Business+Formation+Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200" style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}>
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
