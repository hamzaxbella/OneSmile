import { useState } from "react";
import { accordion, arrow_left } from "../assets/icons";
import { Context } from "../App";
import { useContext } from "react";

export const Accordion = ({ title, answer }) => {
  const [selectedLanguage] = useContext(Context);

  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="max-container padding-x py-4 border-thin">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`${selectedLanguage === 'FR' ? 'flex-row-reverse' : 'flex-row'} flex  justify-end items-center gap-6 text-start py-2 w-full`}
      >
        <span dir={textdir} className={`${Titlefont} text-xl leading-10`}>{title}</span>
        <img
            width={30}
          src={accordion}
          className={`${
            accordionOpen && "rotate-45"
          } transition-all duration-600`}
          alt="toggle accordion icon"
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div dir={textdir} className={`${font} ${accordionOpen ? 'block' : 'hidden'} overflow-hidden ${selectedLanguage === 'FR' ? 'ml-14' : 'mr-14'}  py-4 text-lg font-light leading-8`}>{answer}</div>
      </div>
    </div>
  );
};
