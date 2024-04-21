import { Banner } from "../sections/Banner";
import { ContactSection } from "../sections/ContactSection";
import { CallToAction } from "../sections/CallToAction";
import { FAQsection } from "../sections/FAQsection";

export const Contact = () => {
  return (
    <section>
      <section>
        <Banner />
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
