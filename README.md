# Parkavi Muthukrishnan — Portfolio

A modern, animated developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lenis** smooth scrolling. Dark glassmorphism theme with a single warm accent gradient, animated background blobs, film grain and a custom cursor.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint
pnpm type-check # tsc --noEmit
```

Requires Node.js 18.17+.

## Editing content

Every word on the site lives in **`data/portfolio.ts`** — personal details, socials, about copy, tech stack, "What I do" cards, experience, projects, education and contact. Edit that file; no component changes are needed.

Useful knobs:

| What | Where |
| --- | --- |
| Name, role, email, phone, location | `personal` |
| Add GitHub / other social links | `socials` (uncomment the GitHub entry and add your URL) |
| Portrait photo | set `personal.avatar` to a file under `public/`, e.g. `/images/parkavi.jpg` |
| Project screenshots | set `image` on a project, e.g. `/images/projects/cleverhire.png` (falls back to a generated cover) |
| Résumé | replace `public/resume.pdf` |
| Production URL (OpenGraph / sitemap) | `personal.siteUrl` |

## Project structure

```
app/                  # App Router: layout, page, metadata, OG image, sitemap, robots
components/
  layout/             # Navbar, SocialRail, ResumeTab
  sections/           # Hero, About, TechStack, Services, Experience, Projects, Contact
  providers/          # SmoothScroll (Lenis)
  ui/                 # Reusable primitives: Reveal, SectionHeading, Button, Typewriter,
                      # CustomCursor, Background, ProjectCover, TechIcon, ScrollLink…
data/portfolio.ts     # All content
lib/                  # cn() helper and shared Framer Motion variants
public/               # resume.pdf and static assets
```

## Design system

- **Fonts:** Inter (body) and Space Grotesk (headings) via `next/font`.
- **Colours & tokens:** `tailwind.config.ts` (`bg`, `fg`, `accent`, `line`, shadows, keyframes).
- **Utilities:** `.glass`, `.glass-hover`, `.eyebrow`, `.pill`, `.text-gradient`, `.link-underline`, `.grain` in `app/globals.css`.
- **Motion:** shared variants in `lib/motion.ts`; all animations respect `prefers-reduced-motion` (Lenis and the custom cursor are disabled too).

## Accessibility

Semantic landmarks, skip link, visible focus rings, `aria-current` on the active nav item, `aria-hidden` on decorative elements and marquee duplicates, keyboard-operable mobile menu (Escape to close), and typed hero text exposed to screen readers as plain text.

## Deploying to Vercel

1. Push this folder to a Git repository.
2. Import it on [vercel.com/new](https://vercel.com/new) — the Next.js preset is detected automatically.
3. After the first deploy, set `personal.siteUrl` in `data/portfolio.ts` to your production URL and redeploy.
