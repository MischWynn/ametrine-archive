import React from "react";
import Background from "../assets/download.jpeg";
import Diamond from "../assets/diamond.svg";

const HomePage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          filter: "blur(5px)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Layer */}
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <div className="text-center px-4 sm:px-8">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto flex items-center justify-center">
              <img src={Diamond} alt="diamond" className="w-12 h-12" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            Ametrine Archives
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl mb-8">
            Jewelry Collection by Ametrines
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 sm:px-6 sm:py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition">
              INTRO
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition">
              WORK
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition">
              ABOUT
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
