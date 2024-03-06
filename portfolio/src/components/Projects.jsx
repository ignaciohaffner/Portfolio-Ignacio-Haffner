/* eslint-disable no-unused-vars */
import { useState } from "react";

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="md:h-screen" id="projects">
      <h3 className="text-6xl font-bold text-center mt-32 mb-5">PROJECTS</h3>
      <div className="flex flex-col md:flex-row justify-center gap-x-5">
        <div className="md:w-1/6 border-2 p-2 ">
          <img src="https://i.imgur.com/XompTW6.png" alt="" className="" />
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            officiis? Sunt optio non deserunt, ea neque aliquid quis placeat
            voluptatum expedita. Nam eius maxime iusto nostrum blanditiis, est
            ad porro?
          </p>
          <button className="w-full border-2 hover:text-black hover:bg-white my-3">
            Github
          </button>
          <button className="w-full border-2 hover:text-black hover:bg-white">
            Deploy
          </button>
        </div>
        <div className="md:w-1/6 border-2 p-2 ">
          <img src="https://i.imgur.com/XompTW6.png" alt="" className="" />
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            officiis? Sunt optio non deserunt, ea neque aliquid quis placeat
            voluptatum expedita. Nam eius maxime iusto nostrum blanditiis, est
            ad porro?
          </p>
          <button className="w-full border-2 hover:text-black hover:bg-white my-3">
            Github
          </button>
          <button className="w-full border-2 hover:text-black hover:bg-white">
            Deploy
          </button>
        </div>
        <div className="md:w-1/6 border-2 p-2 ">
          <img src="https://i.imgur.com/XompTW6.png" alt="" className="" />
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            officiis? Sunt optio non deserunt, ea neque aliquid quis placeat
            voluptatum expedita. Nam eius maxime iusto nostrum blanditiis, est
            ad porro?
          </p>
          <button className="w-full border-2 hover:text-black hover:bg-white my-3">
            Github
          </button>
          <button className="w-full border-2 hover:text-black hover:bg-white">
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
