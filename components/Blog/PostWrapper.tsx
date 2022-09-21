import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PostNode } from "../../types";

interface PostWrapperProps {
  post: PostNode;
}

const PostWrapper: React.FC<PostWrapperProps> = ({
  post: { title, slug, excerpt, category, featuredImage, createdAt },
}) => {
  const { pathname } = useRouter();

  const created = new Date(createdAt).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`${pathname}/${slug}`}>
      <a
        className={`border-2 p-6 border-primary-blue-400 dark:hover:bg-secondary-gray-700 hover:bg-secondary-gray-200 shadow-md`}
      >
        <article>
          <div className="flex justify-center">
            {featuredImage && (
              <Image
                src={featuredImage.url}
                alt={excerpt}
                width={200}
                height={150}
              />
            )}
          </div>
          <div className="flex flex-col gap-6 pt-8">
            <div className="flex justify-between px-4 text-sm text-secondary-gray-400">
              <div>{category.name}</div>
              {createdAt && <div>{created}</div>}
            </div>
            <h2 className="text-center text-black dark:text-white text-xl px-4">
              {title}
            </h2>
            <p>{excerpt}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostWrapper;
