import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TrainingForm from "@/components/TrainingForm";
import {
  Clock,
  Building2,
  MapPin,
  Gift,
  IndianRupee,
  BookOpen,
  FileSpreadsheet,
  Receipt,
  FileCheck,
  Landmark,
  ClipboardList,
  BarChart3,
  Users,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Wrench,
  Trophy,
  Award,
  ChevronDown,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata = {
  title: "Training Programs | JBB Business Advisors Private Limited",
  description:
    "Practical in-office training in taxation, GST, accounting, audit, and compliance for students, graduates, and working professionals. First 5 seats free. Located in Gurgaon.",
};

/* ─── Data ─────────────────────────────────────────────── */
const overview = [
  { icon: Clock,       label: "Duration",       value: "2 to 6 Months" },
  { icon: Building2,   label: "Mode",           value: "In-office Training" },
  { icon: MapPin,      label: "Location",       value: "Gurgaon, Haryana" },
  { icon: Gift,        label: "First 5 Seats",  value: "Completely Free" },
  { icon: IndianRupee, label: "Post Free Seats", value: "₹5,000 / Month" },
];

const modules = [
  { icon: BookOpen,       title: "Accounting & Bookkeeping",          desc: "Fundamentals of double-entry accounting, ledger maintenance, journal entries, and day-to-day bookkeeping using Tally and other tools." },
  { icon: FileSpreadsheet,title: "GST Registration & Return Filing",  desc: "End-to-end GST concepts, registration process, GSTR-1, GSTR-3B, annual return, ITC reconciliation, and e-invoicing compliance." },
  { icon: Receipt,        title: "Income Tax Return Filing",          desc: "ITR filing for individuals and businesses, computation of income, deductions under Chapter VI-A, and e-filing using the Income Tax portal." },
  { icon: FileCheck,      title: "TDS & TCS Compliance",             desc: "TDS provisions under the Income Tax Act, challan payments, return filing (26Q/24Q), Form 16/16A generation, and TDS mismatch resolution." },
  { icon: Landmark,       title: "ROC & Company Law Basics",          desc: "MCA21 portal, company incorporation, annual ROC filings, board resolutions, DIR-3 KYC, and basic secretarial compliance under Companies Act." },
  { icon: ClipboardList,  title: "Audit Documentation",              desc: "Working paper preparation, vouching and verification, audit checklist preparation, and documentation standards for statutory and internal audits." },
  { icon: BarChart3,      title: "Financial Reporting",              desc: "Reading and preparing financial statements (P&L, Balance Sheet, Cash Flow), ratio analysis, and MIS reporting for management decision-making." },
  { icon: Users,          title: "Practical Client Communication",   desc: "Professional email drafting, client handling, managing compliance calendars, and building practical advisory communication skills." },
];

const benefits = [
  { icon: Briefcase,      title: "Practical Exposure",       desc: "Work on real client files under professional supervision — not just theory from textbooks." },
  { icon: GraduationCap,  title: "CA-led Mentorship",        desc: "Direct guidance from Chartered Accountants with 7+ years of industry and practice experience." },
  { icon: Lightbulb,      title: "Real Client Work",         desc: "Handle actual compliance filings, return preparation, and advisory documentation during training." },
  { icon: Wrench,         title: "Compliance Tools Training", desc: "Hands-on practice with Tally, Income Tax Portal, GST Portal, MCA21, and TRACES." },
  { icon: Trophy,         title: "Interview Preparation",    desc: "Resume building, mock interviews, and career guidance to help you land your first finance role." },
  { icon: Award,          title: "Certificate of Completion", desc: "Receive a formal certificate from JBB Business Advisors recognising your training and practical exposure." },
];

const faqs = [
  {
    q: "Who is eligible for the training program?",
    a: "The program is open to B.Com / M.Com graduates, CA students (IPCC/Final), MBA Finance students, and working professionals looking to strengthen their practical compliance and accounting skills.",
  },
  {
    q: "Are the first 5 seats really free?",
    a: "Yes. The first 5 eligible candidates who apply and are selected for each training batch receive the full training program at no cost. After the free seats are filled, the fee is ₹5,000 per month.",
  },
  {
    q: "Is the training online or in-person?",
    a: "The training is conducted entirely in-office at JBB's Gurgaon office (414, 4th Floor, DLF Star Tower, Sector-30). This ensures hands-on, real-world exposure alongside our professional team.",
  },
  {
    q: "Will I receive a certificate after completing the training?",
    a: "Yes. Every candidate who successfully completes the training program receives a formal Certificate of Completion from JBB Business Advisors Private Limited, which can be added to your resume and LinkedIn profile.",
  },
  {
    q: "How do I apply? What is the selection process?",
    a: "Fill in the Training Enquiry Form on this page. Our team will review your application and contact you within 1 business day to schedule a brief introductory discussion. There is no written test — selection is based on your background and motivation.",
  },
];

/* ─── Page ─────────────────────────────────────────────────── */
export default function TrainingPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════ */}
      {/* HERO                                                      */}
      {/* ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-[55vh] flex items-center"
        style={{
          background: "linear-gradient(rgba(3,12,28,0.90), rgba(3,12,28,0.82)), url('/bg/training-hero.jpg') center center / cover no-repeat",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
              JBB Training Programs
            </span>
          </div>

          <h1
            className="text-white mb-5 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Professional Training for{" "}
            <span style={{ color: "var(--color-gold-500)" }}>
              Future Finance Leaders
            </span>
          </h1>

          <p className="hero-p text-lg leading-relaxed max-w-2xl">
            Practical training in taxation, accounting, GST, compliance, audit,
            and business advisory — designed for students, graduates, and
            working professionals.
          </p>

          {/* Quick stat chips */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "2–6 Month Programs",
              "In-office, Gurgaon",
              "First 5 Seats — Free",
              "CA-led Mentorship",
            ].map((chip) => (
              <span
                key={chip}
                className="hero-badge text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button as="link" href="#apply" variant="primary" icon size="lg">
              Apply Now
            </Button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-xs" style={{ color: "var(--color-grey-400)" }}>
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-grey-200)" }}>Training</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* PROGRAM OVERVIEW                                          */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Program Overview"
            title="Everything You Need to Know"
            accentWord="Need to Know"
            subtitle="A structured in-office training program designed to give you real-world finance and compliance skills under direct CA supervision."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {overview.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group p-5 rounded text-center border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_8px_30px_rgba(10,22,40,0.08)] transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }}
                >
                  <Icon size={18} style={{ color: "var(--color-gold-700)" }} />
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-grey-500)" }}>
                  {label}
                </p>
                <p className="font-semibold text-sm leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Free seat callout */}
          <div
            className="mt-8 rounded p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            <Gift size={22} style={{ color: "var(--color-gold-700)", flexShrink: 0 }} />
            <div>
              <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>
                Limited Free Seats Available
              </p>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                The first 5 eligible candidates selected for each batch will receive the complete training program at no cost. Apply early to secure your free seat. After free seats are filled, the fee is ₹5,000 per month.
              </p>
            </div>
            <Button as="link" href="#apply" variant="primary" size="sm" className="shrink-0">
              Claim Free Seat
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* TRAINING MODULES                                          */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Curriculum"
            title="8 Practical Training Modules"
            accentWord="Training Modules"
            subtitle="Each module is delivered through hands-on exercises using real client data, compliance portals, and accounting software — not just classroom slides."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={title}
                className="bg-white p-6 rounded border border-[var(--color-grey-100)] hover:border-[var(--color-gold-300)] hover:shadow-[0_10px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold-100)] transition-colors duration-300"
                    style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.18)" }}
                  >
                    <Icon size={15} style={{ color: "var(--color-gold-700)" }} />
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest mt-2 ml-auto"
                    style={{ color: "var(--color-grey-400)" }}
                  >
                    Module {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="font-semibold mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "0.92rem" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* WHY JOIN                                                  */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />

        <div className="container-jbb relative z-10">
          <SectionHeading
            eyebrow="Why JBB Training"
            title="Six Reasons to Join This Program"
            accentWord="Six Reasons"
            subtitle="Beyond textbook knowledge — our training is built around real practice, real tools, and real career outcomes."
            align="center"
            dark
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded text-center group transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.28)" }}
                >
                  <Icon size={20} style={{ color: "#d4b86a" }} />
                </div>
                <h4
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "#ffffff" }}
                >
                  {title}
                </h4>
                <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* ELIGIBILITY                                               */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[var(--color-gold-500)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-600)" }}>
                  Who Can Apply
                </span>
              </div>
              <h2
                className="mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
              >
                Eligibility &{" "}
                <span className="text-gradient-gold">Who Should Apply</span>
              </h2>
              <p className="text-base leading-relaxed mb-7 prose-justify" style={{ color: "var(--color-grey-600)" }}>
                The program is designed to be inclusive — whether you are a fresh graduate, a CA aspirant, or a working professional looking to upskill, JBB Training provides structured, practical finance education.
              </p>
              <ul className="space-y-3">
                {[
                  "B.Com, M.Com, BBA, MBA (Finance) graduates",
                  "CA / CMA / CS students at any stage",
                  "Commerce background students (12th+)",
                  "Finance interns seeking practical exposure",
                  "Working professionals upskilling in GST or taxation",
                  "Candidates aspiring for accounting firm roles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--color-grey-700)" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-gold-500)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats/visual side */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "8", label: "Training Modules" },
                { value: "5", label: "Free Seats Per Batch" },
                { value: "2–6", label: "Month Programs" },
                { value: "7+", label: "Years of Practice" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-6 rounded text-center"
                  style={{ background: "var(--color-grey-50)", border: "1px solid var(--color-grey-100)" }}
                >
                  <p
                    className="font-bold mb-1"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--color-navy-900)" }}
                  >
                    {value}
                  </p>
                  <div className="w-6 h-0.5 rounded mx-auto mb-2" style={{ background: "var(--color-gold-500)" }} />
                  <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--color-grey-500)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* TRAINING ENQUIRY FORM                                     */}
      {/* ════════════════════════════════════════════════════════ */}
      <section id="apply" className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
            {/* Form panel */}
            <div className="bg-white rounded p-8 border border-[var(--color-grey-100)] shadow-[0_4px_20px_rgba(10,22,40,0.05)]">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={16} style={{ color: "var(--color-gold-600)" }} />
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--color-gold-600)" }}>
                  Training Enquiry
                </p>
              </div>
              <h2
                className="mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)", fontSize: "1.4rem" }}
              >
                Apply for the Program
              </h2>
              <p className="text-xs mb-7" style={{ color: "var(--color-grey-500)" }}>
                Fill in the form and we'll get back to you within 1 business day.
              </p>
              <TrainingForm />
            </div>

            {/* Info sidebar */}
            <div className="space-y-5 lg:sticky lg:top-24">
              {/* Office address */}
              <div className="bg-white rounded p-5 border border-[var(--color-grey-100)]">
                <p className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-grey-500)" }}>Training Location</p>
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>JBB Business Advisors</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                  414, 4th Floor, DLF Star Tower<br />
                  Sector-30, Gurgaon – 122002<br />
                  Haryana, India
                </p>
                <a
                  href="https://maps.google.com/?q=DLF+Star+Tower+Sector+30+Gurgaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[10px] font-semibold"
                  style={{ color: "var(--color-gold-700)" }}
                >
                  Get Directions →
                </a>
              </div>

              {/* Contact */}
              <div className="bg-white rounded p-5 border border-[var(--color-grey-100)]">
                <p className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-grey-500)" }}>Get in Touch</p>
                <div className="space-y-2 text-xs" style={{ color: "var(--color-grey-600)" }}>
                  <p>📞 <a href="tel:+919654231250" className="hover:text-[var(--color-gold-700)] transition-colors">+91 96542 31250</a></p>
                  <p>✉️ <a href="mailto:compliance@jbbadvisors.com" className="hover:text-[var(--color-gold-700)] transition-colors">compliance@jbbadvisors.com</a></p>
                  <p>🕐 Mon – Sat, 10:00 AM – 7:00 PM</p>
                </div>
              </div>

              {/* Key note */}
              <div
                className="rounded p-5"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold-700)" }}>Important Note</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-grey-700)" }}>
                  Free seats are limited to 5 candidates per batch and are filled on a first-come, first-served basis. Apply early to avoid missing out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* FAQ                                                       */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            accentWord="Asked Questions"
            subtitle="Everything you need to know before applying to the JBB Training Program."
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }, idx) => (
              <details
                key={idx}
                className="group bg-[var(--color-grey-50)] border border-[var(--color-grey-100)] rounded overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none hover:bg-[var(--color-grey-100)] transition-colors duration-200">
                  <span
                    className="font-semibold text-sm pr-4"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    size={16}
                    className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                    style={{ color: "var(--color-gold-600)" }}
                  />
                </summary>
                <div className="px-6 pb-5 pt-1 prose">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* FINAL CTA                                                 */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/50 to-transparent" />
        <div className="absolute -right-16 top-0 bottom-0 w-72 bg-gradient-to-l from-[var(--color-gold-500)]/4 to-transparent pointer-events-none" />

        <div className="container-jbb text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "var(--color-gold-500)" }} />
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--color-gold-400)" }}>
              Apply Today
            </p>
            <div className="h-px w-10" style={{ background: "var(--color-gold-500)" }} />
          </div>

          <h2
            className="mb-4 mx-auto max-w-2xl"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Start Your Practical Finance{" "}
            <span style={{ color: "var(--color-gold-500)" }}>Training Journey</span>
          </h2>

          <p
            className="hero-p text-base leading-relaxed max-w-xl mx-auto mb-10"
          >
            Learn from practising CAs in a real office environment. Build skills
            that employers value and kickstart your career in finance,
            taxation, and compliance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="#apply" variant="primary" icon size="lg">
              Apply for Training
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200"
              style={{
                fontSize: "0.875rem",
                padding: "1rem 2rem",
                color: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(255,255,255,0.28)",
                background: "transparent",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
