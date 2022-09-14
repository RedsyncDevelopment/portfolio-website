import React from "react";

interface SinglePostDetailsProps {
  createdAt?: string;
  category: string;
}

const SinglePostDetails: React.FC<SinglePostDetailsProps> = ({
  createdAt,
  category,
}) => {
  return (
    <aside className=" w-full flex justify-between">
      <div className="flex flex-col">
        <span>Category: </span>
        <span>{category}</span>
      </div>
      <div className="flex flex-col">
        <span>Date: </span>
        {createdAt && (
          <span>
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
        )}
      </div>
    </aside>
  );
};

export default SinglePostDetails;
