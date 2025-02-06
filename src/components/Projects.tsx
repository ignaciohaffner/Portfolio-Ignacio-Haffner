import { motion } from "framer-motion";
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
      "Comprehensive gym management web app built with React and .NET C#.",
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
      "Responsive landing page for a takeout restaurant with admin section for menu management.",
    githubLink: "https://github.com/ignaciohaffner/la-olla-landing",
    deployLink: "https://rotiserialaolla.netlify.app/",
    technologies: ["React", "Tailwind", "Supabase", "Netlify"],
  },
  {
    id: 4,
    title: "Exercises Tracker",
    image: "https://i.imgur.com/Rwh2sru.png",
    description:
      "Modern web app for tracking math exercises, featuring advanced UI and state management.",
    githubLink: "https://github.com/ignaciohaffner/exercise-tracker",
    deployLink: "https://excercise-tracker.netlify.app/",
    technologies: ["React", "TypeScript", "React-Beautiful-DnD", "Tailwind"],
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
