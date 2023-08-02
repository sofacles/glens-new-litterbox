import React, { createContext, useReducer } from "react";
import { THRUST_KEY, SHIP_DOWN_KEY, SHIP_UP_KEY } from "../Constants";
import { ActionType } from "../types";

const defaultKeyBindings = {
  bindings: {
    shipDown: { mappedKey: SHIP_DOWN_KEY, name: "shipDown" },
    shipUp: { mappedKey: SHIP_UP_KEY, name: "shipUp" },
    thrust: { mappedKey: THRUST_KEY, name: "thrust" },
  },
};

export const KeyBindingContext = createContext({
  state: defaultKeyBindings,
  dispatch: (action) => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_KEY_BINDING":
      const theNewState = {
        bindings: state.bindings,
      };
      //{ mappedKey: "shift", name: "thrust" }
      theNewState.bindings[action.cargo.key] = {
        mappedKey: action.cargo.value,
        name: action.cargo.key,
      };
      return theNewState;

    default:
      return state;
  }
};

export const KeyBindingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultKeyBindings);
  return (
    <KeyBindingContext.Provider value={{ state, dispatch }}>
      {children}
    </KeyBindingContext.Provider>
  );
};
