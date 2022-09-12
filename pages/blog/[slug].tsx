import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import PageLayout from "../../components/Layout/PageLayout";
import { fetchAllPosts, fetchPost } from "../../utils/constants";

interface BlogPostProps {
  children?: ReactNode;
}

const BlogPost: NextPage<BlogPostProps> = (props) => {
  const { query } = useRouter();

  const { data, isLoading } = useQuery(["post"], () => fetchPost(query.slug));

  console.log(data);

  return (
    <PageLayout>
      <div>Test</div>
    </PageLayout>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["post"], () => fetchPost(params?.slug));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
