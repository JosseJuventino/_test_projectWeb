import Tag from "./Tag";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckIfUserLogin } from "../../../../helpers/checkIfUserLogin";
import './popAnimation.css'
function Card({ project }) {
  const navigate = useNavigate();
  const user = CheckIfUserLogin();

  const [clickedFav, setClickedFav] = useState(false);
  
  const [popAnimation, setPopAnimation] = useState(false);
  const [isInscription, setIsInscription] = useState(false);

  useEffect(() => {
    if (user) {
      //Obteniendo los Proyectos activos del usuario
       const uidProjectsActivos = user.proyectos.activos.map(
         (project) => project.idProject
       );

       const uidProjectsFinalizados = user.proyectos.finalizados.map(
         (project) => project.idProject
       );
       
      let favoritosUid = user.favoritos;
      if (favoritosUid.includes(project.uid)) {
        setClickedFav(true);
      }


      if (
        uidProjectsActivos.includes(project.uid) ||
        uidProjectsFinalizados.includes(project.uid)
      ) {
        setIsInscription(true);
      }

    }
  }, [project.uid, user]);

   function handleClick(event) {
     event.stopPropagation();
     setClickedFav(!clickedFav);
     setPopAnimation(true);

     if (user) {
       let updatedFavoritos = [...user.favoritos];

       
       const index = updatedFavoritos.indexOf(project.uid);

       if (index !== -1) {
         
         updatedFavoritos.splice(index, 1);
       } else {
        
         updatedFavoritos.push(project.uid);
       }

       
       const updatedUser = { ...user, favoritos: updatedFavoritos };
       
       localStorage.setItem("user", JSON.stringify(updatedUser));
       // Después de un tiempo, quitar la clase de animación
       setTimeout(() => {
         setPopAnimation(false);
       }, 1000);
     }
   }
  return (
    <>
      {project ? (
        <div
          onClick={() => isInscription ? navigate(`/dashboard/project/my-projects/${project.uid}`) :  navigate(`/inscription-project`)}
          className="card flex cursor-pointer relative flex-col mt-5 justify-center items-start bg-white rounded-lg overflow-hidden"
        >
          <div className="absolute top-0 m-2">
            <button
              onClick={handleClick}
              className={`bg-white p-2 px-3 rounded-full box-border `}
            >
              <p className={`text-xl ${popAnimation ? "pop-animation" : ""}`}>
                <i
                  className={
                    clickedFav
                      ? "fa-solid fa-heart text-red-500"
                      : "fa-regular fa-heart "
                  }
                ></i>
              </p>
            </button>
          </div>
          <figure className="flex flex-row justify-center items-center w-full h-full object-cover">
            <img
              className="object-cover w-full h-full"
              src={project.image}
              x
              alt="Imagen de proyecto"
            />
          </figure>
          <div className="flex flex-row items-end mt-4">
            <div className="type text-sm bg-red-500 text-white rounded-full right-4 px-8 py-1 absolute">
              <p>{project.type}</p>
            </div>
          </div>

          <div className="Information p-5">
            <div className="tags flex flex-row gap-1">
              {project.tags.map((tag, index) => (
                <Tag key={index} name={tag.name} background={tag.background} />
              ))}
            </div>
            <h3 className="text-xl lg:text-2xl my-4">{project.title}</h3>
            <p>Modalidad: presencial</p>
            <p className="text-gray-400 mt-2">
              <i className="fa-solid fa-location-dot"></i> {project.location}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Card;
