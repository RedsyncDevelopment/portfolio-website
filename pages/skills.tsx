import { NextPage } from "next";
import { ReactNode, useRef } from "react";
import HobbiesSection from "../components/About/HobbiesSection";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import DigitalSkills from "../components/Skills/DigitalSkills";
import SkillsHeading from "../components/Skills/SkillsHeading";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import Splitter from "../components/UI/Splitter";
import useDeviceWidth from "../hooks/useDeviceWidth";

interface SkillsProps {
  children?: ReactNode;
}

const Skills: NextPage<SkillsProps> = ({ children }) => {
  const isMobile = useDeviceWidth();

  const languageRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <SectionLayout>
        <SkillsHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
      <SectionLayout>
        <DigitalSkills />
        <Splitter nextSection="LANGUAGE SKILLS" scrollTo={languageRef} />
      </SectionLayout>
      <div ref={languageRef} className="pb-16">
        <SectionLayout>
          <HobbiesSection />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default Skills;
