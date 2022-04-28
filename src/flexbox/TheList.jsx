import React, { useContext } from "react";

import PeriodicElement from "./PeriodicElement";
import { FlexAndDataContext } from "./FlexAndDataContext";
const TheList = (props) => {
  const flexAndDataContext = useContext(FlexAndDataContext);
  // defaultFlexItemStyle will be applied to each item in the list, unless the flex item style of given item is overridden in the flexItemStyles array
  const { containerStyle, itemCount, elements } = props;
  const [dataAndFlexItemStyles, dispatch] = flexAndDataContext;

  const theDivs = dataAndFlexItemStyles.map((el, ind) => {
    return (
      <PeriodicElement
        key={el.physicalData.number}
        substance={el.physicalData}
        flexItemStyle={dataAndFlexItemStyles[ind].flex}
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
