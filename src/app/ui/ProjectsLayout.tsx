import React, { useEffect, useState } from "react";

interface ProjectsLayoutProps {
  children: React.ReactNode;
}

// HACK: Solution for animation is a little hacky, can be done better

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    setIsVisible(false);
    // fade out
    const timer = setTimeout(() => {
      setCurrentChildren(children);
    }, 400);

    // fade in
    const timer2 = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }
  }, [children]);

  const childrenArray = React.Children.toArray(currentChildren);
  const flattenedChildren = childrenArray.flatMap((child) =>
    React.isValidElement(child) && child.type === React.Fragment
      ? React.Children.toArray(child.props.children)
      : child
  );
  const childrenCount = flattenedChildren.length;

  let layoutClass = "";
  if (childrenCount === 1) {
    layoutClass = "h-screen";
  } else if (childrenCount === 2) {
    layoutClass = "grid grid-rows-2";
  } else if (childrenCount === 3) {
    layoutClass = "grid grid-cols-2 grid-rows-2";
  } else {
    layoutClass = "grid grid-cols-2 gap-4";
  }

  return (
    <div className={`container mx-auto px-4 py-8 gap-5 ${layoutClass}`}>
      {childrenCount === 3 ? (
        <>
          <div className="col-span-1">{React.cloneElement(flattenedChildren[0] as React.ReactElement, { isVisible })}</div>
          <div className="col-span-1">{React.cloneElement(flattenedChildren[1] as React.ReactElement, { isVisible })}</div>
          <div className="col-span-2">{React.cloneElement(flattenedChildren[2] as React.ReactElement, { isVisible })}</div>
        </>
      ) : (
        flattenedChildren.map((child, index) => (
          <div key={index} className="w-full h-full">
            {React.cloneElement(child as React.ReactElement, { isVisible })}
          </div>
        ))
      )}
    </div>
  );
}
