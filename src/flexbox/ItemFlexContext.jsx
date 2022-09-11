import React, { createContext, useReducer } from "react";
import { elements } from "../Elements";

//This will hold the physical data for all the elements in the periodic table.  Nothing about styles.
let periodicData = elements;
console.log("ItemFlexContext reads the elements from a file");

const initialItemFlex = { flex: "1 1 auto" };

let defaultItemStyle = initialItemFlex;

const initialState = periodicData.slice(0, 4).map((datum, index) => {
  return {
    physicalData: datum,
    style: initialItemFlex,
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
            style: existingFlexStyles[index] || defaultItemStyle,
          };
        });
      return newData;

    case "UPDATE_FLEX_AT_INDEX":
      const newState = [...state];
      newState[action.payload.index].style = { flex: action.payload.flex };
      return newState;
    case "RESET_ALL_TO":
      return state.map((el) => {
        const newEl = { ...el };
        console.info(newEl);
        newEl.style.flex = action.cargo.defaultFlex;
        return newEl;
      });
    default:
      throw new Error();
  }
}
export const ItemFlexContext = createContext([initialState]);

export const ItemFlexContextProvider = ({ children }) => {
  const [dataAndFlexItemStyles, dispatch] = useReducer(reducer, initialState);
  return (
    <ItemFlexContext.Provider value={[dataAndFlexItemStyles, dispatch]}>
      {children}
    </ItemFlexContext.Provider>
  );
};
