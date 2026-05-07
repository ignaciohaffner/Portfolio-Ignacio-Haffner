import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar } from "lucide-react";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTypescript, SiGraphql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const techStack = [
  { Icon: SiTypescript, color: "text-blue-600", label: "TypeScript" },
  { Icon: FaReact, color: "text-blue-400", label: "React" },
  { Icon: FaNode, color: "text-green-600", label: "Node.js" },
  { Icon: BiLogoPostgresql, color: "text-blue-600", label: "PostgreSQL" },
  { Icon: SiGraphql, color: "text-pink-600", label: "GraphQL" },
];

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-6">
              {t.experience.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{t.experience.role}</h3>
                    <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{t.experience.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge className="bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30 w-fit">
                      ● {t.experience.current}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {t.experience.duration} – {t.experience.present}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2 mb-5">
                  {t.experience.bullets.map((bullet, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed marker:text-primary">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(({ Icon, color, label }) => (
                    <motion.div
                      key={label}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Badge
                        variant="outline"
                        className={`flex items-center gap-1.5 px-3 py-1 ${color}`}
                      >
                        <Icon className="text-lg" />
                        <span className="text-xs font-medium text-foreground">
                          {label}
                        </span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Experience;
