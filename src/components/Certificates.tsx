import type React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../utils/translations";

interface Certificate {
  id: number;
  name: string;
  company: string;
  date: string;
  url: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "React and Firebase",
    company: "Udemy",
    date: "2021-10-26",
    url: "https://www.udemy.com/certificate/UC-46cd1051-3bdc-46e2-a158-66c4a1e88959/",
  },
  {
    id: 2,
    name: "EF SET English Certificate 81/100 (C2 Proficient)",
    company: "EF SET",
    date: "2023-10-31",
    url: "https://cert.efset.org/hjKYwT",
  },
  {
    id: 3,
    name: "Master React",
    company: "LinkedIn Learning",
    date: "2024-03-05",
    url: "https://www.linkedin.com/learning/certificates/dc770262e47e5773b1d4065be6cd001280006a2da566784c3cf3cf5b6b40d213",
  },
  {
    id: 4,
    name: "Node.js: Microservices",
    company: "LinkedIn Learning",
    date: "2025-02-02",
    url: "https://www.linkedin.com/learning/certificates/0ca110b58307d71a761c99643d667aca38169a148fde0d2d7672e6fc651ba1bd",
  },
  {
    id: 5,
    name: "Node.js Design Patterns",
    company: "LinkedIn Learning",
    date: "2025-02-02",
    url: "https://www.linkedin.com/learning/certificates/860db6eac2dbbb7ecf0e77f2a87abd46d8094e0f44a9cb18d87d849283d70520",
  },
];

const companyStyles: Record<string, { color: string; bg: string; dot: string }> = {
  Udemy: { color: "#fb923c", bg: "rgba(249,115,22,0.1)", dot: "#f97316" },
  "EF SET": { color: "#60a5fa", bg: "rgba(59,130,246,0.1)", dot: "#3b82f6" },
  "LinkedIn Learning": { color: "#38bdf8", bg: "rgba(14,165,233,0.1)", dot: "#0ea5e9" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Certificates: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="space-y-8"
      >
        {/* Section header */}
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#60a5fa" }}>
            — {t.certificates.title}
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(15,23,42,0.7)",
            border: "1px solid rgba(99,102,241,0.14)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="divide-y"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            {certificates.map((cert) => {
              const style = companyStyles[cert.company] ?? {
                color: "#94a3b8",
                bg: "rgba(148,163,184,0.1)",
                dot: "#94a3b8",
              };
              return (
                <motion.a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={rowVariants}
                  className="flex items-center justify-between gap-4 px-5 py-4 group transition-colors duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                  whileHover={{ backgroundColor: "rgba(99,102,241,0.05)" }}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Company pill */}
                    <span
                      className="shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
                      style={{ background: style.bg, color: style.color, border: `1px solid ${style.color}22` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: style.dot }} />
                      {cert.company}
                    </span>
                    <span className="text-sm font-medium truncate" style={{ color: "#e2e8f0" }}>
                      {cert.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs hidden sm:block" style={{ color: "#475569" }}>
                      {new Date(cert.date).toLocaleDateString(
                        language === "es" ? "es-ES" : "en-US",
                        { year: "numeric", month: "short" }
                      )}
                    </span>
                    <ExternalLink
                      className="w-3.5 h-3.5 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "#60a5fa" }}
                    />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;
