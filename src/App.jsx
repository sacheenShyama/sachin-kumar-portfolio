import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SplashCursor from "../CursorAnimation/SplashCursor/SplashCursor";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <ShowcaseSection /> */}
      <FeatureCards />
      <ExperienceSection />
      <Skills />
      <Contact />
      <Footer />
      <SplashCursor />
    </>
  );
};

export default App;
