import React, { createContext, useReducer } from "react";
import { THRUST_KEY } from "../Constants";
import { ActionType } from "../types";

const defaultKeyBindings = { bindings: { thrust: THRUST_KEY } };

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
      theNewState.bindings[action.cargo.key] = action.cargo.value;
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
