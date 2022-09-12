import React from "react";
import SectionWrapper from "../UI/SectionWrapper";

interface InterestsSectionProps {}

const InterestsSection: React.FC<InterestsSectionProps> = ({}) => {
  return (
    <>
      <section className="pb-20 2xl:pr-72">
        <h3 className="heading3">INTERESTS:</h3>
        <SectionWrapper
          paragraphNumber="01"
          paragraphName="Discovering Web Technologies"
          paragraphContent="I'm passionate about discovering new web technologies and I'm trying to learn something new every day. That doesn't mean I change my preferred programing languages and technologies every day but striving to improve on those I'm already familiar with. Of course I sometimes get lost in YouTube videos about something that could be a next big thing, but who doesn't?"
        />

        <SectionWrapper
          paragraphNumber="02"
          paragraphName="Marvel Cinematic Universe"
          paragraphContent="You're looking at a huge fan of MCU. Although I'm not a Comics person, I've watched all of Marvels movies at least twice (even the bad once) and I can't wait to see what's gonna happen in this stage."
        />
      </section>
    </>
  );
};

export default InterestsSection;
