import Header from "../components/header/header";
import BannerInfo from "../components/banner-information/BannerInfo";

/** Datos quemados de lo que deberia recibir el banner */
const bannerInfo = [
  {
    title: "Ayudandote a realizar tus horas sociales.",
    description:
      "En este portafolio encontraras mis proyectos personales, los cuales he desarrollado con la finalidad de aprender y mejorar mis habilidades como desarrollador web.",
    image:
      "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5351b47488c29f3e4669a0_peep-13.png",
    hasButton: true,
    buttonText: "Ver más",
  },
];

function Index() {
  return (
    <>
      <Header />
      <BannerInfo bannerInformation={bannerInfo} />
    </>
  );
}

export default Index;
