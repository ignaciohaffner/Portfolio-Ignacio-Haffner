import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="h-screen">
      <h3 className="text-6xl font-bold text-center mt-32 mb-5">CONTACT ME</h3>
      <div className="flex flex-row justify-center gap-x-5">
        <FaLinkedin className="text-7xl"></FaLinkedin>
        <FaGithub></FaGithub>
        <IoMail></IoMail>
      </div>
    </div>
  );
};

export default Contact;
