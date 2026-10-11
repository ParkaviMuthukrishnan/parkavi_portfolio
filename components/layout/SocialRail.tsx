import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/portfolio";

/** Fixed vertical stack of social links on the left edge (desktop only). */
export function SocialRail() {
  if (socials.length === 0) return null;

  return (
    <aside aria-label="Social links" className="fixed bottom-10 left-6 z-40 hidden lg:block">
      <ul className="flex flex-col items-center gap-5">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="group flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-[color,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:text-accent"
            >
              <SocialIcon name={social.icon} className="h-5 w-5" strokeWidth={1.75} />
            </a>
          </li>
        ))}
        <li aria-hidden="true" className="mt-2 h-24 w-px bg-gradient-to-b from-line to-transparent" />
      </ul>
    </aside>
  );
}
