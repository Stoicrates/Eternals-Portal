import React from "react";
import Announcecard from "./Announcecard";

function Announcebox() {
  return (
    <div className="h-[300px]flex-1 bg-slate-200 p-4 rounded-md overflow-hidden">
      <h3 className="font-bold py-4 bg-slate-200">Annoucements!</h3>
      <div className="cols max-h-[90%] overflow-scroll">
        <Announcecard />
        <Announcecard />
        <Announcecard />
        <Announcecard />
        <Announcecard />
        <Announcecard />
      </div>
    </div>
  );
}

export default Announcebox;
