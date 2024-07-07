"use client";
import IntroPage from "./ui/IntroPage";
import SkillsPage from "./ui/SkillsPage";
import ContactPage from "./ui/ContactPage";
import ProjectsPage from "./ui/ProjectsPage";
import ParticlesContainerIntroPage from "./ui/ParticlesContainerIntroPage";
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import ParticlesContainerSkillsPage from "./ui/ParticlesContainerSkillsPage";

export default function Home() {
  const [particlesEngineInit, setParticlesEngineInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesEngineInit(true);
    });
  }, []);

  return (
    <>
      <ParticlesContainerIntroPage init={particlesEngineInit}/>
      {/*<ParticlesContainerSkillsPage init={particlesEngineInit}/>*/}
      <IntroPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}
