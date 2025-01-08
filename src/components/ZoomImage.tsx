"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScaleSection = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null)

  useGSAP(() => {
    // Image scaling animation
    gsap.fromTo(
      imgRef.current,
      { scale: 1 }, // Initial scale
      {
        scale: 3, // Final scale (adjust for desired size)
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Start animation when section reaches the top
          end: "bottom+=1000 top", // Extend the scroll range for slower animation
          scrub: 1, // Smooth, slow scaling
          pin: true, // Keep section fixed during the animation
        },
      }
    );

    // Text flip and opacity animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, rotateY: 90 }, // Initial state: Invisible and flipped 90 degrees
      {
        opacity: 1, // Fully visible
        rotateY: 0, // No rotation (normal position)
        duration: 2, // Control animation duration
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Start animation when the section is pinned
          end: "bottom+=1000 top", // Keep synchronized with the image scaling
          scrub: 1, // Smooth animation tied to scroll
        },
      }
    );
  });

  return (
    <div className="h-[3000px] flex justify-center items-center">
      <div
        ref={sectionRef}
        className="bg-[#c0c4bf] flex justify-between items-center p-48 w-full h-screen"
      >
        <img ref={imgRef} src="/girl.png" alt="Girl" className="w-96 img" />
        <div ref={textRef} className="text text-9xl font-medium">
          web
        </div>
      </div>
    </div>
  );
};

export default StickyScaleSection;
