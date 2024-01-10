import Image from "next/image";
import Link from "next/link";
import React from "react";
import insta from "../../../public/assets/icons/social/instagram.png";
import flickr from "../../../public/assets/icons/social/flickr.png";
import pinterest from "../../../public/assets/icons/social/pinterest.png";
import twitter from "../../../public/assets/icons/social/twitter.png";
import logo from "../../../public/assets/images/logo.png";
import "./index.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footer__head">
        <Link href="/" className="footer__head--logo">
          <Image
            src={logo.src}
            alt="logo of organization"
            width={113}
            height={35.26}
          />
        </Link>
        <div className="footer__links">
          <Link href="/" className="footer__link">
            Home
          </Link>
          <Link href="/" className="footer__link">
            About
          </Link>
          <Link href="/" className="footer__link">
            Pricing
          </Link>
          <Link href="/" className="footer__link">
            Blog
          </Link>
          <Link href="/" className="footer__link">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer__body">
        <div className="footer-text">
          All rights reserved ® uifry.com | Terms and conditions apply!
        </div>
        <div className="footer-socialLinks">
          <div className="footer-socialLink">
            <Image src={insta.src} height={32} width={32} alt="instagram" />
          </div>
          <div className="footer-socialLink">
            <Image src={flickr.src} height={32} width={32} alt="flickr" />
          </div>
          <div className="footer-socialLink">
            <Image src={insta.src} height={32} width={32} alt="instagram" />
          </div>
          <div className="footer-socialLink">
            <Image src={pinterest.src} height={32} width={32} alt="pinterest" />
          </div>
          <div className="footer-socialLink">
            <Image src={twitter.src} height={32} width={32} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
}
