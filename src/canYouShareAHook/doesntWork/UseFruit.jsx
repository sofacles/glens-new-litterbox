import React, { useReducer } from "react";

const initialState = [
  { name: "apple", selected: false },
  { name: "banana", selected: true },
  { name: "cherry", selected: false },
];

const reducer = (state, cmd) => {
  switch (cmd.type) {
    case "SET_SELECTED":
      const retVal = [...state];
      retVal.forEach((f) => {
        f.selected = cmd.cargo.name === f.name;
      });
      console.log(`setting selected to ${cmd.cargo.name}`);
      return retVal;
    default:
      return state;
  }
};

const useFruit = () => {
  const [dispatch, state] = useReducer(reducer, initialState);
  return [dispatch, state];
};

export { useFruit };
