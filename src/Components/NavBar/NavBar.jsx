import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import DesktopLinks from "../DesktopLinks/DesktopLinks";
import MobileLinks from "../MobileLinks/MobileLinks"; // Corrected import

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [padding, setPadding] = useState("16px"); // Initial padding
  const lastScrollTop = useRef(0); // Ref to store last scroll position
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop.current) {
        // Scrolling down
        setPadding("8px"); // Decrease padding when scrolling down
      } else {
        // Scrolling up
        setPadding("30px"); // Increase padding when scrolling up
      }

      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="bg-blue-gray text-white p-4 fixed left-0 right-0  z-50 transition-all duration-500"
        style={{ padding: padding }}
      >
        <div className="flex justify-between items-center container mx-auto">
          <div className="logo text-3xl">
            <NavLink className="uppercase font-bold text-4xl" to="/">
              Start FrameWork
            </NavLink>
          </div>
          <div>
            <DesktopLinks />
            <button
              onClick={toggleMenu}
              className="p-1.5 pt-0 pb-0 text-gray-600 border-0 text-3xl leading-[65px] font-bold cursor-pointer  focus:border-solid focus:border-2 focus:border-gray-950 md:hidden"
            >
              <span className=" ">&#9776;</span>
            </button>
          </div>
        </div>
        {isOpen && <MobileLinks />}
      </nav>
    </>
  );
}

export default NavBar;
