import React from "react";
import "./index.scss";
import BannerText from "./BannerText";
import BannerImage from "./BannerImage";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="banner">
      <BannerText />
      <BannerImage />
    </div>
  );
}
