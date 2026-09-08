import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiGraphql,
} from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { Code2, Database, Globe, Zap } from "lucide-react";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const techStack = [
  { Icon: SiTypescript, color: "#8b949e", label: "TypeScript" },
  { Icon: FaHtml5, color: "#8b949e", label: "HTML5" },
  { Icon: FaCss3Alt, color: "#8b949e", label: "CSS3" },
  { Icon: FaReact, color: "#8b949e", label: "React" },
  { Icon: FaNode, color: "#8b949e", label: "Node.js" },
  { Icon: SiExpress, color: "#8b949e", label: "Express" },
  { Icon: SiGraphql, color: "#8b949e", label: "GraphQL" },
  { Icon: BiLogoMongodb, color: "#8b949e", label: "MongoDB" },
  { Icon: SiMysql, color: "#8b949e", label: "MySQL" },
  { Icon: SiTailwindcss, color: "#8b949e", label: "Tailwind" },
  { Icon: BiLogoPostgresql, color: "#8b949e", label: "PostgreSQL" },
  { Icon: TbBrandCSharp, color: "#8b949e", label: "C#" },
  { Icon: SiDotnet, color: "#8b949e", label: ".NET" },
];

const skills = [
  { Icon: Code2, titleKey: "fullStackTitle", bodyKey: "fullStackBody" },
  { Icon: Database, titleKey: "databasesTitle", bodyKey: "databasesBody" },
  { Icon: Globe, titleKey: "webDevelopmentTitle", bodyKey: "webDevelopmentBody" },
  { Icon: Zap, titleKey: "continuousLearningTitle", bodyKey: "continuousLearningBody" },
] as const;

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="container mx-auto py-20 px-4"
      id="aboutme"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
    >
      <div className="space-y-12">
        {/* Section header */}
        <div>
          <span className="text-sm" style={{ color: "#00d992" }}>
            $ cat aboutme.md
          </span>
        </div>

        {/* Bio */}
        <div className="space-y-2 pl-2 border-l" style={{ borderColor: "#1e293b" }}>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#e2e8f0" }}>
            {t.about.description}
          </p>
        </div>

        {/* Skills cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skills.map(({ Icon, titleKey, bodyKey }) => (
            <div
              key={titleKey}
              className="p-4 transition-colors duration-200"
              style={{ border: "1px solid #1e293b", background: "#0d1117" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(0,217,146,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#1e293b")
              }
            >
              <div className="flex gap-2 items-start mb-2">
                <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#00d992" }} />
                <p className="text-xs font-semibold" style={{ color: "#00d992" }}>
                  &gt; {t.about[titleKey].replace(":", "")}
                </p>
              </div>
              <p className="text-xs leading-relaxed pl-6" style={{ color: "#8b949e" }}>
                {t.about[bodyKey]}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="space-y-3">
          <span className="text-xs" style={{ color: "#475569" }}>
            # {t.about.techStack}
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map(({ Icon, label }) => (
              <div
                key={label}
                title={label}
                className="w-9 h-9 flex items-center justify-center transition-colors duration-200 cursor-default"
                style={{ background: "#1e293b", border: "1px solid #1e293b" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00d992";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) (icon as HTMLElement).style.color = "#00d992";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e293b";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) (icon as HTMLElement).style.color = "#8b949e";
                }}
              >
                <Icon className="text-lg" style={{ color: "#8b949e", transition: "color 0.2s" }} />
              </div>
            ))}
          </div>
        </div>

        {/* AI callout */}
        <div
          className="p-4"
          style={{ border: "1px solid #1e293b", background: "#0d1117" }}
        >
          <p className="text-xs mb-2" style={{ color: "#00d992" }}>
            {"// NOTE: AI-augmented development"}
          </p>
          <p className="text-xs font-semibold mb-1" style={{ color: "#e2e8f0" }}>
            {t.about.aiCalloutHeading}
          </p>
          <p className="text-xs leading-relaxed mb-3" style={{ color: "#8b949e" }}>
            {t.about.aiCalloutText}
          </p>
          <div className="flex flex-wrap gap-2">
            {["Spec-Driven Development", "Claude Code", "Agent Orchestration"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5"
                style={{
                  background: "transparent",
                  color: "#00d992",
                  border: "1px solid rgba(0,217,146,0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
