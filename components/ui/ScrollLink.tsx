"use client";

import { useLenis } from "lenis/react";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: `#${string}`;
  children: ReactNode;
  /** Pixel offset applied to the scroll target (negative = stop above the section). */
  offset?: number;
}

/**
 * Anchor link that scrolls smoothly via Lenis when available and gracefully
 * falls back to the browser's native hash navigation otherwise.
 */
export function ScrollLink({ href, children, offset = -72, onClick, ...rest }: ScrollLinkProps) {
  const lenis = useLenis();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const target = href === "#" || href === "#top" ? 0 : document.querySelector<HTMLElement>(href);
    if (target === null) return; // let the browser handle it

    event.preventDefault();

    if (lenis) {
      // `force` lets the scroll run even if Lenis is stopped (e.g. while the mobile menu is closing).
      lenis.scrollTo(target, { offset: target === 0 ? 0 : offset, force: true });
    } else if (target === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    // Keep the URL hash in sync without jumping, and move focus for keyboard users.
    window.history.replaceState(null, "", href === "#top" ? "#" : href);
    if (target !== 0) {
      target.focus({ preventScroll: true });
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
