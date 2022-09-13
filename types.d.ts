export interface NavigationInterface {
  id: string;
  name: string;
  link: string;
}

export interface PostNode {
  category: {
    name: string;
  };
  createdAt: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  title: string;
}

export interface Posts {
  node: PostNode;
}

export interface Post {
  post: {
    author: {
      name: string;
    };

    category: {
      name: string;
    };
    content?: {
      raw: {
        children: any;
      };
    };
    createdAt: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    id: string;
    slug: string;
    title: string;
  };
}
