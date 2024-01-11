import React, { Dispatch, SetStateAction } from "react";
import "./index.scss";
import Link from "next/link";
import Button from "../Button";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export default function NavigationBarPopup({ show, setShow }: Props) {
  // console.log("show ---- ", show);
  return (
    <div className={`navbar-popup ${show ? "visible" : "not-visible"}  `}>
      <div className="navbar-popup--close">
        <Button
          className=""
          clickEvent={() => {
            setShow(false);
            // console.log("close click");
          }}
        >
          Close
        </Button>
      </div>

      <div className="navbar-popup__links">
        <Link href="/" className="navbar-popup__link">
          Home
        </Link>
        <Link href="/" className="navbar-popup__link">
          About
        </Link>
        <Link href="/" className="navbar-popup__link">
          Pricing
        </Link>
        <Link href="/" className="navbar-popup__link">
          Blog
        </Link>
      </div>
    </div>
  );
}
