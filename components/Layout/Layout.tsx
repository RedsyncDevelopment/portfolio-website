import React, { ReactNode } from "react";
import useDeviceWidth from "../../hooks/useDeviceWidth";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useDeviceWidth();

  return (
    <>
      <main className={`${isMobile ? "w-screen" : "w-3/4"}`}>{children}</main>
    </>
  );
};

export default Layout;
