import Image from "next/image";
import React from "react";
import Link from "next/link";
import project1 from "../../public/assets/projects/cat1.avif";
import project2 from "../../public/assets/projects/cat2.avif";
import project3 from "../../public/assets/projects/cat3.avif";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Project Placeholder 1"
            backgroundImg={project1}
            projectUrl="/Project1"
          />
          <ProjectItem
            title="Project Placeholder 2"
            backgroundImg={project2}
            projectUrl="/Project2"
          />
          <ProjectItem
            title="Project Placeholder 3"
            backgroundImg={project3}
            projectUrl="/Project3"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
