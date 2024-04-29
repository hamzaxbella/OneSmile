import { useContext , useRef } from "react";
import { Context } from "../App";
import { HeroContent } from "../constants";
import { Button } from "../components/Button";
import { hero } from "../assets/images";

export const HeroSection = () => {
  
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const content = selectedLanguage === "FR" ? HeroContent.FR[0] : HeroContent.AR[0];  
  const textdir = selectedLanguage === 'AR' ? 'rtl' : 'ltr'; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  return (
    <section id="hero-section" className="min-h-[100vh] lg:hero-height max-container padding-x flex flex-col md:flex-row gap-6 items-center padding-y">
      <article className="flex-1 flex items-ce nter ">
        <div className="flex flex-col gap-6">
          <h1 dir={textdir} className={`hero-title text-4xl ${Titlefont} font-light`}>{content.Title}</h1>
          <p dir={textdir}  className={`${font} text-text-gray hero-description font-light
           text-sm`}>{content.Description}</p>
          <div className={`  w-full flex ${selectedLanguage === 'AR' && ' flex-row-reverse '}  gap-6 `} >
          < Button className = 'hero-btns' primary label={{FR : 'Contactez' , AR : 'تواصل معنا'}} path={'/contact'} />
          < Button className = 'hero-btns' label={{FR : 'Prendre rendez-vous' , AR : 'احجز موعدا'}} path={'/contact#appointement'} />
          </div>
        </div>
      </article>
      <article className="flex-1 w-full">
        <img id="hero-img" className=" object-cover w-[400px] h-[400px] md:w-[600px] md:h-[530px]" src={hero}  alt="image of a woman smiling" />
      </article>
    </section>
  );
};
