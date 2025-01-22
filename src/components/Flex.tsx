"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Flex = () => {
  useGSAP(() => {
    gsap.to([".pinned-section", ".pinned-section1", ".pinned-section2",".pinned-section3", ".pinned-section4"], {
      backgroundColor: "red",
      width: "200px",
      translateX:"-1000%",
      duration: 3,
      scrollTrigger: {
        trigger: ".section-container",
        start: "top 20%",
        end: "bottom+=1000px center",
        pin: true,
        scrub: 5,
        markers: true,
      },
    });
  }, []);

  return (
    <div>
      <div className="container h-[200vh]">
        {/* <div className="section bg-gray-500 !w-full shrink-0 h-[200px]">Normal Section</div> */}
        <div className="flex justify-start  gap-5 section-container h-[300px] border mt-40 w-full overflow-hidden">
          <div className="pinned-section shrink-0  h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned! First Section
          </div>
          <div className="pinned-section1 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section2 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section3 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This section will be pinned!
          </div>
          <div className="pinned-section4 shrink-0 h-[200px] bg-[green] w-full text-white flex justify-center items-center">
            This last section will be pinned!
          </div>
        </div>
        {/* <div className="section1">Another Normal Section</div> */}
      </div>
    </div>
  );
};

export default Flex;
