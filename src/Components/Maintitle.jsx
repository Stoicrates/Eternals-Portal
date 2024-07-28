import React from "react";
import DateComponent from "./Date";

function Maintitle() {
  return (
    <div className="w-auto flex justify-center items-center shadow-lg h-screen bg-fotobareng bg-cover">
      <div className="text-slate-300 flex flex-col gap-4 text-center">
        <h3>
          <DateComponent />
        </h3>
        <h1>Welcome Eternals!</h1>

        <div className="flex flex-col gap-1">
          <h4 className="">"With Great Power Comes Great Responsability!"</h4>
          <h4 className="">Spooderman 2024</h4>
        </div>
        <p className="flex justify-center opacity-60">Click to Open Bento</p>
      </div>
    </div>
  );
}

export default Maintitle;
