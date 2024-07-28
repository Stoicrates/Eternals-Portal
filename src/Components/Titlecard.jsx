import React from "react";
import { useRef } from "react";
import Lottie from "lottie-react";
import EnigmaLogo from "../assets/Enigma-Logo.json";

function Titlecard() {
  const logoRef = useRef();

  function handleClick() {
    logoRef.current.stop();
    logoRef.current.play();
  }

  return (
    <div className=" h-[20%] flex items-center">
      <div className="flex flex-col gap-4 ">
        <div className="z-0">
          <Lottie
            lottieRef={logoRef}
            animationData={EnigmaLogo}
            loop={false}
            onClick={handleClick}
          ></Lottie>
        </div>
      </div>
    </div>
  );
}

export default Titlecard;
