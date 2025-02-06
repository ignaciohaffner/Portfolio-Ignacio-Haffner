import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
} from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const techStack = [
  { Icon: SiTypescript, color: "text-blue-600" },
  { Icon: FaHtml5, color: "text-orange-600" },
  { Icon: FaCss3Alt, color: "text-blue-500" },
  { Icon: FaReact, color: "text-blue-400" },
  { Icon: FaNode, color: "text-green-600" },
  { Icon: SiExpress, color: "text-yellow-300" },
  { Icon: BiLogoMongodb, color: "text-green-800" },
  { Icon: SiMysql, color: "text-blue-900" },
  { Icon: SiTailwindcss, color: "text-cyan-500" },
  { Icon: BiLogoPostgresql, color: "text-blue-600" },
  { Icon: TbBrandCSharp, color: "text-purple-800" },
  { Icon: SiDotnet, color: "text-purple-800" },
];

const AboutMe = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="aboutme">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-6">
              {t.about.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src="https://i.imgur.com/QsZjEOG.jpeg"
                alt="Ignacio Haffner"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p>{t.about.description}</p>
              <h3 className="text-xl font-semibold">🚀{t.about.techStack}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">
                    {t.about.fullStackTitle}
                  </span>
                  {" " + t.about.fullStackBody}
                </li>
                <li>
                  <span className="font-semibold">
                    {t.about.databasesTitle}
                  </span>{" "}
                  {t.about.databasesBody}
                </li>
              </ul>
              <h3 className="text-xl font-semibold">🔧 {t.about.skills}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">
                    {t.about.webDevelopmentTitle}
                  </span>{" "}
                  {t.about.webDevelopmentBody}
                </li>
                <li>
                  <span className="font-semibold">
                    {t.about.continuousLearningTitle}
                  </span>{" "}
                  {t.about.continuousLearningBody}
                </li>
                <li>
                  <span className="font-semibold">
                    {t.about.problemSolvingTitle}
                  </span>{" "}
                  {t.about.problemSolvingBody}
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(({ Icon, color }, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Badge variant="outline" className={`text-5xl ${color}`}>
                        <Icon />
                      </Badge>
                    </motion.div>
                  ))}
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
