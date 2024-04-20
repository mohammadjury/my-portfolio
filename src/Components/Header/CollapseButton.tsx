import React from "react";

interface CollapseButtonProps {
  toggleMenu: () => void;
}

export default function CollapseButton({ toggleMenu }: CollapseButtonProps) {
  return (
    <>
      <button
        id="toggle-menu"
        className=" sm:hidden text-white focus:outline-none "
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </>
  );
}
