import React from "react";

function Notes() {
  return (
    <div className="items-start p-0 max-lg:p-4">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-3xl font-bold text-primary-500">
          We're <span className="text-secondary-500">READY!!</span>
        </h2>
        <div className="flex flex-col gap-2 text-slate-400">
          <p className="ready">
            <span className="font-bold text-secondary-600">R</span> - Respect
            Others!
          </p>
          <p className="ready">
            <span className="font-bold text-secondary-600">E</span> - Effective
            & efficient, in doing the job
          </p>
          <p className="ready">
            <span className="font-bold text-secondary-600">A</span> - Agile
            spirit
          </p>
          <p className="ready">
            <span className="font-bold text-secondary-600">D</span> - Discipline
          </p>
          <p className="ready">
            <span className="font-bold text-secondary-600">Y</span> - Yes, I
            can!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notes;
