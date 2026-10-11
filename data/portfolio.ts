/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT
 *  Every piece of copy on the site lives here. Edit this file to update the
 *  portfolio — no component changes needed.
 *
 *  Source of truth: Parkavi_CV.pdf + project repositories.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type TechIconKey =
  | "react"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "html"
  | "css"
  | "redux"
  | "tanstack"
  | "tailwind"
  | "nodejs"
  | "express"
  | "mongodb"
  | "jwt"
  | "auth0"
  | "aws"
  | "git"
  | "github";

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone";
}

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface TechItem {
  name: string;
  icon: TechIconKey;
}

export interface ServiceCard {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
}

export interface Project {
  /** Short, unique key — used for React keys and the generated cover art. */
  slug: string;
  title: string;
  /** One-line label shown above the title, e.g. the client or context. */
  context: string;
  description: string;
  /** Concrete things you did on the project (shown as bullet points). */
  contributions?: string[];
  tech: string[];
  links?: {
    live?: string;
    github?: string;
  };
  /**
   * Optional screenshot path under /public (e.g. "/images/projects/cleverhire.png").
   * When omitted, a generated gradient cover with the project monogram is shown.
   */
  image?: string;
  /** Two hex colours used to tint the generated cover when no image is provided. */
  palette: [string, string];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
}

export const personal = {
  name: "Parkavi Muthukrishnan",
  firstName: "Parkavi",
  /** Shown in the hero after "Hello! I'm <name>". */
  heroEyebrow: "Hello! I'm",
  heroRoleLine1: "A Full-Stack",
  heroRoleLine2: "Software Engineer",
  title: "Software Engineer",
  location: "Dindigul, Tamil Nadu, India",
  email: "parkavimuthukrishnan@gmail.com",
  phone: "+91 95857 48384",
  phoneHref: "tel:+919585748384",
  resumeUrl: "/resume.pdf",
  /** Optional portrait under /public, e.g. "/images/parkavi.jpg". Leave empty to hide. */
  avatar: "" as string,
  /** Used for <title>, OpenGraph and the footer. */
  siteTitle: "Parkavi Muthukrishnan — Software Engineer",
  siteDescription:
    "Software Engineer with 3+ years of experience in frontend, backend and full-stack development with React, Node.js, TypeScript and AWS.",
  /** Update this to your production URL once deployed on Vercel. */
  siteUrl: "https://parkavi-portfolio.vercel.app",
} as const;

export const socials: SocialLink[] = [
  // Add your GitHub profile URL here to show the GitHub icon in the rail & footer.
  // { label: "GitHub", href: "https://github.com/your-handle", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/parkavi-muthukrishnan", icon: "linkedin" },
  { label: "Email", href: `mailto:${personal.email}`, icon: "mail" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    `Hi, I'm ${personal.name}, a Software Engineer with 3+ years of experience across frontend, backend and full-stack development. I work primarily with React, Next.js, Node.js and TypeScript, and I enjoy turning product ideas into fast, accessible and maintainable web applications.`,
    "At Highbrow Technology I've contributed to CleverHire.ai — an AI-powered hiring and interview platform — and the Morrisville pickup-game web app, integrating REST APIs, managing server state with TanStack Query and applying SOLID principles and reusable component patterns. I've also built and shipped backend services on AWS, from Lambda and S3 to SES/SNS email pipelines and containerised deployments on ECS Fargate with automated CI/CD.",
    "I'm currently open to Frontend, Backend or Full-Stack Developer roles.",
  ],
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "5+", label: "Products shipped" },
    { value: "10+", label: "AWS services used in production" },
  ],
};

