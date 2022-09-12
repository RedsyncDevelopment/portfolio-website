import { NextPage } from "next";
import { ReactNode } from "react";
import EducationHeading from "../components/Education/EducationHeading";
import EducationHistory from "../components/Education/EducationHistory";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import useDeviceWidth from "../hooks/useDeviceWidth";

interface ExpirienceProps {
  children?: ReactNode;
}

const Expirience: NextPage<ExpirienceProps> = ({ children }) => {
  const isMobile = useDeviceWidth();

  return (
    <PageLayout>
      <SectionLayout>
        <EducationHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
      <div className="pb-16">
        <SectionLayout>
          <EducationHistory />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default Expirience;
