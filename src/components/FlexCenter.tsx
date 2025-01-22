"use client"; // Ensure this is a client component in Next.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCards() {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    
    // Create the timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-container", // Parent container
        start: "top 30%", // Start when the container hits the viewport center
        end: "bottom+=200%", // End based on scroll distance
        pin: true, // Pin the container during animation
        scrub: 1.5, // Smooth scrolling
        markers: true, // Debug markers
      },
    });

    // Animate each card sequentially
    cards.forEach((card:any, index) => {
      timeline.fromTo(
        card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6 }, // Adjusted duration
        index * 0.3 // Faster stagger
      );
    });
  }, []);

  // useGSAP(()=>{
  //   gsap.fromTo('.card', {
  //     y:50,
  //     opacity:0
  //   }, {
  //     y:0,
  //     opacity:1,
  //     duration:0.1,
  //     stagger:0.2,
  //     scrollTrigger:{
  //       trigger:".cards-container",
  //       start:'top 20%',
  //       end:"bottom+=1000px center",
  //       scrub:5,
  //       pin:true
  //     }
  //   })
  // })

  return (
    <div className="w-full h-[500vh] flex flex-col justify-center items-center bg-gray-100">
      <div className="cards-container border h-fit flex items-center gap-10 w-full max-w-[600px]">
        <div className="card bg-green-500 w-full h-[200px] text-white flex items-center justify-center text-2xl">
          Card 1
        </div>
        <div className="card bg-blue-500 w-full h-[200px] text-white flex items-center justify-center text-2xl">
          Card 2
        </div>
        <div className="card bg-purple-500 w-full h-[200px] text-white flex items-center justify-center text-2xl">
          Card 3
        </div>
        <div className="card bg-red-500 w-full h-[200px] text-white flex items-center justify-center text-2xl">
          Card 4
        </div>
      </div>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci eaque saepe ullam sed suscipit repellendus ipsum magnam eum nulla veniam dicta dignissimos neque harum culpa a ab magni quo vel, sunt qui doloribus quos minus odio. Adipisci libero, sed eius corrupti cupiditate ad aspernatur, labore hic natus incidunt at.
      </div>
    </div>
  );
}
