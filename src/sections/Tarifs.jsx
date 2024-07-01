import React, { useContext } from "react";
import { Context } from "../App";
import { tarifs } from "../constants";

export const Tarifs = () => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr"; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";
  const content = selectedLanguage === "FR" ? tarifs.FR : tarifs.AR;
  const languageFlex = selectedLanguage === "FR" ? 'flex' : 'flex-row-reverse'
  return (
    <section className="max-w-[900px] mx-auto padding-x">
      <div className="relative text-center mb-6">
        <h1 dir={textdir} className={` ${Titlefont} section-title text-4xl`}>
          {selectedLanguage === "FR" ? "Tarifs" : "الأسعار"}
        </h1>
        <div
          className={`absolute h-1 w-[100px] bg-primary top-[-4px] -translate-x-1/2 left-1/2`}
        ></div>
      </div>
      <div className="container">
        {content.map((tarif) => (
          <div key={tarif.Category} className="mb-12">
            <h2
              className={`text-3xl mb-6 ${Titlefont} text-browney-cream`}
              dir={textdir}
            >
              {tarif.Category}
            </h2>
            <div className="flex flex-col gap-4">
              {tarif.children.map((child, index) => (
                <div key={index} className={` child-item flex ${languageFlex}  justify-between`}>
                  <h3 className="font-semibold">{child.title}</h3>
                  <div className="flex gap-12">
                    <p>{child.price}</p>
                    {child.session && <p>{child.session}</p>}
                    {child.duration && <p>{child.duration}</p>}
                  </div>
                </div>
              ))}
            </div>
            {tarif.note && <p className="mt-5 text-purple-400 font-bold">{tarif.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
