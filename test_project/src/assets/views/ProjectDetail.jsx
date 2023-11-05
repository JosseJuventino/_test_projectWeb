import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import InfoProyect from "../components/InfoProyectActive/InfoProject";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
function ProjectDetail() {
    return (
      <>
          <Header />
          <div className="lg:pl-20 mt-4">
            <div className="pl-4 lg:pl-0">
          <ButtonWithIcon text={"Volver"} icon={"fa-solid fa-arrow-left"} />
            </div>
          <InfoProyect />
          </div>
          <Footer />  
      </>
    );
  }
  
  export default ProjectDetail;
  
