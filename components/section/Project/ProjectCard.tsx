"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

interface IProjectCardProps {
  initial: number;
  animate: number;
}

function calculateHeight(width: number) {
  return `${(9 * width) / 16}px`;
}
const ProjectCard = ({ initial, animate }: IProjectCardProps) => {
  const iFrameRef = useRef(null);
  console.log("calculateHeight(200)", calculateHeight(200), iFrameRef?.current);
  return (
    <motion.div
      initial={{ y: initial }}
      animate={{ y: animate }}
      transition={{ duration: 1 }}
      className="mb-5 p-2"
    >
      <div className="flex-col flex">
        <h2 className="p-0 pb-1 text-[2rem]">Title</h2>
        <p className="pb-3 text-[1rem] text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at
          voluptate magnam aut, officia delectus consequatur temporibus sit
          accusantium dolores corrupti dignissimos. In quia quisquam voluptates
          impedit. Cupiditate, accusamus similique!
        </p>
      </div>
      <div className="w-full" ref={iFrameRef}>
        <iframe
          src="https://dhindhora.netlify.app/login"
          className="w-full"
          height={calculateHeight(890)}
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
