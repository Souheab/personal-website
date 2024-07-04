import React from "react";
import {motion} from "framer-motion";
import ProjectContainer, { Project } from "./ProjectContainer";

interface ProjectsLayoutProps {
  projects: Project[];
}

export default function ProjectsLayout(props: ProjectsLayoutProps) {
  const childrenCount = props.projects.length;

  let layoutClass = "";
  if (childrenCount === 1) {
    layoutClass = "h-screen";
  } else if (childrenCount === 2) {
    layoutClass = "grid grid-rows-2";
  } else if (childrenCount === 3) {
    layoutClass = "grid grid-cols-2 grid-rows-2";
  } else {
    layoutClass = "grid grid-cols-2 gap-4";
  }

  return (
    <div className={`container mx-auto px-4 py-8 gap-5 ${layoutClass}`}>
      {childrenCount === 3 ? (
        <>
          <ProjectContainer{...props.projects[0]}></ProjectContainer>
          <ProjectContainer{...props.projects[1]}></ProjectContainer>
          <ProjectContainer{...props.projects[2]}></ProjectContainer>
        </>
      ) : (
        props.projects.map((project) => (
            <ProjectContainer key={project.id} {...project}></ProjectContainer>
        ))
      )}
    </div>
  );
}
