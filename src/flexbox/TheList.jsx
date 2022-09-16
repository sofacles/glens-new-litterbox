import React, { useContext } from "react";

import PeriodicElement from "./PeriodicElement";
import { ItemFlexContext } from "./ItemFlexContext";
import { ContainerContext } from "./ContainerContext"
const TheList = (props) => {
  const itemFlexContext = useContext(ItemFlexContext);
  const containerContext = useContext(ContainerContext);
  // defaultFlexItemStyle will be applied to each item in the list, unless the flex item style of given item is overridden in the flexItemStyles array
  const [dataAndFlexItemStyles] = itemFlexContext;
  const [containerStyles] = containerContext;


  const theDivs = dataAndFlexItemStyles.map((el, ind) => {
    return (
      <PeriodicElement
        key={el.physicalData.number}
        substance={el.physicalData}
        flexItemStyle={dataAndFlexItemStyles[ind].style.flex}
      />
    );
  });


  return (
    <div style={containerStyles}>{theDivs}</div>
  );
};

export default TheList;
