import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata = {
  title: "Contact Us | JBB Business Advisors Private Limited",
  description:
    "Get in touch with JBB Business Advisors for expert CA, tax, GST, compliance, and business advisory services. Office in Gurgaon. Respond within 24 hours.",
};

/* ─── Data ──────────────────────────────────────────────────── */
const officeDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    lines: [
      "414, 4th Floor, DLF Star Tower",
      "Sector-30, Gurgaon – 122002",
      "Haryana, India",
    ],
    link: "https://maps.google.com/?q=DLF+Star+Tower+Sector+30+Gurgaon",
    linkLabel: "Get Directions →",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["0124-4478129", "+91 96542 31250"],
    link: "tel:01244478129",
    linkLabel: "Call Now →",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@jbbadvisors.com"],
    link: "mailto:info@jbbadvisors.com",
    linkLabel: "Send Email →",
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Monday – Saturday", "10:00 AM – 7:00 PM IST", "Closed on Sundays & Public Holidays"],
    link: null,
    linkLabel: null,
  },
];

const faqs = [
  {
    q: "What types of businesses does JBB Business Advisors work with?",
    a: "We work across the full business lifecycle — from startups and newly incorporated entities to family businesses, SMEs, and growth-stage enterprises. Our client base spans manufacturing, technology, healthcare, real estate, retail, and professional services sectors.",
  },
  {
    q: "How quickly can JBB start on my compliance or advisory requirement?",
    a: "For most standard engagements (GST registration, company incorporation, ITR filing, bookkeeping), we can onboard and begin within 24–48 business hours after receiving your documentation. Larger advisory mandates are discussed and scoped within the first week.",
  },
  {
    q: "Does JBB offer fixed-fee or retainer-based engagements?",
    a: "Yes — we offer both fixed-fee project-based engagements and monthly retainer arrangements. Our pricing is transparent and discussed upfront. There are no hidden charges or surprise invoices at the end of an engagement.",
  },
  {
    q: "Can JBB represent me before tax authorities or regulators?",
    a: "Absolutely. Our team includes Chartered Accountants, a Company Secretary, and an Advocate with experience representing clients before the Income Tax Department, GST authorities, the Ministry of Corporate Affairs (MCA), NCLT, DRT, and consumer forums.",
  },
  {
    q: "Do you offer virtual / remote advisory services across India?",
    a: "Yes. While our registered office is in Gurgaon, we serve clients pan-India through our fully digital engagement model. All document sharing, meeting, reporting, and communication is handled securely online — making location irrelevant.",
  },
  {
    q: "What information do I need to share for an initial consultation?",
    a: "For a first call, you only need to share a brief description of your requirement, your business type, and the approximate scale of your operations. We take care of the assessment and recommend the right service path — completely without obligation.",
  },
];

