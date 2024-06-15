import React from "react";
import Title from "../../shared/Title";
import CardWrapper from "./CardWrapper";

const ProjectSection = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      <Title heading="Projects" />
      <CardWrapper />
    </section>
  );
};

export default ProjectSection;
