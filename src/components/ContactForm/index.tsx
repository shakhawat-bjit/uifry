import React from "react";

import "./index.scss";
import ContactFormContent from "../ContactFormContent";
import ContactFormImage from "../ContactFormImage";
type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="contact-form">
      <ContactFormContent />
      <ContactFormImage />
    </div>
  );
}
