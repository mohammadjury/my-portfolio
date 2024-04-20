"use client";
import React from "react";

interface NavButtonProps {
  name: string;
  id: string;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  const handleClick = () => {
    const element = document.getElementById(props.id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <button onClick={handleClick} className="text-md hover:text-gray-700">
      {props.name}
    </button>
  );
};

export default NavButton;
