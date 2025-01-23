import React from "react";

const BottomComponent1 = () => {
  return (
    <div className="bg-white w-fit flex gap-3 p-3.5 rounded-xl absolute bottom-[110px] left-32 z-10">
      <div className="w-10 h-10 border p-1.5 rounded-full">
        <img src="figma.png" alt="" />
      </div>
      <div className="">
        <p className="text-[13px] font-medium">Product Designer Manager</p>
        <div className="text-[9.5px] text-gray-500">
          Figma <span className="w-1 h-1 rounded-full inline-flex bg-gray-400"></span> Full
          Time
        </div>
      </div>
    </div>
  );
};

export default BottomComponent1;
