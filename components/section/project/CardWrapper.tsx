import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projectList";

const CardWrapper = () => {
  return (
    <div className=" gap-[5rem] py-[5rem] flex flex-col ">
      {projects?.map((project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  );
};

export default CardWrapper;
