import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import peaks from "../MountainData.js";
import {
  ActionType,
  BulletPropsType,
  OffsetMountainDataType,
  PointType,
  ShipDataType,
} from "../types";

import { PANEL_WIDTH } from "../Constants";

import { useScreenDimensions } from "./useScreenDimensions";
import { ShipDataContext } from "./useShipData";

// I think I'll be able to remove this?  The unrendered points on either side of the screen are in margins of width slopWidth
const slopWidth = 100;

const ScreenWidth = 2000; //TODO: I can't use useScreenDimensions outside of my provider component below, so how do I know screen width in here?

// mountain data is in cartesian coordinates, so convert to screen Y by subtacting the data's y value + instrument panel height from screenHeight
const adjustMountainPointsForScreenHeight = (
  points: PointType[],
  screenHeight: number,
  offset = 0
): PointType[] => {
  //returns the original y values of the peaks, but corrected for the current offset
  const createShiftedArrayOfYValues = (panelOffset: number): number[] => {
    const retVal = peaks
      .map((p) => p.y)
      .slice(offset)
      .concat(peaks.slice(0, panelOffset).map((p) => p.y));
    return retVal;
  };

  const offsetInPanels = offset / PANEL_WIDTH;
  const offsetPeak_y_values =
    Math.abs(offset) < PANEL_WIDTH
      ? createShiftedArrayOfYValues(offsetInPanels)
      : peaks.map((a) => a.y);

  //a positive offset is when the ship has gone right, the mountains move left.
  const adjustedPoints: PointType[] = [];
  for (let i = 0; i < points.length; i++) {
    adjustedPoints.push({
      x: points[i].x,
      y: screenHeight - offsetPeak_y_values[i],
    });
  }
  return adjustedPoints;
};

///Adding bullet movement here.  If I keep it here, I should change this hook's name to NonShipObjectsOffsetData or something.

// when a bullet is more than two seconds old, it disappears and becomes available for another shooting event
const defaultBulletPositions: BulletPropsType[] = [
  {
    direction: "right",
    location: { x: 0, y: 0 },
    isVisible: false,
    tStart: 0,
    lastTimeStamp: 0,
  },
  {
    direction: "right",
    location: { x: 0, y: 0 },
    isVisible: false,
    tStart: 0,
    lastTimeStamp: 0,
  },
  {
    direction: "right",
    location: { x: 0, y: 0 },
    isVisible: false,
    tStart: 0,
    lastTimeStamp: 0,
  },
];

//End Bullet Section

// When a mountain point has scrolled more than slopWidth off the viewport
// I move the mountains that are any farther scrolled off than that and tack them on to the other side of the mountain collection.
// OK, this means permanently updating the data, not the lines.
// This function does not recalculate the y values
// offset is how much to move them since the last time they were moved.  A positive offset means the ship is flying left, so the
// mountains are moving to the right

// Aug 2023, where should I put the flying bullets?  I have the mountains moving when the ship moves, and the ship just moves itself up and down

const adjustCurrentPointsForOffset = (
  currentPoints: PointType[],
  offset: number,
  gameWidth: number
) => {
  const adjustedPoints: PointType[] = [];

  //move all the points to the right or left
  for (var i = 0; i < currentPoints.length; i++) {
    adjustedPoints.push({
      x: currentPoints[i].x - offset,
      y: currentPoints[i].y,
    });
  }
  //now move points that have fallen too far off the screen
  if (offset > 0) {
    //the left-most point may need to be removed and tacked onto the right side of the peaks
    const cutoffPoint = -(gameWidth / 2 + slopWidth);
    if (adjustedPoints[0].x < cutoffPoint) {
      const leftmost = adjustedPoints.shift();
      if (leftmost) {
        //give it a new x value, 100 greater than the rightmost point
        leftmost.x = adjustedPoints[adjustedPoints.length - 1].x + PANEL_WIDTH;
        adjustedPoints.push(leftmost);
      }
    }
  } else if (offset < 0) {
    //the right-most point may need to be removed and tacked onto the left side of the peaks, but the cutoff point to the right needs to be farther out, since we're effectively
    // measuring from the left edge of the screen.
    const cutoffPoint = gameWidth + slopWidth;
    if (adjustedPoints[adjustedPoints.length - 1].x > cutoffPoint) {
      const rightmost = adjustedPoints.pop();
      if (rightmost) {
        rightmost.x = adjustedPoints[0].x - PANEL_WIDTH;
        adjustedPoints.unshift(rightmost);
      }
    }
  }
  return adjustedPoints;
};
const initialState = {
  gameOffset: 0,
  allPointsCorrected: adjustMountainPointsForScreenHeight(peaks, 800),
  screenDimensions: { height: 600, width: 1000 },
  shipOffset: 300,
  bullets: defaultBulletPositions,
};

