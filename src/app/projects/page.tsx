import React from "react";
import { MyProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface ProjectBoxProps {
  name: string;
  description: string;
  techStack: string;
  siteHref: string;
  imageSrc: string;
}

const ProjectBox = ({
  name,
  description,
  techStack,
  siteHref,
  imageSrc,
}: ProjectBoxProps) => {
  return (
    <div className="flex flex-col border border-[var(--primary-400)] rounded-lg">
      <Link
        href={siteHref}
        className="relative overflow-clip rounded-lg rounded-bl-none rounded-br-none group"
      >
        <Image
          src={imageSrc}
          width={300}
          height={170}
          alt={`Illustrative image for the project ${name}`}
          className="css-reset-img hover:scale-105 group-hover:scale-105 transition-transform ease-in-out duration-500"
        />
        <div className="text-sm absolute bottom-4 right-4 bg-gray-800 px-4 py-2 rounded-full xl:hidden xl:group-hover:block hover:bg-gray-900">
          Visit Site →
        </div>
      </Link>
      <div className="flex flex-col gap-6 bg-[var(--primary-250)] p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-[var(--primary-700)]">{description}</p>
        </div>
        <p className="text-[var(--primary-500)]">{techStack}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <main className="flex flex-col gap-12 py-8">
      <h2 className="styled-text text-6xl tracking-tighter text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg-px-0">
        {MyProjects.map((project) => (
          <ProjectBox
            key={project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            siteHref={project.siteHref}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
