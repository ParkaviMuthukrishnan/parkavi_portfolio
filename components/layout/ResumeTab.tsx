import { FileText } from "lucide-react";

import { personal } from "@/data/portfolio";

/** Fixed vertical "RESUME" link on the right edge (desktop only). */
export function ResumeTab() {
  return (
    <a
      href={personal.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-10 right-6 z-40 hidden origin-bottom-right items-center gap-3 font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-fg-muted transition-colors duration-300 hover:text-accent lg:flex"
      style={{ writingMode: "vertical-rl" }}
      aria-label="Open résumé (PDF) in a new tab"
    >
      <span className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">Resume</span>
      <FileText className="h-4 w-4 rotate-90" aria-hidden="true" />
    </a>
  );
}
