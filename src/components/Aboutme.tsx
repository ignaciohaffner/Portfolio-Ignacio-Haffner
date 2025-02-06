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
              About Me
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
              <p>
                I'm an advanced student pursuing a degree in Systems
                Engineering. I specialize in full-stack development, focusing on
                pragmatic solutions to real-world challenges.
              </p>
              <h3 className="text-xl font-semibold">🚀 Tech Stack:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Full Stack:</span> Proficient
                  in crafting dynamic front-end experiences with React and
                  ensuring robust back-end development using Node.js.
                </li>
                <li>
                  <span className="font-semibold">Databases:</span> Well-versed
                  in both SQL and NoSQL databases, ensuring seamless data
                  management and retrieval.
                </li>
              </ul>
              <h3 className="text-xl font-semibold">🔧 Skills:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Web Development:</span> Adept
                  at designing functional and user-centric interfaces that bring
                  ideas to life.
                </li>
                <li>
                  <span className="font-semibold">Continuous Learner:</span>{" "}
                  Always eager to explore emerging technologies and adapt to the
                  evolving software development landscape.
                </li>
                <li>
                  <span className="font-semibold">Problem Solver:</span>{" "}
                  Equipped with analytical thinking and problem-solving skills
                  to tackle complex issues.
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
                      <Badge variant="outline" className={`text-2xl ${color}`}>
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
