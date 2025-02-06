import type React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Hero from "../components/Hero";
import AboutMe from "../components/Aboutme";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const MainPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Parallax translateY={[-20, 20]}>
        <Hero />
      </Parallax>
      <Parallax speed={-5}>
        <AboutMe />
      </Parallax>
      <Parallax speed={5}>
        <Projects />
      </Parallax>
      <Parallax speed={-5}>
        <Certificates />
      </Parallax>
      <Parallax speed={5}>
        <Contact />
      </Parallax>
    </motion.div>
  );
};

export default MainPage;
