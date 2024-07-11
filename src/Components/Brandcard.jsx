import React from "react";
import Brand1 from "../assets/bi-thumb1.webp";
import Brand2 from "../assets/bi-thumb2.webp";
import Brand3 from "../assets/bi-thumb3.webp";
import Brand4 from "../assets/bi-thumb4.webp";
import Brand5 from "../assets/bi-thumb5.webp";
import Brand6 from "../assets/bi-thumb6.webp";

function Brandcard() {
  return (
    <a
      href="https://www.google.com"
      target="_blank"
      className="thecard relative overflow-hidden group/icons bg-secondary-50 hover:bg-primary-500"
    >
      <div className="z-30 w-[72%] text-primary-900 group-hover/icons:text-primary-50">
        <h3 className="font-bold">Brand Identity</h3>
        <p>This is how we are!</p>
      </div>
      <div className="icnbg z-0 opacity-65 group-hover/icons:w-[120px] w-[100px] top-8 group-hover/icons:rotate-[12deg] duration-500">
        <img
          className="group-hover/icons:-rotate-[20deg] absolute z-40 shadow-2xl duration-300"
          src={Brand1}
          alt="brand1"
        />
        <img
          className="group-hover/icons:-rotate-[12deg] absolute z-30 shadow-2xl"
          src={Brand2}
          alt="brand2"
        />
        <img
          className="group-hover/icons:rotate-0 absolute z-20 shadow-2xl"
          src={Brand3}
          alt="brand3"
        />
        <img
          className="group-hover/icons:rotate-[12deg] absolute z-10 shadow-2xl"
          src={Brand4}
          alt="brand4"
        />
        <img
          className="group-hover/icons:rotate-[20deg] absolute z-0 shadow-2xl"
          src={Brand5}
          alt="brand5"
        />
        <img
          className="group-hover/icons:rotate-[32deg] absolute -z-10 shadow-2xl"
          src={Brand6}
          alt="brand6"
        />
      </div>
    </a>
  );
}

export default Brandcard;
