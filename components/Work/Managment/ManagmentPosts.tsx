import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import React from "react";
import { fetchAllManagmentPosts } from "../../../utils/constants";

import PostWrapper from "../../Blog/PostWrapper";

interface ManagmentPostsProps {}

const ManagmentPosts: React.FC<ManagmentPostsProps> = ({}) => {
  const { data, isLoading } = useQuery(["managment"], () =>
    fetchAllManagmentPosts()
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

export default ManagmentPosts;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["managment"], () =>
    fetchAllManagmentPosts()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 60 * 60 * 24,
    },
  };
};
