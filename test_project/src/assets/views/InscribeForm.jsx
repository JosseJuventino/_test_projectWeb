import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import ContactNumber from "../components/InscribeForm/ContactNumber";
import Title_Description from "../components/InfoProyectActive/Title_Description";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
import Dropdown from "../components/InscribeForm/Dropdown";
function InscribeForm() {
  return (
    <div>
      <Header />
      <div className="lg:pl-20 mt-4">
        <div className="pl-4 lg:pl-0">
          <ButtonWithIcon text={"Volver"} icon={"fa-solid fa-arrow-left"} />
        </div>
        <div className="flex flex-col lg:flex-row my-8">
          <figure className="w-full h-80 object-cover lg:w-1/2 lg:h-96 lg:mb-4 lg:pr-5">
            <img
              className="object-cover w-full h-full rounded-sm"
              src="https://www.cimat.ues.edu.sv/wp-content/uploads/2023/10/DSC_0350-1-scaled.jpg"
              alt="imagen Proyecto"
            />
          </figure>
          <div className="px-4">
            <div>
              <Title_Description
                titulo={"Labores Administrativas y contables "}
              />
              <p className="pl-0 pb-3 lg:pl-4">Numero de Contacto: </p>
            </div>
            <ContactNumber
              // icon={"fa-solid fa-phone"}
              placeholder={"0000-0000"}
              type={"text"}
            />
            <p className="pl-0 lg:pl-4 pb-3 pt-6">Año de carrera: </p>
            <Dropdown />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InscribeForm;
