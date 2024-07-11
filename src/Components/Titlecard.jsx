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
    <div className="bg-transparent h-[25%]">
      <div className="flex flex-col gap-4 ">
        <div className="w-[64%] z-0">
          <Lottie
            lottieRef={logoRef}
            animationData={EnigmaLogo}
            loop={false}
            onClick={handleClick}
          ></Lottie>
        </div>
        <div className="flex flex-col gap-1">
          <p className="">"With Great Power Comes Great Responsability!</p>
          <p className="">Spooderman 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Titlecard;
