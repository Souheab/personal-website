interface SkillsListProps {
  skillsListItems: React.ReactNode;
  skillsListTitle: string
}

export default function SkillsList(props: SkillsListProps) {
  return (
    <div className="border border-slate-400 m-2 my-5 rounded flex-1 p-5">
      <div className="text-center text-xl text-slate-700">{props.skillsListTitle}</div>
      <div className="flex justify-center">
        <div className="p-4 inline-flex flex-col">
            {props.skillsListItems}
        </div>
      </div>
    </div>
  );
}
