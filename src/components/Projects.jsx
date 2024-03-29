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
        "The project was created in React, with the use of Hooks, I used boostrap for base styles, and also the html2canvas library, to be able to download the graph divider as png. Price graph generator for a business, where the values are entered in an input and they are updated in real time in the graph, to later download both graphs, or separately",
      githublink:
        "https://github.com/ignaciohaffner/la-olla-generador-de-precios",
      deploylink: "https://laolla-generador.netlify.app/",
    },
  ];
  const [show, setShow] = useState(false);

  return (
    <div className="md:h-screen mx-10" id="projects">
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
