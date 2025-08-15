import { Context } from "../App";
import { useContext, useState } from "react";
import { ServicesContent } from "../constants";


export const ServicesSection = () => {
  const [selectedLanguage] = useContext(Context);
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";



  
  return (
    <section className="section padding-y overflow-x-hidden" id="services-section" aria-label="Services dentaires">
      <header className="relative text-center mb-6">
        <h2 dir={textdir} className={` ${Titlefont} section-title text-4xl`}>
          {selectedLanguage === "FR" ? "Nos Services" : "خدماتنا"}
        </h2>
        <div
          className={`absolute h-1 w-[100px]  bg-primary top-[-4px] -translate-x-1/2 left-1/2`}
          aria-hidden="true"
        ></div>
      </header>

      <div className="overflow-x-hidden" role="list" aria-label="Liste des services dentaires">
        {ServicesContent.map((service, index) => (
          <article
            key={index} 
            className={` ${
              index % 2 === 0
                ? "bg-dark-cream"
                : " bg-normal-cream"
            }`}
            role="listitem"
            aria-label={selectedLanguage === "FR" ? service.FR.Title : service.AR.Title}
          >
            <div className = {`max-container flex flex-col md:flex-row justify-center items-center padding-x py-6 gap-6 ${
              index % 2 === 0
                && "md:!flex-row-reverse" // Apply flex-row-reverse to the first div
            }`}>
              <div className="flex flex-col justify-center gap-6">
                <h3
                  dir={index % 2 === 0 ? 'ltr' : 'rtl'}
                  className={` service-text ${Titlefont} ${
                    index % 2 === 0 && "text-white"
                  } font-semibold text-2xl`}
                >
                  {selectedLanguage === "FR"
                    ? service.FR.Title
                    : service.AR.Title}
                </h3>
                <p
                  className={`service-text ${
                    index % 2 === 0 && " text-white-smoke"
                  } ${font} font-light leading-8`}
                  dir={index % 2 === 0 ? 'ltr' : 'rtl'}
                >
                  {selectedLanguage === "FR"
                    ? service.FR.Description
                    : service.AR.Description}
                </p>
                
                {/* Appointment Button for each service */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mt-4`}>
                  <button 
                    data-cal-namespace="30min"
                    data-cal-link="one-smile-ozuc83/30min"
                    data-cal-config='{"layout":"month_view"}'
                    className={`inline-flex items-center gap-2 px-6 py-3 ${
                      index % 2 === 0 
                        ? 'bg-white text-primary hover:bg-gray-50' 
                        : 'bg-primary text-white hover:bg-primary/90'
                    }  font-medium transition-colors duration-300 ${font}`}
                  >
                    <span>{selectedLanguage === "FR" ? "Prendre Rendez-vous" : "احجز موعد"}</span>
                  </button>
                </div>
              </div>
              <img
              className="service-img "
                width={300}
                src={
                  selectedLanguage === "FR" ? service.FR.img : service.AR.img
                }
                alt={
                  selectedLanguage === "FR"
                    ? `${service.FR.Title} - OneSmile clinique dentaire`
                    : `${service.AR.Title} - عيادة OneSmile للأسنان`
                }
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
