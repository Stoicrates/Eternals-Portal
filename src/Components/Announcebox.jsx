import React from "react";
import Announcecard from "./Announcecard";

function Announcebox() {
  return (
    <div className="max-h-[28dvw] bg-slate-200 p-4 rounded-md">
      <h3 className="font-bold py-4 bg-slate-200">Annoucements!</h3>
      <div className="cols max-h-[80%] overflow-scroll">
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
