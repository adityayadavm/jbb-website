import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Share2,
  Globe,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const serviceLinks = [
  { label: "Business Formation & Advisory",      href: "/services/business-formation-advisory" },
  { label: "Accounting, Reporting & Assurance",  href: "/services/accounting-reporting-assurance" },
  { label: "Direct Taxes & Compliance",          href: "/services/direct-taxes-compliance" },
  { label: "Goods and Services Tax",             href: "/services/goods-and-services-tax" },
  { label: "Business Support Services",          href: "/services/business-support-services" },
  { label: "Transaction Advisory Services",      href: "/services/transaction-advisory-services" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Insights & Articles", href: "/insights" },
  { label: "Training Programs", href: "/training" },
  { label: "CSR & Social Impact", href: "/csr" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-950)] text-white">
      {/* ─── CTA Banner ─────────────────────────────────────────── */}
      <div className="bg-[var(--color-gold-500)]">
        <div className="container-jbb py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-[var(--color-navy-900)] font-semibold text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to navigate complex compliance with confidence?
            </p>
            <p className="text-[var(--color-navy-800)] text-sm mt-0.5">
              Book a free consultation with our expert advisors today.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 flex items-center gap-2 bg-[var(--color-navy-900)] text-white font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-sm hover:bg-[var(--color-navy-800)] transition-colors duration-300"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* ─── Main Footer Body ────────────────────────────────────── */}
      <div className="container-jbb py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label="JBB Business Advisors — Home"
              className="inline-flex items-center mb-5"
            >
              <Image
                src="/jbb-logo.png"
                alt="JBB Business Advisors Logo"
                width={180}
                height={90}
                className="h-[44px] sm:h-[50px] lg:h-[56px] w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-[var(--color-grey-300)] text-sm leading-relaxed mb-6">
              A premier CA, tax, legal, and compliance advisory firm
              empowering businesses with strategic guidance and end-to-end
              regulatory support across India.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center text-[var(--color-grey-300)] hover:bg-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] transition-all duration-300"
              >
                <Share2 size={15} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center text-[var(--color-grey-300)] hover:bg-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] transition-all duration-300"
              >
                <Globe size={15} />
              </a>
              <a
                href={`https://wa.me/919654231250`}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center text-[var(--color-grey-300)] hover:bg-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] transition-all duration-300"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2"
            >
              <span className="w-5 h-0.5 bg-[var(--color-gold-500)] inline-block" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-grey-300)] text-sm hover:text-[var(--color-gold-400)] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="text-[var(--color-gold-500)] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2"
            >
              <span className="w-5 h-0.5 bg-[var(--color-gold-500)] inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-grey-300)] text-sm hover:text-[var(--color-gold-400)] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="text-[var(--color-gold-500)] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2"
            >
              <span className="w-5 h-0.5 bg-[var(--color-gold-500)] inline-block" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[var(--color-gold-500)] mt-0.5 flex-shrink-0"
                />
                <span className="text-[var(--color-grey-300)] text-sm leading-relaxed">
                  414, 4th Floor, DLF Star Tower,
                  <br />
                  Sector-30, Gurgaon – 122002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[var(--color-gold-500)] flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+911244224886"
                    className="text-[var(--color-grey-300)] text-sm hover:text-[var(--color-gold-400)] transition-colors duration-200"
                  >
                    0124-4224886
                  </a>
                  <a
                    href="tel:+919654231250"
                    className="text-[var(--color-grey-300)] text-sm hover:text-[var(--color-gold-400)] transition-colors duration-200"
                  >
                    +91 9654231250
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[var(--color-gold-500)] flex-shrink-0"
                />
                <a
                  href="mailto:compliance@jbbadvisors.com"
                  className="text-[var(--color-grey-300)] text-sm hover:text-[var(--color-gold-400)] transition-colors duration-200 break-all"
                >
                  compliance@jbbadvisors.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container-jbb py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--color-grey-500)] text-xs text-center sm:text-left">
            © {year} JBB Business Advisors Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--color-grey-500)]">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-gold-400)] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/terms"
              className="hover:text-[var(--color-gold-400)] transition-colors duration-200"
            >
              Terms of Use
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/disclaimer"
              className="hover:text-[var(--color-gold-400)] transition-colors duration-200"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
