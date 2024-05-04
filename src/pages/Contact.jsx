import { Banner } from "../sections/Banner";
import { ContactSection } from "../sections/ContactSection";
import { CallToAction } from "../sections/CallToAction";
import { FAQsection } from "../sections/FAQsection";
import { contactBanner } from "../assets/images";
import { ContactBannerContent } from "../constants";
import { Context } from "../App";
import { useContext } from "react";

export const Contact = () => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const BannerContent = selectedLanguage === "FR" ? ContactBannerContent.FR : ContactBannerContent.AR;  

  return (
    <section>
      <section>
        <Banner img={contactBanner} Title={BannerContent.title} description={BannerContent.Description}/>
      </section>

      <section>
        <ContactSection />
      </section>

      <section>
        <CallToAction />
      </section>

      <section>
        <FAQsection />
      </section>
    </section>
  );
};
