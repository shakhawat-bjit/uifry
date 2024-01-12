import React from "react";
import "./index.scss";

type Props = {
  data: {
    id: string;
    title: string;
    description1: string;
    description2: string;
  };
  currentActive: string;
  clickEvent: (val: string) => void;
};

export default function Accordion({ data, currentActive, clickEvent }: Props) {
  console.log("inside accordion ", data?.id, currentActive);
  return (
    <div className="accordion">
      <div
        className={`accordion__title ${
          currentActive == data?.id && "accordion__title--bg-sage-violet "
        }`}
        onClick={() => clickEvent(data?.id)}
      >
        <p
          className={`accordion__title__text  ${
            currentActive == data?.id && " accordion__title__text--white"
          } `}
        >
          {data?.title}
        </p>
        <div
          className={`accordion__title__icon  ${
            currentActive == data?.id && " accordion__title__icon--white"
          } `}
        >
          {currentActive == data?.id ? "-" : "+"}
        </div>
      </div>
      <div
        className={`accordion__body  ${
          currentActive == data?.id
            ? " accordion__body--show  "
            : " accordion__body--hide "
        } `}
      >
        <p className="accordion__body_text">
          {data?.description1}
          <br />
          <br />
          {data?.description2}
        </p>

        {/* <p className="accordion__body_text"></p> */}
      </div>
    </div>
  );
}
