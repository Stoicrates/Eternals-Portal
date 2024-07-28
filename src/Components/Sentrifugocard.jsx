import React from "react";
import Sentri from "../assets/sentrifugo-icn.webp";

function Sentrifugocard() {
  return (
    <a
      href="https://hc.enigmacamp.com/"
      target="_blank"
      className="thecard relative overflow-hidden group/icons bg-blue-50 hover:bg-primary-500"
    >
      <div className="z-30 w-[72%] text-primary-900 group-hover/icons:text-primary-50">
        <h3 className="font-bold">Sentrifugo</h3>
        <p>In the need to relax or something just came up?</p>
      </div>
      {/* <div className="icnbg z-0 opacity-65 group-hover/icons:w-[42%] group-hover/icons:rotate-12">
        <img src={Sentri} alt="sentrifugo-icn" />
      </div> */}
    </a>
  );
}

export default Sentrifugocard;
