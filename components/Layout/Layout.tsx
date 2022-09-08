import React, { ReactNode } from "react";
import useDeviceWidth from "../../hooks/useDeviceWidth";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useDeviceWidth();

  return (
    <>
      <main className={!isMobile ? "absolute left-[30rem]" : ""}>
        {children}
      </main>
    </>
  );
};

export default Layout;
