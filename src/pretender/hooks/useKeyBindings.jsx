import React, { createContext, useReducer } from "react";
import { THRUST_KEY } from "../Constants";

const defaultKeyBindings = { bindings: { thrust: THRUST_KEY } };

export const KeyBindingContext = createContext({
  ...defaultKeyBindings,
  dispatch: () => {},
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
