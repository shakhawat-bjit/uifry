import React from "react";
import "./index.scss";
import ContactImage from "../ContacImage";
import ContactContent from "../ContactContent";

export type contact = {
  heading: string;
  description1: string;
  description2: string;
  buttons: {
    link: string;
    content: string;
    class: string;
    size: "small" | "medium" | "large";
    image?: string;
    imageAlt?: string;
  }[];
  formInputs: {
    inputImage: string;
    inputImageAlt: string;
    type: string;
    placeholder: string;
  }[];
  submitButton: {
    link: string;
    content: string;
    class: string;
    size: "small" | "medium" | "large";
    image?: string;
    imageAlt?: string;
  };
  image: string;
};

type Props = {
  contactData: contact;
};

export default function Contact({ contactData }: Props) {
  const { image, ...contactContent } = contactData;
  return (
    <div className="contact-section">
      <ContactContent contactContentData={contactContent} />
      <ContactImage contactImageData={image} />
    </div>
  );
}
