import React from "react";
import BusinessBannerText from "./BusinessBannerText";
import "./index.scss";
import BusinessBannerImage from "./BusinessBannerImage";
type Props = {};

export default function BusinessBanner({}: Props) {
  return (
    <div className="businessBanner">
      <BusinessBannerImage />
      <BusinessBannerText />
    </div>
  );
}
