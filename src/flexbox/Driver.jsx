import React, { useState, useContext } from "react";
import TheList from "./TheList.jsx";
import { ContainerControlPanel } from "./ContainerControlPanel";
import { ItemControlPanel } from "./ItemControlPanel.jsx";

import { FlexAndDataContextProvider } from "./FlexAndDataContext";
//TODO: add the input that let's you change the default flex item style... or whatever makes sense
const Driver = () => {
  const [containerFlexState, setContainerFlexState] = useState({
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    alignItems: "stretch",
  });

  const columnStyle = {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginRight: "15px",
  };

  const onAlignItemsChanged = (newVal) => {
    setContainerFlexState({ ...containerFlexState, alignItems: newVal });
  };

  const onFlexDirectionChanged = (newVal) => {
    setContainerFlexState({ ...containerFlexState, flexDirection: newVal });
  };

  const onFlexWrapChanged = (newVal) => {
    setContainerFlexState({
      ...containerFlexState,
      flexWrap: newVal,
    });
  };

  return (
    <div>
      <FlexAndDataContextProvider>
        <div style={columnStyle}>
          <ContainerControlPanel
            alignItems={containerFlexState.alignItems}
            onAlignItemsChanged={onAlignItemsChanged}
            flexDirection={containerFlexState.flexDirection}
            onFlexDirectionChanged={onFlexDirectionChanged}
            flexWrap={containerFlexState.flexWrap}
            onFlexWrapChanged={onFlexWrapChanged}
          />
          <TheList containerStyle={containerFlexState} />
          <ItemControlPanel />
        </div>
      </FlexAndDataContextProvider>
    </div>
  );
};

export default Driver;
