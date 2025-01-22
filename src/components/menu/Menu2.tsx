"use client";
import gsap from "gsap";
import React, { useState } from "react";

type MenuLinkProps = {
  path: string;
  label: string;
};

const menuLinks: MenuLinkProps[] = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/lab", label: "Lab" },
];

const Menu2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const timeline = gsap.timeline();

  const closeMenu = () => {
    const context = gsap.context(() => {
      gsap.to(".menu_logo", {
        bottom: "-32px",
        stagger: 0.05,
        ease: "power4.inOut",
      });
      timeline
        .to(".menu_item", {
          top: "-100vh",
          stagger: 0.05,
        })
        .to(".overlay", {
          width: "50vw",
          height: "50vh",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(".overlay", {
          height: "0%",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(".img2", {
          // width:"500px"
          top: "-100%",
        })
        .to(".img1", {
          bottom: "-100%",
        })
        .to(".img1", {
          width: "300px",
        })
      setToggleMenu(false);
    });
  };

  const openMenu = () => {
    const context = gsap.context(() => {
      gsap.to(".main_menu", {
        display: "flex",
      });
      gsap.to(".menu_logo", {
        delay: 0.75,
        bottom: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power4.inOut",
      });
      timeline
        .to(".overlay", {
          height: "50%",
          duration: 0.4,
          ease: "power4.inOut",
        })
        .to(".overlay", {
          height: "100vh",
          width: "100vw",
          ease: "power2.inOut",
        })
        .to(".menu_item", {
          top: 0,
          //   left:0,
          rotate: 0,
          stagger: 0.3,
        })
        .to(".img2", {
          // width:"500px"
          top: 0,
        })
        .to(".img1", {
          bottom: "40px",
        })
        .to(".img1", {
          width: "500px",
        });
      setToggleMenu(true);
    });
  };

  return (
    <header className="">
      <div className="flex justify-between w-full fixed z-20">
        <div className="h-fit  overflow-hidden pl-4 pt-4 flex gap-[2px] font-barlow text-xl uppercase ">
          <span className="-bottom-32 relative duration-300 menu_logo !font-bold">
            Build
          </span>
          <span className="-bottom-32 relative duration-300 menu_logo !font-bold">
            With
          </span>
          <span className="-bottom-32 relative duration-300 menu_logo !font-bold">
            CodeRun
          </span>
        </div>
        <div className="">
          <button
            onClick={() => {
              openMenu();
            }}
            className={`text-yellow-300 absolute z-20 text-xl font-medium duration-500 top-0 p-5 ${
              toggleMenu === false ? "right-0" : "-right-96"
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => {
              closeMenu();
            }}
            className={`text-black absolute z-20 text-xl font-medium duration-500 top-0 p-5 ${
              toggleMenu === true ? "right-0" : "-right-96"
            }`}
          >
            Close
          </button>
        </div>
      </div>
      <div className="main_menu absolute h-screen w-screen flex justify-center items-center">
        <div className="overlay absolute bg-yellow-300 w-1/2 h-0">
          <div className="absolute text-[7vw] bottom-0 left-0 overflow-hidden w-full flex">
            <div className=" flex flex-col w-full">
              {menuLinks.map((item: MenuLinkProps, index: number) => {
                return (
                  <>
                    <p className="overflow-hidden flex-col flex w-full">
                      <span className="menu_item font-sans font-medium relative px-5 pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-yellow-200 w-1/2">
                        {item?.label}
                      </span>
                    </p>
                  </>
                );
              })}
            </div>
            <div className="relative right-[500px] z-50 ">
              <div className=" img1 w-[300px] bottom-[100%] absolute rounded-md overflow-hidden">
                <img src="/b1.jpg" alt="" className="w-full" />
              </div>
              <div className=" img2 max-w-[300px] w-full relative  -top-[500px] !-right-96 rounded-l-md overflow-hidden">
                <img src="/b2.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu2;
