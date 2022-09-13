import React from "react";

interface SinglePostExcerptProps {
  excerpt: string;
}

const SinglePostExcerpt: React.FC<SinglePostExcerptProps> = ({ excerpt }) => {
  return <h2 className="text-xl md:text-2xl text-center">{excerpt}</h2>;
};

export default SinglePostExcerpt;
