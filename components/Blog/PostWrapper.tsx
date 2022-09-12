import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostNode } from "../../types";

interface PostWrapperProps {
  post: PostNode;
}

const PostWrapper: React.FC<PostWrapperProps> = ({
  post: { title, slug, excerpt, category, featuredImage, createdAt },
}) => {
  return (
    <Link href={`blog/${slug}`}>
      <a className="border-2 p-6 border-primary-blue-400">
        <article>
          <div className="flex justify-center">
            <Image
              src={featuredImage.url}
              alt={excerpt}
              width={200}
              height={150}
            />
          </div>
          <div className="flex flex-col gap-6 pt-8">
            <div className="flex justify-between px-4 text-sm text-secondary-gray-400">
              <div>Time</div>
              <div>Category</div>
            </div>
            <h2 className="text-center text-xl px-4">{title}</h2>
            <p>{excerpt}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostWrapper;
