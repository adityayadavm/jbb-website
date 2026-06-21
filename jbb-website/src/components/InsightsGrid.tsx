"use client";

import { useState } from "react";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────── */
const CATEGORIES = [
  "All",
  "GST Updates",
  "Income Tax",
  "Corporate Law",
  "Business Advisory",
  "International Taxation",
  "Investment & Wealth",
  "IBC & Insolvency",
  "Audit & Assurance",
];

const CATEGORY_COLORS: Record<string, string> = {
  "GST Updates":           "rgba(201,168,76,0.15)",
  "Income Tax":            "rgba(59,130,246,0.12)",
  "Corporate Law":         "rgba(99,102,241,0.12)",
  "Business Advisory":     "rgba(16,185,129,0.12)",
  "International Taxation":"rgba(139,92,246,0.12)",
  "Investment & Wealth":   "rgba(245,158,11,0.12)",
  "IBC & Insolvency":      "rgba(239,68,68,0.10)",
  "Audit & Assurance":     "rgba(14,165,233,0.12)",
};

const CATEGORY_TEXT: Record<string, string> = {
  "GST Updates":           "#b8860b",
  "Income Tax":            "#1d4ed8",
  "Corporate Law":         "#4f46e5",
  "Business Advisory":     "#059669",
  "International Taxation":"#7c3aed",
  "Investment & Wealth":   "#d97706",
  "IBC & Insolvency":      "#dc2626",
  "Audit & Assurance":     "#0284c7",
};

interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "GST Annual Return: Key Deadlines and Common Mistakes to Avoid",
    category: "GST Updates",
    excerpt:
      "Filing GSTR-9 and GSTR-9C accurately and on time is critical to avoid penalties and ITC mismatches. Here's what businesses need to watch for during annual return season — from reconciliation errors to late-fee exposure.",
    date: "June 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Pvt Ltd vs LLP vs OPC: Choosing the Right Business Structure",
    category: "Business Advisory",
    excerpt:
      "The right legal entity shapes your tax burden, compliance cost, fundraising ability, and personal liability exposure. This practical guide helps founders and promoters make an informed decision before incorporation.",
    date: "May 2025",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Capital Gain Bonds under Section 54EC: Save Tax on Property Sale",
    category: "Investment & Wealth",
    excerpt:
      "Section 54EC allows individuals and HUFs to claim exemption on long-term capital gains from property sales by investing in specified NHAI or REC bonds. Understand the investment limits, timelines, and lock-in implications.",
    date: "May 2025",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "IBC & NCLT Proceedings: What Creditors and Corporates Need to Know",
    category: "IBC & Insolvency",
    excerpt:
      "The Insolvency and Bankruptcy Code offers time-bound resolution mechanisms for stressed assets. Knowing your rights as a financial or operational creditor — and when to file — can significantly impact recovery outcomes.",
    date: "April 2025",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Expatriate Taxation in India: DTAA Benefits and Compliance",
    category: "International Taxation",
    excerpt:
      "Expatriates working in India face a layered tax landscape — residency rules, treaty relief under DTAA, Form 15CA/CB obligations, and employer withholding responsibilities. Non-compliance carries significant penalty risk.",
    date: "April 2025",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Internal Audit as a Business Growth Tool",
    category: "Audit & Assurance",
    excerpt:
      "Internal audit is no longer just a compliance checkbox. Forward-thinking SMEs and enterprises use it as a strategic lever to improve internal controls, identify process gaps, reduce fraud exposure, and drive operational efficiency.",
    date: "March 2025",
    readTime: "6 min read",
  },
];

/* ─── Article Card ────────────────────────────────────────────── */
function ArticleCard({ article }: { article: Article }) {
  const bgColor = CATEGORY_COLORS[article.category] ?? "rgba(201,168,76,0.10)";
  const textColor = CATEGORY_TEXT[article.category] ?? "#b8860b";

  return (
    <article className="bg-white border border-[var(--color-grey-100)] rounded-sm flex flex-col hover:border-[var(--color-gold-300)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] transition-all duration-300 group overflow-hidden">
      {/* Top gold stripe */}
      <div className="h-0.5 bg-gradient-to-r from-[var(--color-gold-600)] via-[var(--color-gold-400)] to-[var(--color-gold-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
            style={{ background: bgColor, color: textColor }}
          >
            <Tag size={8} />
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-semibold leading-snug mb-3 group-hover:text-[var(--color-gold-700)] transition-colors duration-300 text-[1rem]"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed mb-5 flex-1 prose-justify"
          style={{ color: "var(--color-grey-600)" }}
        >
          {article.excerpt}
        </p>

        {/* Meta row */}
        <div
          className="flex items-center gap-4 text-[10px] mb-5 pb-5 border-b border-[var(--color-grey-100)]"
          style={{ color: "var(--color-grey-500)" }}
        >
          <span className="flex items-center gap-1.5">
            <User size={10} />
            JBB Business Advisors
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={10} />
            {article.date}
          </span>
          <span className="ml-auto font-medium">{article.readTime}</span>
        </div>

        {/* Read More */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-[0.78rem] font-semibold transition-all duration-200 group/btn"
          style={{ color: "var(--color-gold-700)" }}
        >
          Read Insight
          <ArrowRight
            size={13}
            className="group-hover/btn:translate-x-1 transition-transform duration-200"
          />
        </a>
      </div>
    </article>
  );
}

/* ─── Exported Component ─────────────────────────────────────── */
export default function InsightsGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);

  return (
    <section className="section-padding bg-[var(--color-grey-50)]">
      <div className="container-jbb">

        {/* ── Category filter chips ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-[10px] font-semibold uppercase tracking-[0.14em] px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer"
                style={
                  isActive
                    ? {
                        background: "var(--color-navy-900)",
                        color: "#ffffff",
                        borderColor: "var(--color-navy-900)",
                      }
                    : {
                        background: "#ffffff",
                        color: "var(--color-grey-700)",
                        borderColor: "var(--color-grey-200)",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-gold-400)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--color-gold-700)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-grey-200)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--color-grey-700)";
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Article grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p style={{ color: "var(--color-grey-500)" }} className="text-base">
              No articles in this category yet. Check back soon.
            </p>
          </div>
        )}

        {/* Article count note */}
        <p
          className="text-center text-[11px] mt-8"
          style={{ color: "var(--color-grey-400)" }}
        >
          Showing {filtered.length} of {ARTICLES.length} insights
        </p>
      </div>
    </section>
  );
}
