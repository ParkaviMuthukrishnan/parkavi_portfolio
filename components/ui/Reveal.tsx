"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, viewportOnce } from "@/lib/motion";

const elements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  p: motion.p,
} as const;

type RevealElement = keyof typeof elements;

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  /** Extra delay (seconds) before the reveal begins. */
  delay?: number;
  /** Render as a different HTML element (e.g. "section", "li"). */
  as?: RevealElement;
}

/** Fades and rises content into view once, when it enters the viewport. */
export function Reveal({ children, delay = 0, as = "div", className, ...rest }: RevealProps) {
  const Component = elements[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
