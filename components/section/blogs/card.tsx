"use client";
import { blogList } from "@/constants/blogList";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";

type blogDataType = (typeof blogList)[0];
interface ICardProps {
  data: blogDataType;
}

const COLORS_TOP = ["#B7AB98", "#968C7E", "rgba(150, 140, 126, 0.3)", "#8A89"];

const Card = ({ data }: ICardProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  return (
    <div
      onClick={() => window.open(data.url)}
      style={{}}
      className="w-full lg:w-[390px] h-64 bg-dark-300 overflow-hidden cursor-pointer group relative rounded-lg "
    >
      <div
        className="absolute inset-0 blur-sm brightness-50 contrast-150 group-hover:brightness-100 group-hover:blur-none saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${data.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div
        className="p-4 relative z-20 h-full text-dark-500 bg-blog-card-gradient group-hover:text-white transition-colors duration-500 flex flex-col justify-between group-hover:bg-none"
        style={
          {
            // backgroundImage,
            // "radial-gradient(120% 120% at 0% 0%, transparent 50%, #b7ab98)", bg-blog-card-gradient
          }
        }
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        <div>
          <h4 className=" text-lg sm:text-2xl font-semibold transition-all group-hover:hidden ">
            {data.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
