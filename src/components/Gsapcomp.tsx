"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RotatingWords = () => {
  const textRef = useRef(null); // For "GA"
  const text1Ref = useRef(null); // For "LLE"
  const text2Ref = useRef(null); // For "RIE"

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textGA = "GA"; // First word
      const textLLE = "LLE"; // Second word
      const textRIE = "RIE"; // Third word

      const containerGA = textRef.current;
      const containerLLE = text1Ref.current;
      const containerRIE = text2Ref.current;

      // Clear children in all containers
      const containers: (HTMLElement | null | undefined)[] = [
        containerGA,
        containerLLE,
        containerRIE,
      ];
      containers.forEach((container) => {
        while (container?.firstChild) {
          container.removeChild(container.firstChild);
        }
      });

      // Create spans for GA
      const charactersGA:(HTMLSpanElement[] | null) = textGA.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        containerGA?.appendChild(span);
        return span;
      });

      // Create spans for LLE
      const charactersLLE = textLLE.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        containerLLE?.appendChild(span);
        return span;
      });

      // Create spans for RIE
      const charactersRIE = textRIE.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        containerRIE?.appendChild(span);
        return span;
      });

      // Define the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerGA, // Animation triggers at "GA"
          start: "top center", // When the top of the trigger hits the center of the viewport
          end: "+=100%", // Trigger stays active until scrolling past
          scrub: true,
          pin: true, // Pinning ensures the animation happens in place
        },
      });

      // Add animations for GA
      tl.fromTo(
        containerGA,
        { opacity: 0, rotateY: 90 },
        { opacity: 1, rotateY: 0, duration: 1 }
      ).from(
        charactersGA,
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          ease: "power3.out",
        },
        "<"
      );

      // Add animations for LLE
      tl.fromTo(
        containerLLE,
        { opacity: 0, rotateY: 90 },
        { opacity: 1, rotateY: 0, duration: 1 }
      ).from(
        charactersLLE,
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          ease: "power3.out",
        },
        "<"
      );

      // Add animations for RIE
      tl.fromTo(
        containerRIE,
        { opacity: 0, rotateY: 90 },
        { opacity: 1, rotateY: 0, duration: 1 }
      ).from(
        charactersRIE,
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          ease: "power3.out",
        },
        "<"
      );
    }, textRef);

    return () => ctx.revert(); // Cleanup animations
  }, []);

  return (
    <div className="min-h-[300vh] flex flex-col justify-center items-center ">
      <div
        ref={textRef}
        className="text-[10rem] font-medium text-center text-gray-700"
      ></div>
      <div
        ref={text1Ref}
        className="text-[10rem] font-medium text-center text-gray-700 ml-96"
      ></div>
      <div
        ref={text2Ref}
        className="text-[10rem] font-medium text-center text-gray-700 ml-"
      ></div>
    </div>
  );
};

export default RotatingWords;
