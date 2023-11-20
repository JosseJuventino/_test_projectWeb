import { useState } from "react";

const Time = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col mt-4">
      <div>
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-2 gap-5 mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`text-center hover:border-black-custom hover:bg-transparent hover:text-black hover:border-4 px-4 py-2 text-sm rounded-full bg-black-custom text-white transition-colors duration-500 ease-in-out border-black-custom border-4 ${
              selectedOption === option ? "bg-green-500" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Time;
