import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Building2,
  BookOpen,
  Receipt,
  FileSpreadsheet,
  Headphones,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Lightbulb,
  Clock,
  Users,
  Handshake,
  Factory,
  Truck,
  HeartPulse,
  Home,
  ShoppingCart,
  Code2,
  BriefcaseBusiness,
  Rocket,
  Phone,
  ClipboardList,
  MapPin,
  Cog,
  LifeBuoy,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata = {
  title: "Services | JBB Business Advisors Private Limited",
  description:
    "JBB Business Advisors offers comprehensive CA, tax, compliance, audit, GST, transaction advisory, and business support services for startups, SMEs, and enterprises.",
};

/* ─── Data ──────────────────────────────────────────────────── */
const services = [
  {
    id: "business-formation",
    icon: Building2,
    href: "/services/business-formation-advisory",
    title: "Business Formation & Advisory",
    tagline: "Start Smart. Structure Right.",
    description:
      "We guide entrepreneurs and investors through every step of business formation — from choosing the right legal structure to post-incorporation compliance and governance setup.",
    deliverables: [
      "Company / LLP incorporation (MCA filings)",
      "Partnership firm & proprietorship registration",
      "MSME, Startup India & Shops Act registration",
      "Shareholders' agreements & founders' agreements",
      "Business restructuring & advisory",
      "Conversion of entities (Pvt to LLP, etc.)",
    ],
    benefits: [
      "Save time with end-to-end managed filings",
      "Avoid costly structural mistakes at inception",
      "Expert guidance on most tax-efficient structure",
    ],
    accent: "from-[#0A1628] to-[#163058]",
  },
  {
    id: "accounting-reporting",
    icon: BookOpen,
    href: "/services/accounting-reporting-assurance",
    title: "Accounting, Reporting & Assurance",
    tagline: "Accurate Books. Confident Decisions.",
    description:
      "From day-to-day bookkeeping to statutory audits and financial reporting, we ensure your financial records are accurate, timely, and board-ready.",
    deliverables: [
      "Monthly / quarterly bookkeeping & MIS",
      "Financial statement preparation (Ind AS / IGAAP)",
      "Statutory audit under Companies Act",
      "Internal audit & process reviews",
      "Forensic accounting & fraud investigation",
      "Virtual CFO & fractional finance leadership",
    ],
    benefits: [
      "Investor-ready financials at all times",
      "Early detection of process gaps & risks",
      "Strategic insight from experienced CFO professionals",
    ],
    accent: "from-[#102040] to-[#1e4080]",
  },
  {
    id: "direct-taxes",
    icon: Receipt,
    href: "/services/direct-taxes-compliance",
    title: "Direct Taxes & Compliance",
    tagline: "Optimised Taxation. Zero Surprises.",
    description:
      "Our direct tax team delivers end-to-end income tax planning, filing, and advisory — minimising your tax burden legally while keeping you fully compliant.",
    deliverables: [
      "Individual & corporate ITR preparation & filing",
      "TDS / TCS computation, filing & correction",
      "Tax planning & optimisation strategies",
      "Income tax notices & assessment handling",
      "Transfer pricing documentation",
      "Advance tax calculation & advisory",
    ],
    benefits: [
      "Proactive tax planning reduces outflows",
      "Expert representation before tax authorities",
      "Full compliance — no penalties or late fees",
    ],
    accent: "from-[#0A1628] to-[#163058]",
  },
  {
    id: "gst",
    icon: FileSpreadsheet,
    href: "/services/goods-and-services-tax",
    title: "Goods and Services Tax",
    tagline: "GST Simplified. Business Accelerated.",
    description:
      "Navigating GST is complex. Our specialists handle registrations, returns, reconciliations, and advisory — so you stay compliant and cash-flow efficient.",
    deliverables: [
      "GST registration & amendment",
      "Monthly / quarterly return filing (GSTR 1, 3B, 9, 9C)",
      "Input tax credit (ITC) reconciliation",
      "GST audit & annual return",
      "GST refund processing",
      "Show cause notice & litigation support",
    ],
    benefits: [
      "Maximise ITC claims with accurate reconciliation",
      "Avoid penalties with timely, error-free filing",
      "Expert advisory on GST structuring for transactions",
    ],
    accent: "from-[#102040] to-[#1e4080]",
  },
  {
    id: "business-support",
    icon: Headphones,
    href: "/services/business-support-services",
    title: "Business Support Services",
    tagline: "Compliance Handled. You Focus on Growth.",
    description:
      "A comprehensive bundle of regulatory, secretarial, and operational support services that keep your business running smoothly — without the in-house overhead.",
    deliverables: [
      "Company secretarial & ROC compliance",
      "Annual general meetings & board meeting support",
      "FEMA / RBI compliance & filing",
      "Labour law compliance (PF, ESI, PT)",
      "IBC / insolvency advisory",
      "Corporate governance advisory",
    ],
    benefits: [
      "Single partner for all compliance needs",
      "Never miss a statutory deadline",
      "Reduce compliance risk significantly",
    ],
    accent: "from-[#0A1628] to-[#163058]",
  },
  {
    id: "transaction-advisory",
    icon: TrendingUp,
    href: "/services/transaction-advisory-services",
    title: "Transaction Advisory Services",
    tagline: "Informed Deals. Better Outcomes.",
    description:
      "From M&A due diligence to investment advisory, our transaction specialists help you evaluate, structure, and close deals with confidence and precision.",
    deliverables: [
      "Financial & tax due diligence",
      "Business valuation (DCF, comparable)",
      "Investment & funding advisory",
      "M&A structuring & post-merger integration",
      "Joint venture & partnership advisory",
      "Exit planning & ESOP advisory",
    ],
    benefits: [
      "Independent, unbiased transaction assessment",
      "Identify hidden risks before they cost you",
      "Structured approach for optimal deal outcomes",
    ],
    accent: "from-[#102040] to-[#1e4080]",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance First",
    desc: "Every engagement is designed around zero-compromise compliance. We stay ahead of regulatory changes so you never have to worry.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    desc: "CAs, CSs, advocates, and investment advisors working under one roof — you get integrated expertise without managing multiple vendors.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    desc: "We convert complex regulations into clear, business-friendly actions. Our advice is always grounded in your commercial reality.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Deadlines are sacred for us. Our structured workflows and reminders ensure every filing, report, and deliverable is never late.",
  },
  {
    icon: Star,
    title: "Fixed-Fee Transparency",
    desc: "No surprise invoices. We offer clear, upfront pricing so you can budget confidently and plan your advisory spend.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We invest in understanding your business model deeply — enabling us to advise proactively, not just reactively.",
  },
];

