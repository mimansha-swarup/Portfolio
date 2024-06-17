import LightBall from "@/components/shared/Light";
import Title from "@/components/shared/Title";
import React from "react";
import Card from "./Card";
import { FaReact } from "react-icons/fa";
import { skillList } from "@/constants/skills";

const Skills = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <LightBall
        height="h-[150px] sm:h-[200px]"
        width="w-[150px] sm:w-[200px]"
        blur="blur-[75px] sm:blur-[100px]"
        positionClass="bottom-0 right-0 -translate-y-[100%]"
      />
      <Title heading="Skills" />
      {/* grid-rows-4 grid-flow-row*/}
      {/* grid  grid-cols-4 w-full auto-cols-max */}
      <div className=" w-fit justify-center flex m-auto flex-wrap gap-8 ">
        {skillList?.map((skill) => (
          <Card key={skill.id} title={skill.label} Icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
