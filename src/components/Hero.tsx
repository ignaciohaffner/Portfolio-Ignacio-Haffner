import { useState, useEffect } from "react";
import type React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

const ROLES: Record<string, string[]> = {
  en: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
  es: ["Desarrollador Full Stack", "Desarrollador Backend", "Desarrollador Frontend"],
};

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const roles = ROLES[language];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setRoleIndex(0);
    setDisplayedRole("");
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
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
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, roles]);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{
        background: "#0a0a0c",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div className="w-full max-w-3xl" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        {/* Terminal window */}
        <div style={{ border: "1px solid #1e293b" }}>
          {/* Header bar */}
          <div
            className="flex items-center px-4 py-2.5 gap-3"
            style={{ background: "#161b22", borderBottom: "1px solid #1e293b" }}
          >
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3" style={{ background: "#ff5f57", borderRadius: "50%" }} />
              <div className="w-3 h-3" style={{ background: "#febc2e", borderRadius: "50%" }} />
              <div className="w-3 h-3" style={{ background: "#28c840", borderRadius: "50%" }} />
            </div>
            <span className="flex-1 text-center text-xs" style={{ color: "#8b949e" }}>
              ~/portfolio — bash — 80×24
            </span>
            <div className="w-14 shrink-0" />
          </div>

          {/* Body */}
          <div className="p-6 sm:p-10 text-sm leading-relaxed">
            {/* ASCII art banner */}
            <pre
              className="mb-5 leading-none text-xs sm:text-sm select-none"
              style={{ color: "#00d992", fontFamily: '"JetBrains Mono", monospace' }}
            >{` ___   _  _
|_ _| | || |
 | |  | __ |
|___| |_||_|`}</pre>

            {/* whoami */}
            <div className="mb-1">
              <span style={{ color: "#00d992" }}>$ whoami</span>
            </div>
            <div className="mb-5">
              <span style={{ color: "#e2e8f0" }}>&gt; {t.hero.title}</span>
            </div>

            {/* Typewriter role */}
            <div className="flex items-center gap-0.5 mb-5" style={{ minHeight: "1.5rem" }}>
              <span style={{ color: "#00d992" }}>$&nbsp;</span>
              <span style={{ color: "#e2e8f0" }}>{displayedRole}</span>
              <span className="cursor-blink" style={{ color: "#00d992" }}>█</span>
            </div>

            {/* Tech stack */}
            <div className="mb-1">
              <span style={{ color: "#00d992" }}>$ tech-stack --list</span>
            </div>
            <div className="mb-1 pl-2" style={{ color: "#8b949e" }}>
              &gt; TypeScript · React · Node.js
            </div>
            <div className="mb-1 pl-2" style={{ color: "#8b949e" }}>
              &gt; GraphQL · PostgreSQL · MongoDB
            </div>
            <div className="mb-5 pl-2" style={{ color: "#8b949e" }}>
              &gt; C# · .NET · Express
            </div>

            {/* CTA link */}
            <div className="mb-5">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  color: "#00d992",
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "inherit",
                }}
              >
                &gt; ver_proyectos.sh
              </button>
            </div>

            {/* Social links */}
            <a
              href="https://github.com/ignaciohaffner"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-1"
              style={{ color: "#8b949e", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8b949e")}
            >
              &gt; ln -s /github → ignaciohaffner
            </a>
            <a
              href="https://www.linkedin.com/in/ignaciohaffner/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-5"
              style={{ color: "#8b949e", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8b949e")}
            >
              &gt; ln -s /linkedin → ignaciohaffner
            </a>

            {/* Blinking prompt */}
            <div>
              <span style={{ color: "#8b949e" }}>$&nbsp;</span>
              <span className="cursor-blink" style={{ color: "#00d992" }}>_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
