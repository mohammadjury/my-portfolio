"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AuttoTyping() {
  const typingRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 50,
      loop: true,
      cursorChar: "",
    };

    const typed = new Typed(typingRef.current, options);
    const cursorElement = typed.cursor;
    // cursorElement.style.fontSize = "30px";

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex">
        <p>&nbsp; </p>

        <span ref={typingRef} className=" "></span>
      </div>
    </>
  );
}
