import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-heading text-sm font-semibold tracking-wide transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out-expo active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent-gradient text-bg shadow-glow-sm hover:scale-[1.03] hover:shadow-glow",
  ghost: "border border-line bg-white/[0.03] text-fg backdrop-blur-md hover:border-accent/50 hover:bg-white/[0.06]",
};

/** Anchor styled as a button. Pass a ScrollLink-compatible href for in-page navigation. */
export function ButtonLink({ variant = "primary", className, children, ...rest }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export const buttonClassName = (variant: ButtonVariant = "primary", className?: string) =>
  cn(base, variants[variant], className);
