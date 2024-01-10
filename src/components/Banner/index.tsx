import React from "react";
import "./index.scss";
import BannerImage from "../BannerImage";
import BannerContent from "../BannerContent";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="banner">
      <BannerContent />
      <BannerImage />
    </div>
  );
}
