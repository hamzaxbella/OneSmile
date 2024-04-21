// Home.js
import React from "react";
import { HeroSection } from "../sections/HeroSection";
import { About } from "../sections/About";
// import { ServicesSection } from "../sections/ServicesSerction";
import { CallToAction } from "../sections/CallToAction";
import { FAQsection } from "../sections/FAQsection";

export const Home = () => {
  return (
    <section>
      <HeroSection />
      <About />
      {/* <ServicesSection /> */}
      <CallToAction />
      <FAQsection />
    </section>
  );
};
