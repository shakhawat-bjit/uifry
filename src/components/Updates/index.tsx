import React from "react";
import "./index.scss";
import Update from "../Update";

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
    <div className="update">
      <div className="update__title">
        <h1 className="update__title--heading">
          Our latest updates for you here!
        </h1>
        <p className="update__title--description">
          Whats heppening around the World.
        </p>
      </div>
      <div className="update__wrapper">
        {updates.map((update) => (
          <Update key={update?.title} update={update} />
        ))}
      </div>
    </div>
  );
}
