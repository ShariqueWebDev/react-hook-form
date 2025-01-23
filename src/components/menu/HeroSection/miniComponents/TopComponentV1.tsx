import { ArrowUp } from 'lucide-react';
import React from 'react';

const TopComponentV1 = () => {
  return (
    <div>
       <div className="flex gap-3 items-center p-3 bg-white w-fit rounded-lg absolute top-12 left-32">
            <div className="w-12 h-12 overflow-hidden rounded-full bg-gradient-to-b from-[#dbb9f9] via-[#fed1d0] to-pink-400">
              <img
                src="/profile.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <h5 className="text-[15px] text-gray-600">Customer Success</h5>
              <div className="flex items-center justify-between gap-3">
                <div className="">
                  <p className="font-medium text-lg">7.89%</p>
                </div>
                <div className="flex items-center gap-0.5 p-0.5 rounded-full text-white bg-gradient-to-b from-[#dbb9f9] via-[#fed1d0] to-pink-400 w-8 h-4">
                  <p className="text-[10px]">50%</p>
                  <ArrowUp size={10}/>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default TopComponentV1;
