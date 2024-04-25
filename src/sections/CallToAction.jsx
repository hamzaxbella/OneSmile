import { CallToActionTitle } from "../constants";
import { Context } from "../App";
import { useContext } from "react";
import { Button } from "../components/Button";

export const CallToAction = () => {
  const [selectedLanguage] = useContext(Context);
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";
  return (
    <section className="bg-normal-cream section-spacing">
      <div className="max-container flex flex-col items-center padding-y gap-6">
        <h1 dir={textdir} className={`${Titlefont} text-3xl`}>{selectedLanguage === 'FR' ? CallToActionTitle.FR : CallToActionTitle.AR}</h1>
        <div className="flex gap-6">
          <Button primary label={{FR : 'Contactez' , AR : 'تواصل معنا'}} path={'/contact#form'}/>
          <Button label={{FR : 'Prendre rendez-vous' , AR : 'أحجز موعدا'}} path={'/contact#appointement'}/>
        </div>
      </div>
    </section>
  );
};
