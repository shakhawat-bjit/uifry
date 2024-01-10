import React from "react";
import BusinessBannerFormText from "../ContactFormContent";
import BusinessBannerFormImage from "../ContactFormImage";
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
