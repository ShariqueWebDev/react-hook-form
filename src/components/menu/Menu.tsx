"use client";
import React, { useEffect, useRef, useState } from "react";
import "./menu.css";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

const Menu = () => {
  const container = useRef(null);

  const tl = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", {
        y: 75,
      });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <>
    
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href={"/"}>CodeRun</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className="">Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href={"/"}>CodeRun</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p className="">Close</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p className="">&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks?.map((link: MenuLinkProps, index: number) => {
              return (
                <>
                  <div className="menu-link-item" key={index}>
                    <div className="menu-link-item-holder" onClick={toggleMenu}>
                      <Link href={link?.path}>{link?.label}</Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Behance &#8599;</a>
              <a href="#">Dribbble &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>info@coderun.com</p>
              <p>23472 232 343</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p className="">View Showreel</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Menu;
