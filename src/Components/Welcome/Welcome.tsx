"use client";

import AutoTyping from "./AutoTyping";
import WelcomeButtons from "./WelcomeButtons";
import Addresses from "./Addresses";
import PersonalPhoto from "./PersonalPhoto";

export default function Welcome() {
  return (
    <>
      <div className="Welcome flex container-fullscreen h-full justify-center items-center">
        <div
          id="welcome"
          className="flex flex-col-reverse h-full md:flex-row items-center px-10 justify-center gap-2 sm:gap-10  text-white "
        >
          <div className="">
            <AutoTyping />
            <WelcomeButtons />
            <Addresses />
          </div>
          <PersonalPhoto />
        </div>
      </div>
    </>
  );
}
