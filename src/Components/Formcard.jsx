import React from "react";

function Formcard() {
  return (
    <a
      href="https://www.google.com"
      target="_blank"
      className="thecard relative overflow-hidden group/icons bg-secondary-50 hover:bg-secondary-500"
    >
      <div className="text-secondary-900 group-hover/icons:text-secondary-50">
        <h3 className="font-bold">Got any input or feedback?</h3>
        <p>Just click here and fill the form!</p>
      </div>
    </a>
  );
}

export default Formcard;
