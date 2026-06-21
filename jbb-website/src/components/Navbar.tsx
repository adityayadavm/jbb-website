"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Formation & Advisory",      href: "/services/business-formation-advisory" },
      { label: "Accounting, Reporting & Assurance",  href: "/services/accounting-reporting-assurance" },
      { label: "Direct Taxes & Compliance",          href: "/services/direct-taxes-compliance" },
      { label: "Goods and Services Tax",             href: "/services/goods-and-services-tax" },
      { label: "Business Support Services",          href: "/services/business-support-services" },
      { label: "Transaction Advisory Services",      href: "/services/transaction-advisory-services" },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Training", href: "/training" },
  { label: "CSR", href: "/csr" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      {/* ─── Top Bar ─────────────────────────────────── */}
      <div className="hidden lg:block bg-[var(--color-navy-950)] text-white text-xs">
        <div className="container-jbb flex justify-end items-center gap-6 py-2">
          <a
            href="mailto:compliance@jbbadvisors.com"
            className="flex items-center gap-1.5 hover:text-[var(--color-gold-400)] transition-colors duration-200"
          >
            <Mail size={12} />
            compliance@jbbadvisors.com
          </a>
          <a
            href="tel:+911244224886"
            className="flex items-center gap-1.5 hover:text-[var(--color-gold-400)] transition-colors duration-200"
          >
            <Phone size={12} />
            0124-4224886
          </a>
        </div>
      </div>

      {/* ─── Main Navbar ─────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-[0_2px_20px_rgba(10,22,40,0.12)]"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav className="container-jbb">
          {/* Three-column layout: [logo + brand] | nav | CTA — Deloitte/EY/KPMG style */}
          <div className="flex items-center h-[72px] gap-6">

            {/* ─── Brand Section — logo image + company name ── */}
            <Link
              href="/"
              aria-label="JBB Business Advisors Private Limited — Home"
              className="flex-shrink-0 flex items-center group"
            >
              {/* Logo image — width/height match natural 1024×509 (~2:1) ratio */}
              <Image
                src="/jbb-logo.png"
                alt="JBB Business Advisors Logo"
                width={90}
                height={45}
                priority
                className="h-[42px] lg:h-[52px] w-auto object-contain"
              />
            </Link>

            {/* ─── Desktop Nav — grows to fill center ───── */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 ml-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3.5 py-2 navbar-link text-sm font-medium"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-sm shadow-xl border border-[var(--color-grey-100)] py-2 animate-fade-in"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-[var(--color-navy-900)] hover:bg-[var(--color-navy-50)] hover:text-[var(--color-gold-500)] hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--color-gold-500)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ─── CTA Button — far right ────────────────── */}
            <div className="hidden lg:block flex-shrink-0 ml-auto">
              <Link href="/contact" className="btn-primary text-xs">
                Get a Consultation
              </Link>
            </div>

            {/* ─── Mobile Hamburger — far right on mobile ── */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 ml-auto text-[var(--color-navy-900)] hover:text-[var(--color-gold-500)] transition-colors duration-200"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* ─── Mobile Menu ──────────────────────────── */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-[var(--color-grey-100)] px-4 pb-6 pt-2">
            {/* Contact strip */}
            <div className="flex flex-col gap-1 mb-4 py-3 border-b border-[var(--color-grey-100)]">
              <a
                href="mailto:compliance@jbbadvisors.com"
                className="flex items-center gap-2 text-xs text-[var(--color-grey-500)]"
              >
                <Mail size={12} /> compliance@jbbadvisors.com
              </a>
              <a
                href="tel:+911244224886"
                className="flex items-center gap-2 text-xs text-[var(--color-grey-500)]"
              >
                <Phone size={12} /> 0124-4224886
              </a>
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="border-b border-[var(--color-grey-50)] last:border-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full py-3.5 text-sm font-medium text-[var(--color-navy-900)]"
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 text-[var(--color-grey-500)] ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdown === item.label
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 pb-2 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-[var(--color-grey-700)] hover:text-[var(--color-gold-500)] transition-colors duration-200"
                          >
                            — {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3.5 text-sm font-medium text-[var(--color-navy-900)] hover:text-[var(--color-gold-500)] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-5">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center text-xs"
              >
                Get a Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
