import { BeforAfterImages } from "../constants"
import { useContext } from "react";
import { Context } from "../App";

export const BeforeAfter = () => {

  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const textdir = selectedLanguage === 'AR' ? 'rtl' : 'ltr'; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  
  return (
    <section className="section-spacing padding-x">
      <section className="max-container">
      <div className="relative text-center mb-6">
        <h1 dir={textdir} className={` section-title ${Titlefont} text-4xl`}>
          {selectedLanguage === "FR" ? "Avant & Aprés" : "قبل و بعد"}
        </h1>
        <div
          className={`absolute h-1 w-[100px]  bg-primary top-[-4px] -translate-x-1/2 left-1/2`}
        ></div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center padding-y gap-16">
      {BeforAfterImages.map((img) => (
        <img src={img} className="max-w-[400px] rounded-2xl" alt="before and after" />
      ))}
    </div>
      </section>

    </section>
  )
}
