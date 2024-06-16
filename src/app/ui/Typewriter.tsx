import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
}


export default function Typewriter(props: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const index = useRef(0);
  const displayTextRef = useRef('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current < props.text.length) {
        displayTextRef.current = displayTextRef.current.concat(props.text.charAt(index.current));
        setDisplayText(displayTextRef.current);
        index.current += 1;
      } else {
        clearInterval(interval);
      }
    }, props.delay);

    return () => clearInterval(interval);
  }, [props.text, props.delay]);

  return <span>{displayText}</span>;
}
