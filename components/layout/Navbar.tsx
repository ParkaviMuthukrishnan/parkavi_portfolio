"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { type MouseEvent, useCallback, useEffect, useState } from "react";

import { ScrollLink } from "@/components/ui/ScrollLink";
import { navLinks, personal } from "@/data/portfolio";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MENU_ID = "mobile-navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();

  /* Compact nav after the top + highlight the section currently in view (rAF-throttled) */
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const marker = scrollY + window.innerHeight * 0.4;
      const isAtBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 2;

      let current = "";
      for (const link of navLinks) {
        const section = document.querySelector<HTMLElement>(link.href);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + scrollY;
        if (top <= marker) current = link.href;
      }
      if (isAtBottom) current = navLinks[navLinks.length - 1]?.href ?? current;

      setActiveId(current);
      setIsScrolled(scrollY > 24);
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Lock scrolling while the mobile menu is open; close on Escape */
  useEffect(() => {
    if (!isMenuOpen) return;

    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen, lenis]);

  /*
   * Mobile menu links: close the menu first, then scroll once the scroll lock has been
   * released (scrolling while the document is locked would be ignored by the browser).
   */
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const handleMobileLinkClick = useCallback((href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setPendingHref(href);
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMenuOpen || !pendingHref) return;

    const timeout = window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(pendingHref);
      setPendingHref(null);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, { offset: -72, force: true });
      } else {
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
      }
      window.history.replaceState(null, "", pendingHref);
      target.focus({ preventScroll: true });
    }, 60);

    return () => window.clearTimeout(timeout);
  }, [isMenuOpen, pendingHref, lenis]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scrim for legibility once content scrolls beneath the nav */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg via-bg/70 to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <nav
        aria-label="Primary"
        className={cn(
          "container-x relative z-50 flex items-center justify-between gap-4 transition-[padding] duration-500 ease-out-expo",
          isScrolled ? "py-3" : "py-5 sm:py-6",
        )}
      >
        <ScrollLink
          href="#top"
          className="font-heading text-base font-semibold tracking-tight text-fg sm:text-lg"
          aria-label={`${personal.name} — back to top`}
        >
          {personal.name}
        </ScrollLink>

        {/* Desktop pill navigation */}
        <ul
          className={cn(
            "glass hidden items-center gap-1 rounded-full px-2 py-1.5 transition-colors duration-500 md:flex",
            isScrolled ? "bg-bg-elevated/80" : "bg-bg-card",
          )}
        >
          {navLinks.map((link) => {
            const isActive = activeId === link.href;
            return (
              <li key={link.href} className="relative">
                <ScrollLink
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-2 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
                    isActive ? "text-fg" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {link.label}
                </ScrollLink>
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="link-underline hidden text-sm text-fg-muted transition-colors hover:text-fg lg:inline-flex"
          >
            {personal.email}
          </a>

          <button
            type="button"
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-fg md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={MENU_ID}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id={MENU_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-40 flex flex-col bg-bg/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.05 + index * 0.06, duration: 0.5, ease: EASE_OUT_EXPO }}
                >
                  <a
                    href={link.href}
                    onClick={handleMobileLinkClick(link.href)}
                    className="block rounded-2xl px-4 py-4 font-heading text-3xl font-semibold text-fg transition-colors hover:bg-white/[0.04] hover:text-accent"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6 text-sm text-fg-muted">
              <a href={`mailto:${personal.email}`} className="hover:text-fg">
                {personal.email}
              </a>
              <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                Download résumé (PDF)
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
