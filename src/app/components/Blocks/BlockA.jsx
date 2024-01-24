import Image from "next/image";
import React from "react";
import mapImage from "/public/map.png";

const BlockA = () => {
  return (
    <div className="mt-80">
      <div>
        <h1 className="text-7xl font-semibold text-center">
          Explore Banasree on Google Map 📍
        </h1>
      </div>
      <div className=" flex justify-center items-center  m-16 cursor-grabbing">
        <div className="zoomOnHover">
          <div className="border-2 border-black rounded-xl ">
            <Image
              src={mapImage}
              alt="Banasree-Hero-image"
              width={1200}
              height={1200}
              placeholder="blur"
              className="rounded-xl shadow-xl shadow-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockA;
