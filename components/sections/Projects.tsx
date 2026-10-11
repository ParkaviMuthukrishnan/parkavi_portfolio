import { ArrowUpRight, Github } from "lucide-react";

import { ProjectCover } from "@/components/ui/ProjectCover";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/portfolio";
import { cn, padIndex } from "@/lib/utils";

const iconButton =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-fg-muted transition-[color,border-color,transform,background-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft hover:text-fg";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 1;
  const headingId = `project-${project.slug}`;

  return (
    <Reveal as="li" className="group glass glass-hover p-5 sm:p-8 lg:p-10">
      <article aria-labelledby={headingId}>
        {/* Header row */}
        <div className="flex items-center justify-between gap-4">
          <span className="font-heading text-2xl font-bold text-fg sm:text-3xl">{padIndex(index + 1)}</span>
          <div className="flex items-center gap-2">
            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={iconButton}
                aria-label={`${project.title} on GitHub`}
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : null}
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={iconButton}
                aria-label={`Visit ${project.title} (opens in a new tab)`}
              >
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Body */}
        <div className={cn("mt-6 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12", isEven && "lg:[&>*:first-child]:order-2")}>
          <ProjectCover project={project} priority={index === 0} />

          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{project.context}</p>
            <h3 id={headingId} className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-base">{project.description}</p>

            {project.contributions?.length ? (
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-fg-muted">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <p className="mt-7 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">Technology used</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="pill">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="section scroll-mt-24" tabIndex={-1}>
      <div className="container-x">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title={
            <>
              My <span className="text-gradient">Projects</span>
            </>
          }
          description="Products I've built and contributed to — from AI-powered hiring tools to email marketing platforms."
        />

        <ol className="mt-16 flex flex-col gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
