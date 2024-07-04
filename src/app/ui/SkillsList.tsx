import React from "react";
import { useInView } from "react-intersection-observer";

interface SkillsListProps {
  skillsListItems: React.ReactNode;
  skillsListTitle: string;
}

export default function SkillsList(props: SkillsListProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`border border-slate-400 m-2 my-5 rounded flex-1 p-5 transition-all duration-2000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center text-xl text-slate-700 font-bold">
        {props.skillsListTitle}
      </div>
      <div className="flex justify-center">
        <div className="p-4 inline-flex flex-col">{props.skillsListItems}</div>
      </div>
    </div>
  );
}
