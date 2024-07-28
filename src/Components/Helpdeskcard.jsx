import React from "react";

function Helpdeskcard() {
  return (
    <a
      href="https://helpdesk.enigmacamp.com"
      target="_blank"
      className="thecard relative overflow-hidden group/icons bg-blue-50 hover:bg-primary-500"
    >
      <div className="z-30 w-[72%] text-primary-900 group-hover/icons:text-primary-50">
        <h3 className="font-bold">Help Desk!</h3>
        <p>Need an IT support?</p>
      </div>
    </a>
  );
}

export default Helpdeskcard;
