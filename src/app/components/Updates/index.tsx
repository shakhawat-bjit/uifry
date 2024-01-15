import React from "react";
import "./index.scss";
import Post from "../Post";

export type updates = {
  heading: string;
  description: string;
  posts: {
    tag: string;
    title: string;
    image: string;
    imageAlt: string;
  }[];
};

type Props = {
  updatesData: updates;
};

export default function Updates({ updatesData }: Props) {
  return (
    <div className="update-section">
      <div className="update-section__title">
        <h1 className="update-section__title__heading">
          {updatesData?.heading}
        </h1>
        <p className="update-section__title__description">
          {updatesData?.description}
        </p>
      </div>
      <div className="update-section__post-wrapper">
        {updatesData?.posts?.map((post) => (
          <Post key={post?.title} post={post} />
        ))}
      </div>
    </div>
  );
}
