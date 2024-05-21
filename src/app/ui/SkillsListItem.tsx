interface SkillsListItemProps {
  skillIconLink: string;
  skillName: string;
}

export default function SkillsListItem(props: SkillsListItemProps) {
  return (
    <div className="flex items-center p-1">
      <img
        src={props.skillIconLink}
        alt={props.skillName}
        className="w-8 h-8"
      />
      <p className="ml-2">{props.skillName}</p>
    </div>
  );
}
