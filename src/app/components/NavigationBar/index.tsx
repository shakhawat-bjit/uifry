"use client";
import React, { useState } from "react";
import "./index.scss";
import Link from "next/link";
// import logo from "../../../../public/assets/images/logo.png";
import Image from "next/image";
import Button from "../Button";
import cat from "../../../../public/assets/icons/icon/Category.png";
import NavigationBarPopup from "../NavigationBarPopup";
import { navigationbar } from "@/app/types/navigationBar.type";

type Props = {
  navigationBarData: navigationbar;
};

export default function NavigationBar({ navigationBarData }: Props) {
  const { links, buttons, logo, title } = navigationBarData;
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__head">
        <p className="navbar__head__title">{title}</p>
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
            {links?.map((link) => (
              <Link
                href={link?.link}
                className="navbar__body__link"
                key={link?.content}
              >
                {link?.content}
              </Link>
            ))}
          </div>
        </div>

        <div className="navbar__body__button-wrapper">
          {buttons?.map((button) => (
            <Button
              size={button?.size}
              className="text-midnight-blue bg-bride-blush"
            >
              Contact Now
            </Button>
          ))}
        </div>
        <div className="navbar__body__responsive-button">
          <Button
            size="small"
            className=""
            clickEvent={() => {
              setShow(true);
            }}
          >
            <Image src={cat.src} height={24} width={24} alt="category" />
          </Button>
        </div>
        <NavigationBarPopup
          show={show}
          setShow={setShow}
          links={navigationBarData?.links}
        />
      </div>
    </div>
  );
}
