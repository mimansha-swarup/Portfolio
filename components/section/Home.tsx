import React from "react";
import LightBall from "../shared/Light";

const headingTypography =
  "text-[1.5rem] tracking-[5px] sm:text-[3rem] sm:tracking-[10px] lg:text-[4rem] lg:tracking-[20px]  xl:tracking-[27px]";
const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center "
    >
      <LightBall
        height="h-[300px] sm:h-[500px]"
        width="w-[300px] sm:w-[500px]"
        blur="blur-[150px] sm:blur-[250px] "
        positionClass="top-0 right-0  translate-x-[20%] -translate-y-[20%]"
      />
      <h1 className={`${headingTypography} p-0`}>MIMANSHA SWARUP</h1>
      <h3 className="text-[.75rem] tracking-[4px]  lg:text-[1.75rem] sm:text-[18px] sm:tracking-[.85rem] p-0 text-primary-200">
        FRONTEND DEVELOPER
      </h3>
    </section>
  );
};

export default HomeSection;
