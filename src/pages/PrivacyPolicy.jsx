import { Context } from "../App";
import { useContext } from "react";
import { PrivacyPolicyContent } from "../constants";

export const PrivacyPolicy = () => {

  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const content =
    selectedLanguage === "FR" ? PrivacyPolicyContent.FR : PrivacyPolicyContent.AR;
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr"; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  
  return (
    <section className="section-spacing">
      <section className="padding-x">
        {content.map((policy) => (
          <div className="py-10">
            <h3 dir={textdir} className={`${font} mb-5 text-2xl text-primary font-semibold`}>{policy.title}</h3>
            <p dir={textdir} className={`${font} leading-10 text-lg`}>{policy.description}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