/* ─── FAQ Accordion Item ─────────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <details
      id={`faq-${index}`}
      className="group border border-[var(--color-grey-100)] rounded-sm bg-white overflow-hidden hover:border-[var(--color-gold-300)] transition-colors duration-200"
    >
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
        <span
          className="font-semibold text-sm leading-snug text-[var(--color-navy-900)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          className="text-[var(--color-gold-500)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
        />
      </summary>
      <div className="px-6 pb-6">
        <div className="h-px bg-[var(--color-gold-300)]/40 mb-4" />
        <p className="text-[var(--color-grey-600)] text-sm leading-relaxed prose-justify">{a}</p>
      </div>
    </details>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO                                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-[46vh] flex items-center"
        style={{
          background: "linear-gradient(rgba(3,12,28,0.82), rgba(3,12,28,0.74)), url('/bg/contact-hero.jpg') center center / cover no-repeat",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-36 -right-36 w-[520px] h-[520px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60" />
        </div>

        <div className="container-jbb relative z-10 py-24">
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <span className="w-8 h-0.5 bg-[var(--color-gold-500)]" />
            <span className="text-[var(--color-gold-400)] text-xs font-semibold tracking-[0.25em] uppercase">
              We're Here to Help
            </span>
          </div>

          <h1
            className="text-white mb-5 animate-fade-in-up delay-100 max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&rsquo;s Start a{" "}
            <span className="text-[var(--color-gold-500)]">Conversation</span>
          </h1>

          <p className="hero-p text-lg leading-relaxed max-w-xl animate-fade-in-up delay-200">
            Tell us about your business needs and our experts will get back to
            you within 24 hours — no obligation, completely confidential.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up delay-300">
            {[
              "No-Obligation Consultation",
              "Response within 24 Hours",
              "Strict Confidentiality",
            ].map((chip) => (
              <span
                key={chip}
                className="hero-badge flex items-center gap-1.5 text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5"
              >
                <ShieldCheck size={10} className="text-[var(--color-gold-400)]" />
                {chip}
              </span>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-[var(--color-grey-400)] text-xs">
            <Link href="/" className="hover:text-[var(--color-gold-400)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-grey-200)]">Contact</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CONTACT FORM + OFFICE INFO                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

            {/* ── Left: Form ──────────────────────────── */}
            <div className="bg-white border border-[var(--color-grey-100)] rounded-sm p-8 lg:p-10 shadow-[0_4px_32px_rgba(10,22,40,0.06)] relative overflow-hidden">
              {/* Gold top stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-gold-500)] via-[var(--color-gold-300)] to-[var(--color-gold-500)]" />

              <div className="mb-7">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={16} className="text-[var(--color-gold-500)]" />
                  <p className="text-[var(--color-gold-600)] text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                    Send Us a Message
                  </p>
                </div>
                <h2
                  className="text-[1.5rem] font-semibold leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
                >
                  Request a Consultation
                </h2>
                <p className="text-[var(--color-grey-500)] text-sm mt-1">
                  Fill in the form below and we'll respond within one business day.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* ── Right: Office Info ───────────────────── */}
            <div className="flex flex-col gap-6">
              {/* Office detail cards */}
              {officeDetails.map(({ icon: Icon, label, lines, link, linkLabel }) => (
                <div
                  key={label}
                  className="bg-white border border-[var(--color-grey-100)] rounded-sm p-6 hover:border-[var(--color-gold-300)] hover:shadow-[0_8px_32px_rgba(10,22,40,0.08)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[var(--color-navy-50)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-navy-900)] transition-colors duration-300">
                      <Icon
                        size={17}
                        className="text-[var(--color-navy-700)] group-hover:text-[var(--color-gold-400)] transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-[var(--color-gold-600)] text-[10px] font-semibold uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-[var(--color-navy-900)] text-sm leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                      {link && linkLabel && (
                        <a
                          href={link}
                          target={link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-[var(--color-gold-600)] text-xs font-semibold hover:text-[var(--color-gold-500)] hover:underline transition-colors duration-200"
                        >
                          {linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA card */}
              <a
                href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+your+services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm p-5 hover:bg-[#25D366]/15 hover:border-[#25D366]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  {/* WhatsApp SVG icon */}
                  <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-navy-900)] text-sm font-semibold leading-tight">
                    Chat on WhatsApp
                  </p>
                  <p className="text-[var(--color-grey-500)] text-xs mt-0.5">
                    Quick responses for urgent queries
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* GOOGLE MAP                                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        {/* Section label */}
        <div className="container-jbb">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[var(--color-gold-500)]" />
            <p className="text-[var(--color-gold-600)] text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
              Find Us
            </p>
          </div>
          <h2
            className="mt-2 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
          >
            Our Office Location
          </h2>
          <p className="text-[var(--color-grey-500)] text-sm mt-1">
            DLF Star Tower, Sector-30, Gurgaon — centrally located, easily accessible.
          </p>
        </div>

        {/* Map embed */}
        <div className="relative w-full h-[400px] overflow-hidden">
          {/* Gradient overlay at top to blend with white */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <iframe
            title="JBB Business Advisors Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.037395695178!2d77.07305!3d28.470427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19ef0f2a34e5%3A0x5e52c7b3a8c3e6c!2sDLF%20Star%20Tower%2C%20Sector%2030%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1686000000000"
            width="100%"
            height="400"
            style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Info overlay pill */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 bg-white rounded-sm shadow-xl border border-[var(--color-grey-100)] px-5 py-3 flex items-center gap-3 whitespace-nowrap">
            <div className="w-8 h-8 rounded bg-[var(--color-navy-900)] flex items-center justify-center">
              <MapPin size={14} className="text-[var(--color-gold-400)]" />
            </div>
            <div>
              <p className="text-[var(--color-navy-900)] text-xs font-semibold">JBB Business Advisors Pvt. Ltd.</p>
              <p className="text-[var(--color-grey-500)] text-[10px]">DLF Star Tower, Sector-30, Gurgaon</p>
            </div>
            <a
              href="https://maps.google.com/?q=DLF+Star+Tower+Sector+30+Gurgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-[var(--color-gold-600)] text-[10px] font-semibold hover:underline"
            >
              Directions →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FAQ                                                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-grey-50)]">
        <div className="container-jbb">
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Questions We Often Hear"
            accentWord="Often Hear"
            subtitle="Answers to the most common questions clients ask before reaching out to us."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.slice(0, 3).map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
            {faqs.slice(3).map((faq, i) => (
              <FaqItem key={i + 3} q={faq.q} a={faq.a} index={i + 3} />
            ))}
          </div>

          <p className="text-center text-[var(--color-grey-400)] text-xs mt-8">
            Still have questions?{" "}
            <a
              href="mailto:info@jbbadvisors.com"
              className="text-[var(--color-gold-600)] font-semibold hover:underline"
            >
              Email us directly
            </a>{" "}
            and we'll respond within one business day.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FINAL CTA                                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-navy-900)] section-bg-abstract relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-56 h-56 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent" />

        <div className="container-jbb relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--color-gold-500)]/60" />
            <p className="text-[var(--color-gold-400)] text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
              Your Next Step
            </p>
            <div className="h-px w-10 bg-[var(--color-gold-500)]/60" />
          </div>

          <h2
            className="text-white mb-4 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Work with a Trusted{" "}
            <span className="text-[var(--color-gold-500)]">Advisory Partner?</span>
          </h2>

          <p
            className="hero-p text-base leading-relaxed max-w-xl mx-auto mb-10"
          >
            Whether it&rsquo;s a single filing or a long-term advisory retainer —
            we&rsquo;re here for every stage of your business journey.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="#" variant="primary" icon size="lg">
              Schedule a Consultation
            </Button>
            <a
              href="https://wa.me/919654231250?text=Hello%2C+I+would+like+to+enquire+about+your+services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm border border-[#25D366]/50 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
