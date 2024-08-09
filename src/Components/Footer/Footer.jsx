import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <div className="bg-blue-gray">
        <div className="parent container mx-auto text-white p-10 grid md:grid-cols-3 justify-between items-center text-center">
          <div className="location mt-5 text-center">
            <h2 className="text-2xl font-bold">LOCATION</h2>
            <p className="mt-2">2215 John Daniel Drive</p>
            <p className="mt-3">Clark, MO 65243</p>
          </div>
          <div className="WEB mt-5 text-center">
            <h2 className="text-2xl font-bold">AROUND THE WEB</h2>
            <div className="icons flex justify-center gap-4 mt-3">
              <span className="w-10 h-10 bg-cyan-600 rounded-full border-white text-center ">
                <FontAwesomeIcon
                  className="text-xl translate-y-1/2"
                  icon={faFacebookF}
                />
              </span>
              <span className="w-10 h-10 bg-cyan-600 rounded-full border-white text-center ">
                <FontAwesomeIcon
                  className="text-xl translate-y-1/2"
                  icon={faTwitter}
                />
              </span>
              <span className="w-10 h-10 bg-cyan-600 rounded-full border-white text-center ">
                <FontAwesomeIcon
                  className="text-xl translate-y-1/2"
                  icon={faLinkedinIn}
                />
              </span>
              <span className="w-10 h-10 bg-cyan-600 rounded-full border-white text-center ">
                <FontAwesomeIcon
                  className="text-xl translate-y-1/2"
                  icon={faInstagram}
                />
              </span>
            </div>
          </div>
          <div className="FREELANCER mt-5 text-center">
            <h2 className="text-2xl font-bold">ABOUT FREELANCER</h2>
            <p className="mt-2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div>
        <footer className="text-center p-3 text-white bg-foot">
          <p className="mb-4">Copyright © Your Website 2021</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
