import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Lightbulb,
  Target,
  ShieldCheck,
  Users,
  TrendingUp,
  Heart,
  Handshake,
  Star,
  CalendarDays,
  BarChart3,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata = {
  title: "About Us | JBB Business Advisors Private Limited",
  description:
    "Learn about JBB Business Advisors — our story, leadership, mission, and commitment to delivering trusted CA, tax, legal, and compliance advisory services since 2018.",
};

/* ─── Data ──────────────────────────────────────────────────── */
const whyCards = [
  {
    icon: Lightbulb,
    title: "Practical Advisory",
    desc: "We translate complex regulatory and financial requirements into clear, actionable strategies that work in the real world — not just on paper.",
  },
  {
    icon: Star,
    title: "Experienced Professionals",
    desc: "Our multidisciplinary team of CAs, CSs, advocates, and investment consultants brings deep domain expertise across every service vertical.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Excellence",
    desc: "We maintain a zero-tolerance approach to compliance gaps, ensuring your business meets every statutory obligation with precision and on time.",
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    desc: "Every client engagement is treated as a long-term relationship. We listen first, advise second — and always keep your business goals at the centre.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Growth Support",
    desc: "Beyond compliance, we actively partner in your growth journey — from business structuring and transaction advisory to virtual CFO services.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    desc: "We believe in growing alongside our clients. Our fixed-fee, transparent engagements are designed to build trust and deliver sustained value.",
  },
];

const highlights = [
  { icon: CalendarDays, value: "10+",  label: "Years of Practice" },
  { icon: Users,        value: "15+",  label: "Professionals" },
  { icon: BarChart3,    value: "600+", label: "Clients Served" },
  { icon: LayoutGrid,   value: "10+",  label: "Service Verticals" },
];

