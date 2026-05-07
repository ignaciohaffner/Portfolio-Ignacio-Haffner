import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
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
  { Icon: SiTypescript, color: "text-blue-600" },
  { Icon: FaHtml5, color: "text-orange-500" },
  { Icon: FaCss3Alt, color: "text-blue-500" },
  { Icon: FaReact, color: "text-blue-400" },
  { Icon: FaNode, color: "text-green-600" },
  { Icon: SiExpress, color: "text-yellow-400" },
  { Icon: SiGraphql, color: "text-pink-600" },
  { Icon: BiLogoMongodb, color: "text-green-700" },
  { Icon: SiMysql, color: "text-blue-800" },
  { Icon: SiTailwindcss, color: "text-cyan-500" },
  { Icon: BiLogoPostgresql, color: "text-blue-600" },
  { Icon: TbBrandCSharp, color: "text-purple-700" },
  { Icon: SiDotnet, color: "text-purple-700" },
];

const skills = [
  { Icon: Code2, titleKey: "fullStackTitle", bodyKey: "fullStackBody", color: "text-blue-500" },
  { Icon: Database, titleKey: "databasesTitle", bodyKey: "databasesBody", color: "text-green-500" },
  { Icon: Globe, titleKey: "webDevelopmentTitle", bodyKey: "webDevelopmentBody", color: "text-sky-500" },
  { Icon: Zap, titleKey: "continuousLearningTitle", bodyKey: "continuousLearningBody", color: "text-amber-500" },
] as const;

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="aboutme">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

              {/* Left: photo */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                  <img
                    src="https://i.imgur.com/QsZjEOG.jpeg"
                    alt="Ignacio Haffner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: content */}
              <div className="lg:col-span-3 flex flex-col gap-8">

                {/* Bio */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                    {t.about.title}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.about.description}
                  </p>
                </div>

                {/* Skills — inline list, no nested cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map(({ Icon, titleKey, bodyKey, color }) => (
                    <div key={titleKey} className="flex gap-3 items-start">
                      <div className="mt-0.5 shrink-0">
                        <Icon className={`w-4 h-4 ${color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-snug">
                          {t.about[titleKey].replace(":", "")}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          {t.about[bodyKey]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t.about.techStack}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map(({ Icon, color }, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Badge variant="outline" className={`text-2xl p-2 ${color}`}>
                          <Icon />
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI callout */}
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 px-5 py-4 flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">{t.about.aiCalloutHeading}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.about.aiCalloutText}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["Spec-Driven Development", "Claude Code", "Agent Orchestration"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutMe;
