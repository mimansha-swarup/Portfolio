"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { calculateNewHeight, generateRandomNumber } from "@/utils";
import useWindowWidth from "@/hooks/useWIndowWidth";
import { projects } from "@/constants/projectList";

type projectData = (typeof projects)[0];

interface IProjectCardProps {
  data: projectData;
}

const ProjectCard = ({ data }: IProjectCardProps) => {
  const [height, setHeight] = useState("auto");
  const ref = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    if (ref?.current?.offsetWidth)
      setHeight(calculateNewHeight(ref?.current?.offsetWidth));
  }, [ref?.current?.offsetWidth, windowWidth]);

  return (
    <div
      style={{
        transform: `rotate(${generateRandomNumber()}deg)`,
      }}
    >
      <motion.div
        ref={ref}
        className="relative w-full object-contain mx-auto max-w-[90%]   sm:max-w-[75%] p-4 rounded-lg"
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
          background: `url(${data.thumbnail})`,
          height,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-dark-500 opacity-80" />
        <div className="absolute  bottom-0">
          <h2 className="pt-0 pb-1 text-[1rem]  sm:text-[1.75rem] md:text-3xl">
            {data.title}
          </h2>
          <p className="bottom-0 pb-3 text-[.65rem] sm:text-[1rem] text-gray-500">
            {data.subTitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
