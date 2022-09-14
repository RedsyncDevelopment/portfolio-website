import { request } from "graphql-request";
import { Post, Posts } from "../types";
import {
  BACKEND,
  FRONTEND,
  FULLSTACK,
  MANAGMENT,
  POST,
  POSTS_QUERY,
  PROJECT,
  PROJECTS,
} from "./querys";

export const publicURL = process.env.PUBLIC_URL;

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

export const fetchAllFrontendPosts = async (): Promise<Posts[]> => {
  const response = await request(
    "https://api-eu-central-1.hygraph.com/v2/cl7rmrz1e6goz01t7c6vq47uh/master",
    FRONTEND
  );
  return response.projectsConnection.edges;
};

export const fetchAllBackendPosts = async (): Promise<Posts[]> => {
  const response = await request(
    "https://api-eu-central-1.hygraph.com/v2/cl7rmrz1e6goz01t7c6vq47uh/master",
    BACKEND
  );
  return response.projectsConnection.edges;
};

export const fetchAllFullstackPosts = async (): Promise<Posts[]> => {
  const response = await request(
    "https://api-eu-central-1.hygraph.com/v2/cl7rmrz1e6goz01t7c6vq47uh/master",
    FULLSTACK
  );
  return response.projectsConnection.edges;
};

export const fetchAllManagmentPosts = async (): Promise<Posts[]> => {
  const response = await request(
    "https://api-eu-central-1.hygraph.com/v2/cl7rmrz1e6goz01t7c6vq47uh/master",
    MANAGMENT
  );
  return response.projectsConnection.edges;
};

export const fetchAllProjects = async (): Promise<Posts[]> => {
  const response = await request(
    "https://api-eu-central-1.hygraph.com/v2/cl7rmrz1e6goz01t7c6vq47uh/master",
    PROJECTS
  );
  return response.projectsConnection.edges;
};

export const fetchProject = async (slug?: string | string[]): Promise<Post> => {
  const response = await request(
    "https://api-eu-central-1.hygraph.com/v2/cl7rmrz1e6goz01t7c6vq47uh/master",
    PROJECT,
    { slug }
  );
  return response.project;
};
