import React, { createContext, useReducer } from "react";

const initialState = { listOrientation: "row" };

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FLEX_DIR": //does this clash with ContainerContext?  That's why I'm using this string.
      //flex direction that we've put the list into - so if the list is running down the column direction, the test page should show the two control panels
      // and the list in a ROW configuration
      return { ...state, listOrientation: action.cargo };
  }
}

//Tracks styles for the container for the test list.
// It's either 3 broad horizontal stripes or three columns containing: container control panel, TheList and ItemControlPanel.

export const TestPageLayoutContext = createContext(initialState);

export const TestPageLayoutContextProvider = ({ children }) => {
  const [currentListOrientation, dispatch] = useReducer(reducer, initialState);
  const thing = { currentListOrientation, dispatch2: dispatch };
  return (
    <TestPageLayoutContext.Provider value={thing}>
      {children}
    </TestPageLayoutContext.Provider>
  );
};
