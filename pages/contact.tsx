import { NextPage } from "next";
import ContactForm from "../components/Contact/ContactForm";
import ContactHeading from "../components/Contact/ContactHeading";
import ContactInformation from "../components/Contact/ContactInformation";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import useDeviceWidth from "../hooks/useDeviceWidth";

const Contact: NextPage = () => {
  const { isMobile } = useDeviceWidth();

  return (
    <PageLayout>
      <SectionLayout>
        <ContactHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
      <div className="flex flex-col md:flex-row pb-16">
        <SectionLayout>
          <ContactInformation />
        </SectionLayout>
        <SectionLayout>
          <ContactForm />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default Contact;
