import { Building2, Calendar } from "lucide-react";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTypescript, SiGraphql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const techStack = [
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: FaReact, label: "React" },
  { Icon: FaNode, label: "Node.js" },
  { Icon: BiLogoPostgresql, label: "PostgreSQL" },
  { Icon: SiGraphql, label: "GraphQL" },
];

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="container mx-auto py-20 px-4"
      id="experience"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
    >
      <div className="space-y-8">
        {/* Section header */}
        <div>
          <span className="text-sm" style={{ color: "#00d992" }}>
            $ cat experience.log
          </span>
        </div>

        {/* Timeline */}
        <div className="relative pl-6" style={{ borderLeft: "1px solid #1e293b" }}>
          {/* Static dot */}
          <div
            className="absolute -left-[5px] top-1.5 w-2.5 h-2.5"
            style={{ background: "#00d992", borderRadius: "50%" }}
          />

          {/* Card */}
          <div
            className="p-5"
            style={{ border: "1px solid #1e293b", background: "#0d1117" }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base font-semibold" style={{ color: "#00d992" }}>
                  {t.experience.role}
                </h3>
                <div
                  className="flex items-center gap-1.5 mt-1"
                  style={{ color: "#8b949e" }}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span className="text-xs">{t.experience.company}</span>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <span
                  className="text-xs px-2 py-0.5 w-fit"
                  style={{
                    color: "#00d992",
                    border: "1px solid rgba(0,217,146,0.25)",
                    background: "transparent",
                  }}
                >
                  ● {t.experience.current}
                </span>
                <div className="flex items-center gap-1 text-xs" style={{ color: "#8b949e" }}>
                  <Calendar className="w-3 h-3" />
                  <span>
                    {t.experience.duration} – {t.experience.present}
                  </span>
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 mb-4">
              {t.experience.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="shrink-0 text-xs" style={{ color: "#00d992" }}>
                    &gt;
                  </span>
                  <span className="text-xs leading-relaxed" style={{ color: "#8b949e" }}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 px-2.5 py-0.5 text-xs"
                  style={{
                    background: "#1e293b",
                    border: "1px solid #1e293b",
                    color: "#8b949e",
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  <Icon className="text-sm shrink-0" style={{ color: "#8b949e" }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
