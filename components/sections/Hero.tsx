"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

import { buttonClassName } from "@/components/ui/Button";
import { ScrollLink } from "@/components/ui/ScrollLink";
import { Typewriter } from "@/components/ui/Typewriter";
import { contact, personal } from "@/data/portfolio";
import { EASE_OUT_EXPO } from "@/lib/motion";

const nameLines = personal.name.split(" ");

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay },
});

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32">
      <div className="container-x">
        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
          {/* Left: greeting + name */}
          <div>
            <motion.p {...enter(0.05)} className="font-heading text-lg font-medium text-fg-muted sm:text-xl">
              {personal.heroEyebrow}
            </motion.p>

            <motion.h1
              id="hero-heading"
              {...enter(0.15)}
              className="mt-3 font-heading text-display font-bold text-fg"
            >
              <Typewriter lines={nameLines} speed={65} startDelay={500} />
            </motion.h1>

            <motion.p {...enter(0.35)} className="mt-8 font-heading">
              <span className="block text-xl font-medium text-fg-muted sm:text-2xl">{personal.heroRoleLine1}</span>
              <span className="text-gradient block text-3xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                {personal.heroRoleLine2}
              </span>
            </motion.p>
          </div>

          {/* Right: summary + CTAs */}
          <motion.div {...enter(0.5)} className="flex flex-col gap-8 lg:pb-3">
            {personal.avatar ? (
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-line shadow-glow-sm sm:h-48 sm:w-48">
                <Image src={personal.avatar} alt={`Portrait of ${personal.name}`} fill priority sizes="192px" className="object-cover" />
              </div>
            ) : null}

            <p className="max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">{personal.siteDescription}</p>

            <div className="flex flex-wrap items-center gap-3">
              <ScrollLink href="#work" className={buttonClassName("primary")}>
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </ScrollLink>
              <ScrollLink href="#contact" className={buttonClassName("ghost")}>
                Get in touch
              </ScrollLink>
            </div>

            <dl className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-fg-muted">
              <div className="flex items-center gap-2">
                <dt className="sr-only">Location</dt>
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <dd>{personal.location}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">Availability</dt>
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 [animation-duration:2s]" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <dd>{contact.availability}</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        {...enter(1)}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fg-subtle sm:flex"
      >
        <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
