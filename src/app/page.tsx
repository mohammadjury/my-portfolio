import React from "react";

import Welcome from "../Components/Welcome/Welcome";
import AboutMe from "../Components/AboutMe/AboutMe";
import Projects from "../Components/Projects/Projects";
import ContactMe from "../Components/ContactMe/ContactMe";

export default function Home() {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}
