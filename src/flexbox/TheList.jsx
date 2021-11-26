import React from "react";
import { elements } from "../Elements";
import PeriodicElement from "./PeriodicElement";

const TheList = (props) => {
  const { containerStyle, flexItemStyle, flexItemStyles, itemCount } = props;
  const theElements = elements.slice(0, itemCount);
  const theDivs = theElements.map((el, ind) => (
    <PeriodicElement
      key={el.number}
      substance={el}
      flexItemStyle={flexItemStyles[ind] ?? ""}
    />
  ));

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
