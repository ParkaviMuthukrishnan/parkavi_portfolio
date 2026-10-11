import { GraduationCap, Mail, MapPin } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { about, education, personal } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section scroll-mt-24" tabIndex={-1}>
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Who I am</span>
            <h2 id="about-heading" className="mt-5 font-heading text-display-sm font-semibold">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal as="p" key={index} delay={0.05 * (index + 1)}>
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>

        {/* Facts card */}
        <Reveal delay={0.15} className="lg:pt-14">
          <div className="glass glass-hover overflow-hidden p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-gradient opacity-20 blur-3xl"
            />

            {personal.avatar ? (
              <div className="relative mb-8 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line">
                <Image
                  src={personal.avatar}
                  alt={`Portrait of ${personal.name}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}

            <dl className="grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dd className="text-gradient order-1 font-heading text-3xl font-bold sm:text-4xl">{stat.value}</dd>
                  <dt className="order-2 text-xs leading-snug text-fg-muted sm:text-sm">{stat.label}</dt>
                </div>
              ))}
            </dl>

            <ul className="mt-8 space-y-4 border-t border-line pt-8 text-sm text-fg-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{personal.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${personal.email}`} className="link-underline break-all hover:text-fg">
                  {personal.email}
                </a>
              </li>
              {education.map((item) => (
                <li key={item.degree} className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block text-fg">{item.degree}</span>
                    <span className="block">
                      {item.institution}
                      {item.location ? `, ${item.location}` : ""} · {item.period}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
