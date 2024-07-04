import { useState } from "react";
import SectionHeader from "./SectionHeader";
import SelectionRow from "./SelectionRow";
import ProjectContainer from "./ProjectContainer";
import ProjectsLayout from "./ProjectsLayout";
import React from "react";

let id = 0;

const projects = new Map([
  [
    "Web Dev",
    [
      {
        title: "Personal Website",
        description:
          "This website was created using React and Tailwind CSS. It is hosted on Vercel and the source code is available on GitHub.",
        imageUrl: "https://dummyimage.com/300x300/eee/aaa",
        href: "https://souheab.com",
        id: id++,
      },
      {
        title: "Personal Website",
        description:
          "This website was created using React and Tailwind CSS. It is hosted on Vercel and the source code is available on GitHub.",
        imageUrl: "https://dummyimage.com/300x300/eee/aaa",
        href: "https://souheab.com",
        id: id++,
      },
      {
        title: "Personal Website",
        description:
          "This website was created using React and Tailwind CSS. It is hosted on Vercel and the source code is available on GitHub.",
        imageUrl: "https://dummyimage.com/300x300/eee/aaa",
        href: "https://souheab.com",
        id: id++,
      }
    ]
  ],
  [
    "C",
    [
      {
        title: "C Snake Game",
        description: "This is a simple snake game created using C and ncurses",
        imageUrl: "https://dummyimage.com/300x300/eee/aaa",
        href: "https://github.com/Souheab/csnake",
        id: id++,
      }
    ]
  ],
  [
    "Go",
    [
      {
        title: "Go Terminal",
        description: "This is a simple snake game created using C and ncurses",
        imageUrl: "https://dummyimage.com/300x300/eee/aaa",
        href: "https://github.com/Souheab/gotuifm",
        id: id++,
      }
    ]
  ],
  [
    "Python",
    [
      {
        title: "Python Video to Slides converter",
        description:
          "A python program that converts a video into a series of images and then into a pdf file",
        imageUrl: "https://dummyimage.com/300x300/eee/aaa",
        href: "https://github.com/Souheab/vid2slides",
        id: id++,
      }
    ]
  ],
]);

const options = Array.from(projects.keys());

export default function ProjectsPage() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <section className="panel contact-info-section-div min-h-screen relative flex flex-col items-center">
      <SectionHeader
        className="sm:text-5xl py-10 min mb-20 text-center"
        title="Projects"
      />
      <SelectionRow
        options={options}
        onSelect={(idx) => {
          setSelectedOption(idx);
        }}
        selectedOption={selectedOption}
      />

      <ProjectsLayout projects={projects.get(options[selectedOption])!}/>
    </section >
  );
}
