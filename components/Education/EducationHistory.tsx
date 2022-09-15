import ExpirienceDetails from "../UI/ExpirienceDetails";
import SectionWrapper from "../UI/SectionWrapper";

const EducationHistory = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">EDUCATION</h3>

      <SectionWrapper
        paragraphNumber="02"
        paragraphName="College"
        paragraphContent={
          <ExpirienceDetails
            heading="univ. bacc. inf."
            yearsSpan="[2016 - 2020]"
            companyType="Institution"
            companyName="Faculty of Organization and Informatics"
            address="Pavlinska 2, 42000, Varaždin, Croatia"
            linkHref="https://www.foi.unizg.hr/"
            linkDescription="https://www.foi.unizg.hr/"
          />
        }
      />
      <SectionWrapper
        paragraphNumber="01"
        paragraphName="Middle school"
        paragraphContent={
          <ExpirienceDetails
            heading="Computer Technician"
            yearsSpan="[2011 - 2014]"
            companyType="Institution"
            companyName="Srednja škola Zlatar"
            address="Braće Radić 10, 49250, Zlatar, Croatia"
            linkHref="https://sszlatar.hr/"
            linkDescription="https://sszlatar.hr/"
          />
        }
      />
    </section>
  );
};

export default EducationHistory;
