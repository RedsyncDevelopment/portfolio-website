import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import React from "react";
import { fetchAllBackendPosts } from "../../../utils/constants";
import PostWrapper from "../../Blog/PostWrapper";

interface BackendPostsProps {}

const BackendPosts: React.FC<BackendPostsProps> = ({}) => {
  const { data, isLoading } = useQuery(["backend"], () =>
    fetchAllBackendPosts()
  );

  if (!data) return null;
  if (isLoading) return <div className="py-16">Loading...</div>;

  if (data.length === 0) return <div className="py-16">No posts</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
      {data?.map(({ node: post }) => (
        <PostWrapper key={post.title} post={post} />
      ))}
    </div>
  );
};

export default BackendPosts;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["backend"], () => fetchAllBackendPosts());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 100, // 1 day in seconds
    },
  };
};
