"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypewriterProps {
  /** Lines to type, one after another. */
  lines: string[];
  /** Milliseconds per character. */
  speed?: number;
  /** Initial delay before typing begins (ms). */
  startDelay?: number;
  className?: string;
  lineClassName?: string;
}

/**
 * Types the given lines once, then leaves a blinking caret. The full text is
 * always available to assistive tech via a visually-hidden span, and the animated
 * text is aria-hidden so screen readers don't announce every keystroke.
 */
export function Typewriter({ lines, speed = 70, startDelay = 400, className, lineClassName }: TypewriterProps) {
  const prefersReducedMotion = useReducedMotion();
  const total = lines.reduce((sum, line) => sum + line.length, 0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(total);
      return;
    }

    let frame: ReturnType<typeof setTimeout>;
    let count = 0;

    const tick = () => {
      count += 1;
      setTyped(count);
      if (count < total) frame = setTimeout(tick, speed);
    };

    frame = setTimeout(tick, startDelay);
    return () => clearTimeout(frame);
  }, [prefersReducedMotion, speed, startDelay, total]);

  // Work out how many characters of each line are visible and which line holds the caret.
  let remaining = typed;
  const visibleCounts = lines.map((line) => {
    const visible = Math.max(0, Math.min(line.length, remaining));
    remaining -= line.length;
    return visible;
  });
  const caretLine =
    typed >= total
      ? lines.length - 1
      : Math.max(
          0,
          visibleCounts.findIndex((visible, index) => visible < lines[index].length),
        );

  return (
    <span className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden="true" className="block">
        {lines.map((line, index) => {
          const visible = visibleCounts[index];
          return (
            <span key={line} className={cn("block whitespace-nowrap", lineClassName)}>
              {visible === 0 ? "\u00A0" : line.slice(0, visible)}
              {caretLine === index ? (
                <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.06em] animate-caret rounded-sm bg-accent" />
              ) : null}
            </span>
          );
        })}
      </span>
    </span>
  );
}
