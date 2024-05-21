interface SkillsListItemProps {
  skillIconLink: string;
  skillName: string;
}

export default function SkillsListItem(props: SkillsListItemProps) {
  return (
    <div className="inline-flex items-center p-1">
      <img
        src={props.skillIconLink}
        alt={props.skillName}
        className="w-8 h-8"
      />
      <div className="ml-2 text-slate-900">{props.skillName}</div>
    </div>
  );
}
