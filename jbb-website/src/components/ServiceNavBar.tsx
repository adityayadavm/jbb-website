"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const serviceItems = [
  { label: "Direct & Indirect Taxation", href: "/services/taxation" },
  { label: "GST Advisory & Compliance", href: "/services/gst-advisory" },
  { label: "Company Law & Secretarial", href: "/services/company-law-secretarial" },
  { label: "FEMA & RBI Compliance", href: "/services/fema-rbi-compliance" },
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
  { label: "Transaction Advisory", href: "/services/transaction-advisory" },
  { label: "Virtual CFO Services", href: "/services/virtual-cfo" },
];

export default function ServiceNavBar() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="service-nav-wrapper">
      {/* Outer pill container */}
      <div className="service-nav-bar">
        {/* Inner scroll container (mobile) */}
        <div className="service-nav-scroll" ref={scrollRef}>
          {serviceItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`service-nav-item${isActive ? " service-nav-item--active" : ""}`}
              >
                <span className="service-nav-label">{label}</span>
                {isActive && <span className="service-nav-dot" aria-hidden="true" />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
