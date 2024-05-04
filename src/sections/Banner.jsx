import { Button } from "../components/Button";
import { useContext } from "react";
import { Context } from "../App";

export const Banner = ({ img, Title, description }) => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const textdir = selectedLanguage === 'AR' ? 'rtl' : 'ltr'; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  return (
    <section className={"h-[85vh] relative"}>
      <img src={img} alt="section banner image" style={{objectPosition : '40% 0%'}} className={"z-0 w-full h-full object-cover"} />
      <div className=" absolute md:right-[15%] text-center md:text-right left-1/2 md:translate-x-0 -translate-x-1/2 flex flex-col gap-8 top-[50%] -translate-y-1/2 z-10">
        <h1 dir={textdir} className={`${Titlefont} text-white-smoke font-light text-4xl w-[18ch]`}>{Title}</h1>
        <p  dir={textdir} className={`${font} w-[50ch] text-sm  text-white-smoke font-thin`}>{description}</p>
        <div>
          <div className="flex justify-center gap-6">
            <Button
              primary
              label={{ FR: "Contactez", AR: "تواصل معنا" }}
              path={"/contact#form"}
            />
            <Button
              label={{ FR: "Prendre rendez-vous", AR: "أحجز موعدا" }}
              path={"/contact#appointement"}
              forBanner
            />
          </div>
        </div>
      </div>
    </section>
  );
};
