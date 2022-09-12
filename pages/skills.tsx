import { NextPage } from "next";
import { ReactNode, useRef } from "react";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import DigitalSkills from "../components/Skills/DigitalSkills";
import LanguageSkills from "../components/Skills/LanguageSkills";
import ManagmentSkills from "../components/Skills/ManagmentSkills";
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
  const managmentRef = useRef<HTMLDivElement>(null);

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
      <div ref={languageRef}>
        <SectionLayout>
          <LanguageSkills />
          <Splitter nextSection="MANAGMENT SKILLS" scrollTo={managmentRef} />
        </SectionLayout>
      </div>
      <div ref={managmentRef} className="pb-16">
        <SectionLayout>
          <ManagmentSkills />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default Skills;
