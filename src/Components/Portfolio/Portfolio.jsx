import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import port1 from "../../assets/imgs/poert1.png";
import port2 from "../../assets/imgs/port2.png";
import port3 from "../../assets/imgs/port3.png";
import { useState } from "react";
import Card from "../Card/Card";

function Portfolio() {
  const [clicked, setClicked] = useState(false);
  const [src, setSrc] = useState("");

  const handleCardClick = (imageSrc) => {
    setClicked(true);
    setSrc(imageSrc);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-40">
      <h1 className="text-4xl font-bold uppercase text-blue-gray">
        Portfolio Component
      </h1>
      <div className="lines flex items-center justify-evenly mt-3">
        <div className="left-line w-20 h-1 bg-blue-gray"></div>
        <FontAwesomeIcon
          className="text-blue-gray align-middle mx-3"
          icon={faStar}
        />
        <div className="left-line w-20 h-1 bg-blue-gray"></div>
      </div>
      <div className="gallery mt-5 grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-3 container p-8">
        {/* card */}
        <div
          onClick={() => handleCardClick(port1)}
          className="card group hover:cursor-pointer relative"
        >
          <img className="w-full rounded-lg" src={port1} alt="Portfolio 1" />
          <div className="layer flex justify-center items-center absolute text-center bg-cgreen/75 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <FontAwesomeIcon className="text-white text-5xl" icon={faPlus} />
          </div>
        </div>
        <div
          onClick={() => handleCardClick(port2)}
          className="card group hover:cursor-pointer relative"
        >
          <img className="w-full rounded-lg" src={port2} alt="Portfolio 2" />
          <div className="layer flex justify-center items-center absolute text-center bg-cgreen/75 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <FontAwesomeIcon className="text-white text-5xl" icon={faPlus} />
          </div>
        </div>
        <div
          onClick={() => handleCardClick(port3)}
          className="card group hover:cursor-pointer relative"
        >
          <img className="w-full rounded-lg" src={port3} alt="Portfolio 3" />
          <div className="layer flex justify-center items-center absolute text-center bg-cgreen/75 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <FontAwesomeIcon className="text-white text-5xl" icon={faPlus} />
          </div>
        </div>
        <div
          onClick={() => handleCardClick(port1)}
          className="card group hover:cursor-pointer relative"
        >
          <img className="w-full rounded-lg" src={port1} alt="Portfolio 4" />
          <div className="layer flex justify-center items-center absolute text-center bg-cgreen/75 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <FontAwesomeIcon className="text-white text-5xl" icon={faPlus} />
          </div>
        </div>
        <div
          onClick={() => handleCardClick(port2)}
          className="card group hover:cursor-pointer relative"
        >
          <img className="w-full rounded-lg" src={port2} alt="Portfolio 5" />
          <div className="layer flex justify-center items-center absolute text-center bg-cgreen/75 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <FontAwesomeIcon className="text-white text-5xl" icon={faPlus} />
          </div>
        </div>
        <div
          onClick={() => handleCardClick(port3)}
          className="card group hover:cursor-pointer relative"
        >
          <img className="w-full rounded-lg" src={port3} alt="Portfolio 6" />
          <div className="layer flex justify-center items-center absolute text-center bg-cgreen/75 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <FontAwesomeIcon className="text-white text-5xl" icon={faPlus} />
          </div>
        </div>
      </div>
      {clicked && <Card src={src} />}
    </div>
  );
}

export default Portfolio;
