import type React from "react";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

const sectionIds = ["home", "aboutme", "experience", "projects", "certificates", "contact"];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { id: "aboutme", label: t.nav.about, key: "1" },
    { id: "experience", label: t.nav.experience, key: "2" },
    { id: "projects", label: t.nav.projects, key: "3" },
    { id: "certificates", label: t.nav.certificates, key: "4" },
    { id: "contact", label: t.nav.contact, key: "5" },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        background: "#0a0a0c",
        borderBottom: "1px solid #1e293b",
        fontFamily: '"JetBrains Mono", monospace',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-base font-bold"
            style={{
              color: "#00d992",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: '"JetBrains Mono", monospace',
              padding: 0,
            }}
          >
            IH<span className="cursor-blink">█</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-1.5 text-xs transition-colors duration-150"
                  style={{
                    color: isActive ? "#00d992" : "#8b949e",
                    background: "none",
                    border: "none",
                    borderBottom: isActive ? "2px solid #00d992" : "2px solid transparent",
                    cursor: "pointer",
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  <span style={{ color: "#475569" }}>[{item.key}]</span>{" "}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="text-xs px-2 py-1 transition-colors duration-150"
              style={{
                color: "#8b949e",
                background: "none",
                border: "1px solid #1e293b",
                cursor: "pointer",
                fontFamily: '"JetBrains Mono", monospace',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00d992";
                e.currentTarget.style.borderColor = "#00d992";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8b949e";
                e.currentTarget.style.borderColor = "#1e293b";
              }}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                style={{ color: "#8b949e" }}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 border-l"
              style={{
                background: "#0a0a0c",
                borderColor: "#1e293b",
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              <div className="flex flex-col gap-0.5 mt-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-4 py-2.5 text-sm transition-colors duration-150"
                      style={{
                        color: isActive ? "#00d992" : "#8b949e",
                        background: "none",
                        border: "none",
                        borderLeft: isActive ? "2px solid #00d992" : "2px solid transparent",
                        cursor: "pointer",
                        fontFamily: '"JetBrains Mono", monospace',
                      }}
                    >
                      <span style={{ color: "#475569" }}>[{item.key}]</span>{" "}
                      {item.label}
                    </button>
                  );
                })}
                <div className="mt-4 px-4">
                  <button
                    onClick={() => setLanguage(language === "es" ? "en" : "es")}
                    className="text-xs px-2 py-1"
                    style={{
                      color: "#8b949e",
                      background: "none",
                      border: "1px solid #1e293b",
                      cursor: "pointer",
                      fontFamily: '"JetBrains Mono", monospace',
                    }}
                  >
                    {language === "es" ? "EN" : "ES"}
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
