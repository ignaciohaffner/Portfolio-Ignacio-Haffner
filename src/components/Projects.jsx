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
      technologies: ["React", "Hooks", "Bootstrap", "html2canvas"],
    },
    {
      id: 2,
      tittle: "GymTrack [WIP]",
      image: "https://i.imgur.com/kZBlfEK.png",
      description:
        "GymTrack is a web application designed for managing gym schedules, finances, and attendance. Built with React, it features sleek styling using Tailwind CSS, dynamic animations powered by Framer Motion, and efficient state management with TanStack Query. The backend is robustly crafted in .NET C# using ASP.NET. GymTrack ensures an intuitive user experience with a focus on reliable performance and streamlined management tools, making it an excellent solution for gym operations",
      githublink: "disabled",
      deploylink: "https://imgur.com/a/gym-track-work-progress-uvXfBQZ",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "TanStack Query",
        ".NET C#",
        "ASP.NET",
      ],
    },
    {
      id: 3,
      tittle: "La Olla Landing Page",
      image: "https://i.imgur.com/eCdn1u1.png",
      description:
        "La Olla is a takeout restaurant located in Gualeguaychú, Argentina. This landing page was created with React, using Tailwind CSS for styling. The contact form is powered by Supabase, and the website is hosted on Netlify. The site is fully responsive and features a clean design that showcases the restaurant's menu and contact information. Additionally, it includes an admin section where prices can be updated, and new products can be added, making the site dynamic and easy to manage.",
      githublink: "https://github.com/ignaciohaffner/la-olla-landing",
      deploylink: "https://rotiserialaolla.netlify.app/",
      technologies: ["React", "Tailwind", "Supabase", "Netlify"],
    },
  ];
  const [show, setShow] = useState(false);

  return (
    <div className="md:h-screen mx-10 sm:mx-32 align-middle " id="projects">
      <h3 className="text-4xl md:text-6xl font-bold text-center mt-32 mb-10">
        PROJECTS
      </h3>
      <div className="flex flex-col  md:flex-row justify-center gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            tittle={project.tittle}
            image={project.image}
            description={project.description}
            githublink={project.githublink}
            deploylink={project.deploylink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
