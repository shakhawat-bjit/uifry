import React from "react";
import "./index.scss";
import Post from "../Post";

type Props = {};

const updates = [
  {
    tag: "Growth",
    title: "15 ways to grow your saas in 21 days with no money",
    image: "/assets/images/meeting/meeting1.png",
  },
  {
    tag: "Career",
    title: "Why everyone is moving today to subscribtions",
    image: "/assets/images/meeting/meeting2.png",
  },
  {
    tag: "Design",
    title: "9 ways to make it quick and never look back again in your life",
    image: "/assets/images/meeting/meeting3.png",
  },
];

export default function Updates({}: Props) {
  return (
    <div className="update-section">
      <div className="update-section__title">
        <h1 className="update-section__title__heading">
          Our latest updates for you here!
        </h1>
        <p className="update-section__title__description">
          Whats heppening around the World.
        </p>
      </div>
      <div className="update-section__post-wrapper">
        {updates.map((post) => (
          <Post key={post?.title} post={post} />
        ))}
      </div>
    </div>
  );
}
