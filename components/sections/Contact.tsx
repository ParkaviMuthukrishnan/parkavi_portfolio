import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { ScrollLink } from "@/components/ui/ScrollLink";
import { contact, footer, personal, socials } from "@/data/portfolio";

const externalSocials = socials.filter((social) => social.href.startsWith("http"));

export function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="section relative scroll-mt-24 pb-12 sm:pb-14" tabIndex={-1}>
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Let&apos;s talk</span>
          <h2 id="contact-heading" className="mt-5 font-heading text-display font-bold uppercase leading-[0.9]">
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base text-fg-muted sm:text-lg">{contact.blurb}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          <Reveal delay={0.05}>
            <h3 className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">Email</h3>
            <a
              href={`mailto:${personal.email}`}
              className="link-underline mt-4 inline-flex break-all text-lg text-fg transition-colors hover:text-accent sm:text-xl"
            >
              {personal.email}
            </a>

            <h3 className="mt-8 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">Phone</h3>
            <a href={personal.phoneHref} className="link-underline mt-4 inline-flex text-lg text-fg transition-colors hover:text-accent sm:text-xl">
              {personal.phone}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">Social</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {externalSocials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline group inline-flex items-center gap-1.5 text-lg text-fg transition-colors hover:text-accent sm:text-xl"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline group inline-flex items-center gap-1.5 text-lg text-fg transition-colors hover:text-accent sm:text-xl"
                >
                  Résumé
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="md:text-right">
            <p className="font-heading text-xl font-medium text-fg sm:text-2xl">
              Developed
              <br />
              by <span className="text-gradient">{footer.developedBy}</span>
            </p>
            <p className="mt-6 text-sm text-fg-muted">© {footer.year} All rights reserved.</p>
            <p className="mt-1 text-sm text-fg-subtle">{personal.location}</p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center">
          <p>Built with Next.js, TypeScript, Tailwind CSS and Framer Motion.</p>
          <ScrollLink href="#top" className="link-underline font-heading font-semibold uppercase tracking-[0.2em] hover:text-fg">
            Back to top
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
}
