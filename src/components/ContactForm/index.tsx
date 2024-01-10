import React from "react";

import BusinessBannerFormImage from "../ContactFormImage";
import "./index.scss";
import ContactFormContent from "../ContactFormContent";
import ContactFormImage from "../ContactFormImage";
type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="businessBannerForm">
      <ContactFormContent />
      <ContactFormImage />
    </div>
  );
}
