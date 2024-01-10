import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import "./index.scss";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";
type Props = {};

export default function BusinessBannerText({}: Props) {
  return (
    <div className="businessBanner__text">
      <h2 className="businessBanner__heading">
        Let your business thrive under our supervision
      </h2>
      <p className="businessBanner__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
        <br />
        <br />
        We are making every business grow!
      </p>
      <div className="businessBanner__checks">
        <div className="businessBanner__check">
          <Button className=" iconBtn-sm-primary">
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="businessBanner__check-text">
            Super useful and easy to use interface
          </span>
        </div>
        <div className="businessBanner__check">
          <Button className=" iconBtn-sm-primary">
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="businessBanner__check-text">
            Easiest way to grow your business in days
          </span>
        </div>
      </div>
    </div>
  );
}
