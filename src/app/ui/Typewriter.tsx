import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks";

interface TypewriterProps {
  text: string;
  delay: number;
}

export default function Typewriter(props: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const index = useRef(0);
  const displayTextRef = useRef("");
  const [isVisible, setIsVisible] = useState(false)

  // I would like to use the useInView hook from react-intersection-observer here but for some reason it doesn't work
  // Using useIntersectionObserver instead
  const targetRef = useIntersectionObserver(setIsVisible, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      if (index.current < props.text.length) {
        displayTextRef.current = displayTextRef.current.concat(
          props.text.charAt(index.current),
        );
        setDisplayText(displayTextRef.current);
        index.current += 1;
      } else {
        clearInterval(interval);
      }
    }, props.delay);

    return () => clearInterval(interval);
  }, [props.text, props.delay, isVisible]);

  return <span ref={targetRef}>{displayText}</span>;
}