const processSteps = [
  {
    no: "01",
    icon: Phone,
    title: "Consultation",
    desc: "A no-obligation discovery call to understand your business, immediate needs, and long-term goals.",
  },
  {
    no: "02",
    icon: ClipboardList,
    title: "Assessment",
    desc: "We review your current compliance posture, financial health, and regulatory obligations to identify gaps.",
  },
  {
    no: "03",
    icon: MapPin,
    title: "Strategy",
    desc: "We create a tailored engagement plan with clear timelines, responsibilities, and expected outcomes.",
  },
  {
    no: "04",
    icon: Cog,
    title: "Execution",
    desc: "Our team handles all filings, reports, advisory, and representations with precision and accountability.",
  },
  {
    no: "05",
    icon: LifeBuoy,
    title: "Ongoing Support",
    desc: "Post-engagement monitoring, periodic reviews, and proactive advisory keep you continuously compliant.",
  },
];

const industries = [
  { icon: Factory,           label: "Manufacturing" },
  { icon: Truck,             label: "Logistics & Supply Chain" },
  { icon: HeartPulse,        label: "Healthcare" },
  { icon: Home,              label: "Real Estate" },
  { icon: ShoppingCart,      label: "Retail & E-commerce" },
  { icon: Code2,             label: "Information Technology" },
  { icon: BriefcaseBusiness, label: "Professional Services" },
  { icon: Rocket,            label: "Startups & SMEs" },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO                                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="hero-gradient hero-bg-services relative overflow-hidden min-h-[52vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
              What We Offer
            </span>
          </div>

          <h1
            className="text-white mb-5 animate-fade-in-up delay-100 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Professional Services Designed for{" "}
            <span className="text-[var(--color-gold-500)]">Business Growth</span>
          </h1>

          <p className="hero-p text-lg leading-relaxed max-w-2xl mb-8 animate-fade-in-up delay-200">
            Comprehensive taxation, compliance, advisory, and business support
            solutions — crafted for startups, SMEs, and growing enterprises.
          </p>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap gap-2 animate-fade-in-up delay-300">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="hero-badge text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5 hover:border-[var(--color-gold-500)] hover:text-[var(--color-gold-400)] transition-all duration-200"
              >
                {s.title}
              </Link>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-[var(--color-grey-400)] text-xs animate-fade-in-up delay-300">
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-grey-200)]">Services</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SERVICE CATEGORIES                                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Our Services"
            title="Six Verticals. One Integrated Firm."
            accentWord="One Integrated Firm."
            subtitle="Every service vertical is staffed by specialists, coordinated by a single engagement lead — giving you the depth of a specialist firm with the convenience of a single advisor."
            align="center"
          />

          <div className="space-y-6">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="bg-white rounded-sm border border-[var(--color-grey-100)] overflow-hidden hover:shadow-[0_16px_48px_rgba(10,22,40,0.10)] transition-all duration-300 group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] ${isEven ? "lg:grid-cols-[2fr_1fr]" : ""}`}>
                    {/* Accent Panel */}
                    <div className={`bg-gradient-to-br ${svc.accent} p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden ${isEven ? "lg:order-last" : ""}`}>
                      {/* Background decoration */}
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5" />
                      <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/5" />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded bg-white/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-gold-500)]/20 transition-colors duration-300">
                          <Icon size={26} className="text-[var(--color-gold-400)]" />
                        </div>
                        <p className="text-[var(--color-gold-400)] text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
                          {svc.tagline}
                        </p>
                        <h3
                          className="text-white text-xl font-semibold leading-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {svc.title}
                        </h3>
                      </div>

                      {/* Benefits */}
                      <div className="mt-8 space-y-2 relative z-10">
                        {svc.benefits.map((b) => (
                          <div key={b} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-[var(--color-gold-400)] mt-0.5 flex-shrink-0" />
                            <p className="text-white/75 text-xs leading-snug">{b}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className="p-8 lg:p-10">
                      <p className="text-[var(--color-grey-600)] text-base leading-relaxed mb-7">
                        {svc.description}
                      </p>

                      {/* Divider */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-px flex-1 bg-[var(--color-grey-100)]" />
                        <p className="text-[var(--color-gold-600)] text-[10px] font-semibold tracking-[0.18em] uppercase">
                          Key Deliverables
                        </p>
                        <div className="h-px flex-1 bg-[var(--color-grey-100)]" />
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                        {svc.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[var(--color-grey-700)]">
                            <ArrowRight size={13} className="text-[var(--color-gold-500)] mt-0.5 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      <Button as="link" href="/contact" variant="primary" icon>
                        Enquire About This Service
                      </Button>
                      {svc.href && (
                        <Link href={svc.href} className="inline-flex items-center gap-2 ml-4 text-sm font-semibold transition-colors duration-200" style={{ color: "var(--color-gold-700)" }}>
                          View Service Details <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* WHY OUR SERVICES STAND OUT                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-56 h-56 rounded-full border border-white/5 pointer-events-none" />

        <div className="container-jbb relative z-10">
          <SectionHeading
            eyebrow="Our Advantage"
            title="Why Our Services Stand Out"
            accentWord="Stand Out"
            subtitle="What makes JBB different from a typical CA firm — and why our clients stay with us year after year."
            align="center"
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded border border-white/10 bg-white/4 hover:bg-white/8 hover:border-[var(--color-gold-500)]/40 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/25 flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold-500)]/25 transition-colors duration-300">
                  <Icon size={20} className="text-[var(--color-gold-400)]" />
                </div>
                <h4
                  className="text-white font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
                >
                  {title}
                </h4>
                <p className="hero-p text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SERVICE DELIVERY PROCESS                                 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Top gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/40 to-transparent" />

        <div className="container-jbb">
          <SectionHeading
            eyebrow="How We Work"
            title="A Structured Delivery Process"
            accentWord="Structured Delivery Process"
            subtitle="Every engagement follows a disciplined, five-stage methodology that ensures nothing falls through the cracks."
            align="center"
          />

          {/* Process steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-[var(--color-gold-300)] via-[var(--color-gold-500)] to-[var(--color-gold-300)] opacity-40" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map(({ no, icon: Icon, title, desc }, idx) => (
                <div key={no} className="flex flex-col items-center text-center group">
                  {/* Step badge */}
                  <div className="relative mb-5">
                    {/* Outer ring */}
                    <div className="w-14 h-14 rounded-full border-2 border-[var(--color-gold-500)]/30 flex items-center justify-center bg-white z-10 relative group-hover:border-[var(--color-gold-500)] transition-all duration-300 group-hover:shadow-[0_0_0_6px_rgba(201,168,76,0.08)]">
                      <Icon size={22} className="text-[var(--color-navy-800)] group-hover:text-[var(--color-gold-600)] transition-colors duration-300" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-navy-900)] flex items-center justify-center z-20">
                      <span className="text-[8px] font-bold text-[var(--color-gold-400)]">{no}</span>
                    </div>
                  </div>

                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-display)", fontSize: "1rem" }}
                  >
                    {title}
                  </h4>
                  <p className="text-[var(--color-grey-500)] text-xs leading-relaxed">
                    {desc}
                  </p>

                  {/* Mobile connector arrow */}
                  {idx < processSteps.length - 1 && (
                    <ArrowRight size={16} className="text-[var(--color-gold-400)] mt-4 lg:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* INDUSTRIES SERVED                                        */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Sector Experience"
            title="Industries We Serve"
            accentWord="Industries We Serve"
            subtitle="Our advisory experience spans a wide range of sectors — giving us nuanced understanding of the compliance, tax, and business challenges unique to each."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white border border-[var(--color-grey-100)] rounded-sm p-6 flex flex-col items-center gap-3 text-center hover:border-[var(--color-gold-300)] hover:shadow-[0_8px_32px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-navy-50)] flex items-center justify-center group-hover:bg-[var(--color-navy-900)] transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-[var(--color-navy-700)] group-hover:text-[var(--color-gold-400)] transition-colors duration-300"
                  />
                </div>
                <p
                  className="text-xs font-semibold leading-snug"
                  style={{ color: "var(--color-navy-900)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FINAL CTA                                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        {/* Gold top stripe */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent" />

        <div className="container-jbb relative z-10 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--color-gold-500)]/60" />
            <p className="text-[var(--color-gold-400)] text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
              Start Today
            </p>
            <div className="h-px w-10 bg-[var(--color-gold-500)]/60" />
          </div>

          <h2
            className="text-white mb-4 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Get Expert Advisory{" "}
            <span className="text-[var(--color-gold-500)]">for Your Business?</span>
          </h2>

          <p className="hero-p text-base leading-relaxed max-w-xl mx-auto mb-10">
            Book a no-obligation consultation with our team. We will understand
            your needs, assess your situation, and propose a tailored engagement
            within 48 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button as="link" href="/contact" variant="primary" icon size="lg">
              Book a Free Consultation
            </Button>
            <Button as="link" href="tel:01244478129" variant="outline-navy" size="lg" className="!border-white/30 !text-white hover:!border-[var(--color-gold-500)] hover:!text-[var(--color-gold-400)]">
              Call: 0124-4478129
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-xs hero-label">
            {[
              { icon: ShieldCheck, text: "Confidential Consultation" },
              { icon: Clock,       text: "Response within 24 hours" },
              { icon: Star,        text: "7+ Years of Expertise" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon size={13} className="text-[var(--color-gold-500)]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
