"use client";
import { skillList } from "@/constants/skills";
import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";

interface ICardProps {
  title: string;
  index: number;
}

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};
const Card = ({ title, index }: ICardProps) => {
  const Icon = skillList[index].icon;
  return (
    <motion.div
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{
        once: true,
      }}
      className=" flex items-end max-w-[188px] w-[136.4px] h-[117px]  sm:w-full sm:h-[146px] overflow-hidden hover:overflow-visible p-4 rounded border-[1px] border-primary-200 relative group bg-dark-500"
    >
      <Icon className="absolute  z-10 -top-12 -right-12 text-9xl text-primary-200 opacity-30 group-hover:opacity-50 group-hover:rotate-12 transition-all duration-500" />
      {/* <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" /> */}
      <div>
        <h3 className="font-medium opacity-80 text-sm sm:text-lg mt-auto text-white-500 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="title-underline  absolute bottom-0  text-lg">
          ..................................
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
