import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OffsetMountainDataProvider } from "./hooks/useOffsetMountainData";

import MainScreen from "./MainScreen";
import KeyMappingsPane from "./KeyMappingsPane";
import { Provider } from "react-redux";
import store from "./store/store";

const GameWrapper = () => {
  return (
    <Provider store={store}>
      <OffsetMountainDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/keys" element={<KeyMappingsPane />} />
          </Routes>
        </BrowserRouter>
      </OffsetMountainDataProvider>
    </Provider>
  );
};

export default GameWrapper;
