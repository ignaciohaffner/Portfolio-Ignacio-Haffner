const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-black z-10">
        <ul className="flex justify-center">
          <li className="hover:bg-white hover:text-black">
            <a className="block p-5" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li className="hover:bg-white hover:text-black">
            <a className="block p-5" onClick={() => scrollToSection("aboutme")}>
              About me
            </a>
          </li>
          <li className="hover:bg-white hover:text-black">
            <a
              className="block p-5"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </a>
          </li>
          <li className="hover:bg-white hover:text-black">
            <a className="block p-5" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
