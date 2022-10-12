import { NextPage } from "next";
import Certificates from "../components/Education/Certificates";
import EducationHeading from "../components/Education/EducationHeading";
import EducationHistory from "../components/Education/EducationHistory";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import useDeviceWidth from "../hooks/useDeviceWidth";

const Education: NextPage = () => {
  const { isMobile } = useDeviceWidth();

  return (
    <PageLayout>
      <SectionLayout>
        <EducationHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>

      <SectionLayout>
        <EducationHistory />
      </SectionLayout>

      <div className="pb-16">
        <SectionLayout>
          <Certificates />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default Education;
