import { ArrowUp } from "lucide-react";
import React from "react";
import TopComponentV1 from "./miniComponents/TopComponentV1";
import TopComponentV2 from "./miniComponents/TopComponentV2";
import MiddleComponentV1 from "./miniComponents/MiddleComponentV1";
import MiddleComponent2 from "./miniComponents/MiddleComponent2";
import BottomComponent1 from "./miniComponents/BottomComponent1";
import BottomComponent2 from "./miniComponents/BottomComponent2";

const Hero = () => {
  return (
    <div className="templateContainer pt-28 mb-20 relative ">
      <div className="h-[550px] relative w-full border rounded-xl  bg-gradient-to-br from-white via-[#fed1d0] to-pink-400">
        <div className="text-7xl text-gray-800 font-[400] text-center mt-28">
          <h1 className="">
            Modernizing the Job <br /> Search Experience
          </h1>
          <p className="text-[16px] mt-5">
            Search & find your dream job now easier than ever, you can <br />{" "}
            simply browse & find a job if you need it
          </p>
        </div>
        <div className="">
          <TopComponentV1 />
          <TopComponentV2 />
        </div>
        <div className="">
          <MiddleComponentV1 />
          <MiddleComponent2 />
        </div>
        <div className="">
          <BottomComponent1 />
          <BottomComponent2 />
        </div>
        <div className="absolute bottom-0 z-0">
          <img src="/wave.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
