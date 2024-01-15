"use client";
import React, { useState } from "react";
import "./index.scss";
import Link from "next/link";
// import logo from "../../../../public/assets/images/logo.png";
import Image from "next/image";
import Button from "../Button";
import cat from "../../../../public/assets/icons/icon/Category.png";
import NavigationBarPopup from "../NavigationBarPopup";

type Props = {
  navLinks: {
    link: string;
    content: string;
  }[];
  logo: {
    link: string;
    imageSrc: string;
  };
  buttons: {
    link: string;
    content: string;
  }[];
};

export default function NavigationBar({ navLinks, buttons, logo }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__head">
        <p className="navbar__head__title">
          This is an announcement tagline for you to insert
        </p>
      </div>

      <div className="navbar__body">
        <div className="navbar__body__content">
          <Link href="/" className="navbar__body__logo">
            <Image
              src={logo.imageSrc}
              alt="logo of organization"
              width={113}
              height={35.26}
              className="navbar__body__logo__image"
            />
          </Link>
          <div className="navbar__body__link-wrapper">
            <Link href="/" className="navbar__body__link">
              Home
            </Link>
            <Link href="/" className="navbar__body__link">
              About
            </Link>
            <Link href="/" className="navbar__body__link">
              Pricing
            </Link>
            <Link href="/" className="navbar__body__link">
              Blog
            </Link>
          </div>
        </div>

        <div className="navbar__body__button-wrapper">
          <Button
            clickEvent={() => console.log("Contact Now")}
            className="button--md button--text-midnight-blue  button--bg-bride-blush"
          >
            Contact Now
          </Button>
        </div>
        <div className="navbar__body__responsive-button">
          <Button
            className="icon-button--sm  button--bg-bride-blush"
            clickEvent={() => {
              setShow(true);
              // console.log("click categiry button");
            }}
          >
            <Image src={cat.src} height={24} width={24} alt="category" />
          </Button>
        </div>
        <NavigationBarPopup show={show} setShow={setShow} />
      </div>
    </div>
  );
}
