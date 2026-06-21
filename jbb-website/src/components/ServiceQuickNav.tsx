"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { label: "Direct & Indirect Taxation",   href: "/services/direct-tax" },
  { label: "GST Advisory & Compliance",    href: "/services/gst-advisory" },
  { label: "Company Law & Secretarial",    href: "/services/company-law-secretarial" },
  { label: "FEMA & RBI Compliance",        href: "/services/fema-rbi-compliance" },
  { label: "Audit & Assurance",            href: "/services/audit-assurance" },
  { label: "Business Incorporation",       href: "/services/business-incorporation" },
  { label: "Transaction Advisory",         href: "/services/transaction-advisory" },
  { label: "Virtual CFO Services",         href: "/services/virtual-cfo" },
] as const;

export default function ServiceQuickNav() {
  const pathname = usePathname();

  return (
    <div className="sqn-root" aria-label="Quick service navigation">
      <div className="sqn-track">
        {SERVICE_LINKS.map(({ label, href }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`sqn-item${isActive ? " sqn-item--active" : ""}`}
            >
              {label}
              {isActive && <span className="sqn-pip" aria-hidden="true" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
