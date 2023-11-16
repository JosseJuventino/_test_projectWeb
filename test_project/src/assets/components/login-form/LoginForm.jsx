import logo_uca from "../../../assets/images/logo_uca.png";
import CommonButton from "../common-button/CommonButton";
import ButtonWithIcon from "../general/ButtonWithIcon";
import InputIcon from "./InputIcon";
import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // Este estado se envia al componente InputIcon para validar si el input esta vacio o no
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();
  //Variables para el login con Google
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

  const userData = {
    nombre: "Juan Pérez",
    carnet: "20220001",
    horasExternas: 150,
    horasInternas: 200,
    fotoPerfil: "https://example.com/foto_perfil.jpg",
    proyectos: {
      activos: [
        {
          title: "Desarrollo Web",
          image:
            "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/twj8upse9w68npgkymtb",
          type: "Interno",
          tags: [
            { name: "Desarrollo", background: "#FFA500" },
            { name: "Frontend", background: "#007BFF" },
          ],
          modality: "Remoto",
          location: "Oficinas Centrales",
        },
        {
          title: "App de Gestión",
          image: "https://example.com/app_gestion.jpg",
          type: "Externo",
          tags: [
            { name: "Desarrollo", background: "#FFA500" },
            { name: "Backend", background: "#dc3545" },
          ],
          modality: "Presencial",
          location: "Cliente",
        },
        {
          title: "Sistema de Reservas",
          image: "https://example.com/sistema_reservas.jpg",
          type: "Interno",
          tags: [
            { name: "Desarrollo", background: "#FFA500" },
            { name: "Backend", background: "#dc3545" },
          ],
          modality: "Remoto",
          location: "Oficinas Centrales",
        },
      ],
      finalizados: [
        {
          title: "App Móvil",
          image: "https://example.com/app_movil.jpg",
          type: "Externo",
          tags: [
            { name: "Desarrollo", background: "#FFA500" },
            { name: "Mobile", background: "#28a745" },
          ],
          modality: "Presencial",
          location: "Cliente",
        },
        {
          title: "Sistema de Gestión",
          image: "https://example.com/sistema_gestion.jpg",
          type: "Interno",
          tags: [
            { name: "Desarrollo", background: "#FFA500" },
            { name: "Backend", background: "#dc3545" },
          ],
          modality: "Remoto",
          location: "Oficinas Centrales",
        },
        {
          title: "Plataforma E-learning",
          image: "https://example.com/elearning.jpg",
          type: "Externo",
          tags: [
            { name: "Desarrollo", background: "#FFA500" },
            { name: "Educación", background: "#17a2b8" },
          ],
          modality: "Remoto",
          location: "Cliente",
        },
      ],
    },
  };

  async function handleLoginGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // Crear un objeto de usuario con propiedades adicionales
      const userObj = {
        nombre: user.displayName,
        email: user.email,
        fotoPerfil: user.photoURL,
        uid: user.uid,
        horasExternas: 10,
        horasInternas: 30,
        proyectos: {
          activos: [],
          finalizados: [],
        },
      };

      if (user) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(userObj));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function setUserHandler() {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("user", userData);
  }

  return (
    <>
      <form className="flex flex-col items-center h-screen">
        <div className="headerForm flex flex-col items-center text-center">
          <figure className="w-[60%] mt-5">
            <img className="object-cover" src={logo_uca} alt="Logo UCA" />
          </figure>
          <h2 className="text-4xl mt-5">¡Bienvenido!</h2>
          <h3 className="text-xl">Inicio de sesión</h3>
        </div>
        <div className="formContent mt-10 flex flex-col items-center">
          <InputIcon
            icon={"fa-solid fa-envelope"}
            placeholder={"ejemplo@ejemplo.com"}
            type={"email"}
            canSubmit={setInputError}
          />

          <InputIcon
            icon={"fa-solid fa-key"}
            placeholder={"Minimo 8 caracteres"}
            type={"password"}
            canSubmit={setInputError}
          />
          <div onClick={setUserHandler}>
            <CommonButton
              text="Iniciar Sesión"
              link={inputError ? "/dashboard" : ""}
            />
          </div>
          <hr />
          <div className="cuentasUca">
            <p className="mb-5">O inicia sesión usando tu cuenta:</p>

            <div onClick={handleLoginGoogle}>
              <ButtonWithIcon
                text={"Google Cuentas UCA"}
                icon={"fa-brands fa-google"}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
