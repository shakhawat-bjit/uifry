import React from "react";
import "./index.scss";
import ContactImage from "../ContacImage";
import ContactContent from "../ContactContent";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="contact-section">
      <ContactContent />
      <ContactImage />
    </div>
  );
}
