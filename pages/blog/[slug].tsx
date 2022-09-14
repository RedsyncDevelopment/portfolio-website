import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import BackButton from "../../components/Blog/SinglePost/BackButton";
import SinglePostContent from "../../components/Blog/SinglePost/SinglePostContent";
import SinglePostDetails from "../../components/Blog/SinglePost/SinglePostDetails";
import SinglePostExcerpt from "../../components/Blog/SinglePost/SinglePostExcerpt";
import SinglePostHeading from "../../components/Blog/SinglePost/SinglePostHeading";
import SinglePostImage from "../../components/Blog/SinglePost/SinglePostImage";
import PageLayout from "../../components/Layout/PageLayout";
import { fetchAllPosts, fetchPost } from "../../utils/constants";

interface BlogPostProps {
  children?: ReactNode;
}

const BlogPost: NextPage<BlogPostProps> = (props) => {
  const { query } = useRouter();

  // Syncronizing data with Server
  const { data, isLoading } = useQuery(["post"], () => fetchPost(query.slug));

  if (!data) return null;
  if (isLoading) return <div className="py-16">Loading...</div>;

  return (
    <PageLayout>
      <BackButton />
      <article className="py-32 px-4 md:px-14 lg:px-32 flex flex-col items-center gap-16">
        <SinglePostHeading heading={data.title} />
        <SinglePostImage url={data.featuredImage.url} alt={data.excerpt} />
        <SinglePostDetails
          createdAt={data.createdAt}
          category={data.category.name}
        />
        <SinglePostExcerpt excerpt={data.excerpt} />
        <SinglePostContent post={data} />
      </article>
    </PageLayout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchAllPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["post"], () => fetchPost(params?.slug));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 100,
    },
  };
};
