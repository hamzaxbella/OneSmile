import { Banner } from "../sections/Banner"
import { ServiceDescription } from "../sections/ServiceDescription"
import { BeforeAfter} from "../sections/BeforeAfter"
import { Testimonials } from '../sections/Testimonials'
// import { ServicesSection } from '../sections/ServicesSection'
import { CallToAction  } from "../sections/CallToAction"
import {serviceBanner } from "../assets/images"
import { Context } from "../App"
import { useContext } from "react"
import { ServiceBannerContent, ServicesContent } from "../constants"
import { ServicesSection } from "../sections/ServicesSection"
import { Tarifs } from "../sections/Tarifs"
import { SEO, createServiceSchema, createBreadcrumbSchema } from "../components/SEO"

export const Services = () => {

  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const banner = selectedLanguage === "FR" ? ServiceBannerContent.FR : ServiceBannerContent.AR;  

  // SEO data for services page
  const seoData = {
    FR: {
      title: "Nos Services de Blanchiment | OneSmile - Institut Blanchiment Dentaire Agadir",
      description: "Découvrez nos services de blanchiment dentaire professionnels : blanchiment laser, gouttières, dental bonding et soins esthétiques. Institut spécialisé à Agadir pour un sourire éclatant.",
      keywords: "blanchiment des dents agadir, blanchiment dentaire agadir, teeth whitening, dental bonding, teeth wash, cabinet dentaire smile, blanchiment laser, gouttières de blanchiment, esthétique dentaire agadir"
    },
    AR: {
      title: "خدمات التبييض | OneSmile - معهد تبييض الأسنان أكادير",
      description: "اكتشف خدمات تبييض الأسنان الاحترافية: تبييض بالليزر، قوالب التبييض، والعناية التجميلية. معهد متخصص في أكادير لابتسامة مشرقة.",
      keywords: "تبييض الأسنان أكادير, معهد تبييض الأسنان, تبييض بالليزر, العناية التجميلية للأسنان, ابتسامة مشرقة"
    }
  };
  
  const currentSeo = seoData[selectedLanguage];
  
  // Create structured data for all services
  const servicesStructuredData = ServicesContent.map(service => 
    createServiceSchema(service, selectedLanguage)
  );
  
  // Breadcrumb structured data
  const breadcrumbs = [
    { name: selectedLanguage === 'FR' ? 'Accueil' : 'الرئيسية', url: 'https://onesmile.ma/' },
    { name: selectedLanguage === 'FR' ? 'Services' : 'الخدمات', url: 'https://onesmile.ma/services' }
  ];
  
  const structuredData = [
    ...servicesStructuredData,
    createBreadcrumbSchema(breadcrumbs)
  ];  

  return (
    <section>
      <SEO 
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://onesmile.ma/services"
        ogImage="https://onesmile.ma/src/assets/images/serviceBanner.webp"
        structuredData={structuredData}
      />
      <section>
        <Banner img={serviceBanner} Title={banner.title} description={banner.Description}/>
      </section>

      <section>
        <ServiceDescription />
      </section>
      
      <section>
        <BeforeAfter />
      </section>
      
      <section>
       <Testimonials />
      </section>
      
      <section>
        < ServicesSection />
      </section>

      <section>
        < Tarifs />
      </section>
      
      <section>
        <CallToAction />
      </section>
      
    </section>
  )
}
