/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Technologies from "./Technologies";

const ProjectCard = (props) => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3 max-w-md border-2 p-4 flex flex-col justify-between">
      <div>
        <img
          src={props.image}
          alt={props.tittle}
          className="w-full h-48 md:h-72 object-cover mb-4"
        />
        <p className="font-bold text-xl mb-2">{props.tittle}</p>
        <p className="mb-4">{props.description}</p>
        <Technologies techs={props.technologies} />
      </div>

      <div className="flex flex-col space-y-3">
        <Link
          className={`w-full border-2 text-center py-2 ${
            props.githublink === "disabled"
              ? "pointer-events-none opacity-50"
              : "hover:bg-gray-100 hover:text-black transition-colors"
          }`}
          to={props.githublink === "disabled" ? "#" : props.githublink}
          target={props.githublink === "disabled" ? "_self" : "_blank"}
        >
          Github
        </Link>
        <Link
          className={`w-full border-2 text-center py-2 ${
            props.deploylink === "disabled"
              ? "pointer-events-none opacity-50"
              : "hover:bg-gray-100 hover:text-black transition-colors"
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
