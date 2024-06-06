import ExpirienceDetails from "../UI/ExpirienceDetails";
import SectionWrapper from "../UI/SectionWrapper";

const ExpirienceHistory = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">EXPIRIENCE</h3>

      <SectionWrapper
        paragraphNumber="03"
        paragraphName="Software Engineer"
        paragraphContent={
          <ExpirienceDetails
            heading="Software Engineer"
            yearsSpan="[2023 - now]"
            companyType="Company"
            companyName="Reactor Studio (Kiwi.com)"
            address="Zagreb, Croatia"
            linkHref="https://www.reactor.studio/"
            linkDescription="https://www.reactor.studio/"
          />
        }
      />

      <SectionWrapper
        paragraphNumber="02"
        paragraphName="Founder | Front-end Developer"
        paragraphContent={
          <ExpirienceDetails
            heading="Founder | Front-end Web Developer"
            yearsSpan="[2022 - 2023]"
            companyType="Company"
            companyName="Redsync j.d.o.o."
            address="Mače, Croatia"
            linkHref="https://redsync.studio/"
            linkDescription="https://redsync.studio/"
          />
        }
      />

      <SectionWrapper
        paragraphNumber="01"
        paragraphName="Sales Manager"
        paragraphContent={
          <ExpirienceDetails
            heading="Sales Manager"
            yearsSpan="[2019 - 2021]"
            companyType="Company"
            companyName="Apolon Group d.o.o."
            address="Šibenik, Croatia"
          />
        }
      />
    </section>
  );
};

export default ExpirienceHistory;
