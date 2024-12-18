/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="md:w-1/4 border-2 p-2 flex flex-col justify-between ">
      <div>
        <img src={props.image} alt="" className="w-full h-72 object-cover" />
        <p className="font-bold text-xl mt-2">{props.tittle}</p>
        <p>{props.description}</p>
      </div>

      <div className="flex flex-col">
        <Link
          className={`w-full border-2 text-center my-3 ${
            props.githublink === "disabled"
              ? "pointer-events-none opacity-50"
              : "hover:text-black hover:bg-white"
          }`}
          to={props.githublink === "disabled" ? "#" : props.githublink}
          target={props.githublink === "disabled" ? "_self" : "_blank"}
        >
          Github
        </Link>
        <Link
          className={`w-full border-2 text-center ${
            props.deploylink === "disabled"
              ? "pointer-events-none opacity-50"
              : "hover:text-black hover:bg-white"
          }`}
          to={props.deploylink === "disabled" ? "#" : props.deploylink}
          target={props.deploylink === "disabled" ? "_self" : "_blank"}
        >
          Deploy
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
