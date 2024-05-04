import { Context } from "../App";
import { useContext } from "react";
import { TermsOfUseContent } from "../constants";

export const TermsOfUse = () => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const content =
    selectedLanguage === "FR" ? TermsOfUseContent.FR : TermsOfUseContent.AR;
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr"; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";

  
  return (
    <section className="section-spacing">
      <section className="padding-x">
        {content.map((terms) => (
          <div className="py-10">
            <h3 dir={textdir} className={`${font} mb-5 text-2xl text-primary font-semibold`}>{terms.title}</h3>
            <p dir={textdir} className={`${font} leading-10 text-lg`}>{terms.description}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
