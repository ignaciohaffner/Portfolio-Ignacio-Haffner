"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
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
    name: "React - The Complete Guide",
    company: "Udemy",
    date: "2023-05-15",
    url: "https://www.udemy.com/certificate/UC-1234567890/",
  },
  {
    id: 2,
    name: "Advanced CSS and Sass",
    company: "Udemy",
    date: "2023-03-20",
    url: "https://www.udemy.com/certificate/UC-0987654321/",
  },
  {
    id: 3,
    name: "Node.js Developer Course",
    company: "Coursera",
    date: "2023-01-10",
    url: "https://www.coursera.org/account/accomplishments/certificate/ABCDEF123456",
  },
];

const Certificates: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-background" id="certificates">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            {t.certificates.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {new Date(cert.date).toLocaleDateString(
                        language === "es" ? "es-ES" : "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <Button onClick={() => window.open(cert.url, "_blank")}>
                      {t.certificates.viewCertificate}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
