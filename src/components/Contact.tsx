import type React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const contactItems = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/ignaciohaffner",
    link: "https://www.linkedin.com/in/ignaciohaffner/",
    color: "#38bdf8",
    bg: "rgba(14,165,233,0.12)",
    glow: "rgba(14,165,233,0.12)",
    border: "rgba(14,165,233,0.25)",
  },
  {
    Icon: Github,
    label: "GitHub",
    handle: "/ignaciohaffner",
    link: "https://github.com/ignaciohaffner/",
    color: "#e2e8f0",
    bg: "rgba(226,232,240,0.08)",
    glow: "rgba(226,232,240,0.06)",
    border: "rgba(226,232,240,0.14)",
  },
  {
    Icon: Mail,
    label: "Email",
    handle: "ignaciohaffner@gmail.com",
    link: "mailto:ignaciohaffner@gmail.com",
    color: "#818cf8",
    bg: "rgba(99,102,241,0.12)",
    glow: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
  },
];

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="space-y-8"
      >
        {/* Section header */}
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#60a5fa" }}>
            — {t.contact.title}
          </p>
          <p className="text-sm" style={{ color: "#64748b" }}>
            {language === "es"
              ? "Abierto a nuevas oportunidades y proyectos interesantes."
              : "Open to new opportunities and interesting projects."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contactItems.map(({ Icon, label, handle, link, color, bg, glow, border }, i) => (
            <motion.a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "rgba(15,23,42,0.7)",
                border: `1px solid ${border}`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3), 0 0 0 0 ${glow}`,
              }}
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${glow}, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              {/* Text */}
              <div className="text-center relative z-10">
                <p className="font-semibold text-sm" style={{ color: "#f1f5f9" }}>
                  {label}
                </p>
                <p className="text-xs mt-0.5 truncate max-w-[140px]" style={{ color: "#475569" }}>
                  {handle}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                className="absolute top-3 right-3 w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
