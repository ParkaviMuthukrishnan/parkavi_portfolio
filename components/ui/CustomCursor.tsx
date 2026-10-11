"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]';

/**
 * A small accent dot that tracks the pointer precisely plus a soft ring that
 * follows with spring physics. Only enabled for fine pointers (mouse/trackpad)
 * and disabled when the user prefers reduced motion.
 */
export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setIsEnabled(finePointer.matches && !reducedMotion.matches);
    update();

    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      setIsHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", handleLeave);
    document.documentElement.addEventListener("pointerenter", handleEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
      document.documentElement.removeEventListener("pointerenter", handleEnter);
    };
  }, [isEnabled, isVisible, x, y]);

  if (!isEnabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Follower ring */}
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-accent/70"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
          opacity: isVisible ? (isHovering ? 0.9 : 0.55) : 0,
          backgroundColor: isHovering ? "rgba(249,115,22,0.10)" : "rgba(249,115,22,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      />
      {/* Precise dot */}
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-accent-gradient"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: isHovering ? 4 : 7, height: isHovering ? 4 : 7, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
