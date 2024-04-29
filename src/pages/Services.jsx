import { Banner } from "../sections/Banner"
import { ServiceDescription } from "../sections/ServiceDescription"
import { BeforeAfter} from "../sections/BeforeAfter"
import { Testimonials } from '../sections/Testimonials'
// import { ServicesSection } from '../sections/ServicesSection'
import { CallToAction  } from "../sections/CallToAction"
import {serviceBanner } from "../assets/images"
import { Context } from "../App"
import { useContext } from "react"
import { ServiceBannerContent } from "../constants"
import { ServicesSection } from "../sections/ServicesSection"

export const Services = () => {

  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const banner = selectedLanguage === "FR" ? ServiceBannerContent.FR : ServiceBannerContent.AR;  

  return (
    <section>
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
        <CallToAction />
      </section>
      
    </section>
  )
}
