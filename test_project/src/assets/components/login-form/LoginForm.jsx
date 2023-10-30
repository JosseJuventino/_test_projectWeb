import logo_uca from "../../../assets/images/logo_uca.png";
import CommonButton from "../common-button/CommonButton";
import ButtonWithIcon from "../general/ButtonWithIcon";
import InputIcon from "./InputIcon";
function LoginForm() {
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
            placeholder={"CorreoElectronico"}
            type={"mail"}
          />
          <InputIcon
            icon={"fa-solid fa-key"}
            placeholder={"Contraseña"}
            type={"password"}
          />
          <CommonButton text="Iniciar Sesión" link={"/dashboard"} />
          <hr />
          <div className="cuentasUca">
            <p className="mb-5">O inicia sesión usando tu cuenta:</p>
            <ButtonWithIcon
              text={"Google Cuentas UCA"}
              icon={"fa-brands fa-google"}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
