import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import type React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  deployLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  githubLink,
  deployLink,
  technologies,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full group"
    >
      <div
        className="overflow-hidden h-full flex flex-col rounded-xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]"
        style={{
          background: "rgba(15,23,42,0.7)",
          border: "1px solid rgba(99,102,241,0.14)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-44 shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(to top, rgba(13,17,23,0.75) 0%, transparent 55%)" }}
          />
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col gap-3">
          <h3 className="font-bold text-base tracking-tight" style={{ color: "#f1f5f9" }}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed flex-1" style={{ color: "#94a3b8" }}>
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  color: "#a5b4fc",
                  border: "1px solid rgba(99,102,241,0.22)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2 p-4 pt-0">
          <Button
            size="sm"
            className="flex-1 text-xs font-medium h-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#cbd5e1",
            }}
            disabled={githubLink === "disabled"}
            onClick={() => window.open(githubLink, "_blank")}
          >
            <Github className="mr-1.5 h-3.5 w-3.5" />
            GitHub
          </Button>
          <Button
            size="sm"
            className="flex-1 text-xs font-medium h-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#cbd5e1",
            }}
            disabled={deployLink === "disabled"}
            onClick={() => window.open(deployLink, "_blank")}
          >
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            Deploy
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
