import { Reveal } from "@/components/ui/Reveal";
import { services, type ServiceCard as ServiceCardData } from "@/data/portfolio";
import { padIndex } from "@/lib/utils";

function CornerBrackets() {
  const corner = "absolute h-4 w-4 border-accent/60 transition-all duration-500 ease-out-expo";
  return (
    <span aria-hidden="true" className="pointer-events-none">
      <span className={`${corner} left-3 top-3 border-l border-t group-hover:left-2 group-hover:top-2`} />
      <span className={`${corner} right-3 top-3 border-r border-t group-hover:right-2 group-hover:top-2`} />
      <span className={`${corner} bottom-3 left-3 border-b border-l group-hover:bottom-2 group-hover:left-2`} />
      <span className={`${corner} bottom-3 right-3 border-b border-r group-hover:bottom-2 group-hover:right-2`} />
    </span>
  );
}

function ServiceCard({ service, index }: { service: ServiceCardData; index: number }) {
  return (
    <Reveal as="li" delay={0.08 * index} className="group glass glass-hover p-7 sm:p-9">
      <CornerBrackets />

      <div className="flex items-start justify-between gap-6">
        <h3 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl">{service.title}</h3>
        <span className="font-heading text-sm font-semibold text-fg-subtle">{padIndex(index + 1)}</span>
      </div>

      <p className="mt-6 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">Description</p>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-base">{service.description}</p>

      <p className="mt-6 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">Skillset &amp; tools</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {service.skills.map((skill) => (
          <li key={skill} className="pill">
            {skill}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="eyebrow">Capabilities</span>
            <h2 id="services-heading" className="mt-5 font-heading text-display font-bold uppercase leading-[0.9]">
              What
              <br />I <span className="text-gradient">Do</span>
            </h2>
            <p className="mt-6 max-w-sm text-base text-fg-muted sm:text-lg">
              From pixel-perfect interfaces to cloud infrastructure — the full stack, shipped with care.
            </p>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
