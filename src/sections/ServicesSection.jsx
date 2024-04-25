import { Context } from "../App";
import { useContext, useState } from "react";
import { ServicesContent } from "../constants";

export const ServicesSection = () => {
  const [selectedLanguage] = useContext(Context);
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  return (
    <section className="padding-y">
      <div className="relative text-center mb-6">
        <h1 dir={textdir} className={`${Titlefont} text-4xl`}>
          {selectedLanguage === "FR" ? "Nos Services" : "خدماتنا"}
        </h1>
        <div
          className={`absolute h-1 w-[100px]  bg-primary top-[-4px] -translate-x-1/2 left-1/2`}
        ></div>
      </div>
      <div>
        {ServicesContent.map((service, index) => (
          <div
            key={index} 
            className={` ${
              index % 2 === 0
                ? "bg-dark-cream"
                : " bg-normal-cream"
            }`}
          >
            <div className = {`max-container flex flex-col md:flex-row justify-center items-center padding-x py-6 gap-6 ${
              index % 2 === 0
                && "md:!flex-row-reverse" // Apply flex-row-reverse to the first div
            }`}>
              <div className="flex flex-col justify-center gap-6">
                <h3
                  dir={index % 2 === 0 ? 'ltr' : 'rtl'}
                  className={`${Titlefont} ${
                    index % 2 === 0 && "text-white"
                  } font-semibold text-2xl`}
                >
                  {selectedLanguage === "FR"
                    ? service.FR.Title
                    : service.AR.Title}
                </h3>
                <p
                  className={` ${
                    index % 2 === 0 && " text-white-smoke"
                  } ${font} font-light leading-8`}
                  dir={index % 2 === 0 ? 'ltr' : 'rtl'}
                >
                  {selectedLanguage === "FR"
                    ? service.FR.Description
                    : service.AR.Description}
                </p>
              </div>
              <img
                width={300}
                src={
                  selectedLanguage === "FR" ? service.FR.img : service.AR.img
                }
                alt={
                  selectedLanguage === "FR"
                    ? service.FR.Title
                    : service.AR.Title
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
