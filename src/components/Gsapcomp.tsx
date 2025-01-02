"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = () => {
  const containerRef = useRef<HTMLSpanElement | null>(null); // Use a ref to target the container

  useEffect(() => {
    const text = "Web Development"; // Your text
    const container = containerRef.current; // Access the container element

    // Clear any existing children (in case of re-renders)
    while (container?.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Split the text into characters and create spans
    const characters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // Handle spaces
      span.style.display = "inline-block";
      span.style.opacity = "1"; // Initially hidden for animation
      container?.appendChild(span);
      return span;
    });

    // GSAP animation
    gsap.from(characters, {
      opacity: 0,
      y: 50,
      // y: 0,
      duration: 0.5,
      stagger: 0.1, // Sequential animation for each character
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center" id="main">
      {/* The container for the animated text */}
      <span
        ref={containerRef}
        className=" text-[100px] font-medium w-fit"
        id="span-elem"
      ></span>
    </div>
  );
};

export default AnimatedText;
