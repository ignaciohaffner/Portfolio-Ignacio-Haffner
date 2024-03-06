import { motion } from "framer-motion";
const Main = () => {
  return (
    <div
      className=" h-screen flex flex-col justify-center items-center"
      id="welcome"
    >
      <motion.h1
        animate={{ scale: 3, x: [0, 100, 0] }}
        transition={{ duration: 0.7 }}
        className="md:text-4xl text-center text-black text-with-border text-2xl"
      >
        IGNACIO <br /> HAFFNER
      </motion.h1>
      <motion.p
        animate={{ scale: 1.8, x: [0, 150, 0] }}
        transition={{ duration: 0.7 }}
        className="md:text-xl text-left text-lg md:mt-20 mt-12"
      >
        FULL STACK DEVELOPER
      </motion.p>
    </div>
  );
};

export default Main;
