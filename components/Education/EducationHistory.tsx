import React, { ReactNode } from "react";
import ExpirienceDetails from "../UI/ExpirienceDetails";
import SectionWrapper from "../UI/SectionWrapper";

interface EducationHistoryProps {
  children?: ReactNode;
}

const EducationHistory: React.FC<EducationHistoryProps> = ({ children }) => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">EDUCATION</h3>
      <SectionWrapper
        paragraphNumber="01"
        paragraphName="Middle school"
        paragraphContent={
          <ExpirienceDetails
            heading="Computer Technician"
            yearsSpan="[2011 - 2014]"
            companyName="Institution: Srednja škola Zlatar"
            address="Braće Radić 10, 49250, Zlatar, Croatia"
          />
        }
      />

      <SectionWrapper
        paragraphNumber="02"
        paragraphName="College"
        paragraphContent={
          <ExpirienceDetails
            heading="univ. bacc. inf."
            yearsSpan="[2016 - 2020]"
            companyName="Institution: Faculty of Organization and Informatics"
            address="Pavlinska 2, 42000, Varaždin, Croatia"
          />
        }
      />
    </section>
  );
};

export default EducationHistory;
