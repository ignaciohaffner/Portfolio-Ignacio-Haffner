import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Star } from "lucide-react";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTypescript, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import reservappPreview from "../assets/reservapp-preview.png";
import reservappServices from "../assets/reservapp-services.png";
import reservappBooking from "../assets/reservapp-booking.png";
import reservappCheckout from "../assets/reservapp-checkout.png";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const carouselImages = [reservappPreview, reservappServices, reservappBooking, reservappCheckout];

const featuredTech = [
  { Icon: SiTypescript, color: "text-blue-600", label: "TypeScript" },
  { Icon: FaReact, color: "text-blue-400", label: "React" },
  { Icon: FaNode, color: "text-green-600", label: "Node.js" },
  { Icon: SiExpress, color: "text-yellow-400", label: "Express" },
  { Icon: BiLogoPostgresql, color: "text-blue-600", label: "PostgreSQL" },
];

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
  const { language } = useLanguage();
  const t = translations[language];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container mx-auto py-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Featured Project */}
        <Card className="overflow-hidden border-2 border-primary/20">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="relative bg-muted min-h-[240px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={carouselImages[current]}
                    alt={`ReservApp screenshot ${current + 1}`}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10 pointer-events-none" />
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? "bg-white scale-125" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/30 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {t.featured.label}
                    </Badge>
                    <Badge variant="secondary">{t.featured.saas}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{t.featured.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.featured.coFounder} · {t.featured.duration}
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-1.5 mb-6">
                    {t.featured.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed marker:text-primary">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredTech.map(({ Icon, color, label }) => (
                      <motion.div
                        key={label}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Badge variant="outline" className={`flex items-center gap-1.5 px-3 py-1 ${color}`}>
                          <Icon className="text-lg" />
                          <span className="text-xs font-medium text-foreground">{label}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button asChild size="sm">
                    <a href="https://reservapp.org" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.featured.visitSite}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
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
