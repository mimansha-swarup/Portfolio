import React from "react";
import ProjectCard from "./ProjectCard";
// px-[2rem] sm:px-[10rem] md:px-[15rem] xl:px-[20rem]
const CardWrapper = () => {
  return (
    <div className=" gap-[5rem] py-[5rem] flex flex-col ">
      <ProjectCard initial={1000} animate={0} />
      <ProjectCard initial={-1000} animate={0} />
      <ProjectCard initial={-1000} animate={0} />
    </div>
  );
};

export default CardWrapper;
