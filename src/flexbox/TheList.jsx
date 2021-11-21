import React, { useState } from "react";
import { elements } from "../Elements";

const item = (substance, flexItemStyle) => {
  return (
    <div key={substance.number} style={flexItemStyle}>
      <h4>{substance.number}</h4>
      <h5>{substance.name}</h5>
      <span>{substance.atomic_mass}</span>
    </div>
  );
};

const TheList = (props) => {
  const flexItemStyle = {};
  const tenElements = elements.slice(0, 10);
  const theDivs = tenElements.map((el) => item(el, flexItemStyle));

  return <div style={props.containerStyle}>{theDivs} </div>;
};

export default TheList;
