import { Context } from "../App";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { contactInfo as contactData } from "../constants";

export const ContactSection = () => {
  const [selectedLanguage] = useContext(Context);
  const textdir = selectedLanguage === "AR" ? "rtl" : "ltr";
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const Titlefont = selectedLanguage === "FR" ? "font-Inria" : "font-Cairo";
  const content = selectedLanguage === "FR" ? contactData.FR : contactData.AR;

  const form = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setFormData({ ...formData, [name]: value }); // Use name instead of e.target.name
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hfgky0b", "template_u8rbzmp", form.current, "tXf-_9Eo7Gvmia5jd")
      .then(
        (response) => {
          console.log("Email sent successfully: ", response);
          alert("votre message a été envoyé!");
        },
        (error) => {
          console.error("Email sending failed: ", error.text);
          alert("Votre message n'a pas pu être envoyé : (" + error.text);
        }
      );

    // Clear form data after submission
    setFormData({
      username: "",
      contact: "",
      message: "",
    });
  };

  return (
    <section className="section-spacing">
      <section id="form" className="max-container padding-x w-full flex flex-col lg:flex-row items-center">
        <div className=" w-full lg:w-2/3 flex-2">
          <form onSubmit={handleSubmit} ref={form} className=" lg:w-11/12 w-full bg-normal-cream py-6 px-8">
            <div className="relative  my-12 py-3">
              <h1
                dir={textdir}
                className={`section-title ${Titlefont} text-4xl`}
              >
                {selectedLanguage === "FR" ? "Contactez-nous" : "تواصل معنا"}
              </h1>
              <div
                className={`absolute h-1 w-[100px]  bg-primary bottom-[-4px] ${
                  selectedLanguage === "AR" ? "right-0" : "left-0"
                }`}
              ></div>
            </div>

            <div className="padding-y">
              <div className="mb-10 flex flex-col gap-2 ">
                <label dir={textdir} className={font} htmlFor="">
                  {selectedLanguage === "FR" ? "nom : " : "الإسم : "}
                </label>
                <input
                  onChange={handleChange}
                  value={formData.username}
                  dir={textdir}
                  type="text"
                  name="username" // Add name attribute
                  className="h-10 bg-transparent ring-[.5px] ring-black px-2"
                />
              </div>
              <div className="mb-10 flex flex-col gap-2">
                <label dir={textdir} className={font} htmlFor="">
                  {selectedLanguage === "FR"
                    ? "adress email : "
                    : "البريد الإلكتروني : "}
                </label>
                <input
                  onChange={handleChange}
                  value={formData.contact}
                  type="text"
                  name="contact" // Add name attribute
                  className="h-10 bg-transparent ring-[.5px] ring-black px-2"
                />
              </div>
              <div className="mb-10 flex flex-col gap-2">
                <label dir={textdir} className={font} htmlFor="">
                  {selectedLanguage === "FR"
                    ? "votre message : "
                    : "اكتب رسالة : "}
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  dir={textdir}
                  type="text"
                  name="message" // Add name attribute
                  className=" bg-transparent ring-[.5px] ring-black px-2"
                />
              </div>
            <button type="submit" className="bg-primary text-white px-8 py-4 duration-300 hover:bg-browney-cream">
              {selectedLanguage === "FR" ? "Envoyer" : "إرسال"}
            </button>
            </div>
          </form>
        </div>
        <div className={`flex w-full padding-y lg:w-1/3 flex-col gap-24`}>
          {content.map((card, index) => (
            <div
              key={index}
              className={`${
                selectedLanguage === "AR"
                  ? "flex-row-reverse items-end"
                  : "flex"
              } items-start gap-4`}
            >
              <img src={card.img} width={25} height={25} alt={card.title} />
              <div>
                <h3
                  dir={textdir}
                  className={`${font} font-semibold text-browney-cream`}
                >
                  {card.title}
                </h3>
                <p dir={textdir} className={`${font} py-2`}>
                  {card.lable}
                </p>
                <a dir={textdir} href="" className={`${font} underline`}>
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
