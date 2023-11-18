import { useEffect, useState } from "react";
import IconAndTitle from "./IconAndTitle";
import Title_Description from "./Title_Description";

function InfoProyect({ info }) {

  const [project, setProject] = useState({});

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects.find((project) => project.uid === info);
    setProject(project);
  }, [info]);
  


  return (
    <div className="flex flex-col justify-center  lg:flex-row my-8">
      <figure className="w-full object-cover lg:w-1/2 lg:mb-4 lg:pr-5">
        <img
          className="object-cover w-full h-full rounded-sm"
          src={project.image}
          alt="imagen Proyecto"
        />
      </figure>
      <div className="px-4 lg:w-1/2">
        <div>
          <Title_Description
            titulo={project.title}
            description={project.description}
          />
        </div>
        <div>
          <IconAndTitle
            icon={"fa-solid fa-location-dot "}
            title={"Lugar:"}
            description={project.location}
          />
          <IconAndTitle
            icon={"fa-solid fa-clock"}
            title={"Servicio Social:"}
            description={project.type}
          />
          <IconAndTitle
            icon={"fa-solid fa-house-user"}
            title={"Modalidad:"}
            description={project.modality}
          />
          <IconAndTitle
            icon={"fa-solid fa-flag"}
            title={"Fecha de inicio:"}
            description={project.startDate}
          />
          <IconAndTitle
            icon={"fa-solid fa-circle-info "}
            title={"Mas información:"}
            description={project.contactEmail}
          />
        </div>
      </div>
    </div>
  );
}
export default InfoProyect;
