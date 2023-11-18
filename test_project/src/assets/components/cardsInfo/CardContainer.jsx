import Card from "./Cards/Card";
import "./CardContainer.css";
function CardContainer({ text, hasButton }) {
  return (
    <>
      <div className="mt-7 p-10">
        <h1 className="text-3xl">{text}</h1>
        <div className="card-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {hasButton ? (
          <div className="flex flex-row items-end justify-end">
            <button className="bg-white hover:bg-black-custom hover:text-white transition-colors duration-300 font-normal py-2 px-4 shadow-md mt-5 rounded-lg">
              Ver más <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default CardContainer;
