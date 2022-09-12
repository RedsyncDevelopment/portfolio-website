import { NextPage } from "next";
import { ReactNode } from "react";
import ContactHeading from "../components/Contact/ContactHeading";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import useDeviceWidth from "../hooks/useDeviceWidth";

interface ContactProps {
  children?: ReactNode;
}

const Contact: NextPage<ContactProps> = ({ children }) => {
  const isMobile = useDeviceWidth();

  return (
    <PageLayout>
      <SectionLayout>
        <ContactHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
    </PageLayout>
  );
};

export default Contact;
