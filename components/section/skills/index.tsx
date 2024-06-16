import LightBall from "@/components/shared/Light";
import Title from "@/components/shared/Title";
import React from "react";

const Skills = () => {
  return (
    <section className="relative min-h-screen">
      <LightBall
        height="h-[150px] sm:h-[200px]"
        width="w-[150px] sm:w-[200px]"
        blur="blur-[75px] sm:blur-[100px]"
        positionClass="bottom-0 right-0 -translate-y-[100%]"
      />
      <Title heading="Skills" />
    </section>
  );
};

export default Skills;
