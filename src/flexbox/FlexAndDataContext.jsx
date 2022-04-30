import React, { createContext, useReducer } from "react";
import { elements } from "../Elements";

//This will hold the physical data for all the elements in the periodic table.  Nothing about styles.
let periodicData = elements;
console.log("FlexAndDataContext reads the elements from a file");

const initialItemFlex = { flex: "1 1 auto" };

let defaultItemStyle = initialItemFlex;

const initialState = periodicData.slice(0, 4).map((datum, index) => {
  return {
    physicalData: datum,
    flex: initialItemFlex,
  };
});

function reducer(state, action) {
  switch (action.type) {
    case "update_count":
      // Save all the existing styles when count is updated
      const existingFlexStyles = state.map((el) => el.flex);
      const newData = periodicData
        .slice(0, action.cargo.newCount)
        .map((datum, index) => {
          return {
            physicalData: datum,
            flex: existingFlexStyles[index] || defaultItemStyle,
          };
        });
      return newData;
    case "decrement":
      return { count: state.count - 1 };
    case "UPDATE_FLEX_AT_INDEX":
      const newState = [...state];
      newState[action.payload.index].flex = action.payload.flex;
      return newState;
    default:
      throw new Error();
  }
}
export const FlexAndDataContext = createContext([initialState]);

export const FlexAndDataContextProvider = ({ children }) => {
  const [dataAndFlexItemStyles, dispatch] = useReducer(reducer, initialState);
  return (
    <FlexAndDataContext.Provider value={[dataAndFlexItemStyles, dispatch]}>
      {children}
    </FlexAndDataContext.Provider>
  );
};
