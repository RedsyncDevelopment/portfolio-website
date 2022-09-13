import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import React from "react";
import { fetchAllPosts } from "../../utils/constants";
import PostWrapper from "./PostWrapper";

interface BlogPostsProps {}

const BlogPosts: React.FC<BlogPostsProps> = ({}) => {
  const { data, isLoading } = useQuery(["posts"], () => fetchAllPosts());

  if (!data) return null;
  if (isLoading) return <div className="py-16">Loading...</div>;

  if (data.length === 0) return <div className="py-16">No posts</div>;

  return (
    <div className="py-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
      {data?.map(({ node: post }) => (
        <PostWrapper key={post.title} post={post} />
      ))}
    </div>
  );
};

export default BlogPosts;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["posts"], () => fetchAllPosts());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
