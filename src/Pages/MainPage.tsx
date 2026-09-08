import type React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/Aboutme";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const MainPage: React.FC = () => {
  return (
    <div style={{ opacity: 1, transition: "opacity 0.3s ease" }}>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default MainPage;
