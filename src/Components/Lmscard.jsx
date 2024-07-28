import React from "react";

function Lmscard() {
  return (
    <div className="bg-primary-500 rounded-md flex-1 flex hover:rounded-xl">
      <a
        href="https://lms.enigmacamp.com/login/index.php"
        target="_blank"
        className="p-4 flex-1 rounded-md flex items-center h-full relative overflow-hidden group/icons bg-sky-50 hover:bg-secondary-500 hover:-rotate-2 transition-all duration-500 hover:rounded-xl"
      >
        <div className="z-30 w-[72%] text-primary-900 group-hover/icons:text-secondary-50">
          <h3 className="font-bold">Get Started with Enigma Camp!</h3>
          <p>Get to know what we do and how we do it!</p>
        </div>
      </a>
    </div>
  );
}

export default Lmscard;
