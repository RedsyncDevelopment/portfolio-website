import Link from "next/link";
import React from "react";

interface PostWrapperProps {
  title: string;
  slug: string;
}

const PostWrapper: React.FC<PostWrapperProps> = ({ title, slug }) => {
  return (
    <Link href={`blog/${slug}`}>
      <a className="h-96 border-2 p-6">
        <h2>{title}</h2>
        <p>{slug}</p>
      </a>
    </Link>
  );
};

export default PostWrapper;
