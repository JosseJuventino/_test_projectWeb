import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Resume from "../components/resume/Resume";
import CardContainer from "../components/cardsInfo/CardContainer";
import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import { useEffect, useState } from "react";

function Dashboard() {
  const user = CheckIfUserLogin();
  const [projectActive, setProjectActive] = useState([]);
  const [projectFinished, setProjectFinished] = useState([]);

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
      {user ? (
        <div className="font-primary bg-background-primary">
          <Header isLoggedIn={true} />
          <Resume />
          {projectActive.length > 0 && (
            <div>
              <CardContainer
                text="Proyectos activos"
                hasButton={false}
                type="active"
                projectsActives={projectActive}
                needMorePage={projectFinished.length > 4 ? true : false}
              />

              <CardContainer
                text="Proyectos finalizados"
                hasButton={true}
                type="active"
                projectsActives={projectFinished}
                needMorePage={projectFinished.length > 4 ? true : false}
              />
            </div>
          )}
          <Footer />
        </div>
      ) : (
        <p>No deberías estar aquí</p>
      )}
    </>
  );
}

export default Dashboard;
