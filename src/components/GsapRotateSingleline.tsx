"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapReusableComp = () => {
  useEffect(() => {
    // Select the description element correctly
    const desc = document.querySelector<HTMLElement>(".description");
    if (!desc) return;

    // Split the description text into individual characters
    const text = desc.innerText.split("");
    desc.innerHTML = text
      .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
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
      // y:50,
      rotateY:90,
      opacity: 0,
      duration: 0.3, // Faster animation
      stagger: 0.02, // Animate characters more quickly
      ease: "power1.inOut",
      overwrite: "auto", // Ensure no conflicting animations
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <p className="description text-9xl">Hello World!</p>

    </div>
  );
};

export default GsapReusableComp;
