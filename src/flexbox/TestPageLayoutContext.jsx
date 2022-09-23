import React, { createContext, useState } from "react";

const initialState = "row";

//Tracks styles for the container for the test list.
// It's either 3 broad horizontal stripes or three columns containing: container control panel, TheList and ItemControlPanel.

export const TestPageLayoutContext = createContext(initialState);

export const TestPageLayoutContextProvider = ({ children }) => {
  const [currentListOrientation, setCurrentListOrientation] =
    useState(initialState);

  const thing = { currentListOrientation, setCurrentListOrientation };
  return (
    <TestPageLayoutContext.Provider value={thing}>
      {children}
    </TestPageLayoutContext.Provider>
  );
};
