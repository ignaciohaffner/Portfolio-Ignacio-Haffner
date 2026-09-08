import ProjectCard from "./ProjectCard";
import reservappPreview from "../assets/reservapp-preview.png";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: 0,
    title: "ReservApp",
    image: reservappPreview,
    description:
      "SaaS platform that helps businesses manage reservations and automate customer interactions. Built scalable backend systems, APIs for booking flows, payments, and WhatsApp automation.",
    githubLink: "disabled",
    deployLink: "https://reservapp.org",
    technologies: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 1,
    title: "Pitwall",
    image: "https://media.discordapp.net/attachments/641149850725122069/1511514410664071338/image.png?ex=6a20bafe&is=6a1f697e&hm=03827aafdf92fe96fce971f4c1809c76f3415ebc371146a610be93049419c353&=&format=webp&quality=lossless&width=2784&height=1304",
    description:
      "Real-time Formula 1 dashboard that streams live timing data, lap times, sector splits, tyre strategy and team radio during race sessions. Self-hosted with Docker, Traefik reverse proxy and SSL.",
    githubLink: "https://github.com/ignaciohaffner/f1-dash",
    deployLink: "https://f1.ignaciohaffner.com",
    technologies: ["Rust", "Next.js", "TypeScript", "Docker", "Traefik"],
  },
  {
    id: 2,
    title: "Price Chart",
    image: "https://media.discordapp.net/attachments/641149850725122069/1511575470662221935/image.png?ex=6a20f3db&is=6a1fa25b&hm=78df5f2f0b31f0e8e5745f59b05ea822f0f9954e576a557abe45faba30c3cb9c&=&format=webp&quality=lossless&width=2680&height=1398",
    description:
      "React-based price graph generator with real-time updates and PNG export functionality.",
    githubLink: "https://github.com/ignaciohaffner/la-olla-generador-de-precios",
    deployLink: "https://laolla-generador.netlify.app/",
    technologies: ["React", "Hooks", "Bootstrap", "html2canvas"],
  },
  {
    id: 3,
    title: "GymTrack [WIP]",
    image: "https://i.imgur.com/kZBlfEK.png",
    description:
      "Web application for managing gym schedules, finances, and attendance. Built with React, Tailwind CSS, and .NET C# ASP.NET backend. Features dynamic animations and TanStack Query state management.",
    githubLink: "disabled",
    deployLink: "https://imgur.com/a/gym-track-work-progress-uvXfBQZ",
    technologies: ["React", "Tailwind CSS", "TanStack Query", ".NET C#", "ASP.NET"],
  },
  {
    id: 4,
    title: "La Olla Landing Page",
    image: "https://i.imgur.com/eCdn1u1.png",
    description:
      "Landing page for a takeout restaurant in Gualeguaychú, Argentina. Fully responsive with a Supabase-powered contact form and admin section for dynamic price and product management.",
    githubLink: "https://github.com/ignaciohaffner/la-olla-landing",
    deployLink: "https://rotiserialaolla.netlify.app/",
    technologies: ["React", "Tailwind", "Supabase", "Netlify"],
  },
  {
    id: 5,
    title: "Exercises Tracker",
    image: "https://media.discordapp.net/attachments/641149850725122069/1511515445855784970/image.png?ex=6a20bbf4&is=6a1f6a74&hm=dd89ad8740e8fdc5fca33e9f035d7b2e7220dd079c0f753ec4eca82ad513919a&=&format=webp&quality=lossless&width=2680&height=1398",
    description:
      "Math Exercise Tracker with intuitive tracking, dynamic topic management, data import/export, drag-and-drop support and light/dark mode. Showcases complex UI and state management in React.",
    githubLink: "https://github.com/ignaciohaffner/exercise-tracker",
    deployLink: "https://exercisetracker.ignaciohaffner.com/",
    technologies: ["React", "TypeScript", "React-Beautiful-DnD", "Tailwind"],
  },
  {
    id: 6,
    title: "Nelson Taffarel Portfolio",
    image: "https://i.imgur.com/he2jubC.png",
    description:
      "Personal portfolio website with Framer Motion animations, Shadcn components and a full responsive design.",
    githubLink: "https://github.com/ignaciohaffner/portfolio-nelson-taffarel",
    deployLink: "https://nelsontaffarel.netlify.app/",
    technologies: ["React", "Tailwind", "Framer Motion", "Netlify"],
  },
];

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="container mx-auto py-20 px-4"
      id="projects"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
    >
      <div className="space-y-8">
        {/* Section header */}
        <div>
          <span className="text-sm" style={{ color: "#00d992" }}>
            $ ls ~/projects/
          </span>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
