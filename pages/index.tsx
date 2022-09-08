import type { NextPage } from "next";
import Link from "next/link";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Paragraph from "../components/Home/Paragraph";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="flex gap-32 h-screen">
        <div className="mt-20 pl-24 xl:pl-32 w-1/2">
          <h1 className="text-secondary-gray-400 text-6xl xl:text-8xl font-bold leading-relaxed xl:leading-relaxed">
            <span className="">
              Hi!
              <br />
            </span>
            <span>
              I&apos;m <span className="text-black">Ivan</span>
              <span className="text-primary-blue-400">.</span>
            </span>
          </h1>
          <Paragraph />
          <div className="pt-16">
            <Link href={"/about"}>
              <button className="flex items-center gap-3 py-2 px-4 bg-secondary-gray-200 border-2 border-primary-blue-400 rounded-md">
                <span className="font-semibold">VIEW PORTFOLIO</span>
                <span>
                  <BsFillBriefcaseFill className="fill-primary-blue-400 w-4 h-4" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="self-center">Cube</div>
      </div>
    </div>
  );
};

export default Home;
