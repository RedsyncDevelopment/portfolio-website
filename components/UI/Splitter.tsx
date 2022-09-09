import React, { RefObject } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

interface SplitterProps {
  nextSection: string;
  scrollTo?: RefObject<HTMLDivElement>;
}

const Splitter: React.FC<SplitterProps> = ({ nextSection, scrollTo }) => {
  const scrollToNextSection = () => {
    scrollTo?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        className="w-full h-12 border-b-2 border-primary-blue-400 gap-4 flex items-center mt-10 mb-6 2xl:mt-20"
        onClick={scrollToNextSection}
      >
        <span>
          <BsFillArrowDownSquareFill className="w-6 h-6 animate-bounce" />
        </span>
        <span className="font-bold">{nextSection}</span>
      </button>
    </>
  );
};

export default Splitter;
