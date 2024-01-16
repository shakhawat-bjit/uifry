import React from "react";
import "./index.scss";
import Post from "../Post";
import Image from "next/image";
import PostSlider from "../PostSlider";

export type updates = {
  heading: string;
  description: string;
  headingImage: string;
  headingImageAlt: string;
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
        <div className="update-section__image-wrapper">
          <Image
            src={updatesData?.headingImage}
            width={52.5}
            height={66.3}
            alt={updatesData?.headingImageAlt}
            className="update-section__image"
          />
        </div>
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

      <div className="update-section__post-slider">
        {updatesData?.posts?.length && (
          <PostSlider posts={updatesData?.posts} />
        )}
      </div>
    </div>
  );
}
