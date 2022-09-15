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
  author: {
    name: string;
  };

  category: {
    name: string;
  };
  content?: {
    raw: {
      children: ElementNode[];
    };
  };
  createdAt?: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  id: string;
  slug: string;
  title: string;
}
