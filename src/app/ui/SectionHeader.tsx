import Typewriter from "./Typewriter";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <h1
      className={"text-5xl ".concat(
        props.className === undefined ? "" : props.className,
      )}
    >
      <Typewriter text={props.title} delay={150} />
    </h1>
  );
}
