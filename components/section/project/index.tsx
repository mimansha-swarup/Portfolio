import React from "react";
import Title from "../../shared/Title";
import CardWrapper from "./CardWrapper";
import LightBall from "@/components/shared/Light";
import "../../style.css";

const ProjectSection = () => {
  return (
    <section className="relative min-h-screen overflow-visible">
      <LightBall
        height="h-[150px] sm:h-[200px]"
        width="w-[150px] sm:w-[200px]"
        blur="blur-[75px] sm:blur-[130px]"
        positionClass="right-0"
      />
      <Title heading="Projects" />
      <CardWrapper />
    </section>
  );
};

export default ProjectSection;
