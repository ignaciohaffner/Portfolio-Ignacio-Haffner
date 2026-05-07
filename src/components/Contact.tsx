import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Linkedin, Github, Mail } from "lucide-react";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const contactItems = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/ignaciohaffner",
    link: "https://www.linkedin.com/in/ignaciohaffner/",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "hover:border-sky-500/40",
  },
  {
    Icon: Github,
    label: "GitHub",
    handle: "/ignaciohaffner",
    link: "https://github.com/ignaciohaffner/",
    color: "text-foreground",
    bg: "bg-foreground/10",
    border: "hover:border-foreground/40",
  },
  {
    Icon: Mail,
    label: "Email",
    handle: "ignaciohaffner@gmail.com",
    link: "mailto:ignaciohaffner@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/40",
  },
];

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-2">
              {t.contact.title}
            </CardTitle>
            <p className="text-center text-muted-foreground text-sm">
              {language === "es"
                ? "Abierto a nuevas oportunidades y proyectos interesantes."
                : "Open to new opportunities and interesting projects."}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {contactItems.map(({ Icon, label, handle, link, color, bg, border }, i) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl border border-border ${border} transition-all duration-200 hover:shadow-md group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-[140px]">
                      {handle}
                    </p>
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

export default Contact;
