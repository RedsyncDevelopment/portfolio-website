import useDeviceWidth from "../../hooks/useDeviceWidth";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const isMobile = useDeviceWidth();

  return (
    <header id="navheader">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </header>
  );
};

export default Navigation;
