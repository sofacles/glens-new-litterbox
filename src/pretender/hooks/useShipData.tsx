import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useEffect,
  useReducer,
} from "react";
import { ActionType, ShipDataType } from "../types";
import { useScreenDimensions } from "./useScreenDimensions";

const halfShipHeight = 25;
const initialState = {
  offsetY: 300,
  screenDimensions: {
    height: 0,
    width: 0,
  },
};

const reducer = (state: ShipDataType, action: ActionType): ShipDataType => {
  const { screenDimensions } = state;
  switch (action.type) {
    case "UPDATE_SHIP_Y":
      let theNewOffset = state.offsetY + action.cargo.changeInY;
      //  if the ship is at the top of the screen
      if (theNewOffset < halfShipHeight) theNewOffset = halfShipHeight;
      //  or at the bottom
      else if (theNewOffset > screenDimensions.height - halfShipHeight)
        theNewOffset = screenDimensions.height - halfShipHeight;
      return {
        ...state,
        offsetY: theNewOffset,
      };
    case "UPDATE_GAME_DIMENSIONS":
      // InitialState gets calculated with height: 800, so we may have lost the original y values of the mountain data.  We could just use peaks, but what if the ship has
      // moved and the mountain data's x values have been updated too?  For now, map the currently scrolled points to the untainted mountain
      // data (peaks).  Take the current offset and figure out how what the frameshift is and then read the orginal y values and update all the y values in
      // allPointsCorrected with the value in that mapping.
      const stateWithNewWidth = {
        ...state,
        screenDimensions: action.cargo,
      };

      return stateWithNewWidth;
    default:
      return state;
  }
};

export const ShipDataContext = createContext<{
  shipState: ShipDataType;
  shipDispatch: Dispatch<ActionType>;
}>({ shipState: initialState, shipDispatch: () => null });

export const ShipDataProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const shipDispatch = dispatch;
  const shipState = state;
  const screenSize = useScreenDimensions();

  useEffect(() => {
    shipDispatch({ type: "UPDATE_GAME_DIMENSIONS", cargo: screenSize });
  }, [screenSize, shipDispatch]);

  return (
    <ShipDataContext.Provider value={{ shipState, shipDispatch }}>
      {children}
    </ShipDataContext.Provider>
  );
};
