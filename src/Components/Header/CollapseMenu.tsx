import React from "react";
import NavButton from "./NavButton";

interface CollapseMenuProps {
  isMenuOpen: boolean;
}

export default function CollapseMenu({ isMenuOpen }: CollapseMenuProps) {
  return (
    <>
      <div
        className={`flex sm:hidden mt-2 space-x-4 ${
          isMenuOpen ? " opacity-100 flex " : " opacity-0 hidden"
        }`}
      >
        <div>
          <ul className="flex flex-col space-y-2 ">
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
        </div>
      </div>
    </>
  );
}
