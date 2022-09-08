import { NextPage } from "next";
import { ReactNode } from "react";

interface EducationProps {
  children?: ReactNode;
}

const Education: NextPage<EducationProps> = ({ children }) => {
  return (
    <>
      <div>Education</div>
    </>
  );
};

export default Education;
