import { Context } from "../App";
import { useContext } from "react";
import { ServiceArticleContent } from "../constants";

export const ServiceDescription = () => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const content =
    selectedLanguage === "FR"
      ? ServiceArticleContent.FR
      : ServiceArticleContent.AR;
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr"; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  return (
    <section className={`section-spacing padding-x`}>
      <div
        className={` mb-12 relative flex ${selectedLanguage == "AR" && "justify-end"}`}
      >
        <h1
          dir={textdir}
          className={`${Titlefont}  w-[20ch] section-title text-4xl`}
        >
          {content.title}
        </h1>
        <div
          className={`absolute h-1 w-[100px] bg-primary bottom-[-14px] ${
            selectedLanguage === "FR" ? "left-0" : "right-0"
          }`}
        ></div>
      </div>

      <div className="padding-y">
        <h2 className="text-3xl mb-2  text-browney-cream" dir={textdir}>{selectedLanguage === 'FR' ?  'Description :' : 'الوصف: '}</h2>
        <p className="text-xl  opacity-70 leading-10" dir={textdir}>{content.description}</p>
      </div>

      <div className="padding-y">
        <h2 className="text-3xl mb-2  text-browney-cream" dir={textdir}>{selectedLanguage === 'FR' ?  'Procédure :' : 'الخطوات : '}</h2>
        <p className="text-xl  opacity-70 leading-10">{content.process}</p>
      </div>

      <div className="padding-y">
        <h2 className="text-3xl mb-2  text-browney-cream" dir={textdir}>{selectedLanguage === 'FR' ?  'Advantages :' : 'المميزات : '}</h2>
        <ul dir={textdir} className="list-disc">
          {content.advantages.map((advantage) => (
            <li ><p className="text-xl  opacity-70 leading-10 py-2" >{advantage}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
};
