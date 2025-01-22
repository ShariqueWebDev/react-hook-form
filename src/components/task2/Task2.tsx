import { div } from "framer-motion/client";
import React from "react";

const Task2 = () => {
  return (
    <div className="bg-black py-10 px-3 tracking-wide">
      <div className="max-w-[1150px] mx-auto w-full h-full">
        <h1 className="lg:text-7xl text-3xl ">
          <span className="relative font-medium group bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 transition-all duration-500 ease-in-out">
            Everything you need to get <br /> the attention of your <br />{" "}
            audience
            <span className="absolute inset-0 bg-gradient-to-r from-black to-white opacity-0 group-hover:opacity-100 text-transparent bg-clip-text transition-all duration-500 ease-in-out"></span>
          </span>
        </h1>
        <div className="flex max-sm:flex-col gap-5 lg:mt-28 mt-10">
          <div className="w-20 h-0.5 bg-gray-200 mt-2 "></div>
          <p className="text-gray-200 lg:text-4xl text-xl font-normal">
            Our digital agency helps clients develop, <br /> and maintain
            successful digital marketing <br />strategies across all channels.
            Also <br />
            work with you to build your website and create <br /> online
            mJsinesses that grow.
          </p>
        </div>
      </div>

      {/* CARDS COMPONENT/////////////////////////////////////// */}
    </div>
  );
};

export default Task2;
