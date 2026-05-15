import { motion } from "framer-motion";
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
import { Code2, Database, Globe, Zap, Bot } from "lucide-react";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const techStack = [
  { Icon: SiTypescript, color: "#3b82f6", bg: "rgba(59,130,246,0.12)", label: "TypeScript" },
  { Icon: FaHtml5, color: "#f97316", bg: "rgba(249,115,22,0.12)", label: "HTML5" },
  { Icon: FaCss3Alt, color: "#3b82f6", bg: "rgba(59,130,246,0.12)", label: "CSS3" },
  { Icon: FaReact, color: "#60a5fa", bg: "rgba(96,165,250,0.12)", label: "React" },
  { Icon: FaNode, color: "#22c55e", bg: "rgba(34,197,94,0.12)", label: "Node.js" },
  { Icon: SiExpress, color: "#fbbf24", bg: "rgba(251,191,36,0.12)", label: "Express" },
  { Icon: SiGraphql, color: "#ec4899", bg: "rgba(236,72,153,0.12)", label: "GraphQL" },
  { Icon: BiLogoMongodb, color: "#16a34a", bg: "rgba(22,163,74,0.12)", label: "MongoDB" },
  { Icon: SiMysql, color: "#60a5fa", bg: "rgba(96,165,250,0.12)", label: "MySQL" },
  { Icon: SiTailwindcss, color: "#22d3ee", bg: "rgba(34,211,238,0.12)", label: "Tailwind" },
  { Icon: BiLogoPostgresql, color: "#3b82f6", bg: "rgba(59,130,246,0.12)", label: "PostgreSQL" },
  { Icon: TbBrandCSharp, color: "#a855f7", bg: "rgba(168,85,247,0.12)", label: "C#" },
  { Icon: SiDotnet, color: "#a855f7", bg: "rgba(168,85,247,0.12)", label: ".NET" },
];

const skills = [
  {
    Icon: Code2,
    titleKey: "fullStackTitle",
    bodyKey: "fullStackBody",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.35)",
  },
  {
    Icon: Database,
    titleKey: "databasesTitle",
    bodyKey: "databasesBody",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.35)",
  },
  {
    Icon: Globe,
    titleKey: "webDevelopmentTitle",
    bodyKey: "webDevelopmentBody",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.1)",
    border: "rgba(14,165,233,0.35)",
  },
  {
    Icon: Zap,
    titleKey: "continuousLearningTitle",
    bodyKey: "continuousLearningBody",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.35)",
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="aboutme">
      <div className="space-y-14">

        {/* Bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInLeft}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#60a5fa" }}>
            — {t.about.title}
          </p>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8" }}>
            {t.about.description}
          </p>
        </motion.div>

        {/* Skills cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map(({ Icon, titleKey, bodyKey, color, bg, border }, idx) => (
            <motion.div
              key={titleKey}
              variants={idx % 2 === 0 ? slideInLeft : slideInRight}
              className="rounded-xl p-5 transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background: "rgba(15,23,42,0.65)",
                borderLeft: `3px solid ${border}`,
                border: `1px solid rgba(255,255,255,0.07)`,
                borderLeftColor: border,
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex gap-3 items-start">
                <div
                  className="mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: bg }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-snug" style={{ color: "#f1f5f9" }}>
                    {t.about[titleKey].replace(":", "")}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                    {t.about[bodyKey]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#475569" }}>
            {t.about.techStack}
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex flex-wrap gap-2"
          >
            {techStack.map(({ Icon, color, bg, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                title={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center cursor-default"
                style={{
                  background: bg,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Icon className="text-xl" style={{ color }} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* AI callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInRight}
          className="rounded-xl px-5 py-4 flex gap-4 items-start"
          style={{
            background: "rgba(59,130,246,0.04)",
            border: "1px solid rgba(59,130,246,0.18)",
            boxShadow: "0 0 30px rgba(59,130,246,0.04)",
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(59,130,246,0.14)" }}
          >
            <Bot className="w-4 h-4" style={{ color: "#60a5fa" }} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold" style={{ color: "#f1f5f9" }}>
              {t.about.aiCalloutHeading}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              {t.about.aiCalloutText}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Spec-Driven Development", "Claude Code", "Agent Orchestration"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    color: "#93c5fd",
                    border: "1px solid rgba(59,130,246,0.22)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMe;
