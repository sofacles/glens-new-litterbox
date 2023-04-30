import React from "react";
import { OffsetMountainDataProvider } from "./hooks/useOffsetMountainData";
import { ShipDataProvider } from "./hooks/useShipData";
import MainScreen from "./MainScreen";

const GameWrapper = () => {
  return (
    <OffsetMountainDataProvider>
      <ShipDataProvider>
        <MainScreen />
      </ShipDataProvider>
    </OffsetMountainDataProvider>
  );
};

export default GameWrapper;
