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
    case "UPDATE_COUNT":
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

    case "UPDATE_FLEX_AT_INDEX":
      const newState = [...state];
      newState[action.payload.index].flex = { flex: action.payload.flex };
      return newState;
    case "RESET_ALL_TO":
      return state.map((el) => {
        const newEl = { ...el };
        console.info(newEl);
        if (el.flex == "2") {
          debugger;
        }
        newEl.flex.flex = action.cargo.defaultFlex;
        return newEl;
      });
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
