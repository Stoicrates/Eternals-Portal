import { useRef } from "react";
import React from "react";
import Maintitle from "./Maintitle";

function Cap() {
  const capRef = useRef(null);
  function handleCapClick() {
    capRef.current.classList.toggle("cap");
  }
  return (
    <div
      ref={capRef}
      className="boxed absolute w-full transition-all duration-1000 shadow-xl z-50"
      onClick={handleCapClick}
    >
      <Maintitle />
    </div>
  );
}

export default Cap;
