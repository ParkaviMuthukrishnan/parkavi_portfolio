import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Small uppercase label shown in a pill above the title. */
  eyebrow?: string;
  /** Main title. Wrap a word in <span className="text-gradient"> for accent. */
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Heading level for semantics; defaults to h2. */
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Heading = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-col gap-5", align === "center" ? "items-center text-center" : "items-start", className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading id={id} className="font-heading text-display-sm font-semibold text-fg">
        {title}
      </Heading>
      {description ? (
        <p className={cn("max-w-2xl text-base text-fg-muted sm:text-lg", align === "center" && "mx-auto")}>{description}</p>
      ) : null}
    </Reveal>
  );
}
