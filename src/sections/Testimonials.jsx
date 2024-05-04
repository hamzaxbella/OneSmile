import { useContext, useState } from "react";
import { Context } from "../App";
import { TestimonialsContent } from "../constants";
import { arrow_left, arrow_right, star } from "../assets/icons";

export const Testimonials = () => {
  const [selectedLanguage] = useContext(Context);
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleTestimonial = (direction) => {
    if (direction === "next") {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % TestimonialsContent.length
      );
    } else if (direction === "prev") {
      setCurrentTestimonial(
        (prevTestimonial) =>
          (prevTestimonial - 1 + TestimonialsContent.length) %
          TestimonialsContent.length
      );
    }
  };

  return (
    <section className="section-spacing">
      <section className="max-container padding-x">
        <div className="relative text-center mb-6">
          <h1 dir={textdir} className={` section-title ${Titlefont} text-4xl`}>
            {selectedLanguage === "FR" ? "Témoignages" : "شهادات العملاء"}
          </h1>
          <div
            className={`absolute h-1 w-[100px]  bg-primary top-[-4px] -translate-x-1/2 left-1/2`}
          ></div>
        </div>

        <p className="padding-y text-center text-xl font-semibold leading-9 italic font-serif">
          {"<<"} {TestimonialsContent[currentTestimonial].testimoial} {">>"}
        </p>
        <div className="flex mb-4 justify-center gap3">
          {Array.from({ length: 5 }).map((_, index) => (
            <img src={star} key={index} width={20} height={20} alt="star" />
          ))}
        </div>
        <p className="justify-center mb-4 font-extrabold text-sm text-center">
          {TestimonialsContent[currentTestimonial].client}
        </p>
        <div className="flex gap-6 justify-center">
          <img
            className="cursor-pointer"
            onClick={() => handleTestimonial("prev")}
            src={arrow_left}
            alt="previous testimonial"
          />
          <img
            className="cursor-pointer"
            onClick={() => handleTestimonial("next")}
            src={arrow_right}
            alt="next testimonial"
          />
        </div>
      </section>
    </section>
  );
};
