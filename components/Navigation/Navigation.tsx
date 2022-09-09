import useDeviceWidth from "../../hooks/useDeviceWidth";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const isMobile = useDeviceWidth();

  return (
    <header id="navheader" className="lg:w-1/4 w-screen">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </header>
  );
};

export default Navigation;
