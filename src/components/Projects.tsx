import { m, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "Price Chart",
    image: "https://i.imgur.com/XompTW6.png",
    description:
      "React-based price graph generator with real-time updates and PNG export functionality.",
    githubLink:
      "https://github.com/ignaciohaffner/la-olla-generador-de-precios",
    deployLink: "https://laolla-generador.netlify.app/",
    technologies: ["React", "Hooks", "Bootstrap", "html2canvas"],
  },
  {
    id: 2,
    title: "GymTrack [WIP]",
    image: "https://i.imgur.com/kZBlfEK.png",
    description:
      "GymTrack is a web application designed for managing gym schedules, finances, and attendance. Built with React, it features sleek styling using Tailwind CSS, dynamic animations powered by Framer Motion, and efficient state management with TanStack Query. The backend is robustly crafted in .NET C# using ASP.NET. GymTrack ensures an intuitive user experience with a focus on reliable performance and streamlined management tools, making it an excellent solution for gym operations.",
    githubLink: "disabled",
    deployLink: "https://imgur.com/a/gym-track-work-progress-uvXfBQZ",
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
    title: "La Olla Landing Page",
    image: "https://i.imgur.com/eCdn1u1.png",
    description:
      "La Olla is a takeout restaurant located in Gualeguaychú, Argentina. This landing page was created with React, using Tailwind CSS for styling. The contact form is powered by Supabase, and the website is hosted on Netlify. The site is fully responsive and features a clean design that showcases the restaurant's menu and contact information. Additionally, it includes an admin section where prices can be updated, and new products can be added, making the site dynamic and easy to manage.",
    githubLink: "https://github.com/ignaciohaffner/la-olla-landing",
    deployLink: "https://rotiserialaolla.netlify.app/",
    technologies: ["React", "Tailwind", "Supabase", "Netlify"],
  },
  {
    id: 4,
    title: "Exercises Tracker",
    image: "https://i.imgur.com/Rwh2sru.png",
    description:
      "Math Exercise Tracker – A modern web application built with React and TypeScript that simplifies how students manage their math exercises. It features an intuitive tracking system with multiple states, dynamic topic and section management, and advanced data import/export. With a responsive interface, drag-and-drop support, and light/dark mode, it showcases expertise in complex UI development and state management in React.",
    githubLink: "https://github.com/ignaciohaffner/exercise-tracker",
    deployLink: "https://excercise-tracker.netlify.app/",
    technologies: ["React", "TypeScript", "React-Beautiful-DnD", "Tailwind"],
  },
  {
    id: 5,
    title: "Nelson Taffarel Portfolio",
    image: "https://i.imgur.com/he2jubC.png",
    description:
      "Personal portfolio website made with React and Tailwind CSS, Framer Motion animations, and Shadcn Components, implements a full responsive design.",
    githubLink: "https://github.com/ignaciohaffner/portfolio-nelson-taffarel",
    deployLink: "https://nelsontaffarel.netlify.app/",
    technologies: ["React", "Tailwind", "Framer Motion", "Netlify"],
  },
];

const Projects = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div className="container mx-auto py-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-6">
              {t.projects.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Projects;
