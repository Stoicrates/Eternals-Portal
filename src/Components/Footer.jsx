import React from "react";

function Footer() {
  return (
    <div className="p-1 rounded-md h-[14%] flex items-end text-slate-500">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-lg font-bold ">Created and Maintained By</h2>
        <div className="flex flex-col gap-1">
          <a
            href="https://reliable-churros-37725b.netlify.app/"
            target="_blank"
            className="text-sm"
          >
            <p>Product Team</p>
          </a>
          <p className="text-sm">Engagement Partnership and Culture Team</p>
          <p className="text-sm">IT Support</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
