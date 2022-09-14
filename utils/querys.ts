import { gql } from "graphql-request";
export const POSTS_QUERY = gql`
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

export const POST = gql`
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

export const PROJECTS = gql`
  query GetAllProjects {
    projectsConnection(orderBy: createdAt_DESC) {
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

export const FRONTEND = gql`
  query Frontend {
    projectsConnection(
      where: { category: { id: "cl807o80t09dj0cuw7yl65nat" } }
    ) {
      edges {
        node {
          category {
            name
          }
          title
          slug
          excerpt
          featuredImage {
            url
          }
        }
      }
    }
  }
`;

export const BACKEND = gql`
  query Frontend {
    projectsConnection(
      where: { category: { id: "cl807nen90p9j0cun4toxm6v3" } }
    ) {
      edges {
        node {
          category {
            name
          }
          title
          slug
          excerpt
          featuredImage {
            url
          }
        }
      }
    }
  }
`;

export const FULLSTACK = gql`
  query Frontend {
    projectsConnection(
      where: { category: { id: "cl807oxeh0rfg0cunr4r4dcri" } }
    ) {
      edges {
        node {
          category {
            name
          }
          title
          slug
          excerpt
          featuredImage {
            url
          }
        }
      }
    }
  }
`;

export const MANAGMENT = gql`
  query Frontend {
    projectsConnection(
      where: { category: { id: "cl807pddu0auw0cuwqipcudtf" } }
    ) {
      edges {
        node {
          category {
            name
          }
          title
          slug
          excerpt
          featuredImage {
            url
          }
        }
      }
    }
  }
`;

export const PROJECT = gql`
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
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
