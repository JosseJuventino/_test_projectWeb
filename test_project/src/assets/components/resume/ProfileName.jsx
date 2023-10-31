const ProfileName = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <figure className="w-[150px]">
          <img
            className="object-cover rounded-full border-black-custom border-8"
            src="https://randomuser.me/api/portraits/lego/6.jpg"
            alt="ProfileUser"
          />
        </figure>
        <h2 className="text-2xl">José Castillo</h2>
        <h3 className="text-xl text-gray-400">00048322</h3>
      </div>
    </>
  );
};

export default ProfileName;
