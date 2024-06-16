import React from "react";
import ProjectCard from "./ProjectCard";

const CardWrapper = () => {
  return (
    <div className=" gap-4 px-[2rem] sm:px-[10rem]">
      <ProjectCard initial={1000} animate={0} />
      <ProjectCard initial={-1000} animate={0} />
    </div>
  );
};

export default CardWrapper;
