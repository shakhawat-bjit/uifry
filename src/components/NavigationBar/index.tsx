import React from "react";
import "./index.scss";
import Link from "next/link";
import logo from "../../../public/assets/images/logo.png";
import Image from "next/image";
import Button from "../Button";

type Props = {};

export default function NavigationBar({}: Props) {
  return (
    <div className="navbar">
      <div className="navbar__head--text">
        This is an announcement tagline for you to insert
      </div>
      <div className="navbar__body">
        <Link href="/" className="navbar_body--logo">
          <Image
            src={logo.src}
            alt="logo of organization"
            width={113}
            height={35.26}
          />
        </Link>
        <div className="navbar__links">
          <Link href="/" className="navbar__link">
            Home
          </Link>
          <Link href="/" className="navbar__link">
            About
          </Link>
          <Link href="/" className="navbar__link">
            Pricing
          </Link>
          <Link href="/" className="navbar__link">
            Blog
          </Link>
        </div>
        <div className="navbar__contact">
          <Button className="button--md--bride-blush">Contact Now</Button>
        </div>
      </div>
    </div>
  );
}
