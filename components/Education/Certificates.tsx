import ExpirienceDetails from "../UI/ExpirienceDetails";
import SectionWrapper from "../UI/SectionWrapper";

const Certificates = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">CERTIFICATES</h3>

      <SectionWrapper
        paragraphNumber="01"
        paragraphName="React"
        paragraphContent={
          <ExpirienceDetails
            heading="React - The Complete Guide (incl Hooks, React Router, Redux)"
            yearsSpan="[2022]"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-cb0bb4da-29eb-4398-bc91-a04f627af560/"
            linkDescription="https://www.udemy.com/certificate/UC-cb0bb4da-29eb-4398-bc91-a04f627af560/"
          />
        }
      />
      <SectionWrapper
        paragraphNumber="02"
        paragraphName="JavaScript"
        paragraphContent={
          <ExpirienceDetails
            heading="The Complete JavaScript Course 2022: From Zero to Expert!"
            yearsSpan="[2022]"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-09c5f240-13f4-4315-a945-4711a2fde143/"
            linkDescription="https://www.udemy.com/certificate/UC-09c5f240-13f4-4315-a945-4711a2fde143/"
          />
        }
      />
      <SectionWrapper
        paragraphNumber="03"
        paragraphName="Node.js & Express & MongoDB"
        paragraphContent={
          <ExpirienceDetails
            heading="Node.js, Express, MongoDB & More: The Complete Bootcamp 2022"
            yearsSpan="[2022]"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-5a84cce0-148b-4247-b6f0-b419dc73d30f/"
            linkDescription="https://www.udemy.com/certificate/UC-5a84cce0-148b-4247-b6f0-b419dc73d30f/"
          />
        }
      />
      <SectionWrapper
        paragraphNumber="04"
        paragraphName="HTML5 & CSS3"
        paragraphContent={
          <ExpirienceDetails
            heading="Build Responsive Real-World Websites with HTML and CSS"
            yearsSpan="[2022]"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-6fee2a89-9a32-4ce0-98ce-629cbd3f78ce/"
            linkDescription="https://www.udemy.com/certificate/UC-6fee2a89-9a32-4ce0-98ce-629cbd3f78ce/"
          />
        }
      />
    </section>
  );
};

export default Certificates;
