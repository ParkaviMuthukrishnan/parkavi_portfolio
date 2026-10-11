import Image from "next/image";

import type { Project } from "@/data/portfolio";

interface ProjectCoverProps {
  project: Project;
  priority?: boolean;
}

/**
 * Project artwork. Renders the screenshot when `project.image` is set, otherwise
 * a generated "browser window" cover tinted with the project's palette.
 */
export function ProjectCover({ project, priority = false }: ProjectCoverProps) {
  const [from, to] = project.palette;
  const monogram = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="group/cover relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-bg-elevated">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          style={{
            background: `radial-gradient(120% 90% at 15% 0%, ${from}55 0%, transparent 55%), radial-gradient(90% 80% at 100% 100%, ${to}cc 0%, transparent 60%), linear-gradient(160deg, #15111a 0%, #0b090c 100%)`,
          }}
        >
          {/* Browser chrome */}
          <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="ml-3 h-4 flex-1 rounded-md bg-white/10" />
          </div>

          {/* Faux layout blocks */}
          <div className="absolute inset-x-6 bottom-6 top-14 grid grid-cols-[1fr_2fr] gap-3 opacity-70 sm:inset-x-8 sm:bottom-8">
            <div className="flex flex-col gap-2">
              <span className="h-3 w-3/4 rounded bg-white/15" />
              <span className="h-2 w-full rounded bg-white/10" />
              <span className="h-2 w-5/6 rounded bg-white/10" />
              <span className="mt-auto h-7 w-full rounded-md bg-white/10" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="rounded-lg bg-white/10" />
              <span className="rounded-lg bg-white/[0.06]" />
              <span className="col-span-2 rounded-lg bg-white/[0.06]" />
            </div>
          </div>

          {/* Monogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-heading text-6xl font-bold tracking-tight text-white/90 drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] sm:text-7xl"
              style={{ textShadow: `0 0 60px ${from}aa` }}
            >
              {monogram}
            </span>
          </div>
        </div>
      )}

      {/* Sheen on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
}
