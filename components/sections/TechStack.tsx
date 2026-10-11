import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { techStack, type TechItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function TechCard({ item, isDuplicate = false }: { item: TechItem; isDuplicate?: boolean }) {
  return (
    <li
      aria-hidden={isDuplicate || undefined}
      className="glass glass-hover group flex w-40 shrink-0 flex-col items-center justify-center gap-4 px-4 py-7 sm:w-48 sm:py-8"
    >
      <TechIcon
        name={item.icon}
        className="h-12 w-12 text-fg transition-[color,transform] duration-500 ease-out-expo group-hover:scale-110 group-hover:text-accent sm:h-14 sm:w-14"
      />
      <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-muted">{item.name}</span>
    </li>
  );
}

interface MarqueeRowProps {
  items: TechItem[];
  reverse?: boolean;
}

/**
 * Infinite marquee. The list is rendered twice and translated by 50% so the
 * loop is seamless; the duplicate is hidden from assistive tech.
 */
function MarqueeRow({ items, reverse = false }: MarqueeRowProps) {
  return (
    <div className="mask-fade-x pause-on-hover flex overflow-hidden">
      <ul
        className={cn("flex w-max gap-4 pr-4 will-change-transform sm:gap-5 sm:pr-5", reverse ? "animate-marquee-reverse" : "animate-marquee")}
      >
        {items.map((item) => (
          <TechCard key={item.name} item={item} />
        ))}
        {items.map((item) => (
          <TechCard key={`${item.name}-dup`} item={item} isDuplicate />
        ))}
      </ul>
    </div>
  );
}

export function TechStack() {
  const midpoint = Math.ceil(techStack.length / 2);
  const rowA = techStack.slice(0, midpoint);
  const rowB = techStack.slice(midpoint);

  return (
    <section id="stack" aria-labelledby="stack-heading" className="section overflow-hidden">
      <div className="container-x">
        <SectionHeading
          id="stack-heading"
          eyebrow="What I use to build"
          title={
            <>
              My <span className="text-gradient">Tech Stack</span>
            </>
          }
        />
      </div>

      <Reveal delay={0.1} className="mt-14 flex flex-col gap-4 sm:gap-5">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </Reveal>
    </section>
  );
}
