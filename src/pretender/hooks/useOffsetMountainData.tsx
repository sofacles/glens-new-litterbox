import React, { createContext, Dispatch, ReactNode, PropsWithChildren, useEffect, useReducer, useState } from "react";
import peaks from "../MountainData.js";
import { ActionType, OffsetMountainDataType, PointType } from "../types";

import {
  INSTRUMENT_PANEL_HEIGHT,
  PANEL_WIDTH,
  WRAP_DISTANCE,
} from "../Constants";

import { useScreenDimensions } from "./useScreenDimensions";

// I think I'll be able to remove this?  The unrendered points on either side of the screen are in margins of width slopWidth
const slopWidth = 100;

// mountain data is in cartesian coordinates, so convert to screen Y by subtacting the data's y value + instrument panel height from screenHeight
const adjustMountainPointsForScreenHeight = (
  points : PointType[],
  screenHeight: number,
  offset = 0
): PointType[] => {


  //returns the original y values of the peaks, but corrected for the current offset
  const createShiftedArrayOfYValues = (panelOffset : number): number[] => {
    const retVal = peaks.map(p => p.y)
      .slice(offset)
      .concat(peaks.slice(0, panelOffset).map(p => p.y));
    return retVal;
  };

  const offsetInPanels = offset / PANEL_WIDTH;
  const offsetPeak_y_values =
    Math.abs(offset) < PANEL_WIDTH
      ? createShiftedArrayOfYValues(offsetInPanels)
      : peaks.map( a => a.y);

  //a positive offset is when the ship has gone right, the mountains move left.
  const adjustedPoints = [];
  for (let i = 0; i < points.length; i++) {
    adjustedPoints.push({
      x: points[i].x,
      y: screenHeight - offsetPeak_y_values[i],
    });
  }
  return adjustedPoints;
};

// When a mountain point has scrolled more than slopWidth off the viewport
// I move the mountains that are any farther scrolled off than that and tack them on to the other side of the mountain collection.
// OK, this means permanently updating the data, not the lines.
// This function does not recalculate the y values
// offset is how much to move them since the last time they were moved.  A positive offset means the ship is flying left, so the
// mountains are moving to the right
const adjustCurrentPointsForOffset = (currentPoints : PointType[], offset: number, gameWidth: number) => {
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
      if(leftmost) {
   //give it a new x value, 100 greater than the rightmost point
   leftmost.x = adjustedPoints[adjustedPoints.length - 1].x + 100;
   adjustedPoints.push(leftmost);
      }
   
    }
  } else if (offset < 0) {
    //the right-most point may need to be removed and tacked onto the left side of the peaks
    const cutoffPoint = gameWidth / 2 + slopWidth;
    if (adjustedPoints[adjustedPoints.length - 1].x > cutoffPoint) {
      const rightmost = adjustedPoints.pop();
      if(rightmost) {
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
};




const reducer = (state : OffsetMountainDataType, action : ActionType) : OffsetMountainDataType => {
  switch (action.type) {
    case "UPDATE_GAME_OFFSET":
      const theNewState = {
        ...state,
        gameOffset: state.gameOffset + action.cargo.offsetDifference,
        allPointsCorrected: adjustCurrentPointsForOffset(
          state.allPointsCorrected,
          action.cargo.offsetDifference,
          state.screenDimensions.width
        ),
      };
      return theNewState;

    case "UPDATE_GAME_DIMENSIONS":
      console.log(
        `UPDATE_GAME_DIMENSIONS gets: ${JSON.stringify(action.cargo)}`
      );
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

      default: 
      return state;
  }
};

export const OffsetMountainDataContext = createContext<{state : OffsetMountainDataType, dispatch : Dispatch<ActionType>}>(
  {state: initialState, dispatch: () => null}
  );



export const OffsetMountainDataProvider = ({ children } : PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const screenSize = useScreenDimensions();

  useEffect(() => {
    dispatch({ type: "UPDATE_GAME_DIMENSIONS", cargo: screenSize });
  }, [screenSize]);

  return (
    <OffsetMountainDataContext.Provider value={ state, dispatch}>
      {children}
    </OffsetMountainDataContext.Provider>
  );
};
