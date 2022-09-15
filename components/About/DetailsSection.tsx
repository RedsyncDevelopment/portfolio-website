import { BsArrowBarRight } from "react-icons/bs";
import SectionWrapper from "../UI/SectionWrapper";

const DetailsSection = ({}) => {
  return (
    <>
      <h3 className="heading3">DETAILS:</h3>
      <section className="2xl:pr-72 grid grid-cols-1 md:grid-cols-3">
        <SectionWrapper
          paragraphNumber="01"
          paragraphName="Nationality"
          paragraphContent={
            <div className="flex gap-2 items-center">
              <BsArrowBarRight />
              <span>Croatian</span>
            </div>
          }
        />
        <SectionWrapper
          paragraphNumber="02"
          paragraphName="Nationality"
          paragraphContent="Croatian"
        />
        <SectionWrapper
          paragraphNumber="03"
          paragraphName="Nationality"
          paragraphContent="Croatian"
        />
      </section>
    </>
  );
};

export default DetailsSection;
