import React, { useState, useContext } from "react";
import TheList from "./TheList.jsx";
import { ContainerControlPanel } from "./ContainerControlPanel";
import { ItemControlPanel } from "./ItemControlPanel.jsx";

import { ItemFlexContextProvider } from "./ItemFlexContext";
import { ContainerContextProvider } from "./ContainerContext";

const Driver = () => {

  const columnStyle = {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginRight: "15px",
  };

  return (
    <div>
      <ContainerContextProvider>
        <ItemFlexContextProvider>
          <div style={columnStyle}>
            <ContainerControlPanel />
            <TheList />
            <ItemControlPanel />
          </div>
        </ItemFlexContextProvider>
      </ContainerContextProvider>
    </div>
  );
};

export default Driver;
