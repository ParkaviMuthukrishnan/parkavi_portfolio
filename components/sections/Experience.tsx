import { Briefcase } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience, type ExperienceItem } from "@/data/portfolio";

function ExperienceCard({ item, index, isLast }: { item: ExperienceItem; index: number; isLast: boolean }) {
  return (
    <Reveal as="li" delay={0.06 * index} className="relative grid gap-4 pl-12 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:pl-0">
      {/* Timeline marker */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-bg-elevated text-accent shadow-glow-sm sm:left-[11rem] sm:-translate-x-1/2 sm:ml-4"
      >
        <Briefcase className="h-3.5 w-3.5" />
      </span>
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-4 top-11 h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 to-white/10 sm:left-[11rem] sm:ml-4 sm:h-[calc(100%-0.5rem)]"
        />
      ) : null}

      <p className="pt-1.5 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-fg-muted sm:pr-12 sm:text-right">
        {item.period}
      </p>

      <div className="glass glass-hover p-6 sm:ml-8 sm:p-8">
        <h3 className="font-heading text-xl font-bold sm:text-2xl">{item.role}</h3>
        <p className="mt-1 text-sm text-fg-muted sm:text-base">
          <span className="text-accent">{item.company}</span>
          {item.location ? ` · ${item.location}` : ""}
        </p>
        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section scroll-mt-24" tabIndex={-1}>
      <div className="container-x">
        <SectionHeading
          id="experience-heading"
          eyebrow="Where I've worked"
          title={
            <>
              My <span className="text-gradient">Experience</span>
            </>
          }
        />

        <ol className="mt-16 flex flex-col gap-6 sm:gap-8">
          {experience.map((item, index) => (
            <ExperienceCard
              key={`${item.role}-${item.period}`}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
