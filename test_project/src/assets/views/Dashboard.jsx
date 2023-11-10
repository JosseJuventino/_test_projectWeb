import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Resume from "../components/resume/Resume";
import CardContainer from "../components/cardsInfo/CardContainer";
import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";


function Dashboard() {

  const user = CheckIfUserLogin();


  return (
    <>
      {user ? (
        <div className="font-primary bg-background-primary ">
        <Header isLoggedIn={true} />
        
        <Resume />
        <CardContainer text={"Proyectos Activos"} hasButton={false} />
        <CardContainer text={"Proyectos Finalizados"} hasButton={true} />
        <Footer />
      </div>
      ): (
        <p>No deberias estar acá</p>
      )}
    </>
  );
}

export default Dashboard;
