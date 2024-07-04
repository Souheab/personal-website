"use client";
import { useEffect, useState } from "react";
import IntroPage from "./ui/IntroPage";
import SkillsPage from "./ui/SkillsPage";
import ContactPage from "./ui/ContactPage";
import ReactPageScroller from "react-page-scroller";
import ProjectsPage from "./ui/ProjectsPage";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {isMobile ? (
        <>
          <IntroPage />
          <SkillsPage />
          <ProjectsPage />
          <ContactPage />
        </>
      ) : (
        <ReactPageScroller>
          <IntroPage />
          <SkillsPage />
          <ProjectsPage />
          <ContactPage />
        </ReactPageScroller>
      )}
    </main>
  );
}
