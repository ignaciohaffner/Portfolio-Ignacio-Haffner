import { useState, useEffect } from "react";
import type React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const ROLES = ["Full Stack Developer", "Backend Developer", "Frontend Developer"];

const TERMINAL_LINES: { text: string; color: string }[] = [
  { text: "$ whoami", color: "#4ade80" },
  { text: "> Ignacio Haffner", color: "#f1f5f9" },
  { text: "", color: "transparent" },
  { text: "$ tech-stack --list", color: "#4ade80" },
  { text: "> TypeScript • React • Node.js", color: "#67e8f9" },
  { text: "> GraphQL • PostgreSQL • MongoDB", color: "#67e8f9" },
  { text: "> C# • .NET • Express", color: "#67e8f9" },
  { text: "", color: "transparent" },
  { text: "$ status", color: "#4ade80" },
  { text: "> Open to work ✓", color: "#34d399" },
];

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedRole.length < currentRole.length) {
      timeout = setTimeout(
        () => setDisplayedRole(currentRole.slice(0, displayedRole.length + 1)),
        75,
      );
    } else if (!isDeleting && displayedRole.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(
        () => setDisplayedRole(currentRole.slice(0, displayedRole.length - 1)),
        38,
      );
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const delay = visibleLines === 0 ? 900 : 260;
    const timeout = setTimeout(() => setVisibleLines((prev) => prev + 1), delay);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Radial glow — right side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 68%)",
          filter: "blur(48px)",
        }}
      />

      {/* Split layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-14 lg:gap-20 py-24 lg:py-0">

        {/* LEFT */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5"
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="space-y-1">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "#64748b" }}
            >
              — portfolio
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd 0%, #818cf8 45%, #c4b5fd 100%)",
              }}
            >
              {t.hero.title}
            </h1>
          </div>

          {/* Typewriter */}
          <div className="flex items-center h-7 gap-0.5">
            <span
              className="font-mono text-base sm:text-lg tracking-wider"
              style={{ color: "#94a3b8" }}
            >
              {displayedRole}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-[2px] h-5 ml-0.5 rounded-full"
              style={{ background: "#60a5fa", verticalAlign: "middle" }}
            />
          </div>

          {/* CTA + Socials */}
          <motion.div
            className="flex flex-col sm:flex-row items-center lg:items-start gap-3 pt-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55 }}
          >
            <Button
              size="lg"
              className="font-semibold tracking-wide px-7"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.cta}
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/ignaciohaffner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/ignaciohaffner/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Terminal card */}
        <motion.div
          className="flex-1 w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
        >
          <div
            className="rounded-2xl overflow-hidden w-full"
            style={{
              background: "#0d1117",
              border: "1px solid rgba(99,102,241,0.18)",
              boxShadow:
                "0 0 0 1px rgba(99,102,241,0.04), 0 24px 64px rgba(0,0,0,0.55), 0 0 48px rgba(99,102,241,0.07)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center px-4 py-3 gap-3"
              style={{
                background: "#161b22",
                borderBottom: "1px solid rgba(99,102,241,0.1)",
              }}
            >
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <span
                className="flex-1 text-center font-mono text-xs"
                style={{ color: "#6e7681" }}
              >
                ~/portfolio
              </span>
              <div className="w-12 shrink-0" />
            </div>

            {/* Body */}
            <div className="p-6 font-mono text-sm leading-relaxed min-h-[272px]">
              {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18 }}
                  className="min-h-[1.6rem]"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
                style={{ color: "#4ade80" }}
              >
                ▋
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
