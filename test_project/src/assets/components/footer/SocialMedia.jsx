function SocialMedia({ icon, link }) {
  return (
    <>
      <a
        href={link}
        className="text-white md:text-3xl text-2xl text-center mt-5 pr-5 mb-10"
      >
        <i className={icon}></i>
      </a>
    </>
  );
}

export default SocialMedia;
