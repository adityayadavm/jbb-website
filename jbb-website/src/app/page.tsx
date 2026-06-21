import Image from "next/image";
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
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Users,
  BarChart3,
  LayoutGrid,
  Factory,
  Truck,
  HeartPulse,
  Home,
  ShoppingCart,
  Code2,
  BriefcaseBusiness,
  Rocket,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */
const services = [
  {
    icon: Building2,
    title: "Business Formation & Advisory",
    desc: "Company incorporation, LLP formation, business structuring, and ongoing corporate advisory to help you start and scale with confidence.",
    href: "/services/business-formation-advisory",
  },
  {
    icon: BookOpen,
    title: "Accounting, Reporting & Assurance",
    desc: "Accurate bookkeeping, financial statement preparation, statutory audit, and assurance services aligned with Indian and international standards.",
    href: "/services/accounting-reporting-assurance",
  },
  {
    icon: Receipt,
    title: "Direct Taxes & Compliance",
    desc: "Income tax planning, return filing, TDS compliance, tax assessments, and representation before tax authorities for individuals and businesses.",
    href: "/services/direct-taxes-compliance",
  },
  {
    icon: FileSpreadsheet,
    title: "Goods & Services Tax (GST)",
    desc: "GST registration, monthly and annual return filing, input tax credit optimisation, audit support, and litigation handling under GST law.",
    href: "/services/goods-and-services-tax",
  },
  {
    icon: Headphones,
    title: "Business Support Services",
    desc: "Payroll processing, HR compliance, virtual CFO services, MIS reporting, and day-to-day operational support for growing businesses.",
    href: "/services/business-support-services",
  },
  {
    icon: TrendingUp,
    title: "Transaction Advisory Services",
    desc: "Due diligence, business valuations, M&A advisory, financial modelling, and strategic guidance for mergers, acquisitions, and investments.",
    href: "/services/transaction-advisory-services",
  },
];

const stats = [
  { icon: CalendarDays, value: "10+",  label: "Years of Practice" },
  { icon: Users,        value: "15+",  label: "Team Professionals" },
  { icon: BarChart3,    value: "600+", label: "Clients Served" },
  { icon: LayoutGrid,   value: "10+",  label: "Service Verticals" },
];

const whyUs = [
  "Dedicated team of qualified CAs, CSs, and legal professionals",
  "Pan-India presence with deep local regulatory expertise",
  "Transparent, client-first approach with fixed-fee engagements",
  "Technology-enabled compliance tracking & reporting",
  "Trusted by startups, SMEs, and large corporates alike",
  "Timely delivery with zero-compromise on quality",
];

