import { NextPage } from "next";
import { ReactNode } from "react";
import ExpirienceHeading from "../components/Expirience/ExpirienceHeading";
import ExpirienceHistory from "../components/Expirience/ExpirienceHistory";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import useDeviceWidth from "../hooks/useDeviceWidth";

interface ExpirienceProps {
  children?: ReactNode;
}

const Expirience: NextPage<ExpirienceProps> = ({ children }) => {
  const { isMobile } = useDeviceWidth();

  return (
    <PageLayout>
      <SectionLayout>
        <ExpirienceHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
      <div className="pb-16">
        <SectionLayout>
          <ExpirienceHistory />
        </SectionLayout>
      </div>
    </PageLayout>
  );
};

export default Expirience;
