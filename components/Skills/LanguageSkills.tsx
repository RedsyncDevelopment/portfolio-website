import SectionWrapper from "../UI/SectionWrapper";
import English from "./Language/English";

const LanguageSkills = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">LANGUAGE SKILLS:</h3>
      <SectionWrapper
        paragraphNumber="01"
        paragraphName="Croatian"
        paragraphContent="- native speaker"
      />

      <SectionWrapper
        paragraphNumber="02"
        paragraphName="English"
        paragraphContent={<English />}
      />
    </section>
  );
};

export default LanguageSkills;
