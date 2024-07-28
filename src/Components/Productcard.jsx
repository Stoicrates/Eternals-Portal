import React from "react";
import Know1 from "../assets/knowledge-thumb1.webp";
import Know2 from "../assets/knowledge-thumb2.webp";
import Know3 from "../assets/knowledge-thumb3.webp";
import Know4 from "../assets/knowledge-thumb4.webp";

function Productcard() {
  return (
    <a
      href="https://www.canva.com/design/DAGDyYhW4Ng/2X41jlawzd3dpl6liPXapQ/view?utm_content=DAGDyYhW4Ng&utm_campaign=designshare&utm_medium=link&utm_source=editor"
      target="_blank"
      className="thecard relative overflow-hidden group/icons bg-primary-50 hover:bg-secondary-500"
    >
      <div className="z-30 w-[72%] text-primary-900 group-hover/icons:text-secondary-50">
        <h3 className="font-bold">Product Knowledge</h3>
        <p>Get to know what we do and how we do it!</p>
      </div>
      <div className="icnbg z-0 opacity-65 group-hover/icons:w-[8dvw] w-[12dvw] top-8 group-hover/icons:rotate-[12deg] duration-500">
        <img
          className="group-hover/icons:-rotate-[20deg] absolute z-40 shadow-2xl duration-300"
          src={Know1}
          alt="brand1"
        />
        <img
          className="group-hover/icons:-rotate-[12deg] absolute z-30 shadow-2xl"
          src={Know2}
          alt="brand2"
        />
        <img
          className="group-hover/icons:rotate-0 absolute z-20 shadow-2xl"
          src={Know3}
          alt="brand3"
        />
        <img
          className="group-hover/icons:rotate-[12deg] absolute z-10 shadow-2xl"
          src={Know4}
          alt="brand4"
        />
      </div>
    </a>
  );
}

export default Productcard;
