import type React from "react";
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

const Certificates: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="container mx-auto py-20 px-4"
      id="certificates"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
    >
      <div className="space-y-8">
        {/* Section header */}
        <div>
          <span className="text-sm" style={{ color: "#00d992" }}>
            $ cat certificates.json | jq
          </span>
        </div>

        {/* Table */}
        <div style={{ border: "1px solid #1e293b", background: "#0d1117" }}>
          {/* Table header */}
          <div
            className="hidden sm:flex items-center gap-4 px-5 py-2.5"
            style={{
              borderBottom: "1px solid #1e293b",
              background: "#161b22",
            }}
          >
            <span className="text-xs w-28 shrink-0" style={{ color: "#475569" }}>
              # issuer
            </span>
            <span className="text-xs flex-1" style={{ color: "#475569" }}>
              # name
            </span>
            <span className="text-xs w-20 shrink-0 text-right" style={{ color: "#475569" }}>
              # date
            </span>
          </div>

          {certificates.map((cert, idx) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-5 py-4 group transition-colors duration-150"
              style={{
                borderBottom:
                  idx < certificates.length - 1 ? "1px solid #1e293b" : "none",
                textDecoration: "none",
                background: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(0,217,146,0.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Company pill */}
                <span
                  className="shrink-0 text-xs px-2 py-0.5 hidden sm:block"
                  style={{
                    background: "#1e293b",
                    color: "#8b949e",
                    border: "1px solid #1e293b",
                    minWidth: "7rem",
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  {cert.company}
                </span>
                <span
                  className="text-xs truncate"
                  style={{ color: "#e2e8f0", fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {cert.name}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span
                  className="text-xs hidden sm:block"
                  style={{ color: "#475569" }}
                >
                  {new Date(cert.date).toLocaleDateString(
                    language === "es" ? "es-ES" : "en-US",
                    { year: "numeric", month: "short" },
                  )}
                </span>
                <ExternalLink
                  className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style={{ color: "#00d992" }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
