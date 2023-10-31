import Tag from "./Tag";
function Card() {
  return (
    <>
      <div className="flex cursor-pointer hover:-translate-y-2 transition relative flex-col mt-5 justify-center items-start bg-white rounded-lg overflow-hidden">
        <figure>
          <img
            className="object-cover"
            src="https://www.grupocibernos.com/hubfs/gestion-de-proyectos-empresariales.jpg"
            alt="Imagen de proyecto"
          />
        </figure>
        <div className="flex flex-row items-end mt-4">
          <div className="type text-sm bg-red-500 text-white rounded-full right-4 px-8 py-1 absolute">
            <p>Externo</p>
          </div>
        </div>
        <div className="absolute top-0 m-2">
          <button className="bg-white p-2 px-4  rounded-full box-border">
            <p className="text-xl">
              <i className="fa-solid fa-bookmark"></i>
            </p>
          </button>
        </div>
        <div className="Information p-5">
          <div className="tags flex flex-row gap-1">
            <Tag name="Contaduria publica" background="#27954C" />
            <Tag name="Admin. empresas" background="#8349FF" />
          </div>
          <h3 className="text-xl lg:text-2xl my-4">Labores Administrativas</h3>
          <p>Modalidad: presencial</p>
          <p className="text-gray-400 mt-2">
            <i className="fa-solid fa-location-dot"></i> Hospital El Salvador
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;