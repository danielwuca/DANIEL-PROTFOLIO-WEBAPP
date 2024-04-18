import React from "react";

function Footer() {
  return (
    <div className="py-10">
      <div className="h-[2px] w-full bg-gray-500"></div>
      <div className="flex items-center justify-center flex-col mt-2">
        <h1 className="text-gray-500">Developed By</h1>
        <h3 className="text-gray-500">Daniel Wu</h3>
        <div className="flex flex-row items-center justify-center gap-1">
          <h5 className="text-gray-500">Backend Powered By MongoDB</h5>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-database-2-fill text-gray-500"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
