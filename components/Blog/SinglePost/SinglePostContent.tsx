import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Post } from "../../../types";

interface SinglePostContentProps {
  post: Post;
}

const SinglePostContent: React.FC<SinglePostContentProps> = ({ post }) => {
  // Handle code style depending on theme
  const [codeStyle, setCodeStyle] = useState(a11yDark);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setCodeStyle(a11yDark);
    } else {
      setCodeStyle(a11yLight);
    }
  }, [theme]);

  // Formating incoming content
  const getContentFragment = (
    index: number,
    text: any,
    obj: any,
    type?: string
  ) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-2xl lg:text-3xl font-bold pb-6">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <React.Fragment key={index}>
            {modifiedText.map((item: any, i: number) => {
              if (item.startsWith("http")) {
                return (
                  <a
                    href={item}
                    key={i}
                    className="underline text-md lg:text-xl text-primary-blue-400"
                  >
                    {item}
                  </a>
                );
              } else {
                return (
                  <p key={i} className="text-md lg:text-xl">
                    {item}
                  </p>
                );
              }
            })}
          </React.Fragment>
        );

      case "code-block":
        return (
          <div key={index} className="border-2 mb-6">
            {modifiedText.map((item: any, i: number) => (
              <SyntaxHighlighter
                style={codeStyle}
                showLineNumbers
                language="typescript"
                key={i}
              >
                {item}
              </SyntaxHighlighter>
            ))}
          </div>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-xl font-bold">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="w-full">
      {post.content?.raw.children.map((typeObj: any, index: number) => {
        const children = typeObj.children.map(
          (item: any, itemindex: number) => {
            if (item.href) {
              return getContentFragment(itemindex, item.href, item);
            } else {
              return getContentFragment(itemindex, item.text, item);
            }
          }
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
};

export default SinglePostContent;
