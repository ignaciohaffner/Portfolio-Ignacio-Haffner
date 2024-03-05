const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center mx-auto">
        <ul className="flex justify-center ">
          <li className="p-5 hover:bg-white hover:text-black">
            <a href="#welcome">Home</a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">
            <a href="#aboutme">About me</a>
          </li>
          <li className="p-5 hover:bg-white hover:text-black">Projects</li>
          <li className="p-5 hover:bg-white hover:text-black">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
