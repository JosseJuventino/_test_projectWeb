function CommonButton({ link, text, icon }) {
  return (
    <div className="my-7">
      <a
        className="border-black-custom border-4 px-4 py-2 text-lg rounded-full hover:bg-black-custom hover:text-white transition-colors duration-500 ease-in-out hover:border-black-custom hover:border-4"
        href={link}
      >
        {text}
        <i className={`ml-2 text-lg ${icon}`}></i>
      </a>
    </div>
  );
}

export default CommonButton;
