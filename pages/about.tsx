import { NextPage } from "next";
import { useRef } from "react";
import AboutHeading from "../components/About/AboutHeading";
import HobbiesSection from "../components/About/HobbiesSection";
import InterestsSection from "../components/About/InterestsSection";
import MotoSection from "../components/About/MotoSection";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import Splitter from "../components/UI/Splitter";
import useDeviceWidth from "../hooks/useDeviceWidth";

const About: NextPage = () => {
  const { isMobile } = useDeviceWidth();

  const hobbiesRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <SectionLayout>
        <AboutHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
      <SectionLayout>
        <MotoSection />
        <Splitter nextSection="HOBBIES" scrollTo={hobbiesRef} />
      </SectionLayout>
      <div ref={hobbiesRef}>
        <SectionLayout>
          <HobbiesSection />
          <Splitter nextSection="INTERESTS" scrollTo={interestsRef} />
        </SectionLayout>
      </div>
      <div ref={interestsRef}>
        <SectionLayout>
          <InterestsSection />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default About;
