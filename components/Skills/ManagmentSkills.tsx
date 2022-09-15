import SectionWrapper from "../UI/SectionWrapper";

const ManagmentSkills = () => {
  return (
    <section className="2xl:pr-60">
      <h3 className="heading3">MANAGMENT SKILLS:</h3>
      <SectionWrapper
        paragraphNumber="01"
        paragraphName="Coordinating and Decision Making"
        paragraphContent="From my early days in elementary school, trough middle school and college, to my years
        on work I was always managing something. When I was in 5th grade, I helped organized
        math and informatics competition in my school. I was also a class president for 4 years
        and the best student in my generation and a captain of a football team. In middle school
        and college I've led numerous different team on all kind of projects."
      />

      <SectionWrapper
        paragraphNumber="02"
        paragraphName="Team Work"
        paragraphContent="Team Work and Communication with other people are one of my strong sides acquired
        trough middle school, college and work but also from playing video games."
      />
    </section>
  );
};

export default ManagmentSkills;
