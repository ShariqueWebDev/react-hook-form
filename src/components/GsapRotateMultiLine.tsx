"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapRotateMultiLine = () => {
  useEffect(() => {
    // Select all description elements
    const descriptions = document.querySelectorAll<HTMLElement>(".description");
    if (!descriptions.length) return;

    // Iterate over each description element
    descriptions.forEach((desc) => {
      // Split the description text into individual characters
      const text = desc.innerText.split("");
      desc.innerHTML = text
        .map(
          (char) =>
            `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");

      const chars = desc.querySelectorAll<HTMLElement>(".char");

      // GSAP Animation with ScrollTrigger
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: desc,
          start: "top 40%", // Trigger animation when the text reaches the center of the viewport
          end: "bottom+=2500px", // Animation ends as the text leaves the viewport
          scrub: 1,
          pin: true,
        },
      });

      timeline.to(chars, {
        rotateY: 90,
        opacity: 0,
        duration: 0.3, // Faster animation
        stagger: 0.02, // Animate characters more quickly
        ease: "power1.inOut",
        overwrite: "auto", // Ensure no conflicting animations
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <p className="description text-9xl">Hello World!</p>
      <p className="description text-9xl">Welcome to GSAP!</p>
      <p className="description text-9xl">Animating Text!</p>
    </div>
  );
};

export default GsapRotateMultiLine;
