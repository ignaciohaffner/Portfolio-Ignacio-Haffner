import type React from "react";
import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import AboutMe from "../components/Aboutme";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const BlogTeaser = lazy(() => import("../components/BlogTeaser"));

const MainPage: React.FC = () => {
  const location = useLocation();

  // When arriving from another route via a navbar section link.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const scroll = () => {
      const el = document.getElementById(target);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: "smooth" });
    };
    const id = window.setTimeout(scroll, 100);
    return () => window.clearTimeout(id);
  }, [location.state]);

  return (
    <div style={{ opacity: 1, transition: "opacity 0.3s ease" }}>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Certificates />
      <Suspense fallback={null}>
        <BlogTeaser />
      </Suspense>
      <Contact />
    </div>
  );
};

export default MainPage;
