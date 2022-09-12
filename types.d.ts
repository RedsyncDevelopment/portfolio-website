export interface NavigationInterface {
  id: string;
  name: string;
  link: string;
}

export interface Posts {
  node: {
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
  };
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
}
