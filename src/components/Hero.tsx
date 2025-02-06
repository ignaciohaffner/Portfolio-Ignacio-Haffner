import type React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="currentColor"
            fillOpacity="0.1"
            initial={{
              d: "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,128C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            }}
            animate={{
              d: [
                "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,128C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 20,
              ease: "linear",
            }}
          />
        </svg>
      </div>
      <motion.div
        className="text-center z-10 space-y-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          {t.hero.subtitle}
        </p>
        <Button
          size="lg"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t.hero.cta}
        </Button>
      </motion.div>
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            document
              .getElementById("aboutme")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
