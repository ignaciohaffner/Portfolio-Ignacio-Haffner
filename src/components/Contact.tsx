import type React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import translations from "../utils/translations";
import { useLanguage } from "../contexts/LanguageContext";

const contactItems = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    command: "$ ssh linkedin@ignaciohaffner",
    handle: "/in/ignaciohaffner",
    link: "https://www.linkedin.com/in/ignaciohaffner/",
  },
  {
    Icon: Github,
    label: "GitHub",
    command: "$ ssh github@ignaciohaffner",
    handle: "/ignaciohaffner",
    link: "https://github.com/ignaciohaffner/",
  },
  {
    Icon: Mail,
    label: "Email",
    command: "$ sendmail ignaciohaffner",
    handle: "ignaciohaffner@gmail.com",
    link: "mailto:ignaciohaffner@gmail.com",
  },
];

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="container mx-auto py-20 px-4"
      id="contact"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
    >
      <div className="space-y-8">
        {/* Section header */}
        <div>
          <span className="text-sm" style={{ color: "#00d992" }}>
            $ nc -lvp 443
          </span>
        </div>

        {/* Subtitle */}
        <div>
          <span className="text-xs" style={{ color: "#475569" }}>
            # {t.contact.title}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contactItems.map(({ Icon, label, command, handle, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 text-center transition-colors duration-200"
              style={{
                border: "1px solid #1e293b",
                background: "#0d1117",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#00d992")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#1e293b")
              }
            >
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ border: "1px solid #1e293b" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#8b949e" }} />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "#e2e8f0" }}>
                  {label}
                </p>
                <p className="text-xs mb-2 truncate max-w-[160px]" style={{ color: "#475569" }}>
                  {handle}
                </p>
                <p className="text-xs" style={{ color: "#00d992" }}>
                  {command}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
