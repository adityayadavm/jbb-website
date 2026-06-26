import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  BookOpen,
  HeartHandshake,
  Users,
  Leaf,
  Building2,
  TrendingUp,
  FileText,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata = {
  title: "CSR Advisory & Social Impact | JBB Business Advisors",
  description:
    "JBB Business Advisors helps corporates plan, execute, and monitor meaningful CSR initiatives with compliance, transparency, and measurable impact.",
};

/* ─── Data ──────────────────────────────────────────────────── */
const howWeHelp = [
  { icon: FileText,      title: "CSR Planning & Advisory",              desc: "Strategic guidance on identifying, structuring, and prioritising CSR activities aligned with your company's mandate and values." },
  { icon: HeartHandshake,title: "NGO / Partner Coordination",           desc: "Connecting companies with credible NGOs and implementation partners suited to specific CSR objectives and project areas." },
  { icon: FileText,      title: "CSR Project Documentation",            desc: "End-to-end documentation support including project proposals, activity reports, and board-level CSR committee records." },
  { icon: BookOpen,      title: "Compliance Support",                   desc: "Advisory on applicable CSR provisions, schedules, and reporting requirements to ensure full regulatory compliance." },
  { icon: TrendingUp,    title: "Budget Planning & Utilisation Tracking", desc: "Structured CSR budget planning, fund allocation, and ongoing utilisation tracking for each project." },
  { icon: Building2,     title: "Impact Reporting & Documentation",      desc: "Preparation of impact reports documenting social outcomes, beneficiary reach, and fund utilisation for stakeholders." },
  { icon: Users,         title: "Corporate Volunteering Support",        desc: "Designing and coordinating corporate volunteering programmes and employee social engagement initiatives." },
];

const whoCanConnect = [
  "Companies looking to undertake CSR activities",
  "Organisations seeking CSR planning and advisory support",
  "NGOs looking for corporate CSR collaboration",
  "Educational, healthcare, environment, and community welfare initiatives",
  "Businesses wanting structured CSR documentation and reporting",
];

const supportAreas = [
  { icon: BookOpen,      label: "Education & Skill Development" },
  { icon: HeartHandshake,label: "Healthcare & Wellness" },
  { icon: Users,         label: "Women Empowerment" },
  { icon: Leaf,          label: "Environment & Sustainability" },
  { icon: Building2,     label: "Rural & Community Development" },
  { icon: TrendingUp,    label: "Financial Literacy" },
  { icon: HeartHandshake,label: "Livelihood Support" },
];

