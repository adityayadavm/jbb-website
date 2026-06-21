"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NewsletterCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
      <Button as="link" href="/contact" variant="primary" icon size="lg">
        Contact Our Experts
      </Button>

      {/* Explicit dark-background outline link — always visible */}
      <Link
        href="/services"
        className="inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200"
        style={{
          fontSize: "0.875rem",
          padding: "1rem 2rem",
          color: "rgba(255,255,255,0.88)",
          border: "1px solid rgba(255,255,255,0.30)",
          background: "transparent",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = "#C9A84C";
          el.style.borderColor = "rgba(201,168,76,0.55)";
          el.style.background = "rgba(201,168,76,0.08)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = "rgba(255,255,255,0.88)";
          el.style.borderColor = "rgba(255,255,255,0.30)";
          el.style.background = "transparent";
        }}
      >
        View Our Services
      </Link>
    </div>
  );
}
