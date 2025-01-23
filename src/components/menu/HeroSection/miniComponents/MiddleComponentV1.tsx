import { MapPin } from "lucide-react";
import React from "react";

const MiddleComponentV1 = () => {
  return (
    <div className="bg-white w-fit p-3 absolute bottom-60 left-5 rounded-xl z-10">
      {/* 1 line section */}
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full border overflow-hidden">
          <img src="/spotify.jpg" alt="" className="" />
        </div>
        <div className="flex gap-5">
          <div className="font-medium">
            <p className="font-medium text-[15px]">Product Designer</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 text-[11px]">Spotify</p>
              <div className="w-3 h-3">
                <img src="verified.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-7 h-7 border p-0.5 rounded-full bg-white">
            <img src="/save.png" alt="" />
          </div>
        </div>
      </div>
      {/* 2 line section */}
      <div className=" flex gap-1 mt-2.5">
        <div className="">
          <p className="text-[10.5px] border w-fit px-2 font-medium rounded-full text-gray-500">
            Full Time
          </p>
        </div>
        <div className="">
          <p className="text-[10.5px] border w-fit px-2 font-medium rounded-full text-gray-500">
            Remote
          </p>
        </div>
      </div>
      {/* 3 line section */}
      <div className="flex items-end gap-3 mt-2">
        <div className="flex gap-1">
          <div className="">
            <MapPin size={14} color="#6b7280" />
          </div>
          <p className="text-[10.5px] text-gray-500">Mumbai, Masjid bunder</p>
        </div>
        <div className="text-sm flex">
          <p className="font-medium ">$152K</p>
          <div className="text-gray-500 text-[9px]">months</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleComponentV1;
