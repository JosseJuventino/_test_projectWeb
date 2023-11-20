import Tag from "./Tag";
import { useNavigate } from "react-router-dom";
function Card({ project }) {
  const navigate = useNavigate();
  return (
    <>
      {project ? (
        <div
          onClick={() => navigate("/inscription-project")}
          className="card flex cursor-pointer relative flex-col mt-5 justify-center items-start bg-white rounded-lg overflow-hidden"
        >
          <figure className="flex flex-row justify-center items-center w-full h-full object-cover">
            <img
              className="object-cover w-full h-full"
              src={project.image}
              alt="Imagen de proyecto"
            />
          </figure>
          <div className="flex flex-row items-end mt-4">
            <div className="type text-sm bg-red-500 text-white rounded-full right-4 px-8 py-1 absolute">
              <p>{project.type}</p>
            </div>
          </div>
          <div className="absolute top-0 m-2">
            <button className="bg-white p-2 px-4  rounded-full box-border">
              <p className="text-xl">
                <i className="fa-solid fa-bookmark"></i>
              </p>
            </button>
          </div>
          <div className="Information p-5">
            <div className="tags flex flex-row gap-1">

              {
                project.tags.map((tag, index) => (
                  <Tag key={index} name={tag.name} background={tag.background} />
                ))
              }
            </div>
            <h3 className="text-xl lg:text-2xl my-4">{project.title}</h3>
            <p>Modalidad: presencial</p>
            <p className="text-gray-400 mt-2">
              <i className="fa-solid fa-location-dot"></i> {project.location}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Card;
