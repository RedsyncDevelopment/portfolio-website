import useDeviceWidth from "../../hooks/useDeviceWidth";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  // adding this navigation is better for SEO - there are no double <nav/> elements renderd, but it's worse for UI (FCP)
  const { isMobile } = useDeviceWidth();

  return (
    <header id="navheader" className="lg:w-1/4 w-screen">
      {/* {isMobile === true && <MobileNavigation />}
      {isMobile === false && <DesktopNavigation />} */}
      <MobileNavigation />
      <DesktopNavigation />
    </header>
  );
};

export default Navigation;
