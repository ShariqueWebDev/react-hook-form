"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const ReactGsap = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [firstRotate, setFirstRotate] = useState(0);

  const gsapRef = useRef(null);

  const randomValue = gsap.utils.random(-500, 500, 100);
  const randomRotate = gsap.utils.random(-360, 360, 0);

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: firstValue, 
      rotate: firstRotate,
      duration: 1,
      delay: 0.3,
    });
  }, [firstValue, firstRotate]);

  return (
    <div
      id="main"
      className="h-screen w-full bg-black p-5 flex flex-col gap-5 justify-center items-center"
    >
      {/* <div className="flex gap-10">
        <div className="container border-white border-2 p-5">
          <div className="circle w-[250px] h-[250px] bg-[crimson]"></div>
          <div className="box w-[250px] h-[250px] bg-[lightseagreen] rounded-full mt-5"></div>
        </div>
        <div className="container2 border-white border-2 p-5">
          <div className="circle w-[250px] h-[250px] bg-[crimson]"></div>
          <div className="box w-[250px] h-[250px] bg-[lightseagreen] rounded-full mt-5"></div>
          </div>
          </div> */}

      <div
        ref={gsapRef}
        className="circle w-[250px] h-[250px] bg-[crimson]"
      ></div>
      <button
        className="px-10 py-2 rounded-md bg-gradient-to-r from-[crimson] to-red-400 text-white font-medium"
        onClick={() => {
          setFirstValue(randomValue);
          setFirstRotate(randomRotate);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default ReactGsap;
