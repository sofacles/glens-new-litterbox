import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OffsetMountainDataProvider } from "./hooks/useOffsetMountainData";
import { ShipDataProvider } from "./hooks/useShipData";
import { KeyBindingProvider } from "./hooks/useKeyBindings";
import MainScreen from "./MainScreen";
import KeyMappings from "./KeyMappings";

const GameWrapper = () => {
  return (
    <KeyBindingProvider>
      <OffsetMountainDataProvider>
        <ShipDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="/keys" element={<KeyMappings />} />
            </Routes>
          </BrowserRouter>
        </ShipDataProvider>
      </OffsetMountainDataProvider>
    </KeyBindingProvider>
  );
};

export default GameWrapper;
