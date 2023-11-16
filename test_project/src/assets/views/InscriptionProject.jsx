import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
import InfoInscriptionProject from "../components/InscriptionProject/InfoInscriptionProject";
function InscriptionProject() {
  return (
    <>
      <Header />
      <div className="lg:pl-20 mt-4">
        <div className="pl-4 lg:pl-0">
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
