"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;   // e.g. "10+" or "3"
  label: string;
}

interface StatCounterProps {
  stats: Stat[];
}

/* ── helpers ─────────────────────────────────────── */
function parse(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  return match
    ? { num: parseInt(match[1], 10), suffix: match[2] ?? "" }
    : { num: 0, suffix: raw };
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

/* ── single animated counter ──────────────────────── */
function Counter({ value, label, index }: { value: string; label: string; index: number }) {
  const { num, suffix } = parse(value);
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const duration = 1400 + index * 120; // stagger each counter slightly
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setDisplay(Math.round(eased * num));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, index]);

  return (
    <div ref={elRef} className="text-center py-6 px-4">
      <p
        className="font-bold tabular-nums"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem, 3.5vw, 2.9rem)",
          color: "#ffffff",
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        {display}
        <span style={{ color: "#C9A84C" }}>{suffix}</span>
      </p>
      <div
        className="mx-auto mt-2.5 mb-3 rounded-full"
        style={{ width: "28px", height: "2px", background: "rgba(201,168,76,0.55)" }}
      />
      <p
        className="text-[10px] uppercase tracking-[0.18em] leading-snug font-medium"
        style={{ color: "#b8b8cc" }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── exported bar ─────────────────────────────────── */
export default function StatBar({ stats }: StatCounterProps) {
  return (
    <div
      className="mt-12 grid gap-0"
      style={{
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        borderTop: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className="relative"
          style={
            i < stats.length - 1
              ? {
                  borderRight: "1px solid rgba(201,168,76,0.20)",
                }
              : {}
          }
        >
          <Counter value={value} label={label} index={i} />
        </div>
      ))}
    </div>
  );
}
