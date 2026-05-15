import type React from "react";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

const sectionIds = ["home", "aboutme", "experience", "projects", "certificates", "contact"];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { id: "aboutme", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "certificates", label: t.nav.certificates },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,13,22,0.88)" : "rgba(9,13,22,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(99,102,241,0.14)"
          : "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection("home")}
            className="text-xl font-black tracking-tighter bg-clip-text text-transparent transition-opacity hover:opacity-80"
            style={{
              backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #818cf8 60%, #c4b5fd 100%)",
            }}
          >
            IH
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors duration-150"
                  style={{ color: isActive ? "#f1f5f9" : "#64748b" }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-md z-[-1]"
                      style={{ background: "rgba(99,102,241,0.12)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="text-xs font-bold w-12 tracking-wider"
              style={{ color: "#64748b" }}
            >
              {language === "es" ? "EN" : "ES"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              style={{ color: "#64748b" }}
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" style={{ color: "#94a3b8" }}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 border-l"
              style={{
                background: "rgba(9,13,22,0.97)",
                borderColor: "rgba(99,102,241,0.14)",
              }}
            >
              <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                    style={{
                      color: activeSection === item.id ? "#f1f5f9" : "#64748b",
                      background: activeSection === item.id ? "rgba(99,102,241,0.12)" : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex gap-2 mt-4 px-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs font-bold tracking-wider"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#94a3b8",
                    }}
                    onClick={() => setLanguage(language === "es" ? "en" : "es")}
                  >
                    {language === "es" ? "EN" : "ES"}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#94a3b8",
                    }}
                  >
                    {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  </Button>
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
