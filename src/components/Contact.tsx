import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Linkedin, Github, Mail, FileText } from "lucide-react";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const contactItems = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ignaciohaffner/",
  },
  { icon: Github, label: "GitHub", link: "https://github.com/ignaciohaffner/" },
  { icon: Mail, label: "Email", link: "mailto:ignaciohaffner@gmail.com" },
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
        <Card className="bg-background/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-6">
              {t.contact.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Contact;
