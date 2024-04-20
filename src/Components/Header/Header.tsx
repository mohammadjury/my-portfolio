"use client";
import React, { useState, useEffect, useRef } from "react";

import NavButton from "./NavButton";
import CollapseButton from "./CollapseButton";
import CollapseMenu from "./CollapseMenu";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const headerRef = useRef<HTMLDivElement>(null);
  const scrollThreshold = 850;

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        if (window.scrollY >= scrollThreshold) {
          header.style.backgroundColor = "#6f00ff";
          header.style.transition = "1s ease";
        } else {
          header.style.backgroundColor = "transparent";
          header.style.transition = "1s ease";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        id="header"
        className="header container-full text-white font-semibold py-4 fixed top-0 left-0 right-0 z-10"
      >
        <div className="container-full px-2 mx-auto flex justify-between sm:items-center">
          <div>
            <h1 className="text-2xl flex-col items-start">Mohammad Jury</h1>

            <CollapseMenu isMenuOpen={isMenuOpen} />
          </div>
          <nav>
            <CollapseButton toggleMenu={toggleMenu} />
            <ul className="hidden sm:flex space-x-4 self-center">
              <li>
                <NavButton name="Welcome" id="welcome" />
              </li>
              <li>
                <NavButton name="About Me" id="aboutme" />
              </li>
              <li>
                <NavButton name="Projects" id="projects" />
              </li>
              <li>
                <NavButton name="Contact Me " id="contactme" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
