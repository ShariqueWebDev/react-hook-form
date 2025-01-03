"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuresData } from "../../constant/featureData";
import ReactLenis from "@studio-freight/react-lenis";

gsap.registerPlugin(ScrollTrigger);

const Features = ({ features, showTitle = true }: any) => {
  const [featuresState, setFeatures] = useState(features || featuresData);

  useEffect(() => {
    const features = document.querySelectorAll<HTMLElement>(".feature-item");

    features.forEach((feature, index) => {
      const description = feature.querySelector<HTMLElement>(
        ".reveal-description"
      );

      if (!description) return;

      // Split the description text into individual characters
      const text = description.innerText.split("");
      description.innerHTML = text
        .map((char) => `<span class="char">${char}</span>`)
        .join(""); // Wrap each character in a span

      // Gradients to transition through (bottom to top)
      const gradientColors = [
        `linear-gradient(to top,#250b50, #250b50, black, black )`,
        `linear-gradient(to top,   #f4a4f4,  #fff, #f4a4f4, #250b50 )`,
        `linear-gradient(to bottom, #f4a4f4, #250b50, black, black)`,
      ];

      const characters = description.querySelectorAll<HTMLElement>(".char");

      // Create a timeline for smoother gradient transitions
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: feature,
          start: "top 10%",
          end: "+=1300px", // Extended pin duration for slower animation
          scrub: 1, // Smooth scrolling
          pin: true, // Pin the section
          markers: true,
        },
      });

      // Add gradient change animations to the timeline
      gradientColors.forEach((gradient, i) => {
        timeline.to(description, {
          backgroundImage: gradient,
          duration: 0.5, // Adjust duration for slower transitions
          ease: "power1.inOut",
        });
      });

      // Fade out the text character by character
      timeline.to(
        characters,
        {
          opacity: 0, // Fade out characters
          //   stagger: 0.05, // Delay between each character fade-out
          duration: 0.5,
          ease: "power2.inOut",
        },
        "+=0" // Delay after gradient transitions
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <section id="features" className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {showTitle && (
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Explore Our <span className="text-gray-500">Features</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Seamlessly integrate powerful tools to transform your business.
              </p>
            </div>
          )}

          <div className="space-y-16">
            {featuresState.map((feature: any, index: number) => (
              <div
                key={index}
                className={`feature-item flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className=" space-y-4 flex justify-center items-center ">
                  <p
                    style={{
                      overflow: "hidden",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundImage: "linear-gradient(to top, black)",
                    }}
                    className="w-[70%] reveal-description text-gray-400 md:text-6xl text-base font-bold text-left"
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
    </ReactLenis>
  );
};

export default Features;
