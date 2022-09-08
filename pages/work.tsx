import { NextPage } from "next";
import { ReactNode } from "react";

interface WorkProps {
  children?: ReactNode;
}

const Work: NextPage<WorkProps> = ({ children }) => {
  return (
    <>
      <div>Work</div>
    </>
  );
};

export default Work;
