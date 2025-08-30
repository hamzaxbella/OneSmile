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
      title: "OneSmile - Institut de Blanchiment Dentaire Agadir | Éclat et Beauté du Sourire",
      description: "OneSmile, institut de blanchiment dentaire spécialisé dans l'éclat et la beauté de votre sourire à Agadir. Résultat professionnel et durable en toute sécurité. Prenez rendez-vous dès aujourd'hui.",
      keywords: "blanchiment des dents agadir, blanchiment dentaire agadir, one smile, blanchiment dentaire, blanchiment dentaire maroc, blanchiment, onesmile, blanchiment des dents maroc, dentiste agadir, one smile dentaire, teeth whitening, dental bonding, teeth wash, cabinet dentaire smile, teeth whitening near me, one agadir, braces teeth, dental one, clear aligners near me, agadir dentist"
    },
    AR: {
      title: "OneSmile - معهد تبييض الأسنان أكادير | إشراق وجمال ابتسامتك",
      description: "OneSmile، معهد تبييض الأسنان المتخصص في إشراق وجمال ابتسامتك في أكادير. نتائج مهنية ودائمة بأمان تام. احجز موعدك اليوم.",
      keywords: "تبييض الأسنان أكادير, معهد تبييض الأسنان, تبييض الأسنان المغرب, أطباء الأسنان أكادير, one smile, تبييض الأسنان, جمال الابتسامة"
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
