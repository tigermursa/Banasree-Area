import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <div className="bg-black bg-opacity-40 text-white h-[50px] flex justify-center ">
        <ul className="flex justify-center items-center gap-7  font-semibold text-lg ">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Map</li>
          <li className="hover:text-gray-200 cursor-pointer">
            Emergency Numbers
          </li>
          <li className="hover:text-gray-200 cursor-pointer">
            Developer-info{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
