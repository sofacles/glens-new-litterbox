import React from "react";
import { OffsetMountainDataProvider } from "./hooks/useOffsetMountainData";
import { ShipDataProvider } from "./hooks/useShipData";
import { KeyBindingProvider } from "./hooks/useKeyBindings";
import MainScreen from "./MainScreen";

const GameWrapper = () => {
  return (
    <KeyBindingProvider>
      <OffsetMountainDataProvider>
        <ShipDataProvider>
          <MainScreen />
        </ShipDataProvider>
      </OffsetMountainDataProvider>
    </KeyBindingProvider>
  );
};

export default GameWrapper;
