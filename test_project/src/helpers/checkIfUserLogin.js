import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

export const CheckIfUserLogin = () => {
  const [user, setUser] = useState(null);

  const checkUser = () => {
    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    if (localStorageUser) {
      setUser(localStorageUser);
    }

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
            activos: [],
            finalizados: [],
          },
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
