function ButtonWithIcon({ text, icon }) {
  return (
    <>
      <a
        href="#"
        className="mt-10 border-transparent border-4 transition-colors duration-500 ease-in-out  justify-between items-center bg-black-custom text-white px-6 py-2 rounded-full hover:bg-hover-black-custom hover:text-black hover:border-black-custom hover:border-4"
      >
        <i className={icon}></i>
        <span className="ml-3">{text}</span>
      </a>
    </>
  );
}

export default ButtonWithIcon;
