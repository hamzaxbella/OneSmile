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
      title: "Nos Services Dentaires | OneSmile - Clinique Dentaire Maroc",
      description: "Découvrez tous nos services dentaires : implants, orthodontie, blanchiment, couronnes, prothèses dentaires et gouttières. Soins modernes et techniques avancées au Maroc.",
      keywords: "services dentaires maroc, implants dentaires, orthodontie, blanchiment dentaire, couronne dentaire, prothèse dentaire, gouttière dentaire, snap on smile, soins dentaires"
    },
    AR: {
      title: "خدماتنا السنية | OneSmile - عيادة أسنان المغرب",
      description: "اكتشف جميع خدماتنا السنية: زراعة الأسنان، تقويم الأسنان، تبييض الأسنان، التيجان، أطقم الأسنان والواقيات. رعاية حديثة وتقنيات متقدمة في المغرب.",
      keywords: "خدمات الأسنان المغرب, زراعة الأسنان, تقويم الأسنان, تبييض الأسنان, تاج الأسنان, طقم أسنان, واقي الأسنان"
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
