const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center mx-auto">
        <ul className="flex justify-center ">
          <li className="p-5 hover:bg-white hover:text-black">
            <a
              onClick={() => {
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">
            <a
              onClick={() => {
                document
                  .getElementById("aboutme")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About me
            </a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">
            <a
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">
            <a
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
