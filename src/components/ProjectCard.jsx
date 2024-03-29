/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="md:w-1/4 border-2 p-2 flex flex-col justify-between ">
      <div>
        <img src={props.image} alt="" className="" />
        <p className="font-bold text-xl mt-2">{props.tittle}</p>
        <p>{props.description}</p>
      </div>

      <div className="flex flex-col">
        <Link
          className="w-full border-2 hover:text-black text-center hover:bg-white my-3"
          to={props.githublink}
          target="_blank"
        >
          Github
        </Link>
        <Link
          className="w-full border-2 hover:text-black text-center hover:bg-white"
          to={props.deploylink}
          target="_blank"
        >
          Deploy
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
