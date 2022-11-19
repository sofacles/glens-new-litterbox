import React from "react";
import { OffsetMountainDataProvider } from "./hooks/useOffsetMountainData";
import MainScreen from "./MainScreen";

const GameWrapper = () => {
  return (
    <OffsetMountainDataProvider>
      <MainScreen />
    </OffsetMountainDataProvider>
  );
};

export default GameWrapper;
