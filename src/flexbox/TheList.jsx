import React, { useState } from "react";
import { elements } from "../Elements";

const defaultStyle = {
  border: "1px solid black",
  margin: "5px",
  padding: "5px",
};

const item = (substance, flexItemStyle) => {
  return (
    <div key={substance.number} style={{ ...defaultStyle, ...flexItemStyle }}>
      <h4>{substance.number}</h4>
      <h5>{substance.name}</h5>
      <span>{substance.atomic_mass}</span>
    </div>
  );
};

const TheList = (props) => {
  const { containerStyle, flexItemStyle, itemCount } = props;

  const theElements = elements.slice(0, itemCount);
  const theDivs = theElements.map((el) => item(el, flexItemStyle));

  const defaultContainerStyle = {
    backgroundColor: "#AAA",
  };
  if (containerStyle.flexDirection === "row") {
    defaultContainerStyle.height = "200px";
    defaultContainerStyle.width = "800px";
  } else if (containerStyle.flexDirection === "column") {
    defaultContainerStyle.height = "800px";
    defaultContainerStyle.width = "250px";
  }

  return (
    <div style={{ ...defaultContainerStyle, ...containerStyle }}>{theDivs}</div>
  );
};

export default TheList;
