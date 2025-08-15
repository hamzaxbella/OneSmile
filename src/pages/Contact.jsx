import { Banner } from "../sections/Banner";
import { ContactSection } from "../sections/ContactSection";
import { CallToAction } from "../sections/CallToAction";
import { FAQsection } from "../sections/FAQsection";
import { contactBanner } from "../assets/images";
import { ContactBannerContent } from "../constants";
import { Context } from "../App";
import { useContext } from "react";
import { SEO, createBreadcrumbSchema } from "../components/SEO";

export const Contact = () => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const BannerContent = selectedLanguage === "FR" ? ContactBannerContent.FR : ContactBannerContent.AR;  

  // SEO data for contact page
  const seoData = {
    FR: {
      title: "Contactez-nous | OneSmile - Prenez Rendez-vous",
      description: "Contactez OneSmile pour prendre rendez-vous. Notre équipe dentaire experte est à votre service. Appelez-nous ou remplissez notre formulaire de contact en ligne.",
      keywords: "contact dentiste maroc, rendez-vous dentaire, OneSmile contact, clinique dentaire contact, urgence dentaire maroc"
    },
    AR: {
      title: "اتصل بنا | OneSmile - احجز موعدك",
      description: "اتصل بـ OneSmile لحجز موعد. فريقنا الطبي المتخصص في خدمتك. اتصل بنا أو املأ نموذج الاتصال عبر الإنترنت.",
      keywords: "اتصال طبيب أسنان المغرب, موعد طبيب أسنان, OneSmile اتصال, عيادة أسنان اتصال, طوارئ أسنان المغرب"
    }
  };
  
  const currentSeo = seoData[selectedLanguage];
  
  // Breadcrumb structured data
  const breadcrumbs = [
    { name: selectedLanguage === 'FR' ? 'Accueil' : 'الرئيسية', url: 'https://onesmile.ma/' },
    { name: selectedLanguage === 'FR' ? 'Contact' : 'اتصل بنا', url: 'https://onesmile.ma/contact' }
  ];
  
  const structuredData = [createBreadcrumbSchema(breadcrumbs)];

  return (
    <section>
      <SEO 
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://onesmile.ma/contact"
        ogImage="https://onesmile.ma/src/assets/images/contactBanner.webp"
        structuredData={structuredData}
      />
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
