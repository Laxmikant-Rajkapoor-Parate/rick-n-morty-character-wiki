import React from "react";
import { Card } from "../components";

const CardGroup = ({ data }) => {
  let display;

  if (data) {
    display = data.map((item) => {
      return <Card key={item.id} data={item} />;
    });
  } else {
    display = "No characters found :(";
  }

  return (
    <div className="col-span-7 flex flex-wrap justify-center">{display}</div>
  );
};

export default CardGroup;
