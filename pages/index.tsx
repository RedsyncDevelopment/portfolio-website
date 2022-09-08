import type { NextPage } from "next";
import { TypeAnimation } from "react-type-animation";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="flex gap-32 h-screen">
        <div className="mt-20 ml-32 w-1/2">
          <h1 className="text-secondary-gray-400 text-8xl font-bold leading-relaxed">
            <span className="">
              Hi!
              <br />
            </span>
            <span>
              I&apos;m <span className="text-black">Ivan</span>
              <span className="text-primary-blue-400">.</span>
            </span>
          </h1>
          <h2 className="text-3xl font-semibold text-secondary-gray-400 mr-64 leading-relaxed mt-16">
            Full-stack Developer with main focus on front-end part - buildind
            apps with <span className="text-primary-blue-400">React</span>, but
            I also like to dive into other tehnologies like
            <TypeAnimation
              sequence={["NodeJS", 1000, "Two", 1000, "Three", 1000]}
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className="self-center">Cube</div>
      </div>
    </div>
  );
};

export default Home;
