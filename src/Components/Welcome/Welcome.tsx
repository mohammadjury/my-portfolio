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
        className="justify-center xl:mx-72 lg:mx-32 md:mx-20 sm:mx-10 xs:mx-5 flex text-black justify-center h-screen"
      >
        <div className="container pt-40 mr-52">
          <div className=" ">
            <p className="text-4xl font-bold mb-5">Hi, I'm Mohammad Jury</p>
            <span ref={typingRef} className="text-4xl font-bold"></span>
            <p className="text-4xl font-bold my-5">Based In Nablus</p>
          </div>
          <p>
            I'm a Computer Engineer, Interests in Software Engineering,
            especially Full Stack Development.
          </p>
          <div className="my-10 flex">
            <button className="w-1/3 py-3 px-2 mr-10 bg-black hover:bg-gray-900 text-white font-semibold rounded shadow-md">
              Some Projects
            </button>

            <button className="py-3 px-2 w-1/3 bg-black hover:bg-gray-900 text-white font-semibold rounded shadow-md">
              Contact Me
            </button>
          </div>
          <div className="border-l-4 font-semibold p-2 border-black">
            <p>mohammadjury00@gmail.com</p>
            <p>+970-595700706</p>
            <p>Palestine, Nablus</p>
          </div>
        </div>

        <div className=" pt-28">
          <img style={{ width: "400px" }} src={myImage.src}></img>
        </div>
      </div>
    </>
  );
}
