import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Animate = () => {
  useGSAP(() => {
    gsap.from("#logo", {
      opacity: 0,
      y: 15,
      duration: 1,
      delay: 1.5,
    });
    gsap.from(".nav-links", {
      opacity: 0,
      y: 30,
      duration: 1.3,
      stagger: 0.1,
      delay: 2,
    });
  });

  // hero section.
  useGSAP(
    () => {
      gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, delay: 1 });
      gsap.from(".hero-description", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5,
      });
      gsap.from(".hero-btns", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2,
        stagger: 0.2,
      });
      gsap.from("#hero-img", {
        height: 0,
        duration: 2,
        ease: "expo.inOut",
      });
    },
    { scope: "#hero-section" }
  );

  //   Animating section titles.

  const sectionTitlesRef = useRef([]);

  useEffect(() => {
    sectionTitlesRef.current = document.querySelectorAll(".section-title");
  }, []);

  useGSAP(() => {
    sectionTitlesRef.current.forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          toggleActions: "play play play play", // Prevents the animation from being reversed
          start: "top 100%",
          end: "botton 60%",
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        duration: 1,
      });
    });
  }, []);

  //   about section.
  useGSAP(
    () => {
      gsap.from("#about-img", {
        scrollTrigger: {
          trigger: "#about-img",
          toggleActions: "play none none none", // Prevents the animation from being reversed
          start: "top 80%",
          end: "bottom 130%",
          scrub: 1,
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power1.inOut",
      });
      gsap.from("#about-text", {
        scrollTrigger: {
          trigger: "#about-text",
          start: "top 80%",
          end: "bottom 80%",
          delay: 0.5,
          scrub: 1,
        },

        opacity: 0,
        duration: 1,
        y: 30,
      });
    },
    { scope: "#about-section" }
  );

  //   Services section Animations

  const servicesImage = useRef([]);
  const servicesText = useRef([]);

  useEffect(() => {
    servicesImage.current = document.querySelectorAll(".service-img");
    servicesText.current = document.querySelectorAll(".service-text");
  }, []);

  useGSAP(
    () => {
      servicesImage.current.forEach((image, index) => {
        gsap.from(image, {
          scrollTrigger: {
            trigger: image,
            toggleActions: "play play play play", // Prevents the animation from being reversed
            start: "top 80%",
            end: "botton 70%",
            scrub: 2,
          },
          opacity: 0,
          x: index % 2 == 0 ? 100 : -100,
          duration: 1,
        });
      });

      servicesText.current.forEach((text, index) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            toggleActions: "play play play play", // Prevents the animation from being reversed
            start: "top 80%",
            end: "botton 70%",
            scrub: 2,
          },
          opacity: 0,
          x: index % 2 == 0 ? -150 : 150,
          duration: 1,
        });
      });
      console.log("its working");
    },

    { scope: "#services-section" }
  );

  useGSAP(() => {
    gsap.from(".accordion", {
      scrollTrigger: {
        trigger: "#faq",
        toggleActions: "play play play play", // Prevents the animation from being reversed
        start: "top 100%",
        end: "bottom 80%",
        scrub: 1,
      },
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power1.inOut",
      stagger: 0.5,
    });
  }, []);

  return null;
};
