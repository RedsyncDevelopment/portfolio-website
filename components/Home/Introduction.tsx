import Link from "next/link";
import React, { ReactNode } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Paragraph from "./Paragraph";

interface IntroductionProps {
  children?: ReactNode;
}

const Introduction: React.FC<IntroductionProps> = ({ children }) => {
  return (
    <div className="lg:pt-20 pt-10 w-full pl-8 md:pl-24 xl:pl-32">
      <h1 className="text-secondary-gray-400 text-6xl xl:text-8xl font-bold leading-relaxed xl:leading-relaxed">
        <span className="">
          Hi!
          <br />
        </span>
        <span>
          I&apos;m <span className="text-black dark:text-white">Ivan</span>
          <span className="text-primary-blue-400">.</span>
        </span>
      </h1>
      <Paragraph />

      <Link href="/work">
        <button className="flex items-center gap-3 py-2 px-4 bg-secondary-gray-200 dark:bg-secondary-gray-700 border-2 border-primary-blue-400 rounded-md">
          <span className="font-semibold">VIEW PORTFOLIO</span>
          <span>
            <BsFillBriefcaseFill className="fill-primary-blue-400 w-4 h-4" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Introduction;
