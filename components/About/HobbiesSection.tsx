import React from "react";
import SectionWrapper from "../UI/SectionWrapper";

interface HobbiesSectionProps {}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({}) => {
  return (
    <>
      <section className="2xl:pr-72">
        <h3 className="heading3">HOBBIES:</h3>
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

export default HobbiesSection;
