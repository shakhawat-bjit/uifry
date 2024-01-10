import React from "react";
import BusinessBannerFormText from "./BusinessBannerFormText";
import BusinessBannerFormImage from "./BusinessBannerFormImage";
import "./index.scss";
type Props = {};

export default function BusinessBannerForm({}: Props) {
  return (
    <div className="businessBannerForm">
      <BusinessBannerFormText />
      <BusinessBannerFormImage />
    </div>
  );
}
