import Image from "next/image";
import Link from "next/link";
import React from "react";
import insta from "../../../../public/assets/icons/social/instagram.png";
import flickr from "../../../../public/assets/icons/social/flickr.png";
import pinterest from "../../../../public/assets/icons/social/pinterest.png";
import twitter from "../../../../public/assets/icons/social/twitter.png";
import logo from "../../../../public/assets/images/logo.png";
import "./index.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer-section">
      <div className="footer-section__heading">
        <Link href="/" className="footer-section__heading__logo-wrapper">
          <Image
            src={logo.src}
            alt="logo of organization"
            width={113}
            height={35.26}
            className="footer-section__heading__logo"
          />
        </Link>
        <div className="footer-section__heading__link-wrapper">
          <Link href="/" className="footer-section__heading__link">
            Home
          </Link>
          <Link href="/" className="footer-section__heading__link">
            About
          </Link>
          <Link href="/" className="footer-section__heading__link">
            Pricing
          </Link>
          <Link href="/" className="footer-section__heading__link">
            Blog
          </Link>
          <Link href="/" className="footer-section__heading__link">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-section__divider"></div>
      <div className="footer-section__body">
        <div className="footer-section__body__description">
          All rights reserved ® uifry.com | Terms and conditions apply!
        </div>
        <div className="footer-section__body__social-link-wrapper">
          <Link href="/" className="footer-section__body__social-link">
            <Image src={insta.src} height={32} width={32} alt="instagram" />
          </Link>
          <Link href="/" className="footer-section__body__social-link">
            <Image src={flickr.src} height={32} width={32} alt="flickr" />
          </Link>
          <Link href="/" className="footer-section__body__social-link">
            <Image src={insta.src} height={32} width={32} alt="instagram" />
          </Link>
          <Link href="/" className="footer-section__body__social-link">
            <Image src={pinterest.src} height={32} width={32} alt="pinterest" />
          </Link>
          <Link href="/" className="footer-section__body__social-link">
            <Image src={twitter.src} height={32} width={32} alt="twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
}
