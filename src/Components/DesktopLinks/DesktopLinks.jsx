import { NavLink } from "react-router-dom";

function MobileLinks() {
  return (
    <div className="links hidden md:block ">
      <ul className="flex gap-4">
        <li className="hover:bg-green-300 p-2 rounded">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="hover:bg-green-300 p-2 rounded">
          <NavLink to="portfolio">Portfolio</NavLink>
        </li>
        <li className="hover:bg-green-300 p-2 rounded">
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileLinks;
