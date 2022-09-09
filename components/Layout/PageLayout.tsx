import React, { ReactNode } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <button
        className="fixed right-5 bottom-5 md:right-10 md:bottom-10 animate-bounce"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <BsFillArrowUpSquareFill className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PageLayout;
