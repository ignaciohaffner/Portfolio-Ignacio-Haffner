import { motion } from "framer-motion";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const Aboutme = () => {
  return (
    <div
      className="h-full m-5 gap-y-5 flex flex-col md:flex-row justify-center max-auto md:gap-x-5"
      id="aboutme"
    >
      <img
        src="https://i.imgur.com/QsZjEOG.jpeg"
        alt=""
        className="md:w-1/2 lg:w-1/2 border-2 p-2 object-center object-cover"
      />
      <div className="border-2 p-2 flex flex-col md:w-1/2 lg:w-1/4 justify-between ">
        <p className="text-center text-4xl font-bold">About me</p>
        <div className="p-2">
          <p>
            I'm an advanced student pursuing a degree in Systems Engineering. I
            specialize in full-stack development, focusing on pragmatic
            solutions to real-world challenges.
          </p>
          <p className="font-bold mt-3">🚀 Tech Stack:</p>
          <ul className="list-disc ml-4">
            <li>
              💻 <span className="font-bold">Full Stack</span>: Proficient in
              crafting dynamic front-end experiences with React and ensuring
              robust back-end development using Node.js.
            </li>
            <li>
              🛢 <span className="font-bold">Databases</span>: Well-versed in
              both SQL and NoSQL databases, ensuring seamless data management
              and retrieval.
            </li>
          </ul>
          <p className="font-bold mt-3">🔧 Skills:</p>
          <ul className="list-disc ml-4">
            <li>
              <span className="font-bold">🌐 Web Development:</span>: Adept at
              designing functional and user-centric interfaces that bring ideas
              to life.
            </li>
            <li>
              <span className="font-bold">🚀 Continuous Learner: </span>: Always
              eager to explore emerging technologies and adapt to the evolving
              software development landscape
            </li>
            <li>
              <span className="font-bold">🛠 Problem Solver:</span>:Equipped with
              analytical thinking and problem-solving skills to tackle complex
              issues.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl text-center mb-3">Stack</p>
          <div className="flex gap-x-4 flex-wrap justify-center">
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <RiJavascriptFill className="text-6xl hover:text-yellow-300" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <FaHtml5 className="text-6xl hover:text-orange-600" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <FaCss3Alt className="text-6xl hover:text-blue-500" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <FaReact className="text-6xl hover:text-blue-400" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <FaNode className="text-6xl hover:text-green-600" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <SiExpress className="text-6xl hover:text-yellow-300" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <BiLogoMongodb className="text-6xl hover:text-green-800" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <SiMysql className="text-6xl hover:text-blue-900" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} className="block">
              <SiTailwindcss className="text-6xl hover:text-cyan-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
