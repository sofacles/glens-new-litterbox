import React, { KeyboardEvent, useContext, useState } from "react";
import { SHIP_UP_KEY, SHIP_DOWN_KEY, UP_DOWN_NEITHER } from "../Constants";
import { KeyBindingContext } from "./useKeyBindings";
import { UseMultipleKeysPropsType } from "../types";

//I want to be able to test the ship moving up and down, but I'm having trouble getting the onKeyDown handler to be called
// in a unit test, which is because React or maybe react-testing-library doesn't really handle svg elements.

//So if this thing just handles the logic of determining which functions to call based on what keys are being pressed
/*
goHandler is whatever function this hook should call to that makes the ship go
stopHandler       "        "
changeShipYHander whatever function should be called to tell the ship what direction it shoould be moving
*/
export const useMultipleKeys = ({
  goHandler,
  resetAnimationHandler,
  stopHandler,
  changeShipYHandler,
  changeDirectionHandler,
}: UseMultipleKeysPropsType) => {
  const [currentlyPressedKeys] = useState(new Map());
  const { state } = useContext(KeyBindingContext);
  const { thrust } = state.bindings;

  const onKeyDown = (evt: KeyboardEvent) => {
    const plainKey = evt.key.toLowerCase();
    currentlyPressedKeys.set(plainKey, true);
    if (
      currentlyPressedKeys.has(thrust.mappedKey) &&
      currentlyPressedKeys.get(thrust.mappedKey)
    ) {
      goHandler();
    }
    if (currentlyPressedKeys.get("x")) {
      changeDirectionHandler();
    }
    if (
      currentlyPressedKeys.has(SHIP_UP_KEY) &&
      currentlyPressedKeys.get(SHIP_UP_KEY)
    ) {
      evt.preventDefault();
      console.log("calling changeShipYHandler");
      changeShipYHandler(UP_DOWN_NEITHER.UP);
    }

    if (
      currentlyPressedKeys.has(SHIP_DOWN_KEY) &&
      currentlyPressedKeys.get(SHIP_DOWN_KEY)
    ) {
      evt.preventDefault();
      changeShipYHandler(UP_DOWN_NEITHER.DOWN);
    }
  };

  const onKeyUp = (evt: KeyboardEvent) => {
    const plainKey = evt.key.toLowerCase();
    currentlyPressedKeys.set(plainKey, false);
    if (plainKey === thrust.mappedKey) {
      stopHandler();
    }

    if (plainKey === SHIP_UP_KEY || plainKey === SHIP_DOWN_KEY) {
      resetAnimationHandler();
      changeShipYHandler(UP_DOWN_NEITHER.NEITHER);
    }

    evt.preventDefault();
  };

  return { onKeyDown, onKeyUp };
};
