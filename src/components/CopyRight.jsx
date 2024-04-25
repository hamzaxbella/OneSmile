import { Context } from "../App";
import { useContext } from "react";

export const CopyRight = () => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Context);
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr"; // Set textdir to 'rtl' if selectedLanguage is 'AR'

  return <section>
    <section className=" padding-x max-container py-4  border-light border-black">
      <h3 dir={textdir} className={`${font} mb-2 text-center font-light text-black`}>{selectedLanguage === 'FR'  ? ' CopyRight © 2024 One Smile. Tous droits réservés.' : 'جميع الحقوق محفوظة ل-One Smile'}</h3>
      <p className={`${font} font-light text-center text-sm`}>Web design by <a href="https://www.instagram.com/zyllux_digital/" target="_blank" className="underlinefont-light text-primary hover:underline">Zyllux digital</a></p>
    </section>
  </section>;
};
