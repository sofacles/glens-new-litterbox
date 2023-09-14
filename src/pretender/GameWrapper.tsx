import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainScreen from "./MainScreen";
import KeyMappingsPane from "./KeyMappingsPane";
import { Provider } from "react-redux";
import store from "./store/store";

const GameWrapper = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/keys" element={<KeyMappingsPane />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default GameWrapper;
