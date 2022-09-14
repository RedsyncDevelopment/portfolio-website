import SectionWrapper from "../../UI/SectionWrapper";
import BackendPosts from "./BackendPosts";

const BackendSection = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">BACK-END PROJECTS:</h3>
      <SectionWrapper paragraphContent={<BackendPosts />} />
    </section>
  );
};

export default BackendSection;
