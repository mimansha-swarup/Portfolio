"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { calculateNewHeight, generateRandomNumber } from "@/utils";
import Image from "next/image";
import path from "path";

interface IProjectCardProps {
  initial: number;
  animate: number;
}
const ProjectCard = ({ initial, animate }: IProjectCardProps) => {
  const [height, setHeight] = useState("auto");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  useEffect(() => {
    if (ref?.current?.offsetWidth)
      setHeight(calculateNewHeight(ref?.current?.offsetWidth));
  }, [ref?.current?.offsetWidth]);

  return (
    <motion.div
      // initial={{ y: initial }}
      // animate={{ y: animate }}
      // transition={{ duration: 1 }}
      ref={ref}
      className="relative w-full object-contain mx-auto   max-w-[75%] p-4 rounded-lg"
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
        background: "url(/assets/a.png)",
        height,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        transform: `rotate(${generateRandomNumber()}deg)`,
      }}
    >
      <div className=" absolute top-0 bottom-0 left-0 right-0 bg-dark-500 opacity-80" />
      <h2 className="absolute p-0 pb-1 text-[1.75rem]  sm:text-[2rem]">
        Title
      </h2>
      <p className="absolute bottom-0 pb-3 text-[.75rem] sm:text-[1rem] text-gray-500">
        subTitle
      </p>
    </motion.div>
  );
};

export default ProjectCard;