const team = [
  {
    name: "Manita Kumari",
    role: "Founder & Director",
    credential: "Chartered Accountant",
    image: "/team-manita.png",
    expertise: [
      "Direct Taxation",
      "Fractional CFO Services",
      "Business Formation",
      "Transaction Advisory",
    ],
  },
  {
    name: "Rishu Yadav",
    role: "Partner",
    credential: "Chartered Accountant",
    image: "/team-rishu.png",
    expertise: [
      "Statutory Audit",
      "Internal Audit",
      "Forensic Accounting",
      "Direct & Indirect Tax",
    ],
  },
  {
    name: "Anjali Yadav",
    role: "Partner",
    credential: "Chartered Accountant",
    image: "/team-anjali.png",
    expertise: [
      "Accounting",
      "Audit",
      "Financial Reporting",
      "Compliance",
    ],
  },
  {
    name: "Mohammad Khalid",
    role: "Partner",
    credential: "Company Secretary & Insolvency Professional",
    image: "/team-khalid.png",
    expertise: [
      "Company Law",
      "IBC",
      "FEMA / RBI Compliance",
      "Corporate Governance",
    ],
  },
  {
    name: "Rajul Jain",
    role: "Partner",
    credential: "Advocate & Investment Consultant",
    image: "/team-rajul.png",
    expertise: [
      "Investment Advisory",
      "DRT",
      "Consumer Protection",
      "Labour Law",
    ],
  },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO                                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{
          background: "linear-gradient(rgba(5,10,20,0.60), rgba(5,10,20,0.60)), url('/bg/home-hero-bulb.jpg') center center / cover no-repeat",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full border border-white/5 opacity-20 -translate-x-1/2 translate-y-1/2" />
          {/* Gold accent strip */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
              <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
                Trusted Advisory Partner Since 2018
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-white mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Business Advisory, Tax &amp;{" "}
              <span className="text-[var(--color-gold-500)]">
                Compliance Solutions
              </span>{" "}
              for Growing Businesses
            </h1>

            {/* Subheading */}
            <p className="hero-p text-lg leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-200">
              JBB Business Advisors Private Limited helps startups, SMEs, and
              established businesses navigate taxation, regulatory compliance,
              financial reporting, business structuring, and strategic growth
              with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Button as="link" href="/contact" variant="primary" icon size="lg">
                Get Free Consultation
              </Button>
              <Button as="link" href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up delay-400">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                    <Icon size={16} className="text-[var(--color-gold-400)]" />
                  </div>
                  <div>
                    <p className="hero-stat-value font-bold text-lg leading-none">
                      {value}
                    </p>
                    <p className="hero-stat-label text-[11px] mt-0.5">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SERVICES OVERVIEW                                        */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive Advisory Services"
            accentWord="Advisory Services"
            subtitle="From taxation and audit to legal compliance and strategic advisory — our expert team delivers end-to-end solutions tailored to your business needs."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <div key={title} className="card p-7 group h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded bg-[var(--color-navy-50)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-navy-900)] transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[var(--color-navy-900)] group-hover:text-[var(--color-gold-500)] transition-colors duration-300"
                  />
                </div>
                {/* Content */}
                <h3
                  className="text-[var(--color-navy-900)] text-lg font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="text-[var(--color-grey-700)] text-sm leading-relaxed mb-5 flex-1">
                  {desc}
                </p>
                {/* Link */}
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-gold-500)] hover:gap-3 transition-all duration-300 mt-auto"
                >
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button as="link" href="/services" variant="outline-navy" icon>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* WHY JBB                                                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] section-bg-abstract relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-white/3 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-white/3 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="container-jbb relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <SectionHeading
                eyebrow="Why Choose JBB"
                title="Your Trusted Partner in Business Success"
                accentWord="Trusted Partner"
                subtitle="We combine deep domain expertise with a personal approach to deliver compliance solutions that are practical, precise, and tailored to your business."
                align="left"
                dark
              />
              <Button as="link" href="/about" variant="primary" icon>
                About Our Firm
              </Button>
            </div>

            {/* Right — Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-4 min-h-[4rem] rounded bg-white/5 border border-white/10 hover:border-[var(--color-gold-500)]/30 hover:bg-white/8 transition-all duration-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[var(--color-gold-500)] mt-0.5 flex-shrink-0"
                  />
                  <p
                    style={{ color: "var(--color-grey-300)" }}
                    className="text-sm leading-snug"
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LEADERSHIP TEAM                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Our Leadership"
            title="Meet the Leadership Behind JBB"
            accentWord="Leadership Behind JBB"
            subtitle="A multidisciplinary team of Chartered Accountants, Company Secretaries, legal professionals, insolvency experts, and investment advisors working together to deliver integrated business solutions."
            align="center"
          />

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {team.slice(0, 3).map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-sm border border-[var(--color-grey-100)] overflow-hidden group hover:shadow-[0_12px_40px_rgba(10,22,40,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top navy band with avatar */}
                <div className="relative bg-[var(--color-navy-900)] pt-8 pb-14 flex justify-center">
                  {/* Decorative arc */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-[50%]" />
                  {/* Avatar */}
                  <div className="relative w-24 h-24 rounded-full border-4 border-[var(--color-gold-500)] overflow-hidden z-10 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-6 pb-7 pt-3 text-center">
                  <h3
                    className="text-base font-bold text-[var(--color-navy-900)] leading-tight mb-0.5"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-gold-600)] text-xs font-semibold uppercase tracking-wide mb-1">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-grey-500)] text-[11px] mb-4 leading-snug">
                    {member.credential}
                  </p>

                  {/* Gold divider */}
                  <div className="gold-line mx-auto mb-4" />

                  {/* Expertise tags */}
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[var(--color-navy-50)] text-[var(--color-navy-800)] border border-[var(--color-navy-100)] group-hover:border-[var(--color-gold-300)] group-hover:bg-[var(--color-gold-100)] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
            {team.slice(3).map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-sm border border-[var(--color-grey-100)] overflow-hidden group hover:shadow-[0_12px_40px_rgba(10,22,40,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative bg-[var(--color-navy-900)] pt-8 pb-14 flex justify-center">
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-[var(--color-grey-50)] rounded-t-[50%]" />
                  <div className="relative w-24 h-24 rounded-full border-4 border-[var(--color-gold-500)] overflow-hidden z-10 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="px-6 pb-7 pt-3 text-center">
                  <h3
                    className="text-base font-bold text-[var(--color-navy-900)] leading-tight mb-0.5"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-gold-600)] text-xs font-semibold uppercase tracking-wide mb-1">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-grey-500)] text-[11px] mb-4 leading-snug">
                    {member.credential}
                  </p>
                  <div className="gold-line mx-auto mb-4" />
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[var(--color-navy-50)] text-[var(--color-navy-800)] border border-[var(--color-navy-100)] group-hover:border-[var(--color-gold-300)] group-hover:bg-[var(--color-gold-100)] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button as="link" href="/team" variant="outline-navy" icon>
              View Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* TRUST & SOCIAL PROOF                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] section-bg-abstract relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/40 to-transparent" />

        <div className="container-jbb relative z-10">
          <SectionHeading
            eyebrow="Our Reach"
            title="Trusted by Businesses Across Industries"
            accentWord="Businesses Across Industries"
            subtitle="JBB Business Advisors supports startups, SMEs, family businesses, and established enterprises with taxation, compliance, advisory, and strategic business solutions."
            align="center"
            dark
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { icon: BarChart3,    value: "600+", label: "Clients Served" },
              { icon: CalendarDays, value: "10+",  label: "Years of Practice" },
              { icon: Users,        value: "15+",  label: "Professionals" },
              { icon: LayoutGrid,   value: "10+",  label: "Service Verticals" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-3 p-6 rounded text-center cursor-default hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.30)" }}>
                  <Icon size={20} style={{ color: "#d4b86a" }} />
                </div>
                <div>
                  <p className="font-bold leading-none mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,2.6rem)", color: "#ffffff" }}>
                    {value}
                  </p>
                  <div className="w-8 h-0.5 rounded mx-auto mb-2" style={{ background: "var(--color-gold-500)" }} />
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="mb-14">
            <div className="flex items-center gap-3 justify-center mb-7">
              <div className="h-px w-10" style={{ background: "var(--color-gold-500)" }} />
              <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--color-gold-400)" }}>Industries We Serve</p>
              <div className="h-px w-10" style={{ background: "var(--color-gold-500)" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Factory,           label: "Manufacturing" },
                { icon: Truck,             label: "Logistics & Supply Chain" },
                { icon: HeartPulse,        label: "Healthcare" },
                { icon: Home,              label: "Real Estate" },
                { icon: ShoppingCart,      label: "Retail & E-commerce" },
                { icon: Code2,             label: "Information Technology" },
                { icon: BriefcaseBusiness, label: "Professional Services" },
                { icon: Rocket,            label: "Startups & SMEs" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-5 py-4 rounded cursor-default hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:border-[rgba(201,168,76,0.35)] transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center" style={{ background: "rgba(201,168,76,0.14)", border: "1px solid rgba(201,168,76,0.25)" }}>
                    <Icon size={18} style={{ color: "#d4b86a" }} />
                  </div>
                  <p className="font-semibold text-sm leading-snug" style={{ color: "#ffffff" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Portfolio */}
          <div className="rounded p-8" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.10)" }} />
              <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase whitespace-nowrap" style={{ color: "var(--color-gold-400)" }}>
                Representative Client Portfolio
              </p>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.10)" }} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
              {[
                { abbr: "MFG", sector: "Manufacturing" },
                { abbr: "IT",  sector: "Technology" },
                { abbr: "RE",  sector: "Real Estate" },
                { abbr: "HC",  sector: "Healthcare" },
                { abbr: "LOG", sector: "Logistics" },
                { abbr: "SME", sector: "Startup" },
              ].map(({ abbr, sector }) => (
                <div
                  key={abbr}
                  className="h-16 rounded flex flex-col items-center justify-center gap-1"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <span className="font-bold text-sm tracking-wider" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-400)" }}>
                    {abbr}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {sector}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Client logos are displayed upon written approval. We respect client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CONTACT STRIP                                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb text-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Have a Compliance Challenge?"
            accentWord="Compliance Challenge?"
            subtitle="Our team of chartered accountants, company secretaries, and legal experts are ready to help. Reach out for a no-obligation consultation."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">
              Schedule a Consultation
            </Button>
            <Button as="link" href="tel:+911244224886" variant="outline-navy" size="lg">
              Call: 0124-4224886
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
