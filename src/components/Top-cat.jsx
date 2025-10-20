import React from "react";
import top from "../assets/images/top.jpg"; // image ka correct path

const TopCategories = () => {
  return (
    <section className="py-20 bg-white text-center w-full">
      <h1 className="text-4xl font-semibold mb-12 text-gray-900">
        Top Categories
      </h1>

      {/* Only 1 image in center */}
      <div className=" px-8 md:px-20">
        <div className="w-80 h-[400px] overflow-hidden shadow-md relative hover:scale-105 transition-transform duration-300">
          <img
            src={top}
            alt="Top Category"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
