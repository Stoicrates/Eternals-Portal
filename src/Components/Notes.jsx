import React from "react";

function Notes() {
  return (
    <div className="thecard bg-transparent items-start p-0 max-lg:p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">READY</h2>
        <div className="flex flex-col gap-1">
          <p className="text-lg">
            <strong>R</strong> Respect Others!
          </p>
          <p className="text-lg">
            <strong>E</strong> Effective & efficient, in doing the job
          </p>
          <p className="text-lg">
            <strong>A</strong> Agile spirit
          </p>
          <p className="text-lg">
            <strong>D</strong> Discipline
          </p>
          <p className="text-lg">
            <strong>Y</strong> Yes, I can!
          </p>
          <p className="text-lg font-bold">
            If you have any money please give me!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notes;
