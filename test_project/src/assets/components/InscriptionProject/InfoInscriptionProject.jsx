import IconAndTitle from "../InfoProyectActive/IconAndTitle";
import Title_Description from "../InfoProyectActive/Title_Description";
import ButtonInscribe from "./ButtonInscribe";

function InfoInscriptionProject() {
  return (
    <div className="flex flex-col lg:flex-row  my-8">
      <figure className="w-full h-80 object-cover lg:w-1/2 lg:h-full lg:mb-4 lg:pr-5">
        <img
          className=" w-full rounded-sm"
          src="https://i1.rgstatic.net/ii/profile.image/372560328970243-1465836712539_Q512/Daniel-Sosa-2.jpg"
          alt="imagen Proyecto"
        />
      </figure>
      <div className="px-4">
        <div>
          <Title_Description
            titulo={"Labores Administrativas y contables "}
            hasTag={true}
            description={
              "Apoyo en ejecutar labores administrativas y contables en el Hospital de El Salvador."
            }
          />
        </div>
        <div>
          <IconAndTitle
            icon={"fa-solid fa-location-dot "}
            title={"Lugar:"}
            description={" Hospital El Salvador"}
          />
          <IconAndTitle
            icon={"fa-solid fa-clock"}
            title={"Servicio Social:"}
            description={" Externo"}
          />
          <IconAndTitle
            icon={"fa-solid fa-house-user"}
            title={"Modalidad:"}
            description={" Presencial"}
          />
          <IconAndTitle
            icon={"fa-solid fa-calendar"}
            title={"Horario:"}
            description={" 4 Horas a la semana de lunes a viernes."}
          />
          <IconAndTitle
            icon={"fa-solid fa-circle-info "}
            title={"Mas información:"}
            description={" Lzaldivar@uca.edu.sv"}
          />
        </div>
        <ButtonInscribe link={"/inscription-form"} text={"Inscribirse"} />
      </div>
    </div>
  );
}
export default InfoInscriptionProject;