const reducer = (
  state: OffsetMountainDataType,
  action: ActionType
): OffsetMountainDataType => {
  const newState = { ...state };
  const index = action.cargo?.index;
  switch (action.type) {
    case "UPDATE_GAME_OFFSET":
      newState.gameOffset = state.gameOffset + action.cargo.offsetDifference;
      newState.allPointsCorrected = adjustCurrentPointsForOffset(
        state.allPointsCorrected,
        action.cargo.offsetDifference,
        state.screenDimensions.width
      );

      return newState;

    case "UPDATE_GAME_DIMENSIONS":
      // InitialState gets calculated with height: 800, so we may have lost the original y values of the mountain data.  We could just use peaks, but what if the ship has
      // moved and the mountain data's x values have been updated too?  For now, map the currently scrolled points to the untainted mountain
      // data (peaks).  Take the current offset and figure out how what the frameshift is and then read the orginal y values and update all the y values in
      // allPointsCorrected with the value in that mapping.
      const stateWithNewWidth = {
        ...state,
        screenDimensions: action.cargo,
        allPointsCorrected: adjustMountainPointsForScreenHeight(
          state.allPointsCorrected,
          action.cargo.height,
          state.gameOffset
        ),
      };
      return stateWithNewWidth;

    case "START_BULLET":
      let bullet = newState.bullets[index];
      bullet.isVisible = true;
      bullet.location.x = action.cargo.shipX;
      bullet.tStart = action.cargo.tStart || 0;
      bullet.lastTimeStamp = action.cargo.lastTimeStamp || 0;
      bullet.direction = action.cargo.direction;
      return newState;

    case "MOVE_BULLET_RIGHT":
      if (newState.bullets[index].location.x > action.cargo.screenWidth - 100) {
        newState.bullets[index].isVisible = false;
        newState.bullets[index].location.x = 0;
      } else {
        newState.bullets[index].isVisible = true;
        if (action.cargo.pixelsToMove) {
          newState.bullets[index].location.x += action.cargo.pixelsToMove;
        }
      }
      return newState;

    case "MOVE_BULLET_LEFT":
      if (newState.bullets[index].location.x < 100) {
        newState.bullets[index].isVisible = false;
        newState.bullets[index].location.x = 0;
      } else {
        newState.bullets[index].isVisible = true;
        if (action.cargo.pixelsToMove) {
          newState.bullets[index].location.x -= action.cargo.pixelsToMove;
        }
      }
      return newState;
    default:
      return state;
  }
};

export const OffsetMountainDataContext = createContext<{
  state: OffsetMountainDataType;
  dispatch: Dispatch<ActionType>;
  shipState: ShipDataType | null;
}>({ state: initialState, dispatch: () => null, shipState: null });

export const OffsetMountainDataProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const screenSize = useScreenDimensions();
  const { shipState } = useContext(ShipDataContext);

  useEffect(() => {
    dispatch({ type: "UPDATE_GAME_DIMENSIONS", cargo: screenSize });
  }, [screenSize]);

  return (
    <OffsetMountainDataContext.Provider value={{ state, dispatch, shipState }}>
      {children}
    </OffsetMountainDataContext.Provider>
  );
};
