import { NextPage } from "next";
import { ReactNode } from "react";

interface AboutProps {
  children?: ReactNode;
}

const About: NextPage<AboutProps> = ({ children }) => {
  return (
    <>
      <div>About</div>
    </>
  );
};

export default About;
