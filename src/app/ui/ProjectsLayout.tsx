import React from 'react';

interface ProjectsLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  const childrenArray = React.Children.toArray(children);
  const flattenedChildren = childrenArray.flatMap(child => 
    React.isValidElement(child) && child.type === React.Fragment 
      ? React.Children.toArray(child.props.children) 
      : child
  );
  const childrenCount = flattenedChildren.length;

  let layoutClass = "";
  if (childrenCount === 1) {
    layoutClass = "h-screen"; // Full height for single child
  } else if (childrenCount === 2) {
    layoutClass = "grid grid-rows-2"; // Vertical stack, half height each
  } else if (childrenCount === 3) {
    layoutClass = "grid grid-cols-2 grid-rows-2"; // 2 at top, 1 at bottom
  } else {
    layoutClass = "grid grid-cols-2 gap-4"; // Grid layout for 4+ children
  }

  return (
    <div className={`container mx-auto px-4 py-8 gap-5 ${layoutClass}`}>
      {childrenCount === 3 ? (
        <>
          <div className="col-span-1">{flattenedChildren[0]}</div>
          <div className="col-span-1">{flattenedChildren[1]}</div>
          <div className="col-span-2">{flattenedChildren[2]}</div>
        </>
      ) : (
        flattenedChildren.map((child, index) => (
          <div key={index} className="w-full h-full">{child}</div>
        ))
      )}
    </div>
  );
}
