import { NextPage } from "next";
import { useRef } from "react";
import PageLayout from "../../components/Layout/PageLayout";
import SectionLayout from "../../components/Layout/SectionLayout";
import CubeOtherPages from "../../components/UI/CubeOtherPages";
import FrontendSection from "../../components/Work/Frontend/FrontendSection";
import FullstackSection from "../../components/Work/Fullstack/FullstackSection";
import ManagmentSection from "../../components/Work/Managment/ManagmentSection";
import Workheading from "../../components/Work/WorkHeading";
import useDeviceWidth from "../../hooks/useDeviceWidth";

const Work: NextPage = () => {
  const { isMobile } = useDeviceWidth();

  const backendRef = useRef<HTMLDivElement>(null);
  const fullstackRef = useRef<HTMLDivElement>(null);
  const managmentRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <SectionLayout>
        <Workheading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
      <SectionLayout>
        <FrontendSection />
      </SectionLayout>
      {/* <div ref={backendRef}>
        <SectionLayout>
          <BackendSection />
        </SectionLayout>
      </div> */}
      <div ref={fullstackRef}>
        <SectionLayout>
          <FullstackSection />
        </SectionLayout>
      </div>
      <div ref={managmentRef} className="pb-16">
        <SectionLayout>
          <ManagmentSection />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default Work;
