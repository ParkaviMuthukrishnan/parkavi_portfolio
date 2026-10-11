import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiAuth0,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { TechIconKey } from "@/data/portfolio";

const icons: Record<TechIconKey, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss,
  redux: SiRedux,
  tanstack: SiReactquery,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  jwt: SiJsonwebtokens,
  auth0: SiAuth0,
  aws: FaAws,
  git: SiGit,
  github: SiGithub,
};

interface TechIconProps {
  name: TechIconKey;
  className?: string;
}

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" focusable="false" className={className} />;
}
