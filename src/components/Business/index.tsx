import React from "react";
import BusinessImage from "../BusinessImage";
import BusinessContent from "../BusinessContent";
import "./index.scss";
type Props = {};

export default function Business({}: Props) {
  return (
    <div className="business">
      <BusinessContent />
      <BusinessImage />
    </div>
  );
}
