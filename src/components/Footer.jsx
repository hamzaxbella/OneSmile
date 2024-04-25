import { logo } from "../assets/images";
import { PrimaryLinks, secondaryLinks, socialLinks } from "../constants";
import { Context}  from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
export const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Context);
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr"; // Set textdir to 'rtl' if selectedLanguage is 'AR'
  const primaryLinksContent =
    selectedLanguage === "FR" ? PrimaryLinks.FR : PrimaryLinks.AR;
  const secondaryLinksContent =
    selectedLanguage === "FR" ? secondaryLinks.FR : secondaryLinks.AR;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f64v9m7",
        "template_0zary9x",
        form.current,
        "gq3RhAUptftUsb2Uv"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Votre message a été envoyé!");
          // Reset the form fields after successful submission
          setFormData({ username: "", contact: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Votre message n'a pas pu être envoyé :(  " + error.text);
        }
      );
  };

  const handleChange = () => {};
  return (
    <section className="section-spacing">
      <section className="max-container padding-x gap-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 `">
        <img
          src={logo}
          className="w-[100px] h-[70px]"
          alt="OneSmile logo mr-auto"
        />
        <div>
          <h3 className={`${font} font-semibold text-browney-cream mb-6`} dir={textdir}>
            {selectedLanguage === "FR"
              ? "Pages Principales"
              : "الصفحات الرئيسية"}
          </h3>
          <ul className="flex flex-col gap-3 mt-4">
            {primaryLinksContent.map((link) => (
              <Link
                dir={textdir}
                className="text-text-gray hover:text-gray-400"
                key={link.name}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`${font} font-semibold text-browney-cream mb-6`} dir={textdir}>
            {" "}
            {selectedLanguage === "FR" ? "Autre pages." : "صفحات اخرى"}
          </h3>
          <ul className="flex flex-col gap-3 mt-4">
            {secondaryLinksContent.map((link) => (
              <Link
                dir={textdir}
                className="text-text-gray hover:text-gray-400"
                key={link.name}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`${font} font-semibold text-browney-cream mb-6`} dir={textdir}>
            {" "}
            {selectedLanguage === "FR" ? "S'inscrire." : "اشترك"}
          </h3>
          <form onSubmit={handleSubmit} className={` flex gap-3 mb-6`}>
            <input
              type="email"
              className="bg-transparent  border border-black border-opacity-25 text-sm font-thin p-2"
              placeholder="Entrez votre email..."
            />
            <Button primary label={{ FR: "S'inscrire ", AR: "إشترك" }} />
          </form>
          <div className={`flex gap-3 mt-4 cursor-pointer hover:transfor ${selectedLanguage === 'AR' && 'flex-row-reverse'}`}>
            {socialLinks.map((icon) => (
              <a className="hover:-translate-y-1/3" href={icon.path} target="_blank">< img src={icon.icon} alt={icon.alt} width={25} height={25}/></a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
