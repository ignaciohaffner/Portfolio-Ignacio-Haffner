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
    <div
      className="h-full flex flex-col transition-colors duration-200"
      style={{ border: "1px solid #1e293b", background: "#0d1117" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,217,146,0.3)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden h-40 shrink-0"
        style={{ border: "none", borderBottom: "1px solid #1e293b" }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover object-top"
          style={{ filter: "grayscale(30%) opacity(0.85)" }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        <h3
          className="font-semibold text-sm"
          style={{ color: "#00d992", fontFamily: '"JetBrains Mono", monospace' }}
        >
          {title}
        </h3>
        <p
          className="text-xs leading-relaxed flex-1"
          style={{ color: "#8b949e", fontFamily: '"JetBrains Mono", monospace' }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5"
              style={{
                color: "#00d992",
                border: "1px solid rgba(0,217,146,0.2)",
                background: "transparent",
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-2 p-4 pt-0">
        <button
          className="flex-1 flex items-center justify-center gap-1.5 text-xs py-1.5 transition-colors duration-150"
          style={{
            background: "transparent",
            border: "1px solid #1e293b",
            color: "#8b949e",
            cursor: githubLink === "disabled" ? "not-allowed" : "pointer",
            opacity: githubLink === "disabled" ? 0.4 : 1,
            fontFamily: '"JetBrains Mono", monospace',
          }}
          disabled={githubLink === "disabled"}
          onClick={() => githubLink !== "disabled" && window.open(githubLink, "_blank")}
          onMouseEnter={(e) => {
            if (githubLink !== "disabled") {
              e.currentTarget.style.borderColor = "#00d992";
              e.currentTarget.style.color = "#00d992";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#1e293b";
            e.currentTarget.style.color = "#8b949e";
          }}
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </button>
        <button
          className="flex-1 flex items-center justify-center gap-1.5 text-xs py-1.5 transition-colors duration-150"
          style={{
            background: "transparent",
            border: "1px solid #1e293b",
            color: "#8b949e",
            cursor: deployLink === "disabled" ? "not-allowed" : "pointer",
            opacity: deployLink === "disabled" ? 0.4 : 1,
            fontFamily: '"JetBrains Mono", monospace',
          }}
          disabled={deployLink === "disabled"}
          onClick={() => deployLink !== "disabled" && window.open(deployLink, "_blank")}
          onMouseEnter={(e) => {
            if (deployLink !== "disabled") {
              e.currentTarget.style.borderColor = "#00d992";
              e.currentTarget.style.color = "#00d992";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#1e293b";
            e.currentTarget.style.color = "#8b949e";
          }}
        >
          <Globe className="h-3.5 w-3.5" />
          Deploy
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
