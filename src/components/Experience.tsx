import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Building2, Calendar } from "lucide-react";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTypescript, SiGraphql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const techStack = [
  { Icon: SiTypescript, color: "#3b82f6", bg: "rgba(59,130,246,0.12)", label: "TypeScript" },
  { Icon: FaReact, color: "#60a5fa", bg: "rgba(96,165,250,0.12)", label: "React" },
  { Icon: FaNode, color: "#22c55e", bg: "rgba(34,197,94,0.12)", label: "Node.js" },
  { Icon: BiLogoPostgresql, color: "#60a5fa", bg: "rgba(96,165,250,0.12)", label: "PostgreSQL" },
  { Icon: SiGraphql, color: "#ec4899", bg: "rgba(236,72,153,0.12)", label: "GraphQL" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.15 } },
};

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="experience">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="space-y-8"
      >
        {/* Section header */}
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#60a5fa" }}>
            — {t.experience.title}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6" style={{ borderLeft: "1.5px solid rgba(99,102,241,0.2)" }}>

          {/* Timeline dot — animated pulse */}
          <div className="absolute -left-[7px] top-1.5">
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-3.5 h-3.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #60a5fa, #818cf8)",
                boxShadow: "0 0 10px rgba(99,102,241,0.6)",
              }}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInLeft}
            className="rounded-xl p-6 transition-all duration-300"
            style={{
              background: "rgba(15,23,42,0.7)",
              border: "1px solid rgba(99,102,241,0.14)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-xl font-bold tracking-tight" style={{ color: "#f1f5f9" }}>
                  {t.experience.role}
                </h3>
                <div className="flex items-center gap-1.5 mt-1" style={{ color: "#64748b" }}>
                  <Building2 className="w-3.5 h-3.5" />
                  <span className="text-sm font-medium">{t.experience.company}</span>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    color: "#4ade80",
                    border: "1px solid rgba(34,197,94,0.25)",
                  }}
                >
                  ● {t.experience.current}
                </span>
                <div className="flex items-center gap-1 text-xs" style={{ color: "#64748b" }}>
                  <Calendar className="w-3 h-3" />
                  <span>{t.experience.duration} – {t.experience.present}</span>
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-5">
              {t.experience.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <span
                    className="mt-2 shrink-0 w-1 h-1 rounded-full"
                    style={{ background: "#818cf8" }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map(({ Icon, color, bg, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.08, y: -1 }}
                  transition={{ type: "spring", stiffness: 320 }}
                >
                  <Badge
                    className="flex items-center gap-1.5 px-3 py-1 font-medium text-xs"
                    style={{
                      background: bg,
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#cbd5e1",
                    }}
                  >
                    <Icon className="text-base shrink-0" style={{ color }} />
                    {label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
