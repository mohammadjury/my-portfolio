"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import myImage from "../../app/favicon.ico";

export default function Welcome() {
  const typingRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Computer Engineer",
        "Software Engineer",
        "Full Stack Developer",
      ],
      typeSpeed: 50,
      loop: true,
      cursorChar: "|",
    };

    const typed = new Typed(typingRef.current, options);
    const cursorElement = typed.cursor;
    cursorElement.style.fontSize = "30px";

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        id="welcome"
        className="container-full justify-center px-52  flex bg-gray-200 text-black w-screen h-screen"
      >
        <div className="pt-40 mr-52 ">
          <p className="text-4xl font-bold">Hi, I'm Mohammad Jury</p>
          <span ref={typingRef} className="text-4xl font-bold"></span>
          <p className="text-4xl font-bold">Based In Nablus</p>
        </div>

        <div className="pt-28">
          <img style={{ width: "400px" }} src={myImage.src}></img>
        </div>
      </div>
    </>
  );
}
