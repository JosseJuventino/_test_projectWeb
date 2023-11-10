import { useState } from "react";
import "./header.css";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo_uca from "../../../assets/images/logo_uca.png";
import userPhotoDefault from "../../../assets/images/user_default.jpeg";
import ButtonHeader from "../general/ButtonHeader";
import { linksLoggedIn, linksLoggedOut } from "../../constant/links";
import { CheckIfUserLogin } from "../../../helpers/checkIfUserLogin";
import { cutName } from "../../utils/formatName";

function Header({ isLoggedIn }) {
  const [modal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!modal);
  }

  const user = CheckIfUserLogin();

  function renderLinks() {
    const linksToRender = isLoggedIn ? linksLoggedIn : linksLoggedOut;

    return linksToRender.map((link) => (
      <a
        key={link.text}
        href={link.href}
        className={`mx-2 ${modal ? "my-10 text-xl" : ""}`}
      >
        {link.text}
      </a>
    ));
  }

  function renderLoginButton() {
    const buttonProps = {
      image: user ? user.fotoPerfil : userPhotoDefault,
      className: `mx-2 ${modal ? "my-10" : ""}`,
      text: user ? cutName(user.nombre) : "Iniciar Sesión",
    };

    return <ButtonHeader {...buttonProps} />;
  }

  return (
    <>
      <nav className="flex flex-row justify-between items-center py-5 px-10 text-lg">
        <div className="flex flex-row justify-evenly items-center">
          <figure className="w-20">
            <img src={logo_uca} alt="logo_uca" />
          </figure>
          <div className="hidden md:block">{renderLinks()}</div>
        </div>

        <div className="hidden md:block">{renderLoginButton()}</div>

        <div className="md:hidden">
          {modal ? (
            <div></div>
          ) : (
            <FaBars className="text-3xl" onClick={toggleModal} />
          )}
        </div>
      </nav>
      <div
        className={`${
          modal
            ? "flex fixed top-0 left-0 w-full flex-col h-full z-50 slide-from-right-enter"
            : "hidden slide-from-right-leave"
        } justify-center items-center bg-hover-black-custom py-9`}
      >
        {renderLinks()}
        <div className="mt-10">{renderLoginButton()}</div>
        <IoClose className="text-4xl mt-12" onClick={toggleModal} />
      </div>
    </>
  );
}

export default Header;
