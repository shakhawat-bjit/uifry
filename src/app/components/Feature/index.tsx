import React from "react";
import "./index.scss";
import FeatureContent from "../FeatureContent";
import FeatureImage from "../FeatureImage";
type Props = {};

export default function Feature({}: Props) {
  return (
    <div className="feature-section">
      <FeatureImage />
      <FeatureContent />
    </div>
  );
}