const team = [
  {
    name: "Manita Kumari",
    role: "Founder & Director",
    credential: "Chartered Accountant",
    image: "/team-manita.png",
  },
  {
    name: "Rishu Yadav",
    role: "Partner",
    credential: "Chartered Accountant",
    image: "/team-rishu.png",
  },
  {
    name: "Anjali Yadav",
    role: "Partner",
    credential: "Chartered Accountant",
    image: "/team-anjali.png",
  },
  {
    name: "Ritu Yadav",
    role: "Accounts Executive",
    credential: "CA Finalist",
    image: "/team-ritu.png",
  },
  {
    name: "Mohammad Khalid",
    role: "Partner",
    credential: "Company Secretary & Insolvency Professional",
    image: "/team-khalid.png",
  },
  {
    name: "Rajul Jain",
    role: "Partner",
    credential: "Advocate & Investment Consultant",
    image: "/team-rajul.png",
  },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO BANNER                                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-[52vh] flex items-center"
        style={{
          background: "linear-gradient(rgba(3,12,28,0.78), rgba(3,12,28,0.70)), url('/bg/about-us-hero.jpg') center center / cover no-repeat",
        }}
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
              Our Story & Mission
            </span>
          </div>

          <h1
            className="text-white mb-5 animate-fade-in-up delay-100 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About{" "}
            <span className="text-[var(--color-gold-500)]">
              JBB Business Advisors
            </span>
          </h1>

          <p className="hero-p text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            Delivering trusted business advisory, taxation, compliance, and
            strategic consulting solutions since 2018.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-[var(--color-grey-400)] text-xs animate-fade-in-up delay-300">
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-grey-200)]">About Us</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* OUR STORY                                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — text */}
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built on Expertise. Driven by Purpose."
                accentWord="Driven by Purpose."
                align="left"
              />
              <div className="space-y-5 text-[var(--color-grey-700)] text-base leading-relaxed prose">
                <p>
                  JBB Business Advisors Private Limited is built on over seven years of deep,
                  hands-on professional practice. Our journey began in July 2018, when our Founder
                  and Director, CA Manita Kumari, commenced her professional practice — bringing
                  with her a determination to deliver advisory services that went beyond technical
                  compliance and genuinely helped businesses grow.
                </p>
                <p>
                  Over the years, what started as a focused practice steadily expanded in depth,
                  scope, and team strength. New domains were added. Specialists were brought on
                  board. Client relationships deepened. And the conviction grew stronger — that
                  businesses across India deserved access to truly integrated, multidisciplinary
                  advisory under one roof.
                </p>
                <p>
                  In 2025, that vision took its formal shape with the incorporation of JBB Business
                  Advisors Private Limited — a full-service advisory firm bringing together
                  Chartered Accountants, a Company Secretary, a registered Insolvency Professional,
                  a practising Advocate, and an Investment Consultant.
                </p>
                <p>
                  Today, JBB is headquartered in Gurgaon at DLF Star Tower, Sector 30 — and
                  serves a growing portfolio of clients across industries including technology,
                  manufacturing, logistics, healthcare, real estate, food &amp; beverage, and
                  trading.
                </p>
                <p>
                  We are proud of the journey so far. We are even more focused on what comes
                  next — for our clients, and for our firm.
                </p>
              </div>
            </div>

            {/* Right — premium skyscraper image */}
            <div className="relative self-stretch min-h-[480px] lg:min-h-0">
              {/* Outer wrapper: gold border + rounded corners + shadow */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: "18px",
                  border: "1.5px solid #C9A84F",
                  boxShadow:
                    "0 24px 64px rgba(10,22,40,0.22), 0 4px 16px rgba(10,22,40,0.10)",
                }}
              >
                {/* The image */}
                <Image
                  src="/about-skyscraper.png"
                  alt="Corporate skyscraper district — JBB Business Advisors"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={92}
                  priority
                />

                {/* Vignette overlay — dark at all four edges, clear at centre */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(8,20,40,0.35) 75%, rgba(8,20,40,0.62) 100%)",
                    borderRadius: "inherit",
                  }}
                />

                {/* Thin gold top stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #C9A84F 30%, #C9A84F 70%, transparent)",
                    borderRadius: "18px 18px 0 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* VISION                                                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[var(--color-gold-500)]" />
              <p className="text-[var(--color-gold-600)] text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
                Our Vision
              </p>
              <div className="h-px w-12 bg-[var(--color-gold-500)]" />
            </div>

            {/* Highlighted vision statement */}
            <div className="relative bg-white rounded-sm border border-[var(--color-grey-100)] shadow-[0_8px_40px_rgba(10,22,40,0.07)] p-10 mt-6">
              {/* Gold top stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent rounded-t-sm" />

              <div className="w-14 h-14 rounded-full bg-[var(--color-navy-900)] flex items-center justify-center mx-auto mb-6">
                <Target size={24} className="text-[var(--color-gold-500)]" />
              </div>

              <h2
                className="mb-5 leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy-900)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                }}
              >
                To be India&rsquo;s most{" "}
                <span className="text-gradient-gold">trusted and preferred</span>{" "}
                business advisory partner for startups, SMEs, and growth-stage
                enterprises.
              </h2>

              <p className="text-[var(--color-grey-600)] text-base leading-relaxed max-w-2xl mx-auto prose-justify">
                We envision a future where every Indian entrepreneur has access to
                world-class advisory, compliance, and strategic support — enabling
                them to build resilient, compliant, and globally competitive
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* MISSION                                                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Our Mission"
            title="What We Are Here to Do"
            accentWord="Here to Do"
            subtitle="JBB's mission is grounded in four commitments that guide every client engagement and every professional decision we make."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                no: "01",
                title: "Deliver Practical Solutions",
                desc: "Provide advice that is not only technically accurate but immediately actionable — bridging the gap between regulatory complexity and business reality.",
              },
              {
                no: "02",
                title: "Uphold the Highest Standards",
                desc: "Maintain the highest standards of professional ethics, confidentiality, and quality across every engagement, every time.",
              },
              {
                no: "03",
                title: "Enable Informed Decision-Making",
                desc: "Empower our clients with clear, data-driven insights and strategic guidance that enable confident, well-informed business decisions.",
              },
              {
                no: "04",
                title: "Build Lasting Relationships",
                desc: "Go beyond transactions to build long-term advisory partnerships where we grow, learn, and succeed together with every client we serve.",
              },
            ].map(({ no, title, desc }) => (
              <div
                key={no}
                className="flex gap-5 p-7 border border-[var(--color-grey-100)] rounded-sm hover:border-[var(--color-gold-300)] hover:shadow-[0_8px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group"
              >
                <span
                  className="font-bold leading-none flex-shrink-0 mt-1 transition-colors duration-300 group-hover:text-[#C9A84C]"
                  style={{
                    color: "rgba(201, 168, 76, 0.35)",
                    fontFamily: "var(--font-display)",
                    fontSize: "2.8rem",
                  }}
                >
                  {no}
                </span>
                <div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[var(--color-grey-600)] text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* WHY CHOOSE JBB                                           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Why Choose JBB"
            title="What Sets Us Apart"
            accentWord="Sets Us Apart"
            subtitle="We combine professional rigour with a genuinely client-first culture — six core qualities that define every JBB engagement."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card p-7 group flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded bg-[var(--color-navy-50)] flex items-center justify-center group-hover:bg-[var(--color-navy-900)] transition-colors duration-300 flex-shrink-0">
                  <Icon
                    size={22}
                    className="text-[var(--color-navy-900)] group-hover:text-[var(--color-gold-500)] transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[var(--color-grey-600)] text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FIRM HIGHLIGHTS                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/40 to-transparent" />

        <div className="container-jbb relative z-10">
          <SectionHeading
            eyebrow="Firm Highlights"
            title="Numbers That Define Our Practice"
            accentWord="Define Our Practice"
            subtitle="A snapshot of JBB's growth, capabilities, and client impact since our founding in 2018."
            align="center"
            dark
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-8 rounded bg-white/5 border border-white/10 hover:border-[var(--color-gold-500)]/50 hover:bg-white/8 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/30 flex items-center justify-center">
                  <Icon size={22} className="text-[var(--color-gold-400)]" />
                </div>
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {value}
                </p>
                <p style={{ color: "var(--color-grey-300)" }} className="text-xs uppercase tracking-widest leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LEADERSHIP PREVIEW                                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="The People Behind JBB"
            title="Leadership That Inspires Confidence"
            accentWord="Inspires Confidence"
            subtitle="Our leadership team brings together decades of combined expertise in chartered accountancy, company law, taxation, legal practice, and investment advisory."
            align="center"
          />

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {team.slice(0, 3).map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 p-5 border border-[var(--color-grey-100)] rounded-sm hover:border-[var(--color-gold-300)] hover:shadow-[0_8px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="relative w-16 h-16 rounded-full border-2 border-[var(--color-gold-500)] overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="font-semibold text-sm leading-tight truncate"
                    style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-display)" }}
                  >
                    {member.name}
                  </p>
                  <p className="text-[var(--color-gold-600)] text-[10px] font-semibold uppercase tracking-wide mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-grey-500)] text-[10px] mt-0.5 leading-snug">
                    {member.credential}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {team.slice(3).map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 p-5 border border-[var(--color-grey-100)] rounded-sm hover:border-[var(--color-gold-300)] hover:shadow-[0_8px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group"
              >
                <div className="relative w-16 h-16 rounded-full border-2 border-[var(--color-gold-500)] overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-semibold text-sm leading-tight truncate"
                    style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-display)" }}
                  >
                    {member.name}
                  </p>
                  <p className="text-[var(--color-gold-600)] text-[10px] font-semibold uppercase tracking-wide mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-grey-500)] text-[10px] mt-0.5 leading-snug">
                    {member.credential}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button as="link" href="/team" variant="outline-navy" icon>
              View Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FINAL CTA                                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)] relative overflow-hidden">
        {/* Decorative gold bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent" />

        <div className="container-jbb text-center relative z-10">
          {/* Eyebrow */}
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
            Let&rsquo;s Build Your Business{" "}
            <span className="text-gradient-gold">with Confidence</span>
          </h2>

          <p className="text-[var(--color-grey-600)] text-base leading-relaxed max-w-xl mx-auto mb-10">
            Whether you are starting out, scaling up, or navigating a complex
            challenge — our team is ready to guide you every step of the way.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/contact" variant="primary" icon size="lg">
              Book Consultation
            </Button>
            <Button as="link" href="/contact" variant="outline-navy" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-[var(--color-grey-400)] text-xs mt-8 flex items-center justify-center gap-2">
            <ShieldCheck size={13} className="text-[var(--color-gold-500)]" />
            No-obligation consultation &nbsp;·&nbsp; Confidential &nbsp;·&nbsp; Professional
          </p>
        </div>
      </section>
    </>
  );
}
