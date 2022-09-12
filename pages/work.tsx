import { NextPage } from "next";
import { ReactNode } from "react";
import PageLayout from "../components/Layout/PageLayout";
import SectionLayout from "../components/Layout/SectionLayout";
import CubeOtherPages from "../components/UI/CubeOtherPages";
import Workheading from "../components/Work/WorkHeading";
import useDeviceWidth from "../hooks/useDeviceWidth";

interface WorkProps {
  children?: ReactNode;
}

const Work: NextPage<WorkProps> = ({ children }) => {
  const isMobile = useDeviceWidth();

  return (
    <PageLayout>
      <SectionLayout>
        <Workheading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
    </PageLayout>
  );
};

export default Work;
