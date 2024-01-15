import React from "react";
import "./index.scss";
import Image from "next/image";

export type clients = {
  title: string;
  clientList: {
    image: string;
    name: string;
  }[];
};

type Props = {
  clientsData: clients;
};

export default function Clients({ clientsData }: Props) {
  return (
    <div className="client-section">
      <p className="client-section_title">{clientsData?.title}</p>
      <div className="client-section_logo-wrapper">
        {clientsData?.clientList?.map((client) => (
          <div className="client-section-logo">
            <Image
              className="client-section-logo__image"
              src={client?.image}
              height={63}
              width={63}
              alt={client?.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
