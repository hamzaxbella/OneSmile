import { Banner } from "../sections/Banner"
import { ServiceDescription } from "../sections/ServiceDescription"
import { BeforeAfter} from "../sections/BeforeAfter"
import { Testimonials } from '../sections/Testimonials'
// import { ServicesSection } from '../sections/ServicesSection'
import { CallToAction  } from "../sections/CallToAction"

export const Services = () => {
  return (
    <section>
      <section>
        <Banner />
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
        {/* <ServicesSection /> */}
      </section>
      
      <section>
        <CallToAction />
      </section>
      
    </section>
  )
}
