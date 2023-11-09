import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Resume from "../components/resume/Resume";
import CardContainer from "../components/cardsInfo/CardContainer";
import useProjects from "../../services/useProjects";
import { useEffect } from "react";
function Dashboard() {
const { projects } = useProjects();

  useEffect(
    () => {
      console.log(projects);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <div className="font-primary bg-background-primary ">
        <Header isLoggedIn={true} />
        <Resume />
        <CardContainer text={"Proyectos Activos"} hasButton={false} />
        <CardContainer text={"Proyectos Finalizados"} hasButton={true} />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
