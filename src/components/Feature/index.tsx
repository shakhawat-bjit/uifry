import React from "react";
import BusinessBannerText from "../FeatureContent";
import "./index.scss";
import BusinessBannerImage from "../FeatureImage";
import FeatureContent from "../FeatureContent";
import FeatureImage from "../FeatureImage";
type Props = {};

export default function Feature({}: Props) {
  return (
    <div className="feature">
      <FeatureImage />
      <FeatureContent />
    </div>
  );
}
