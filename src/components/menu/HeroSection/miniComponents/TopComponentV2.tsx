import React from "react";

const TopComponentV2 = () => {
  return (
    <div>
      <div className="flex gap-3 items-center p-3 bg-white w-fit rounded-lg absolute top-12 right-32">
        <div className="w-12 h-12 overflow-hidden rounded-full bg-gradient-to-b from-[#dbb9f9] via-[#fed1d0] to-pink-400">
          <img
            src="/chatgpt.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <h5 className="text-[15px] text-gray-800 font-medium">
            Design Engineer
          </h5>
          <div className="flex items-center gap-3">
            <div className="text-[10px] text-gray-400">
              <p className="font-medium">ChatGPT {">"} Remote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopComponentV2;
