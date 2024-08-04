import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cgreen">
      <h1 className="text-4xl font-bold uppercase text-white text-center">
        about component
      </h1>
      <div className="flex items-center justify-evenly mt-3">
        <div className="w-20 h-1 bg-white"></div>
        <FontAwesomeIcon
          className="text-white align-middle mx-3"
          icon={faStar}
        />
        <div className="w-20 h-1 bg-white"></div>
      </div>
      <div className="grid md:grid-cols-2 max-w-md md:max-w-2xl lg:max-w-4x xl:max-w-6xl p-6 gap-3">
        <p className="text-white  text-center ">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="text-white  text-center ">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}

export default About;
