import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OffsetMountainDataProvider } from "./hooks/useOffsetMountainData";
import { ShipDataProvider } from "./hooks/useShipData";
import { KeyBindingProvider } from "./hooks/useKeyBindings";
import MainScreen from "./MainScreen";
import KeyMappingsPane from "./KeyMappingsPane";

const GameWrapper = () => {
  return (
    <KeyBindingProvider>
      <ShipDataProvider>
        <OffsetMountainDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="/keys" element={<KeyMappingsPane />} />
            </Routes>
          </BrowserRouter>
        </OffsetMountainDataProvider>
      </ShipDataProvider>
    </KeyBindingProvider>
  );
};

export default GameWrapper;
