import React from "react";
import "./index.scss";
import Button from "@/components/Button";
import Image from "next/image";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";

type Props = {};

export default function businessBannerFormText({}: Props) {
  return (
    <div className="businessBannerForm__text">
      <h2 className="businessBannerForm__heading">
        Let your business thrive under our supervision
      </h2>
      <p className="businessBannerForm__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
        <br />
        <br />
        <span className="businessBannerForm__description-bold">
          We are making every business grow!
        </span>
      </p>
      <div className="businessBannerForm__checks">
        <div className="businessBannerForm__check">
          <Button className=" iconBtn-sm-primary">
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="businessBannerForm__check-text">
            Super useful and easy to use interface
          </span>
        </div>
        <div className="businessBannerForm__check">
          <Button className=" iconBtn-sm-primary">
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="businessBannerForm__check-text">
            Easiest way to grow your business in days
          </span>
        </div>
      </div>

      {/* <div className="businessBannerForm__form">
        <form>
          <div className="businessBannerForm__form__container">
            <Image src={} />
            <input />
          </div>
        </form>
      </div> */}
    </div>
  );
}
