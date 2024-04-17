"use client";
import React from "react";

import NavButton from "./NavButton";

export default function Header() {
  return (
    <>
      <header className="  text-black font-semibold py-4 fixed top-0 left-0 right-0 z-10">
        <div className="container-full px-10 mx-auto flex justify-between items-center">
          <h1 className="text-3xl">Mohammad Jury</h1>
          <nav>
            <ul className="flex space-x-4">
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
