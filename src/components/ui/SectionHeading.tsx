import { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small uppercase label above the title */
  eyebrow?: string;
  /** Main heading text */
  title: string;
  /** Optional highlighted/accent word within the title — replaces a substring */
  accentWord?: string;
  /** Subtitle / description below the title */
  subtitle?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Dark background mode — inverts text colors */
  dark?: boolean;
  /** Override className on wrapper */
  className?: string;
  /** Additional children below the heading block */
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  accentWord,
  subtitle,
  align = "center",
  dark = false,
  className = "",
  children,
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  const titleRendered = accentWord
    ? title.split(accentWord).reduce<ReactNode[]>((acc, part, i, arr) => {
        acc.push(part);
        if (i < arr.length - 1) {
          acc.push(
            <span key={i} className="text-gradient-gold">
              {accentWord}
            </span>
          );
        }
        return acc;
      }, [])
    : title;

  return (
    <div className={`flex flex-col gap-2 mb-12 ${alignClass} ${className}`}>
      {/* Eyebrow */}
      {eyebrow && (
        <p
          className={`text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${
            dark ? "text-[var(--color-gold-400)]" : "text-[var(--color-gold-500)]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      {/* Gold accent line — decorative */}
      <div
        className={`gold-line ${
          align === "center"
            ? "mx-auto"
            : align === "right"
            ? "ml-auto"
            : ""
        }`}
      />

      {/* Title */}
      <h2
        className="font-display leading-tight"
        style={{
          fontFamily: "var(--font-display)",
          color: dark ? "#ffffff" : "var(--color-navy-900)",
        }}
      >
        {titleRendered}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
          style={{ color: dark ? "rgba(255,255,255,0.75)" : "var(--color-grey-700)" }}
        >
          {subtitle}
        </p>
      )}

      {/* Children slot */}
      {children}
    </div>
  );
}
