import SectionWrapper from "../../UI/SectionWrapper";
import ManagmentPosts from "./ManagmentPosts";

const ManagmentSection = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">MANAGMENT PROJECTS:</h3>
      <SectionWrapper paragraphContent={<ManagmentPosts />} />
    </section>
  );
};

export default ManagmentSection;
