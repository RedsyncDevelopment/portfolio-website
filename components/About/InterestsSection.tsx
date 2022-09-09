import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import SectionWrapper from "../UI/SectionWrapper";

interface InterestsSectionProps {}

const InterestsSection: React.FC<InterestsSectionProps> = ({}) => {
  return (
    <>
      <section className="pb-20 2xl:pr-72">
        <h3 className="heading3">INTERESTS:</h3>
        <SectionWrapper
          paragraphNumber="01"
          paragraphName="Video games"
          paragraphContent="I'm pretty competitive person and I like to spend my free time
            playing video games. Although my free time is limited and I could
            call myself a casual gamer - when I play, I play for win."
        />

        <SectionWrapper
          paragraphNumber="02"
          paragraphName="Video games"
          paragraphContent="I'm pretty competitive person and I like to spend my free time
            playing video games. Although my free time is limited and I could
            call myself a casual gamer - when I play, I play for win."
        />
      </section>
    </>
  );
};

export default InterestsSection;