/** Marquee rows in the "My Tech Stack" section. */
export const techStack: TechItem[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Redux", icon: "redux" },
  { name: "TanStack Query", icon: "tanstack" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "JWT", icon: "jwt" },
  { name: "Auth0", icon: "auth0" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
];

/** "What I Do" cards. */
export const services: ServiceCard[] = [
  {
    title: "Frontend",
    description:
      "I build responsive, accessible interfaces with React, Next.js and TypeScript — reusable component systems, efficient server-state management with TanStack Query, and clean architecture grounded in SOLID principles.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Backend",
    description:
      "I design REST APIs with Node.js and Express backed by MongoDB, with secure authentication via JWT and Auth0, and integrate them cleanly with the frontend for seamless data flow.",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT", "Auth0"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "I ship on AWS — Lambda, S3, SES and SNS email pipelines with bounce handling and click tracking, containerised services on ECS with Fargate, and automated CI/CD using CodeBuild and CodeDeploy.",
    skills: [
      "AWS Lambda",
      "S3",
      "SES",
      "SNS",
      "ECS Fargate",
      "EC2",
      "Amplify",
      "Route 53",
      "CodeBuild",
      "CodeDeploy",
      "Git & GitHub",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Highbrow Technology Pvt Ltd",
    location: "Chennai",
    period: "Feb 2025 – Present",
    highlights: [
      "Contributed to multiple frontend pages of CleverHire.ai using React and TypeScript.",
      "Developed frontend features for the Morrisville WebApp using React, TypeScript and modern UI components.",
      "Integrated REST APIs and managed server state using TanStack Query for efficient data fetching and caching.",
      "Applied SOLID principles and reusable component patterns to build scalable, maintainable applications.",
      "Collaborated with cross-functional teams on feature development, debugging, testing and code reviews.",
    ],
  },
  {
    role: "LLM Trainer",
    company: "Turing (via Highbrow Technology Pvt Ltd)",
    period: "Jun 2024 – Feb 2025",
    highlights: [
      "Worked on training and fine-tuning large language models (LLMs).",
      "Reviewed and labelled data to improve model accuracy and performance.",
      "Conducted quality checks and provided feedback for iterative model improvement.",
      "Collaborated with cross-functional teams to align training objectives with project goals.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Highbrow Technology Pvt Ltd",
    location: "Chennai",
    period: "Jan 2024 – Jun 2024",
    highlights: [
      "Implemented frontend solutions aligned with design specifications and integrated Auth0 for secure authentication.",
      "Implemented backend logic using Node.js for seamless data flow.",
      "Utilised AWS Lambda, S3, SES, Route 53, Amplify and EC2 for scalable backend solutions.",
      "Configured Amazon SNS for bounce handling, click tracking and notifications.",
      "Deployed containerised applications using AWS ECS with Fargate and automated CI/CD pipelines with AWS CodeBuild and CodeDeploy.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Highbrow Technology Pvt Ltd",
    location: "Chennai",
    period: "Aug 2022 – Dec 2023",
    highlights: [
      "Supported full-stack web development, including frontend implementation, backend integration and application maintenance.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "cleverhire",
    title: "CleverHire.ai",
    context: "AI-powered hiring & interview platform · Highbrow Technology",
    description:
      "An AI-powered recruitment platform with applicant tracking, candidate pools, video interviews and automated resume analysis. I own several frontend feature areas of the React + TypeScript product used daily by recruiters, account managers and candidates.",
    contributions: [
      "Permission-driven UI with custom role settings, privilege-escalation guards and team management.",
      "Applicant dashboard & candidate pool: tags, sub-status filters, duplicate detection and result counts.",
      "Resume and video upload/preview with private S3 media served through signed URLs.",
      "Candidate session management for interview authentication and unified navigation with breadcrumbs.",
      "Hardened unit and end-to-end test suites (Vitest, Playwright) and fixed flaky CI.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Vitest",
      "Playwright",
    ],
    links: { live: "https://cleverhire.ai" },
    palette: ["#f97316", "#7c2d12"],
  },
  {
    slug: "morrisville",
    title: "Morrisville Pickup-Game WebApp",
    context: "Court monitoring & pickup games · Highbrow Technology",
    description:
      "A mobile-first web app reached by scanning a QR code at a sports court. It shows live court availability from IoT sensor data, lets players register with phone OTP, start or join pickup games, receive notifications, and gives operators an admin panel.",
    contributions: [
      "Built and polished the admin and player UI, including loading states and consistent design tokens.",
      "Implemented the OTP registration flow with live retry countdown and a mock login for development.",
      "Shipped game-lifecycle features: player removal, one-active-game restriction and creator hand-off.",
      "Added admin data exports, privacy policy, and comprehensive frontend, backend and e2e test coverage.",
    ],
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Recharts",
      "Node.js",
      "Express",
      "Vitest",
      "Playwright",
    ],
    palette: ["#fbbf24", "#78350f"],
  },
  {
    slug: "mailconfio",
    title: "MailConfio",
    context: "Email marketing platform · Full-stack",
    description:
      "An end-to-end email marketing SaaS: campaigns, subscriber lists with tags and segments, a drag-and-drop template builder, automations, landing pages and forms, and reporting dashboards — backed by AWS SES for delivery at scale.",
    contributions: [
      "Next.js frontend with Auth0 authentication, Material UI and a drag-and-drop (MJML / Easy Email) template editor.",
      "Node.js + Express + MongoDB backend for campaigns, subscribers, templates and scheduled sends.",
      "AWS SES sending with sender verification, SNS-driven bounce handling and click tracking, S3 uploads.",
      "Deployed with AWS Lambda, EC2, Amplify and Route 53; CI/CD via CodeBuild and CodeDeploy.",
    ],
    tech: [
      "Next.js",
      "React",
      "Material UI",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Auth0",
      "AWS SES",
      "AWS SNS",
      "AWS S3",
      "AWS Lambda",
    ],
    palette: ["#fb923c", "#431407"],
  },
  {
    slug: "jp-biryani",
    title: "JP Biryani Website",
    context: "Restaurant website · Next.js",
    description:
      "A marketing website for a restaurant with an interactive menu, catering-services page, Google Maps integration and a contact form protected by reCAPTCHA v3 that delivers enquiries through AWS SES.",
    contributions: [
      "Built responsive pages (home, menu, catering, contact, privacy, terms) with Next.js, MUI and Tailwind CSS.",
      "Contact form with React Hook Form + Yup validation, Google reCAPTCHA verification and SES email delivery.",
      "GSAP-powered scroll animations and carousels; cookie-consent banner for compliance.",
    ],
    tech: ["Next.js", "React", "Material UI", "Tailwind CSS", "Sass", "GSAP", "React Hook Form", "AWS SES", "Google Maps API"],
    palette: ["#f59e0b", "#3f1d0b"],
  },
  {
    slug: "converge-ats",
    title: "Converge ATS",
    context: "Applicant tracking system · Foundation",
    description:
      "The foundation of an applicant tracking system: a Next.js frontend secured with Auth0, with dashboard and organisation-management pages, paired with a Node.js backend service.",
    tech: ["Next.js", "React", "Auth0", "Node.js"],
    palette: ["#ea580c", "#1c0a03"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering — Electronics and Communication Engineering",
    institution: "PSNA College of Engineering and Technology",
    location: "Dindigul",
    period: "2017 – 2021",
  },
];

export const contact = {
  heading: "Contact",
  blurb: "Have a role or a project in mind? I'd love to hear about it.",
  availability: "Open to Frontend, Backend and Full-Stack roles",
};

export const footer = {
  developedBy: personal.name,
  year: new Date().getFullYear(),
};
