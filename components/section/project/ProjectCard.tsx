"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { generateRandomNumber } from "@/utils";
import Image from "next/image";

interface IProjectCardProps {
  initial: number;
  animate: number;
}

function calculateHeight(width: number) {
  return `${(9 * width) / 16}px`;
}
const ProjectCard = ({ initial, animate }: IProjectCardProps) => {
  return (
    <motion.div
      // initial={{ y: initial }}
      // animate={{ y: animate }}
      // transition={{ duration: 1 }}
      className="mb-[3rem] w-full object-contain mx-auto h-full h-[17rem] sm:h-[20rem]  max-w-[75%] p-4 rounded-lg"
      style={{
        background:
          "url(https://user-images.githubusercontent.com/69811810/154858801-aec5ff38-ea68-42e9-a313-cfae0a8c8f84.png)",

        backgroundSize: "cover",
        backgroundPosition: "center center",
        transform: `rotate(${generateRandomNumber()}deg)`,
      }}
    >
      {/* <Image src={"/assets/a.png"} fill /> */}
      <h2 className="p-0 pb-1 text-[1.75rem]  sm:text-[2rem]">Title</h2>
      <p className="pb-3 text-[.75rem] sm:text-[1rem] text-gray-500">
        subTitle
      </p>
    </motion.div>
  );
};

export default ProjectCard;
