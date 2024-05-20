interface SkillsListProps {
  skillsListItems: React.ReactNode;
}

export default function SkillsList(props: SkillsListProps) {
  return (
    <div className="flex border border-black">{props.skillsListItems}</div>
  );
}