const process = [
  { step: "01", title: "Initial CSR Discussion",           desc: "Understanding your company's CSR mandate, budget, preferred causes, and geographic focus through an initial consultation." },
  { step: "02", title: "Cause & Project Identification",   desc: "Identifying suitable CSR causes, project ideas, and implementation approaches aligned with Schedule VII and your objectives." },
  { step: "03", title: "Partner & Implementation Planning", desc: "Identifying and engaging credible implementation partners, NGOs, or direct project structures with clear scope and timelines." },
  { step: "04", title: "Documentation & Compliance",       desc: "Preparing all required board resolutions, CSR policy documentation, activity records, and compliance filings." },
  { step: "05", title: "Impact Tracking & Reporting",      desc: "Monitoring project progress, capturing outcomes, and preparing impact reports for board review and public disclosure." },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function CSRPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO                                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="hero-gradient relative overflow-hidden min-h-[54vh] flex items-center"
        style={{
          backgroundColor: "rgb(2,10,25)",
          backgroundImage: "linear-gradient(to right, rgba(2,10,25,0.30), rgba(2,10,25,0.55)), url('/bg/csr-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
              Corporate Social Responsibility
            </span>
          </div>

          <h1
            className="text-white mb-5 animate-fade-in-up delay-100 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CSR Advisory &{" "}
            <span className="text-[var(--color-gold-500)]">Social Impact Support</span>
          </h1>

          <p className="hero-p text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            Helping corporates plan, execute, and monitor meaningful CSR initiatives with
            compliance, transparency, and measurable impact.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mt-8 animate-fade-in-up delay-300">
            {["CSR Planning", "NGO Coordination", "Compliance Support", "Impact Reporting"].map((chip) => (
              <span key={chip} className="hero-badge text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5">
                {chip}
              </span>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-[var(--color-grey-400)] text-xs animate-fade-in-up delay-300">
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-grey-200)]">CSR Advisory</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CSR OVERVIEW                                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
            {/* Left — overview text */}
            <div className="prose">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>Overview</span>
              </div>
              <h2 className="mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>
                Purposeful CSR. <span className="text-gradient-gold">Structured & Compliant.</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-grey-600)" }}>
                JBB Business Advisors Private Limited supports companies, institutions, and
                organisations in planning CSR initiatives that are compliant, transparent, and
                impact-driven. We help businesses connect with suitable social causes, structure
                CSR activities, maintain documentation, and create meaningful social value.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                Whether you are a company discharging your CSR mandate, an NGO seeking corporate
                partners, or an organisation building social impact programmes, JBB provides the
                advisory, documentation, and coordination support to make it structured, effective,
                and well-documented.
              </p>
            </div>

            {/* Right — highlight panel */}
            <div className="bg-[var(--color-navy-900)] rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-gold-500)]/8 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[var(--color-gold-500)]/5 rounded-tr-full" />
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/30 flex items-center justify-center">
                  <HeartHandshake size={22} style={{ color: "#d4b86a" }} />
                </div>
                <div>
                  <p className="text-[var(--color-gold-400)] text-4xl font-serif leading-none mb-4">&ldquo;</p>
                  <p
                    className="text-white text-base leading-relaxed italic"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    CSR done right goes beyond compliance — it creates genuine social value,
                    builds community trust, and reflects a company&rsquo;s true character.
                  </p>
                </div>
                <div className="gold-line" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "7+", label: "Schedule VII Areas" },
                    { value: "End-to-End", label: "Support Offered" },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-[var(--color-gold-400)]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-base leading-none">{value}</p>
                        <p style={{ color: "var(--color-grey-300)" }} className="text-[10px] mt-0.5 uppercase tracking-wider">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* HOW JBB CAN HELP                                        */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="How JBB Can Help"
            title="End-to-End CSR Support"
            accentWord="CSR Support"
            subtitle="From initial planning and partner identification through to compliance filing and impact documentation — we cover every dimension of CSR advisory."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {howWeHelp.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300 flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }}
                >
                  <Icon size={16} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <h3
                  className="font-semibold mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.9rem" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--color-grey-600)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* WHO CAN CONNECT                                         */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-56 h-56 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />

        <div className="container-jbb relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — heading */}
            <div>
              <SectionHeading
                eyebrow="Who Can Connect With Us"
                title="We Work With a Range of Stakeholders"
                accentWord="Range of Stakeholders"
                align="left"
                dark
              />
              <p className="text-sm leading-relaxed mb-8 prose-justify" style={{ color: "rgba(255,255,255,0.72)" }}>
                Whether you are a company fulfilling your CSR obligation or an organisation seeking
                meaningful corporate partnerships, JBB can provide the structure, advisory, and
                documentation support you need.
              </p>
              <Button as="link" href="/contact" variant="primary" icon>
                Connect With Us
              </Button>
            </div>
            {/* Right — checklist */}
            <div className="grid grid-cols-1 gap-3">
              {whoCanConnect.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-4 rounded"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-gold-400)" }}
                  />
                  <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CSR SUPPORT AREAS                                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="CSR Support Areas"
            title="Cause Areas We Support"
            accentWord="Cause Areas"
            subtitle="JBB supports CSR initiatives across all major Schedule VII categories — helping companies direct resources where they create the most meaningful impact."
            align="center"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {supportAreas.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-5 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] transition-all duration-300 group cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-3 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }}
                >
                  <Icon size={18} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <p
                  className="font-semibold text-[11px] leading-snug uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT PROCESS                                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Our Process"
            title="Our CSR Engagement Process"
            accentWord="CSR Engagement Process"
            subtitle="A structured five-step approach that takes your CSR initiative from concept to compliant, documented execution."
            align="center"
          />
          {/* Step connector line */}
          <div className="relative">
            <div
              className="absolute top-9 left-0 right-0 h-px hidden lg:block"
              style={{ background: "linear-gradient(to right, transparent, var(--color-gold-300), transparent)" }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center group">
                  <div
                    className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-5 shrink-0 group-hover:shadow-[0_0_0_6px_rgba(201,168,76,0.15)] transition-all duration-300"
                    style={{ background: "var(--color-navy-900)", border: "2px solid var(--color-gold-500)" }}
                  >
                    <span
                      className="font-bold text-base"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-400)" }}
                    >
                      {step}
                    </span>
                  </div>
                  <h4
                    className="font-semibold mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.88rem" }}
                  >
                    {title}
                  </h4>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CTA                                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />
        <div className="absolute -right-16 top-0 bottom-0 w-72 bg-gradient-to-l from-[var(--color-gold-500)]/4 to-transparent pointer-events-none" />

        <div className="container-jbb text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-400)" }}>
              Get In Touch
            </p>
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
          </div>

          <h2
            className="mb-4 mx-auto max-w-2xl"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Want to Collaborate for{" "}
            <span style={{ color: "var(--color-gold-500)" }}>CSR or Social Impact?</span>
          </h2>

          <p
            className="text-base leading-relaxed max-w-xl mx-auto mb-10 prose-justify"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Whether you are a company planning CSR activities, an NGO seeking corporate
            partnerships, or an organisation building social impact programmes — connect
            with JBB Business Advisors for structured support and professional guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact?subject=CSR+Enquiry" variant="primary" icon size="lg">
              Connect for CSR
            </Button>
            <a
              href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+CSR+advisory+support."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200"
              style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.28)", background: "transparent" }}
            >
              <MessageSquare size={15} /> WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200"
              style={{ fontSize: "0.875rem", padding: "1rem 2rem", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}
            >
              <Phone size={14} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
