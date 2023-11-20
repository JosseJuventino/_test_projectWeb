import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import CardContainer from "../components/cardsInfo/CardContainer";


function Favorites(){
    const user = CheckIfUserLogin();
    const [projectsFav, setProjectsFav] = useState([]);

    useEffect(() => {
        if(user){
            let favoritosUid = user.favoritos;
            let proyectos = localStorage.getItem("projects");
            proyectos = JSON.parse(proyectos);

            let projectsFavFiltered = proyectos.filter((project) => {
                return favoritosUid.includes(project.uid);
                
            });
console.log("aaaa");
            setProjectsFav(projectsFavFiltered);
        }
    }, [user]);

    return (
      <div>
        <Header isLoggedIn={true} />
        <h1 className="text-center text-3xl">Mis favoritos</h1>
        {projectsFav.length > 0 ? (
          <CardContainer
            text=""
            hasButton={false}
            type="active"
            projectsActives={projectsFav}
            needMorePage={false}
          />
        ) : (
          <h2>Al parecer no tienes proyectos para mostrar</h2>
        )}
        <Footer />
      </div>
    );
}

export default Favorites;