import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardContainer from "../components/cardsInfo/CardContainer";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

function ProjectsUser() {
  const user = CheckIfUserLogin();
  const [projectActive, setProjectActive] = useState([]);
  const [projectFinished, setProjectFinished] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      let projectsActivosUid = user.proyectos.activos;
      let projectsFinalizadosUid = user.proyectos.finalizados;
      let proyectos = localStorage.getItem("projects");
      proyectos = JSON.parse(proyectos);

      let projectsActiveFiltered = proyectos.filter((project) => {
        return projectsActivosUid.includes(project.uid);
      });

      let projectsFinishedFiltered = proyectos.filter((project) => {
        return projectsFinalizadosUid.includes(project.uid);
      });

      setProjectFinished(projectsFinishedFiltered);
      setProjectActive(projectsActiveFiltered);
    }
  }, [user]);

  return (
    <>
      <Header />
      {location.pathname === "/dashboard/projects-actives" && (
        <div>
          <h2 className="text-center text-3xl mt-2">Proyectos Activos</h2>

          <div>
            {projectActive.length > 0 ? (
              <CardContainer
                text=""
                hasButton={false}
                type="active"
                projectsActives={projectActive}
                needMorePage={false}
              />
            ) : (
              <h2>Al parecer no tienes proyectos para mostrar</h2>
            )}
          </div>
        </div>
      )}
      {location.pathname === "/dashboard/projects-finished" && (
        // Renderizar proyectos finalizados aquí
        <div>
          <h2 className="text-center text-3xl mt-2">Proyectos Finalizados</h2>
          <div>
            {projectFinished.length > 0 ? (
              <CardContainer
                text=""
                hasButton={false}
                type="active"
                projectsActives={projectFinished}
                needMorePage={false}
              />
            ) : (
              <h2>Al parecer no tienes proyectos para mostrar</h2>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ProjectsUser;
