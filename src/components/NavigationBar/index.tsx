"use client";
import React, { useState } from "react";
import "./index.scss";
import Link from "next/link";
import logo from "../../../public/assets/images/logo.png";
import Image from "next/image";
import Button from "../Button";
import cat from "../../../public/assets/icons/icon/Category.png";
import NavigationBarPopup from "../NavigationBarPopup";

type Props = {};

export default function NavigationBar({}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__head__text">
        This is an announcement tagline for you to insert
      </div>
      <div className="navbar__body">
        <div className="navbar__body__items">
          <Link href="/" className=" navbar_body__logo">
            <Image
              src={logo.src}
              alt="logo of organization"
              width={113}
              height={35.26}
            />
          </Link>
          <div className="navbar__links">
            {/* <div className=""> */}
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
            {/* </div> */}
          </div>
        </div>

        <div className="navbar__contact">
          <Button
            clickEvent={() => console.log("Contact Now")}
            className="button--md button--text-midnight-blue    button--bg-bride-blush"
          >
            Contact Now
          </Button>
        </div>
        <div className="navbar__category">
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
