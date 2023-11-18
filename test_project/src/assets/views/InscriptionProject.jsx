import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
import InfoInscriptionProject from "../components/InscriptionProject/InfoInscriptionProject";
import { useNavigate } from "react-router";
function InscriptionProject() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="lg:pl-20 mt-4">
        <div className="pl-4 lg:pl-0" onClick={() => navigate("/")}>
          <ButtonWithIcon text={"Volver"} icon={"fa-solid fa-arrow-left"} />
        </div>
        
        <InfoInscriptionProject />
      </div>
      <div></div>
      <Footer />
    </>
  );
}

export default InscriptionProject;
