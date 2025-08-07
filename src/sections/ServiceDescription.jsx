import { Context } from "../App";
import { useContext } from "react";
import { ServiceArticleContent } from "../constants";

export const ServiceDescription = () => {
  const [selectedLanguage] = useContext(Context);
  const content =
    selectedLanguage === "FR"
      ? ServiceArticleContent.FR
      : ServiceArticleContent.AR;
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" dir={textdir}>
          <h1 className={`${Titlefont} text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6`}>
            {content.title}
          </h1>
          <div className="w-20 h-px bg-primary mx-auto"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8">
          {/* First Row - Description (Full Width) */}
          <div className="bg-normal-cream rounded-2xl p-8 md:p-12 shadow-sm border " dir={textdir}>
            <div className="mb-6">
              <h2 className={`${font} text-sm font-medium tracking-wider text-gray-500 uppercase mb-3`}>
                {selectedLanguage === 'FR' ? 'Description' : 'الوصف'}
              </h2>
              <div className={`w-12 h-0.5 bg-primary ${selectedLanguage === "AR" ? "mr-auto" : ""}`}></div>
            </div>
            <p className={`${font} text-lg md:text-xl font-light text-gray-700 leading-relaxed`}>
              {content.description}
            </p>
          </div>

          {/* Second Row - Procedure and Advantages (Two Columns) */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Procedure */}
            <div className="bg-normal-cream rounded-2xl p-8 md:p-10 shadow-sm border " dir={textdir}>
              <div className="mb-6">
                <h2 className={`${font} text-sm font-medium tracking-wider text-gray-500 uppercase mb-3`}>
                  {selectedLanguage === 'FR' ? 'Procédure' : 'الخطوات'}
                </h2>
                <div className={`w-12 h-0.5 bg-primary ${selectedLanguage === "AR" ? "mr-auto" : ""}`}></div>
              </div>
              <p className={`${font} text-lg font-light text-gray-700 leading-relaxed`}>
                {content.process}
              </p>
            </div>

            {/* Advantages */}
            <div className="bg-normal-cream rounded-2xl p-8 md:p-10 shadow-sm border " dir={textdir}>
              <div className="mb-6">
                <h2 className={`${font} text-sm font-medium tracking-wider text-gray-500 uppercase mb-3`}>
                  {selectedLanguage === 'FR' ? 'Avantages' : 'المميزات'}
                </h2>
                <div className={`w-12 h-0.5 bg-primary ${selectedLanguage === "AR" ? "mr-auto" : ""}`}></div>
              </div>
              <div className="space-y-4">
                {content.advantages.map((advantage, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-start gap-3 ${selectedLanguage === "AR" ? "flex-row-reverse" : ""}`}
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    </div>
                    <p className={`${font} text-lg font-light text-gray-700 leading-relaxed flex-1`}>
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};
