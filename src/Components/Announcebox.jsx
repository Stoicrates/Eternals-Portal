import React from "react";
import Announcecard from "./Announcecard";

function Announcebox() {
  return (
    <div className="flex-1 bg-slate-50 p-2 rounded-md overflow-hidden hover:bg-slate-100 hover:rounded-xl">
      <h3 className="font-bold py-4 px-2 text-primary-500">
        Up Coming <span className="text-secondary-500">Events!</span>
      </h3>
      <div className="cols max-h-[90%] overflow-scroll">
        <Announcecard />
        <Announcecard />
        <Announcecard />
        <Announcecard />
        <Announcecard />
        <Announcecard />
        <div className="p-4 rounded-sm flex-1 flex items-center text-slate-300">
          <div>
            <h4 className="font-bold">That's it for now!!</h4>
            <p>Standby for future events</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcebox;
