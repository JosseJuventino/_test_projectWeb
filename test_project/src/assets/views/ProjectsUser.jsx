import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardContainer from "../components/cardsInfo/CardContainer";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
import { useNavigate } from "react-router-dom";

function ProjectsUser() {
  const user = CheckIfUserLogin();
  const navigate = useNavigate();
  const [projectActive, setProjectActive] = useState([]);
  const [projectFinished, setProjectFinished] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      const uidProjectsActivos = user.proyectos.activos.map(
        (project) => project.idProject
      );
      const uidProjectsFinalizados = user.proyectos.finalizados.map(
        (project) => project.idProject
      );

      const proyectos = JSON.parse(localStorage.getItem("projects")) || [];

      /** Filtrando los proyectos activos */
      const projectsActiveFiltered = proyectos.filter((project) =>
        uidProjectsActivos.includes(project.uid)
      );
      /** Filtrando los proyectos finaizados */
      const projectsFinishedFiltered = proyectos.filter((project) =>
        uidProjectsFinalizados.includes(project.uid)
      );

      setProjectFinished(projectsFinishedFiltered);
      setProjectActive(projectsActiveFiltered);
    }
  }, [user]);

  return (
    <>
      <Header />
      <div className="mt-20 ml-5" onClick={() => navigate("/dashboard")}>
        <ButtonWithIcon text={"Volver"} icon={"fa-solid fa-arrow-left"} />
      </div>
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
      {location.pathname === "/dashboard/projects-finished" /**Obteiene en que enlace estamos. */ && (
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
