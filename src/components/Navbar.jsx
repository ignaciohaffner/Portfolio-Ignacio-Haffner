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
      <nav className="flex justify-center mx-auto">
        <ul className="flex justify-center">
          <li className="p-5 hover:bg-white hover:text-black">
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">
            <a onClick={() => scrollToSection("aboutme")}>About me</a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
