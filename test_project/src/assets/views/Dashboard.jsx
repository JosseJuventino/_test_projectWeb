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
     const uidProjectsActivos = user.proyectos.activos.map(
       (project) => project.idProject
     );
     const uidProjectsFinalizados = user.proyectos.finalizados.map(
       (project) => project.idProject
     );

     const proyectos = JSON.parse(localStorage.getItem("projects")) || [];

     const projectsActiveFiltered = proyectos.filter((project) =>
       uidProjectsActivos.includes(project.uid)
     );
     const projectsFinishedFiltered = proyectos.filter((project) =>
       uidProjectsFinalizados.includes(project.uid)
     );

     setProjectFinished(projectsFinishedFiltered);
     setProjectActive(projectsActiveFiltered);
     
   }
}, [user]);

console.log(projectActive);

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
                hasButton={true}
                type="active"
                projectsActives={projectActive}
                needMorePage={projectFinished.length > 4 ? true : false}
              />

              <CardContainer
                text="Proyectos finalizados"
                hasButton={true}
                type="finished"
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
