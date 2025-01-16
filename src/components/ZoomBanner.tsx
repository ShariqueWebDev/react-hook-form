"use client";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ZoomBanner = () => {
  // BANNER SECTION ANIMATION
  useEffect(() => {
    const description = document.querySelector<HTMLElement>(".description");
    if (!description) return;

    const text = description.innerText.split("");
    description.innerHTML = text
      .map((word, index) => {
        return `<span class="char">${word === " " ? "&nbsp;" : word}</span>`;
      })
      .join("");

    const char = document.querySelectorAll<HTMLElement>(".char");

    gsap.from(char, {
      rotateY: "-90deg",
      duration: 0.2,
      stagger: 0.05,
      opacity: 0.8,
      x: "50px",
    });

    // Animate the heading
    gsap.to(".heading", {
      //   scale: 1.1,
      duration: 1,
      y: "-800px",
      scrollTrigger: {
        trigger: ".heading", // Element that triggers the animation
        start: "top 20%", // Start when the top of .heading reaches the center of the viewport
        end: "bottom+=1000px top", // Optional: End when the top of .heading reaches 100px from the top
        scrub: true, // Smoothly animate as the user scrolls
        // markers: true, // Enable markers to debug (remove in production)
        pin: true,
      },
    });

    // Animate the images
    gsap.to(".imgTag", {
      scale: 1.5,
      duration: 1,
      y: "-500px",
      scrollTrigger: {
        trigger: ".imgTag", // Element that triggers the animation
        start: "top center", // Start when .imgTag enters the viewport
        end: "bottom+=1000px top", // Optional: End at the center of the viewport
        scrub: true, // Smooth scrolling animation
        // markers: true, // Enable markers to debug (remove in production)
        pin: true,
      },
    });
    gsap.to(".imgTag1", {
      scale: 1.4,
      duration: 1,
      y: "-800px",
      scrollTrigger: {
        trigger: ".imgTag1", // Element that triggers the animation
        start: "top center", // Start when .imgTag enters the viewport
        end: "bottom+=1000px top", // Optional: End at the center of the viewport
        scrub: true, // Smooth scrolling animation
        // markers: true, // Enable markers to debug (remove in production)
        pin: true,
      },
    });
  }, []);

  

  return (
    <ReactLenis root>
      <div className="h-[300vh] w-full">
        <div className="h-screen !overflow-hidden relative w-full bg-[#323232] -z-10">
          <h1 className="text-9xl max-sm:text-4xl mt-20 max-sm:mt-36 uppercase text-gray-200 text-center flex justify-center w-full absolute !z-30 heading">
            <p className="description">Web Development</p>
          </h1>
          <div className="absolute max-sm:static scale-100 bottom-0 z-30 !overflow-hidden -translate-x-[50%] left-[50%] imgTag">
            <img src="/girl1.png" alt="" className="w-[450px] h-full " />
          </div>
          <div className="absolute -bottom-20 max-sm:hidden z-10 !overflow-hidden -translate-x-[50%] left-[50%]">
            <img
              src="/elli-bg.jpg"
              alt=""
              className="w-[450px] h-full rounded-t-full"
            />
          </div>
          <div className="absolute bottom-0 max-sm:scale-110 !max-sm:top-28 w-full flex justify-center -translate-x-[50%] left-[50%] imgTag1">
            <img src="/plant.png" alt="" className="!w-[1000px] h-full " />
          </div>
        </div>
        <div className="h-full bg-[#1d1d1d] z-50 py-48 section2">
          <div className="w-1/2 max-sm:w-full text-gray-300 px-10 ">
            <div className="text-7xl uppercase">
              <h1 className="heading1 relative left-32">Leidenschaft</h1>
              <h1 className="heading2 relative left-32 mt-5">und Präzision</h1>
            </div>
            <p className="para1 relative left-72 pt-20 w-[350px]">
              Hey, ich bin Nicki und seit 2017 widme ich mich in meinem Studio
              in Düsseldorf dem Tätowieren. Meine Expertise liegt im Mandala-
              und Traditionalstil, wobei ich immer offen für neue kreative Ideen
              bin, damit wir zusammen dein perfektes Tattoo finden.
            </p>
          </div>
          <div className="w-1/2 max-sm:w-full "></div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default ZoomBanner;
