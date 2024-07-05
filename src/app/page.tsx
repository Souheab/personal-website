"use client";
import IntroPage from "./ui/IntroPage";
import SkillsPage from "./ui/SkillsPage";
import ContactPage from "./ui/ContactPage";
import ProjectsPage from "./ui/ProjectsPage";
import ParticlesContainer from "./ui/ParticlesContainer";

export default function Home() {

  return (
    <>
      <ParticlesContainer />
      <IntroPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}
