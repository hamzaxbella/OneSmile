import { about } from "../assets/images";
import { Context } from "../App";
import { useContext } from "react";
import { AboutContent } from "../constants";

export const About = () => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const content =
    selectedLanguage === "FR" ? AboutContent.FR[0] : AboutContent.AR[0];
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr"; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  return (
    <section id="about-section" className="section max-container padding-y padding-x flex-col-reverse md:flex-row flex gap-6 ">
      <article className="flex-1">
        <img id="about-img" className={"h-auto"} src={about} alt="about image" />
      </article>

      <article className="about-text flex-1 flex flex-col justify-center gap-12">
        <div className={`relative flex ${selectedLanguage == 'AR' && 'justify-end'}`}>
          <h1  dir={textdir} className={`${Titlefont} section-title text-4xl`}>
            {content.Title}
          </h1>
          <div
            className={`absolute h-1 w-[100px] bg-primary top-[-4px] ${
              selectedLanguage === "FR" ? "left-6" : "right-0"
            }`}
          ></div>
        </div>
        <p id="about-text" className={`${font} text-text-gray leading-10 `} dir={textdir}>
          {content.Description}
        </p>
      </article>
    </section>
  );
};
