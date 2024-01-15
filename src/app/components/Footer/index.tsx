import Image from "next/image";
import Link from "next/link";
import React from "react";
import insta from "../../../../public/assets/icons/social/instagram.png";
import flickr from "../../../../public/assets/icons/social/flickr.png";
import pinterest from "../../../../public/assets/icons/social/pinterest.png";
import twitter from "../../../../public/assets/icons/social/twitter.png";
import logo from "../../../../public/assets/images/logo.png";
import "./index.scss";

export type footer = {
  logo: {
    link: string;
    imageSrc: string;
  };
  links: {
    link: string;
    content: string;
  }[];
  copyright: string;
  socialLinks: {
    link: string;
    image: string;
    imageAlt: string;
  }[];
};

type Props = {
  footerData: footer;
};

export default function Footer({ footerData }: Props) {
  return (
    <div className="footer-section">
      <div className="footer-section__heading">
        <Link
          href={footerData?.logo?.link}
          className="footer-section__heading__logo-wrapper"
        >
          <Image
            src={footerData?.logo?.imageSrc}
            alt="logo"
            width={113}
            height={35.26}
            className="footer-section__heading__logo"
          />
        </Link>
        <div className="footer-section__heading__link-wrapper">
          {footerData?.links?.map((link, index) => (
            <Link
              href="/d"
              className="footer-section__heading__link"
              key={link?.content}
            >
              {link?.content}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-section__divider"></div>
      <div className="footer-section__body">
        <div className="footer-section__body__description">
          {footerData?.copyright}
        </div>
        <div className="footer-section__body__social-link-wrapper">
          {footerData?.socialLinks?.map((link, index) => (
            <Link
              href={link?.link}
              className="footer-section__body__social-link"
              key={index}
            >
              <Image
                src={link?.image}
                height={32}
                width={32}
                alt={link?.imageAlt}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
