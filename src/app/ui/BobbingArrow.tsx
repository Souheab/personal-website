import React from 'react';
import { motion } from 'framer-motion';
interface BobbingArrowProps {
  className?: string;
}


export default function BobbingArrow(props: BobbingArrowProps) {
  return (
    <motion.div className={props.className}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
      }}
      style={{
        fontSize: "48px",
        display: "inline-block",
      }}
    >
      &#8595; {/* Down arrow Unicode character */}
    </motion.div>
  );
};
