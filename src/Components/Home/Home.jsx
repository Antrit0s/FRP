import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../assets/imgs/avataaars.svg"; // Ensure the correct file extension
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cgreen">
      <img src={avatar} alt="User Avatar" className="w-64  rounded-full" />
      <h1 className="mt-4 text-4xl font-bold uppercase text-white">
        start Framework
      </h1>
      <div className="lines flex items-center justify-evenly mt-3">
        <div className="left-line w-20 h-1 bg-white"></div>
        <FontAwesomeIcon
          className="text-white align-middle mx-3"
          icon={faStar}
        />
        <div className="left-line w-20 h-1 bg-white"></div>
      </div>
      <p className="mt-3 text-white">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}

export default Home;
