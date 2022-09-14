import SectionWrapper from "../../UI/SectionWrapper";
import FullstackPosts from "./FullstackPosts";

const FullstackSection = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">FULLSTACK PROJECTS:</h3>
      <SectionWrapper paragraphContent={<FullstackPosts />} />
    </section>
  );
};

export default FullstackSection;
