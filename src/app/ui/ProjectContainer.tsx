"use client"

import { motion } from "framer-motion";

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
  id: number;
}

export default function ProjectContainer(props: Project) {
  return (
    <motion.div className={"flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden max-h-40 mx-auto my-4"}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6 }}
    >
      <div className="sm:w-1/3">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-48 sm:h-full object-cover"
        />
      </div>
      <div className="sm:w-2/3 p-4">
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>
        <p className="text-gray-600">{props.description}</p>
      </div>
    </motion.div>
  );
}
