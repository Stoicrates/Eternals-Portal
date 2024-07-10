import React from "react";

function Footer() {
  return (
    <div className="thecard bg-transparent items-end p-0">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Created and Maintained By</h2>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Product Team</p>
          <p className="text-sm">Engagement Partnership and Culture Team</p>
          <p className="text-sm">IT Support</p>
          <p className="text-md font-bold">
            If you have any money please give me!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
