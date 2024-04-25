// Home.js
import {useEffect} from "react";
import { HeroSection } from "../sections/HeroSection";
import { About } from "../sections/About";
import { CallToAction } from "../sections/CallToAction";
import { FAQsection } from "../sections/FAQsection";
import { gsap , Power3} from 'gsap'
import { ServicesSection } from "../sections/ServicesSection";

export const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    return () => {
      tl.kill(); // Ensure to kill the timeline on unmount
    };
  }, []);

  let tl = new gsap.timeline()
  let ease = Power3
  return (
    <section>
      <HeroSection timeline={tl} ease = { ease }  />
      <About timeline = {tl} />
      < ServicesSection />
      <CallToAction />
      <FAQsection />
    </section>
  );
};
