import React from "react";

const MiddleComponent2 = () => {
  return (
    <div className="bg-white w-fit p-3 absolute bottom-60 right-5 rounded-xl z-10">
      <h5 className=" text-sm font-medium ">Top Job Categories</h5>
      <hr className="mt-1" />
      <div className="">
        <div className="flex items-end text-[9px] text-gray-600 gap-1 mt-1.5">
          <div className=" flex justify-center items-end w-10 h-[45px] pb-1 rounded-t-md bg-[#fdded8]">
            65%
          </div>
          <div className=" flex justify-center items-end w-10 h-[59px] pb-1 rounded-t-md bg-[#ffdbea] ">
            79%
          </div>
          <div className=" flex justify-center items-end w-10 h-[28px] pb-1 rounded-t-md bg-[#fadeff] ">
            48%
          </div>
          <div className=" flex justify-center items-end w-10 h-[73px] pb-1 rounded-t-md bg-gradient-to-b from-[#fcaeb2] via-[#fb69a3] to-[#c983d3] ">
            93%
          </div>
        </div>
        <hr className="" />
        <div className="mt-2 flex gap-1">
          <div className="flex gap-1 items-center ">
            <p className="text-[9px] text-gray-400">Product</p>
            <p className="bg-[#fdded8] w-2 h-2 rounded-full "></p>
          </div>
          <div className="flex gap-1 items-center ">
            <p className="text-[9px] text-gray-400">Content</p>
            <p className="bg-[#ffdbea] w-2 h-2 rounded-full "></p>
          </div>
          <div className="flex gap-1 items-center ">
            <p className="text-[9px] text-gray-400">Finance</p>
            <p className="bg-[#fadeff] w-2 h-2 rounded-full "></p>
          </div>
          <div className="flex gap-1 items-center ">
            <p className="text-[9px] text-gray-400">Design</p>
            <p className="bg-gradient-to-b from-[#fcaeb2] via-[#fb69a3] to-[#c983d3] w-2 h-2 rounded-full "></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleComponent2;
