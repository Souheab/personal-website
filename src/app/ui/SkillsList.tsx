interface SkillsListProps {
  skillsListItems: React.ReactNode;
  skillsListTitle: string
}

export default function SkillsList(props: SkillsListProps) {
  return (
    <div className="flex-col flex-1 border border-black m-2 my-5 rounded">
      <h2 className="text-center">{props.skillsListTitle}</h2>
      <div className="p-4">
        {props.skillsListItems}
      </div>
    </div>
  );
}
