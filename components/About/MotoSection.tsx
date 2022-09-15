const MotoSection = () => {
  return (
    <>
      <section>
        <div className="flex gap-2">
          <h3 className="heading3">MOTO: </h3>
          <h4 className="text-lg md:text-2xl font-bold">
            &quot;Every problem has a solution&quot;
          </h4>
        </div>
        <div className="font-semibold text-secondary-gray-400 text-justify pt-6 text-md md:text-lg 2xl:text-xl xl:leading-relaxed 2xl:leading-relaxed 2xl:pl-20 2xl:pr-72">
          <p>
            Sounds like a basic motto for a basic IT guy? Probably, but as a
            developer there is one great thing I have learned. Look at the
            problems objectively and then every problem (not just code related)
            has a solution.
          </p>
          <p className="pt-2">
            My name is <span className="text-black dark:text-white">Ivan</span>{" "}
            and I am{" "}
            <span className="text-black dark:text-white">
              Front-end Developer
            </span>{" "}
            with main focus on{" "}
            <span className="text-black dark:text-white">React</span> library.
            Although I mostly work with React and NextJS I like to dive into
            Back-end Development too. After a few years working as a Project
            Manager I have decided to start my own company and work as a
            contractor.
          </p>
        </div>
      </section>
    </>
  );
};

export default MotoSection;
