import Image from "next/image";
import React from "react";
import heroImage from "/public/hero.jpg";
const HeroSection = () => {
  return (
    <div>
      <div className=" flex justify-center items-center  m-16">
        <div className="w-[50%] ms-20">
          <h2 className="text-5xl font-mono font-semibold">
            Welcome to..
            <br />
            <span className="text-9xl font-semibold">Banasree</span>
          </h2>
          <p className="text-lg text-wrap text-gray-500 ">
            Banasree is a vibrant residential area in Dhaka, Bangladesh, known
            for its diverse community and convenient amenities, making it a
            sought-after neighborhood for residents. With its green spaces and
            growing infrastructure, Banasree offers a harmonious blend of urban
            living and tranquility.
          </p>
        </div>
        <div className="w-[50%] ms-20">
          <div className="zoomOnHover">
            <Image
              src={heroImage}
              alt="Banasree-Hero-image"
              width={600}
              height={600}
              placeholder="blur"
              className="rounded-xl shadow-xl shadow-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
