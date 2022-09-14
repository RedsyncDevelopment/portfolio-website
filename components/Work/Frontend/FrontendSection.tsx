import WebDevelopment from "../../Skills/DigitalSkills/WebDevelopment";
import SectionWrapper from "../../UI/SectionWrapper";
import FrontendPosts from "./FrontendPosts";

const FrontendSection = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">FRONT-END PROJECTS:</h3>
      <SectionWrapper paragraphContent={<FrontendPosts />} />
    </section>
  );
};

export default FrontendSection;
