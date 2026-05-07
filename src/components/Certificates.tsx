import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
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

const companyColor: Record<string, string> = {
  Udemy: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "EF SET": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "LinkedIn Learning": "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
};

const Certificates: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-6">
              {t.certificates.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border">
              {certificates.map((cert, i) => (
                <motion.a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center justify-between gap-4 py-4 group hover:bg-muted/40 px-3 -mx-3 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <Badge
                      variant="outline"
                      className={`shrink-0 text-xs font-medium ${companyColor[cert.company] ?? ""}`}
                    >
                      {cert.company}
                    </Badge>
                    <span className="text-sm font-medium truncate">{cert.name}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 text-muted-foreground">
                    <span className="text-xs hidden sm:block">
                      {new Date(cert.date).toLocaleDateString(
                        language === "es" ? "es-ES" : "en-US",
                        { year: "numeric", month: "short" }
                      )}
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Certificates;
