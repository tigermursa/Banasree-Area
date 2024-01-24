import Image from "next/image";
import React from "react";
import mapImage from "/public/map.png";
const BlockA = () => {
  return (
    <div className="mt-80">
      <div>
        <h1 className="text-6xl font-semibold text-center">
          {" "}
          Explore on Google Map
        </h1>
      </div>
      <div className=" flex justify-center items-center  m-16">
        <div className="w-[50%] ms-20">
          <div>
            <Image
              src={mapImage}
              alt="Banasree-Hero-image"
              width={600}
              height={600}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-[50%] ms-10">
          <h2 className="text-5xl font-semibold">
            Project Near Hatiejheel
            <br />
          </h2>
          <p className="text-lg text-wrap ">
            Legend has it that the elephants of Dhaka's Pilkhana used to take
            baths in these wetlands – hence the name Hatirjheel. Architect Iqbal
            Habib, who heads the consultant firm of the Hatirjheel-Begunbari
            development project, said that the Bhawal Raja used to keep his
            tamed elephants at Pilkhana. He said that the elephants were taken
            to the wetlands through the Elephant Road and Hatirpool. Also, Ehsan
            Khan was the main architect of the Hatirjheel projec
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockA;
