import React from "react";

import PeriodicElement from "./PeriodicElement";

const TheList = (props) => {
  const { containerStyle, flexItemStyle, flexItemStyles, itemCount, elements } =
    props;
  const theElements = elements.slice(0, itemCount);

  const theDivs = theElements.map((el, ind) => {
    return (
      <PeriodicElement
        key={el.physicalData.number}
        substance={el.physicalData}
        flexItemStyle={flexItemStyles[ind] ?? flexItemStyle.flex}
      />
    );
  });

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
