import { useState } from "react";
import { FAQ } from "../constants";
import { Context } from "../App";
import { useContext } from "react";
import { Accordion } from "../components/Accordion";

export const FAQsection = () => {
  const [selectedLanguage] = useContext(Context);
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";
  const Content = selectedLanguage === "FR" ? FAQ.FR : FAQ.AR;

  return (
    <section className="section-spacing max-w-[1000px] mx-auto">
      <div className="relative text-center mb-6">
        <h1 dir={textdir} className={`${Titlefont} text-4xl`}>
          {selectedLanguage === "FR" ? "FAQ" : "أسئلة متكررة"}
        </h1>
        <div
          className={`absolute h-1 w-[100px]  bg-primary top-[-4px] -translate-x-1/2 left-1/2`}
        ></div>
      </div>

      {Content.map((faq) => (
        <Accordion title={faq.Q} answer={faq.A} />
      ))}
    </section>
  );
};
