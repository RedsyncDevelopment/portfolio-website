import React, { ReactNode } from "react";
import SectionWrapper from "../UI/SectionWrapper";
import OtherInfoSkills from "./DigitalSkills/OtherInfoSkills";
import WebDevelopment from "./DigitalSkills/WebDevelopment";

interface DigitalSkillsProps {
  children?: ReactNode;
}

const DigitalSkills: React.FC<DigitalSkillsProps> = ({ children }) => {
  return (
    <section className="2xl:pr-72">
      <h3 className="heading3">DIGITAL SKILLS:</h3>
      <SectionWrapper
        paragraphNumber="01"
        paragraphName="Web Development"
        paragraphContent={<WebDevelopment />}
      />

      <SectionWrapper
        paragraphNumber="02"
        paragraphName="Other Digital Skills"
        paragraphContent={<OtherInfoSkills />}
      />
    </section>
  );
};

export default DigitalSkills;
