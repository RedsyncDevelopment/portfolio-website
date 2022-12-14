import { NextPage } from "next";
import BlogHeading from "../../components/Blog/BlogHeading";
import BlogPosts from "../../components/Blog/BlogPosts";
import PageLayout from "../../components/Layout/PageLayout";
import SectionLayout from "../../components/Layout/SectionLayout";
import CubeOtherPages from "../../components/UI/CubeOtherPages";
import useDeviceWidth from "../../hooks/useDeviceWidth";

const Blog: NextPage = () => {
  const { isMobile } = useDeviceWidth();

  return (
    <PageLayout>
      <SectionLayout>
        <BlogHeading />
        {!isMobile && <CubeOtherPages />}
      </SectionLayout>
      <SectionLayout>
        <BlogPosts />
      </SectionLayout>
    </PageLayout>
  );
};

export default Blog;
