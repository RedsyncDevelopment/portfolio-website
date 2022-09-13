import { gql, request } from "graphql-request";
import { Post, Posts } from "../types";

export const publicURL = process.env.PUBLIC_URL;

const POSTS_QUERY = gql`
  query GetAllPosts {
    postsConnection(orderBy: createdAt_DESC) {
      edges {
        node {
          category {
            name
          }
          createdAt
          slug
          excerpt
          title
          featuredImage {
            url
          }
        }
      }
    }
  }
`;

const POST = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      id
      createdAt
      excerpt
      content {
        raw
      }
      author {
        name
      }
      featuredImage {
        url
      }
      category {
        name
      }
    }
  }
`;

export const fetchAllPosts = async (): Promise<Posts[]> => {
  const response = await request(
    "https://api-eu-central-1.graphcms.com/v2/cl0i5p1sm1i8w01z22pd04y1x/master",
    POSTS_QUERY
  );
  return response.postsConnection.edges;
};
export const fetchPost = async (slug?: string | string[]): Promise<Post> => {
  const response = await request(
    "https://api-eu-central-1.graphcms.com/v2/cl0i5p1sm1i8w01z22pd04y1x/master",
    POST,
    { slug }
  );
  return response.post;
};
