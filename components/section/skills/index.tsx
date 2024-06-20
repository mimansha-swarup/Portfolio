import LightBall from "@/components/shared/Light";
import Title from "@/components/shared/Title";
import React from "react";
import Card from "./Card";
import { skillList } from "@/constants/skills";

const Skills = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-visible">
      <LightBall
        height="h-[150px] sm:h-[200px]"
        width="w-[150px] sm:w-[200px]"
        blur="blur-[100px] sm:blur-[130px]"
        positionClass="top-0 left-0"
      />
      <Title heading="Skills" />

      <div className=" w-fit justify-center flex m-auto flex-wrap gap-4 sm:gap-8 ">
        {skillList?.map((skill, index) => (
          <Card key={skill.id} index={index} title={skill.label} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
