const Technologies = ({ techs }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-5">
      {techs.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-900 text-white px-3 py-1 border-white border-2 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default Technologies;
