import React from "react";

const BottomComponent2 = () => {
  return (
    <div className="bg-white w-fit flex items-center gap-3 p-3 rounded-xl absolute bottom-[110px] right-32 z-10">
      <div className="w-14 h-14 border p-1.5 rounded-full">
        <img src="messenger.png" alt="" />
      </div>
      <div className="">
        <p className="text-2xl font-medium">80%</p>
        <div className="text-[9.5px] text-gray-500">
          More{" "}
          {/* <span className="w-1 h-1 rounded-full inline-flex bg-gray-400"></span>{" "} */}
          Effecient
        </div>
      </div>
    </div>
  );
};

export default BottomComponent2;
