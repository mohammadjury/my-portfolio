"use client";

import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="container-fullscreen p-2 justify-center items-center flex flex-col  "
    >
      <h1 className="text-3xl font-semibold py-10 flex justify-center">
        About Me
      </h1>
      <div className=" lg:container flex flex-col space-y-10 md:flex md:flex-row sm:space-y-0 gap-5 justify-center">
        <LeftDiv />
        <RightDiv />
      </div>
    </div>
  );
}
