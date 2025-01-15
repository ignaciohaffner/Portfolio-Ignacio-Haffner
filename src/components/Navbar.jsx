import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "aboutme", label: "About me" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-end md:hidden h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex justify-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:bg-white hover:text-black transition-colors"
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="block px-5 py-4 cursor-pointer text-white"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {isMenuOpen && (
          <ul className="md:hidden py-2">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="hover:bg-white hover:text-black transition-colors"
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full px-5 py-3 text-left text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
