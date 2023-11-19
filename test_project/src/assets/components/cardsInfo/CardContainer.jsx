import Card from "./Cards/Card";
import "./CardContainer.css";


function CardContainer({
  text,
  hasButton,
  type,
  projectsActives,
  needMorePage,
}) {
  const projectsSliced = projectsActives.slice(0, 4);
  return (
    <>
      <div className="mt-7 p-10">
        <h1 className="text-3xl">{text}</h1>
        {projectsSliced.length > 0 ? (
          <div className="card-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {type == "active" ? (
              <>
                {projectsSliced.map((project, index) => (
                  <Card key={index} project={project} />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="text-center text-2xl mt-10">
            No hay proyectos activos
          </div>
        )}

        {hasButton && needMorePage ? (
          <div className="flex flex-row items-end justify-end">
            <button className="bg-white hover:bg-black-custom hover:text-white transition-colors duration-300 font-normal py-2 px-4 shadow-md mt-5 rounded-lg">
              Ver más <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CardContainer;
