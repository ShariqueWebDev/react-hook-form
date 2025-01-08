"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapVideo = () => {
  const videoRef = useRef(null);
  const textContainRef = useRef(null);

  useGSAP(() => {
    gsap.from(videoRef.current, {
      y: 650,
      duration: 5,
      ease: "none",
      width: "100%",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 100%",
        end: "top 65%",
        scrub: 1.5,
        pin:true
      },
    });
  });

  useGSAP(() => {
    gsap.from(textContainRef.current, {
      y: 650,
      duration: 5,
      ease: "none",
      scrollTrigger: {
        trigger: textContainRef.current,
        start: "top 100%",
        end: "top 65%",
        scrub: 1.5,
      },
    });
  });

  return (
    <div className="h-[3000px]">

      <div className="lg:flex lg:flex-row flex-col my-20 mx-10 gap-10 max-sm:items-center relative parentContainer">
        <div className="w-1/2" ref={videoRef}>
          <video
            className="w-full rounded-md  overflow-x-hidden"
            autoPlay
            loop
            muted
          >
            <source
              // src="/sectionVideo.mp4"
              src="/a.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:w-1/2 w-full mt-5 lg:mt-0" ref={textContainRef} >
          <p className="bg-secondary w-fit bg bg-gray-200  text-xs p-1.5 mb-3 font-medium rounded-md">
            Manufacture
          </p>
          <div className="">
            <h1 className="text-4xl max-sm:text-3xl heading-all mb-5 text-gray-800">
              <span className="text-primary  font-medium">
                Innovating Precision:
              </span>{" "}
              <span className="!font-semibold">
                Inside Advanced Manufacturing Process
              </span>
            </h1>
            <div className="space-y-4">
              <p className=" text-gray-600 content-all text-sm font-light">
                Step inside the world of Kostevo, where cutting-edge technology
                meets unparalleled expertise in precision machining. Kostevo has
                been a leader in designing, including hydrodynamic bearings,
                valve-tube fittings and specialized seals and any kind of
                precision work.
              </p>
              <p className=" text-gray-600 content-all text-sm font-light">
                Step inside the world of Kostevo, where cutting-edge technology
                meets unparalleled expertise in precision machining. Kostevo has
                been a leader in designing, including hydrodynamic bearings,
                valve-tube fittings and specialized seals and any kind of
                precision work.
              </p>
              <p className=" text-gray-600 content-all text-sm font-light">
                Step inside the world of Kostevo, where cutting-edge technology
                meets unparalleled expertise in precision machining. Kostevo has
                been a leader in designing, including hydrodynamic bearings,
                valve-tube fittings and specialized seals and any kind of
                precision work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapVideo;
