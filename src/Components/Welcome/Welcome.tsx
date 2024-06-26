"use client";

import AutoTyping from "./AutoTyping";
import WelcomeButtons from "./WelcomeButtons";
import Addresses from "./Addresses";
import PersonalPhoto from "./PersonalPhoto";
import SocialAccounts from "./SocialAccounts";

export default function Welcome() {
  return (
    <>
      <div className="Welcome flex container-fullscreen h-full justify-center items-center">
        <div
          id="welcome"
          className="flex flex-col h-full md:flex-row items-center px-10 justify-center gap-2 sm:gap-10  text-white "
        >
          <PersonalPhoto />
          <div className="">
            <AutoTyping />
            <WelcomeButtons />
            <SocialAccounts />
            <Addresses />
          </div>
        </div>
      </div>
    </>
  );
}
