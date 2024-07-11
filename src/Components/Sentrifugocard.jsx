import React from "react";
import Sentri from "../assets/sentrifugo-icn.webp";

function Sentrifugocard() {
  return (
    <a
      href="https://hc.enigmacamp.com/"
      target="_blank"
      className="thecard relative overflow-hidden group/icons bg-blue-500 hover:bg-blue-300"
    >
      <div className="z-30 w-[72%] text-blue-300 group-hover/icons:text-blue-900">
        <h3 className="font-bold">Sentrifugo</h3>
        <p>In the need to relax or something just came up?</p>
      </div>
      <div className="icnbg z-0 opacity-65 group-hover/icons:w-[54%] group-hover/icons:rotate-45">
        <img src={Sentri} alt="sentrifugo-icn" />
      </div>
    </a>
  );
}

export default Sentrifugocard;
