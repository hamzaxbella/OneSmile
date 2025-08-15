// Home.js
import {useEffect, useContext} from "react";
import { HeroSection } from "../sections/HeroSection";
import { About } from "../sections/About";
import { CallToAction } from "../sections/CallToAction";
import { FAQsection } from "../sections/FAQsection";
import { gsap , Power3} from 'gsap'
import { ServicesSection } from "../sections/ServicesSection";
import { SEO, createLocalBusinessSchema, createWebsiteSchema } from "../components/SEO";
import { Context } from "../App";

export const Home = () => {
  const [selectedLanguage] = useContext(Context);
  
  useEffect(() => {
    const tl = gsap.timeline();
    return () => {
      tl.kill(); // Ensure to kill the timeline on unmount
    };
  }, []);

  let tl = new gsap.timeline()
  let ease = Power3
  
  // SEO data for home page
  const seoData = {
    FR: {
      title: "OneSmile - Clinique Dentaire Moderne au Maroc | Soins Dentaires de Qualité",
      description: "OneSmile, votre clinique dentaire de confiance au Maroc. Implants dentaires, orthodontie, blanchiment, couronnes et soins dentaires modernes. Prenez rendez-vous dès aujourd'hui.",
      keywords: "dentiste maroc, clinique dentaire, implants dentaires, orthodontie, blanchiment dentaire, couronne dentaire, soins dentaires, OneSmile, dentiste casablanca, dentiste rabat"
    },
    AR: {
      title: "OneSmile - عيادة أسنان حديثة في المغرب | رعاية أسنان عالية الجودة",
      description: "OneSmile، عيادة الأسنان الموثوقة في المغرب. زراعة الأسنان، تقويم الأسنان، تبييض الأسنان، التيجان والرعاية الحديثة للأسنان. احجز موعدك اليوم.",
      keywords: "طبيب أسنان المغرب, عيادة أسنان, زراعة الأسنان, تقويم الأسنان, تبييض الأسنان, تاج الأسنان, رعاية الأسنان, OneSmile"
    }
  };
  
  const currentSeo = seoData[selectedLanguage];
  const structuredData = [
    createLocalBusinessSchema(selectedLanguage),
    createWebsiteSchema()
  ];
  
  return (
    <section>
      <SEO 
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://onesmile.ma/"
        ogImage="https://onesmile.ma/src/assets/images/hero.webp"
        structuredData={structuredData}
      />
      <HeroSection timeline={tl} ease = { ease }  />
      <About timeline = {tl} />
      < ServicesSection />
      <CallToAction />
      <FAQsection />
    </section>
  );
};
