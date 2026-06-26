import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import StatBar from "@/components/StatBar";
import {
  Receipt,
  BookOpen,
  FileSpreadsheet,
  Building2,
  Scale,
  TrendingUp,
  Briefcase,
  BarChart3,
  Mail,
  ExternalLink,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata = {
  title: "Our Team | JBB Business Advisors Private Limited",
  description:
    "Meet the leadership team at JBB Business Advisors — Chartered Accountants, Company Secretary, Insolvency Professional, Advocate, and Investment Consultant working together.",
};

/* ─── Team Data ─────────────────────────────────────────────── */
const team = [
  {
    name: "Manita Kumari",
    role: "Founder & Director",
    credential: "Chartered Accountant",
    image: "/team-manita.png",
    bio: "Founder and Director of JBB Business Advisors with 10+ years of experience across taxation, financial advisory, audit, regulatory compliance, and business structuring.",
    expertise: ["Direct Taxation", "Fractional CFO", "Business Formation", "Transaction Advisory"],
  },
  {
    name: "Rishu Yadav",
    role: "Partner",
    credential: "Chartered Accountant",
    image: "/team-rishu.png",
    bio: "Chartered Accountant with 6 years of experience in statutory audits, internal audits, forensic accounting, direct taxation, indirect tax compliance, and ROC matters.",
    expertise: ["Statutory Audit", "Internal Audit", "Forensic Accounting", "Direct Tax", "GST"],
  },
  {
    name: "Anjali Yadav",
    role: "Partner",
    credential: "Chartered Accountant",
    image: "/team-anjali.png",
    bio: "Chartered Accountant supporting clients across accounting, audit, financial reporting, statutory compliance, and business advisory engagements.",
    expertise: ["Accounting", "Audit", "Financial Reporting", "Compliance"],
  },
  {
    name: "Ritu Yadav",
    role: "Accounts Executive",
    credential: "CA Finalist",
    image: "/team-ritu.png",
    bio: "CA Finalist associated with Manita Kumari & Co. as an Accounts Executive, involved in accounting, bookkeeping, financial reporting, GST compliance, and income tax compliance across various business sectors.",
    expertise: ["Accounting", "Bookkeeping", "Financial Reporting", "GST Compliance", "Income Tax"],
  },
  {
    name: "Mohammad Khalid",
    role: "Partner",
    credential: "Company Secretary & Insolvency Professional",
    image: "/team-khalid.png",
    bio: "Company Secretary, Insolvency Professional, and legal professional with 10+ years of experience in company law, IBC, FEMA/RBI compliance, governance, and transactional advisory.",
    expertise: ["Company Law", "IBC", "FEMA / RBI", "Corporate Governance", "NCLT"],
  },
  {
    name: "Rajul Jain",
    role: "Partner",
    credential: "Advocate & Investment Consultant",
    image: "/team-rajul.png",
    bio: "Advocate and investment consultant advising clients across investment planning, DRT matters, consumer protection, labour law, land valuation, and legal representation.",
    expertise: ["Investment Advisory", "DRT", "Consumer Protection", "Labour Law", "Legal Advisory"],
  },
];

/* ─── Expertise Areas ────────────────────────────────────────── */
const expertiseAreas = [
  { icon: Receipt,     title: "Taxation",           desc: "Comprehensive direct and indirect tax planning, filing, and advisory for individuals and businesses." },
  { icon: BookOpen,    title: "Audit & Assurance",  desc: "Statutory, internal, and forensic audits conducted with technical rigour and independent objectivity." },
  { icon: FileSpreadsheet, title: "GST Compliance", desc: "End-to-end GST registrations, return filing, ITC reconciliation, audits, and litigation support." },
  { icon: Building2,   title: "Company Law",        desc: "MCA filings, ROC compliance, board meeting support, and full secretarial practice under Companies Act." },
  { icon: Scale,       title: "Insolvency & IBC",   desc: "Expert advisory and representation in insolvency proceedings under the Insolvency & Bankruptcy Code." },
  { icon: BarChart3,   title: "Investment Advisory", desc: "SEBI-registered investment consulting, portfolio structuring, and financial planning for HNIs and businesses." },
  { icon: Briefcase,   title: "Business Formation", desc: "Company, LLP, OPC incorporation, partnership registration, MSME, and startup compliance." },
  { icon: TrendingUp,  title: "Transaction Advisory", desc: "M&A due diligence, business valuation, funding advisory, and deal structuring for growing enterprises." },
];

/* ─── Team Card ──────────────────────────────────────────────── */
function TeamCard({ member }: { member: typeof team[0] }) {
  return (
    <div className="bg-white border border-[var(--color-grey-100)] rounded-sm p-6 flex flex-col items-center text-center hover:border-[var(--color-gold-300)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] transition-all duration-300 group">

      {/* Avatar */}
      <div className="relative w-[120px] h-[120px] rounded-full border-[3px] border-[var(--color-gold-500)] overflow-hidden mb-4 flex-shrink-0 group-hover:border-[var(--color-gold-400)] transition-colors duration-300">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="120px"
        />
      </div>

      {/* Name & role */}
      <h3
        className="font-semibold text-base leading-snug mb-0.5"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
      >
        {member.name}
      </h3>
      <p className="text-[var(--color-gold-600)] text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5">
        {member.role}
      </p>
      <p className="text-[var(--color-grey-500)] text-[11px] mb-4">
        {member.credential}
      </p>

      {/* Gold divider */}
      <div className="w-8 h-0.5 bg-[var(--color-gold-500)]/50 rounded-full mb-4" />

      {/* Bio */}
      <p className="text-[var(--color-grey-600)] text-xs leading-relaxed mb-5 line-clamp-4">
        {member.bio}
      </p>

      {/* Expertise tags */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        {member.expertise.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[var(--color-navy-50)] text-[var(--color-navy-700)] border border-[var(--color-navy-100)] group-hover:bg-[var(--color-gold-100)] group-hover:border-[var(--color-gold-300)] group-hover:text-[var(--color-gold-700)] transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex gap-2 mt-auto pt-2 border-t border-[var(--color-grey-100)] w-full justify-center">
        <a
          href="mailto:info@jbbadvisors.com"
          aria-label={`Email ${member.name}`}
          className="w-8 h-8 rounded flex items-center justify-center text-[var(--color-grey-400)] hover:text-[var(--color-gold-600)] hover:bg-[var(--color-gold-100)] transition-all duration-200"
        >
          <Mail size={14} />
        </a>
        <a
          href="https://www.linkedin.com/company/jbb-business-advisors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn — ${member.name}`}
          className="w-8 h-8 rounded flex items-center justify-center text-[var(--color-grey-400)] hover:text-[var(--color-gold-600)] hover:bg-[var(--color-gold-100)] transition-all duration-200"
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function TeamPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO                                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-[50vh] flex items-center"
        style={{
          background: "linear-gradient(rgba(3,12,28,0.84), rgba(3,12,28,0.76)), url('/bg/team-hero.jpg') center center / cover no-repeat",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
              Our Leadership
            </span>
          </div>

          <h1
            className="text-white mb-5 animate-fade-in-up delay-100 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet the Professionals{" "}
            <span className="text-[var(--color-gold-500)]">Behind JBB</span>
          </h1>

          <p className="hero-p text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            A multidisciplinary leadership team bringing together expertise in
            chartered accountancy, taxation, audit, company law, insolvency,
            legal advisory, and investment consulting.
          </p>

          {/* Credential chips */}
          <div className="flex flex-wrap gap-2 mt-8 animate-fade-in-up delay-300">
            {["Chartered Accountants", "Company Secretary", "Insolvency Professional", "Advocate", "Investment Consultant"].map((chip) => (
              <span
                key={chip}
                className="hero-badge text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-[var(--color-grey-400)] text-xs">
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-grey-200)]">Team</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LEADERSHIP CARDS                                         */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Leadership Team"
            title="The Experts You Can Count On"
            accentWord="Count On"
            subtitle="Each partner brings deep domain specialisation, a track record of client success, and a shared commitment to practical, personalised advisory."
            align="center"
          />

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {team.slice(0, 3).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Row 2 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.slice(3).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* EXPERTISE AREAS                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-56 h-56 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />

        <div className="container-jbb relative z-10">
          {/* Pure-CSS hover for expertise cards — server component safe */}
          <style>{`
            .expertise-card {
              background: rgba(255,255,255,0.07);
              border: 1px solid rgba(255,255,255,0.15);
              transition: background 0.25s, border-color 0.25s, transform 0.25s;
            }
            .expertise-card:hover {
              background: rgba(255,255,255,0.12);
              border-color: rgba(201,168,76,0.50);
              transform: translateY(-2px);
            }
          `}</style>
          <SectionHeading
            eyebrow="Combined Practice Areas"
            title="Eight Areas of Deep Expertise"
            accentWord="Deep Expertise"
            subtitle="Across five partners, JBB covers every dimension of business advisory, tax, compliance, and legal practice."
            align="center"
            dark
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {expertiseAreas.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="expertise-card p-5 rounded text-center"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.30)",
                  }}
                >
                  <Icon size={19} style={{ color: "#d4b86a" }} />
                </div>
                <h4
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "#ffffff" }}
                >
                  {title}
                </h4>
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: "#cbd5e1" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Animated stat bar */}
          <StatBar stats={[
            { value: "3",   label: "Chartered Accountants" },
            { value: "1",   label: "Company Secretary & IP" },
            { value: "1",   label: "Advocate & Consultant" },
            { value: "10+", label: "Years of Practice" },
          ]} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CTA                                                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/40 to-transparent" />

        <div className="container-jbb text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
            <p className="text-[var(--color-gold-600)] text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
              Get Started
            </p>
            <div className="h-px w-10 bg-[var(--color-gold-500)]" />
          </div>

          <h2
            className="mb-4 mx-auto max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-navy-900)",
            }}
          >
            Work With a{" "}
            <span className="text-gradient-gold">Multidisciplinary Advisory Team</span>
          </h2>

          <p className="text-[var(--color-grey-600)] text-base leading-relaxed max-w-xl mx-auto mb-10">
            Our partners bring complementary expertise under one roof — so you
            get integrated advisory without managing multiple vendors.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">
              Book Consultation
            </Button>
            <Button as="link" href="/contact" variant="outline-navy" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
