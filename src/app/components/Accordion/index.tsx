import React from "react";
import "./index.scss";

type Props = {
  data: {
    id: string;
    title: string;
    description1: string;
    description2: string;
  };
  currentActive: string | null;
  clickEvent: (val: string) => void;
};

export default function Accordion({ data, currentActive, clickEvent }: Props) {
  return (
    <div className="accordion">
      <div
        className={`accordion__title ${
          currentActive == data?.id ? "accordion__title--active" : " "
        }`}
        onClick={() => clickEvent(data?.id)}
      >
        <p className={`accordion__title__text`}>{data?.title}</p>
        <div className={`accordion__title__icon`}>
          {currentActive == data?.id ? "-" : "+"}
        </div>
      </div>
      <div
        className={`accordion__body  
        ${currentActive === data?.id ? "open " : " close  "}
        `}
      >
        <p className="accordion__body__text">
          {data?.description1}
          <br />
          <br />
          {data?.description2}
        </p>
      </div>
    </div>
  );
}
