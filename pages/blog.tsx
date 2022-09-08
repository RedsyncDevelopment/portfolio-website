import { NextPage } from "next";
import { ReactNode } from "react";

interface BlogProps {
  children?: ReactNode;
}

const Blog: NextPage<BlogProps> = ({ children }) => {
  return (
    <>
      <div>Blog</div>
    </>
  );
};

export default Blog;
