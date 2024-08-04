import { useState, useEffect } from "react";

function Card({ src }) {
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={`big min-h-screen z-50 bg-blue-500/50 inset-0 fixed flex justify-center items-center ${
        closed ? "hidden" : ""
      }`}
    >
      <div className="image max-w-xl">
        <img className="w-full" src={src} alt="Portfolio" />
      </div>
    </div>
  );
}

export default Card;
