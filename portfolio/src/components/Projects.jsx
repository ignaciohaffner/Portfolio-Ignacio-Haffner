/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      tittle: "Price Chart",
      image: "https://i.imgur.com/XompTW6.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, officiis? Sunt optio non deserunt, ea neque aliquid quis placeat voluptatum expedita. Nam eius maxime iusto nostrum blanditiis, est ad porro?",
      githublink:
        "https://github.com/ignaciohaffner/la-olla-generador-de-precios",
      deploylink: "https://laolla-generador.netlify.app/",
    },

    {
      id: 2,
      tittle: "adsjaoda Chart",
      image: "https://i.imgur.com/XompTW6.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, officiis? Sunt optio non deserunt, ea neque aliquid quis placeat voluptatum expedita. Nam eius maxime iusto nostrum blanditiis, est ad porro?",
      githublink: "",
    },
  ];
  const [show, setShow] = useState(false);

  return (
    <div className="md:h-screen" id="projects">
      <h3 className="text-6xl font-bold text-center mt-32 mb-5">PROJECTS</h3>
      <div className="flex flex-col md:flex-row justify-center gap-x-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            tittle={project.tittle}
            image={project.image}
            description={project.description}
            githublink={project.githublink}
            deploylink={project.deploylink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
