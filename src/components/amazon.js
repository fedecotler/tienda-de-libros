import React, { useState } from "react";
import list from "../data";
import Cards from "./ItemListContainer";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
