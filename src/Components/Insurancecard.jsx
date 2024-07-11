import React from "react";
import Sentri from "../assets/sentrifugo-icn.webp";

function Insurancecard() {
  return (
    <a
      href="https://www.google.com"
      target="_blank"
      className="thecard relative overflow-hidden group/icons bg-red-500 hover:bg-red-300"
    >
      <div className="z-30 w-[72%] text-red-300 group-hover/icons:text-red-900">
        <h3 className="font-bold">Insurance</h3>
        <p>Find more about our insurance</p>
      </div>
      <div className="icnbg z-0 opacity-65 group-hover/icons:w-[54%] group-hover/icons:rotate-45">
        <img src={Sentri} alt="sentrifugo-icn" />
      </div>
    </a>
  );
}

export default Insurancecard;
