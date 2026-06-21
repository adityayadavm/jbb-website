import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "outline" | "outline-navy" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: boolean;
  className?: string;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  as?: "button";
  href?: never;
}

interface ButtonAsLink
  extends ButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  as: "link";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  "outline-navy": "btn-outline-navy",
  ghost:
    "inline-flex items-center gap-2 text-[var(--color-navy-900)] text-sm font-semibold hover:text-[var(--color-gold-500)] transition-colors duration-200 cursor-pointer",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "!text-xs !px-4 !py-2",
  md: "",
  lg: "!text-sm !px-8 !py-4",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon = false,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} className="shrink-0" />}
    </>
  );

  if ((rest as ButtonAsLink).as === "link") {
    const { as: _as, href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const { as: _as, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
