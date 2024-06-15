import { Lato, Roboto } from "next/font/google";
import Image from "next/image";
import "../style.css";
import React from "react";

interface ITitleProps {
  heading: string;
}

const roboto = Roboto({ weight: "900", subsets: ["latin"] });
const Title = ({ heading }: ITitleProps) => {
  return (
    <div className="relative flex justify-center mb-8">
      <div
        // style={{ fontSize: "clamp(5rem, 7vw, 9rem)" }}
        className={`${roboto.className} font-black text-[3rem] text-primary-100 tracking-[0.2rem] bottom-[.5rem]  absolute -z-10 opacity-[.2] sm:text-[5rem] lg:text-[7vw] sm:bottom-0 lg:bottom-[-1rem] blur-sm`}
      >
        {heading.toUpperCase()}
      </div>
      <h1 className="mt-16 text-[2rem] sm:text-[2.6rem] text-center justify-center text-primary-100 font-normal tracking-[0.1rem]">
        {heading}
      </h1>
      <p className="title-underline  absolute -bottom-3 text-[32px] sm:text-[48px] sm:-bottom-[1.3rem]">
        ........................
      </p>
    </div>
  );
};

export default Title;
