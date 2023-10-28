function CommonButton({ link, text, icon }) {
  return (
    <>
      <div className="my-7">
        <a
          className="border-black-custom border-2 px-4 py-2 text-lg rounded-full hover:bg-black-custom hover:text-white transition-colors duration-500 ease-in-out hover:border-black-custom hover:border-2"
          href={link}
        >
          {text}
          {icon}
        </a>
      </div>
    </>
  );
}

export default CommonButton;
