import { TypeAnimation } from "react-type-animation";

const Paragraph = () => {
  return (
    <h2 className="text-xl leading-relaxed xl:text-3xl xl:leading-relaxed font-semibold text-secondary-gray-400 pt-16 xl:pr-24 md:pr-16 pr-8 h-[280px] lg:h-full lg:pb-16">
      Full-stack Developer with main focus on front-end part - buildind apps
      with <span className="text-primary-blue-400">React</span>, but I also like
      to dive into{" "}
      <TypeAnimation
        sequence={[
          "back-end with NodeJS.",
          1000,
          "databases with PosgreSQL.",
          1000,
          "design with Figma.",
          1000,
        ]}
        repeat={Infinity}
        wrapper="span"
        className="text-primary-blue-400"
        speed={40}
      />
    </h2>
  );
};

export default Paragraph;
