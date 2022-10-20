import ExpirienceDetails from "../UI/ExpirienceDetails";
import SectionWrapper from "../UI/SectionWrapper";

const Certificates = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">CERTIFICATES</h3>

      <SectionWrapper
        paragraphNumber="01"
        paragraphName="Front-end Tehnologies"
        paragraphContent={[
          <ExpirienceDetails
            key={1}
            certificate
            heading="React - Full Stack Open 2022"
            companyType="Institution"
            companyName="University of Helsinki"
            linkHref="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/a805402b0ad3cb70ab332ab68a2ddf25"
            linkDescription="Full Stack Open - Certificate of Completion"
          />,
          <ExpirienceDetails
            key={2}
            certificate
            heading="React - The Complete Guide (Hooks, React Router, Redux)"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-cb0bb4da-29eb-4398-bc91-a04f627af560/"
            linkDescription="React - The Complete Guide - Certificate of Completion"
          />,
          <ExpirienceDetails
            key={3}
            certificate
            heading="The Complete JavaScript Course 2022: From Zero to Expert!"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-09c5f240-13f4-4315-a945-4711a2fde143/"
            linkDescription="JavaScript - Certificate of Completion"
          />,
          <ExpirienceDetails
            key={4}
            certificate
            heading="Build Responsive Real-World Websites with HTML and CSS"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-6fee2a89-9a32-4ce0-98ce-629cbd3f78ce/"
            linkDescription="HTML and CSS - Certificate of Completion"
          />,
        ]}
      />
      <SectionWrapper
        paragraphNumber="02"
        paragraphName="Back-end Tehnologies"
        paragraphContent={[
          <ExpirienceDetails
            key={1}
            certificate
            heading="Node.js, Express, MongoDB & More: The Complete Bootcamp 2022"
            companyType="Learning portal"
            companyName="Udemy"
            linkHref="https://www.udemy.com/certificate/UC-5a84cce0-148b-4247-b6f0-b419dc73d30f/"
            linkDescription="Node.js, Express, MongoDB - Certificate of Completion"
          />,
        ]}
      />
      <SectionWrapper
        paragraphNumber="03"
        paragraphName="Others"
        paragraphContent={[
          <ExpirienceDetails
            key={1}
            certificate
            heading="React Native - Full Stack Open"
            companyType="Insititution"
            companyName="University of Helsinki"
            linkHref="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/a805402b0ad3cb70ab332ab68a2ddf25"
            linkDescription="React Native - Certificate of Completion"
          />,
        ]}
      />
    </section>
  );
};

export default Certificates;
