import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

export const CheckIfUserLogin = () => {
  const [user, setUser] = useState(null);

  const checkUser = () => {
  

    const unsuscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const userObject = {
          nombre: authUser.displayName,
          email: authUser.email,
          fotoPerfil: authUser.photoURL,
          uid: authUser.uid,
          horasExternas: 40,
          horasInternas: 30,
          proyectos: {
            activos: [
              { idProject: "8642095172", startDate: "10/09/2022" },
              { idProject: "1958730246", startDate: "10/09/2022" },
              { idProject: "5901238746", startDate: "10/09/2022" },
            ],
            finalizados: [
              {
                idProject: "2309461857",
                startDate: "10/09/2022",
                finishedDate: "10/10/2022",
              },
              {
                idProject: "9472058136",
                startDate: "10/09/2022",
                finishedDate: "10/10/2022",
              },
              {
                idProject: "1098347652",
                startDate: "10/09/2022",
                finishedDate: "10/10/2022",
              },
              {
                idProject: "7865021943",
                startDate: "10/09/2022",
                finishedDate: "10/10/2022",
              },
              {
                idProject: "4023158796",
                startDate: "10/09/2022",
                finishedDate: "10/10/2022",
              },
            ],
          },
          favoritos: ["1958730246", "5901238746"],
        };

        localStorage.setItem("user", JSON.stringify(userObject));
        localStorage.setItem("isLoggedIn", true);
        setUser(userObject);
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
    });

    return () => unsuscribe();
  };

  useEffect(checkUser, []);

  return user;
};
