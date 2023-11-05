import IconAndTitle from "./IconAndTitle";
import Title_Description from "./Title_Description";

function InfoProyect() {
  return (
    <div className="flex flex-col lg:flex-row my-8">
<figure className="w-full h-80 object-cover lg:w-1/2 lg:h-96 lg:mb-4 lg:pr-5">
      <img
        className="object-cover w-full h-full rounded-sm"
        src="https://www.cimat.ues.edu.sv/wp-content/uploads/2023/10/DSC_0350-1-scaled.jpg"
        alt="imagen Proyecto"
      />
</figure>
      <div className="px-4" >
        <div> 
        <Title_Description titulo={"Labores Administrativas y contables "} description={"Apoyo en ejecutar labores administrativas y contables en el Hospital de El Salvador."} />
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
            icon={"fa-solid fa-flag"}
            title={"Fecha de inicio:"}
            description={" 10/07/2023"}
          />
          <IconAndTitle
            icon={"fa-solid fa-circle-info "}
            title={"Mas información:"}
            description={" Lzaldivar@uca.edu.sv"}
          />
        </div>
      </div>
    </div>
  );
}
export default InfoProyect;
