import type { Transition, Variants } from "framer-motion";

/** Shared easing used across the site for a consistent, polished feel. */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const baseTransition: Transition = {
  duration: 0.7,
  ease: EASE_OUT_EXPO,
};

/** Fade + rise in when scrolled into view. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

/** Simple fade. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Parent container that staggers children. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Viewport options shared by scroll-reveal components. */
export const viewportOnce = { once: true, amount: 0.2, margin: "0px 0px -10% 0px" } as const;
