import { Github, Linkedin, type LucideIcon, type LucideProps, Mail, Phone } from "lucide-react";

import type { SocialLink } from "@/data/portfolio";

const icons: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
};

interface SocialIconProps extends LucideProps {
  name: SocialLink["icon"];
}

export function SocialIcon({ name, ...props }: SocialIconProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" {...props} />;
}
