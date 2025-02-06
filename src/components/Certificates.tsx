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
    name: "React and Firebase",
    company: "Udemy",
    date: "2023-10-26",
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
    company: "Linkedin",
    date: "2024-03-05",
    url: "https://www.linkedin.com/learning/certificates/dc770262e47e5773b1d4065be6cd001280006a2da566784c3cf3cf5b6b40d213",
  },
  {
    id: 4,
    name: "Node.js: Microservices",
    company: "Linkedin",
    date: "2025-02-02",
    url: "https://www.linkedin.com/learning/certificates/0ca110b58307d71a761c99643d667aca38169a148fde0d2d7672e6fc651ba1bd?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bwq61BgiDRYmRpRzHILWMXg%3D%3D",
  },
  {
    id: 5,
    name: "Node.js Design Patterns",
    company: "Linkedin",
    date: "2025-02-02",
    url: "https://www.linkedin.com/learning/certificates/860db6eac2dbbb7ecf0e77f2a87abd46d8094e0f44a9cb18d87d849283d70520?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bwq61BgiDRYmRpRzHILWMXg%3D%3D",
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
