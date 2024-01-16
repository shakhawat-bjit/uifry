import Image from "next/image";
import Link from "next/link";
import React from "react";
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
        <div className="footer-section__heading-content__wrapper">
          <div className="footer-section__heading-content__link-wrapper">
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
          <div className="footer-section__heading-content__social-link-wrapper">
            {footerData?.socialLinks?.map((link, index) => (
              <Link
                href={link?.link}
                className="footer-section__heading__social-link"
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
