import { useEffect, useRef } from "react";

export function useIntersectionObserver(
  callback: (newState: any) => void,
  options: IntersectionObserverInit
) {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting)
    }, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return targetRef;
}
