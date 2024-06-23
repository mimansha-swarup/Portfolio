"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { calculateNewHeight, generateRandomNumber } from "@/utils";
import useWindowWidth from "@/hooks/useWIndowWidth";
import { projects } from "@/constants/projectList";
import { TbExternalLink, TbCode } from "react-icons/tb";

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
        whileHover={{ rotate: "-1deg" }}
        ref={ref}
        className="group relative cursor-pointer overflow-hidden w-full object-contain mx-auto max-w-[90%]   sm:max-w-[75%] p-4 rounded-xl"
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
          background: `url(${data.thumbnail})`,
          height,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute  h-[200px] bottom-0 top-[60%] md:top-[78%] left-4 right-4  bg-gradient-to-br from-primary-400 to-primary-700   rounded-t-2xl p-3 transition-transform duration-[250ms] group-hover:-translate-y-4 md:group-hover:-translate-y-14 group-hover:rotate-[2deg]">
          <div className="flex gap-1 items-baseline pb-4">
            <h2 className="p-0  text-[.68rem]  sm:text-[1rem] md:text-[1.75rem]">
              {data.title}
            </h2>
            <p className="bottom-0 p-0  text-[.5rem] sm:text-[.8rem] md:text-[1rem] text-gray-300">
              - {data.subTitle}
            </p>
            <div className="flex ml-auto gap-4 text-gray-500 text-[1rem] md:text-[1.25rem]">
              <a
                href={data.githubLink}
                target="_blank"
                className="hover:text-white-500"
              >
                <TbCode />
              </a>
              <a
                href={data.liveLink}
                target="_blank"
                className="hover:text-white-500"
              >
                <TbExternalLink />
              </a>
            </div>
          </div>
          <p className="text-[.45rem] text-gray-500 sm:text-[.7rem] md:text-[.9rem] ">
            {data.shortDescription}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
