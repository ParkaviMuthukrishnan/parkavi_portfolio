import { Navbar } from "@/components/layout/Navbar";
import { ResumeTab } from "@/components/layout/ResumeTab";
import { SocialRail } from "@/components/layout/SocialRail";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <ResumeTab />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
