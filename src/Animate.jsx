import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  // Animating section titles.
  useGSAP(() => {
    const sectionTitles = document.querySelectorAll(".section-title");

    sectionTitles.forEach((title, index) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          toggleActions: "play play play play", // Prevents the animation from being reversed
          start: "top 100%",
          end: "botton 85%",
          scrub: 2,
        },
        opacity: 0,
        y: 100,
        duration: 1,
      });
    }); // Closing parentheses for forEach loop
  }); // Closing parentheses for useGSAP hook

  // about section.
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

  // Services section Animations
  useGSAP(() => {
    const servicesImage = document.querySelectorAll(".service-img");
    const servicesText = document.querySelectorAll(".service-text");

    servicesImage.forEach((image, index) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          toggleActions: "play play play play", // Prevents the animation from being reversed
          start: "top 80%",
          end: "botton 70%",
          scrub: 2,
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
      });
    });

    servicesText.forEach((text, index) => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          toggleActions: "play play play play", // Prevents the animation from being reversed
          start: "top 80%",
          end: "botton 70%",
          scrub: 2,
        },
        opacity: 0,
        y: 30,
        duration: 1,
      });
    });
  }, []);

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
