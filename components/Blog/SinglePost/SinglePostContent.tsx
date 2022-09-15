/* eslint-disable */
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import { Post } from "../../../types";
import CodeBlock from "../../UI/CodeBlock";

interface SinglePostContentProps {
  post: Post;
}

const SinglePostContent: React.FC<SinglePostContentProps> = ({ post }) => {
  return (
    <div className="w-full">
      {!!post.content && (
        <RichText
          content={post.content.raw}
          renderers={{
            h3: ({ children }) => (
              <h3 className="text-3xl lg:text-4xl font-bold py-8">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-2xl font-bold py-4">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-xl font-bold py-2">{children}</h5>
            ),
            p: ({ children }) => (
              <p className="text-md lg:text-lg p-4">{children}</p>
            ),
            a: ({ href, title }) => (
              <a
                className="underline text-md lg:text-xl text-primary-blue-400"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {!!title ? title : href}
              </a>
            ),
            code_block: ({ children }) => <CodeBlock>{children}</CodeBlock>,
            img: ({ src, altText, height, width }) => (
              <Image alt={altText} height={height} width={width} src={src!} />
            ),
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <em>{children}</em>,
            underline: ({ children }) => <u>{children}</u>,
          }}
        />
      )}
    </div>
  );
};

export default SinglePostContent;
