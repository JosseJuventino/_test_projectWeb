import CommonButton from "../common-button/CommonButton";
import { AiOutlineArrowRight } from "react-icons/ai";

function BannerInfo({ bannerInformation }) {
  return (
    <>
      {bannerInformation.map((banner) => (
        <div
          className="flex flex-row items-center justify-around px-36"
          key={banner.title}
        >
          <div className="w-3/6">
            <h2 className="font-bold text-4xl mb-5 font-primary">
              {banner.title}
            </h2>
            <p className="text-text-secondary font-normal text-sm font-secondary">
              {banner.description}
            </p>
            {/** TODO: Cambiar el enlace luego! */}
            {banner.hasButton && (
              <CommonButton
                link="#"
                text={banner.buttonText}
                icon={<AiOutlineArrowRight />}
              />
            )}
          </div>

          <figure className="w-1/5">
            <img src={banner.image} alt="image-banner" />
          </figure>
        </div>
      ))}
    </>
  );
}

export default BannerInfo;
