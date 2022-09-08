import { NextPage } from "next";
import { ReactNode } from "react";

interface SkillsProps {
  children?: ReactNode;
}

const Skills: NextPage<SkillsProps> = ({ children }) => {
  return (
    <>
      <div>Skills</div>
    </>
  );
};

export default Skills;
