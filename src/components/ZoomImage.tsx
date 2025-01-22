"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScaleSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const widthRef = useRef(null);

  useGSAP(() => {

    gsap.fromTo(
      textRef.current,
      { opacity: 0, rotateY: -90,  }, // Initial state: Invisible and flipped 90 degrees
      {
        opacity: 1, // Fully visible
        rotateY: 0, // No rotation (normal position)
        duration: 2, // Control animation duration
        stagger:0.3,
        fontSize:"10rem",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Start animation when the section is pinned
          end: "bottom+=1000 top", // Keep synchronized with the image scaling
          scrub: 1, // Smooth animation tied to scroll
        },
      }
    );
    gsap.fromTo(
      widthRef.current,
      {
        width: 450,
        // height:350
      },
      {
        width: "100%",
        height:"100%",
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=1000 top", // Keep synchronized with the image scaling
          scrub: 1,
          pin: true,
        },
      }
    );
  });

  return (
    <div className="h-[3000px] flex justify-center items-center">
      <div
        ref={sectionRef}
        className="flex justify-center items-center  !w-full h-screen"
      >
        <div
          className=" flex justify-end items-center bg-[#c0c4bf] overflow-hidden relative"
          ref={widthRef}
          style={{
            backgroundImage:"url(/girl.jpg)",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"

          }}
        >
          <div
            ref={textRef}
            className="text text-[5rem] max-sm: font-medium  text-gray-800"
          >
            <p className=" max-sm:text-6xl max-sm:ml-16">
              <span className="spanTag">G</span>
              <span className="spanTag">A</span>
            </p>
            <p className="ml-44 max-sm:ml-48 max-sm:text-6xl">
              <span className="spanTag">L</span>
              <span className="spanTag">E</span>
              <span className="spanTag">R</span>
            </p>
            <p className="ml-96 max-sm:text-6xl">
              <span className="spanTag">I</span>
              <span className="spanTag">E</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScaleSection;
