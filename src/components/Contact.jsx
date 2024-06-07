import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mx-5 my-32" id="contact">
      <h3 className="text-5xl md:text-6xl font-bold text-center mt-32 mb-5">
        CONTACT ME
      </h3>
      <div className="flex flex-row justify-center gap-x-5 mt-5">
        <motion.div whileHover={{ scale: 1.5 }}>
          <a href="https://www.linkedin.com/in/ignaciohaffner/">
            {" "}
            <FaLinkedin className="text-7xl"></FaLinkedin>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <a href="https://github.com/ignaciohaffner/">
            <FaGithub className="text-7xl"></FaGithub>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <a href="mailto:ignaciohaffner@gmail.com">
            <IoMail className="text-7xl"></IoMail>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
