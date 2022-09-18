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

export const TestPageLayoutContext = createContext(initialState);

export const TestPageLayoutContextProvider = ({ children }) => {
  const [initialListOrientation, dispatch] = useReducer(reducer, initialState);
  const thing = { initialListOrientation, dispatch2: dispatch };
  return (
    <TestPageLayoutContext.Provider value={thing}>
      {children}
    </TestPageLayoutContext.Provider>
  );
};
