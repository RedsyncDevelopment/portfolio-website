import React, { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <>
      <div
        id="page-layout-div"
        className="lg:pt-20 pt-10 pl-8 pr-8 md:pr-24 xl:pr-32 md:pl-24 xl:pl-32 "
      >
        {children}
      </div>
    </>
  );
};

export default SectionLayout;
