import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import PageLayout from "../../components/Layout/PageLayout";
import { fetchAllPosts, fetchPost } from "../../utils/constants";

interface BlogPostProps {
  children?: ReactNode;
}

const BlogPost: NextPage<BlogPostProps> = (props) => {
  const { query } = useRouter();

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

  // Syncronizing data with Server
  const { data, isLoading } = useQuery(["post"], () => fetchPost(query.slug));

  if (!data) return null;
  if (isLoading) return <div className="py-16">Loading...</div>;
  const post = data.post;

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
          <h3 key={index} className="">
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
                    className="underline text-primary-blue-400"
                  >
                    {item}
                  </a>
                );
              } else {
                return <p key={i}>{item}</p>;
              }
            })}
          </React.Fragment>
        );

      case "code-block":
        return (
          <div key={index} className="border-2">
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
          <h4 key={index} className="">
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
            className=""
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <PageLayout>
      <article className="py-16 px-4 md:px-14 lg:px-32">
        <h1>{post.title}</h1>
        <div>
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
      </article>
    </PageLayout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchAllPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["post"], () => fetchPost(params?.slug));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
