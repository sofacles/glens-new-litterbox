import React, { createContext, useEffect, useReducer, useState } from "react";
import peaks from "../MountainData.js";

import { GAME_WIDTH, WRAP_DISTANCE } from "../Constants";
import { useScreenDimensions } from "./useScreenDimensions";

// I think I'll be able to remove this?  The unrendered points on either side of the screen are in margins of width slopWidth
const slopWidth = 100;

// When a mountain point has scrolled more than slopWidth off the viewport
// I move the mountains that are any farther scrolled off than that and tack them on to the other side of the mountain collection.
// OK, this means permanently updating the data, not the lines.

const adjustMountainPointsForScreenHeight = (points, screenHeight) => {
  const adjustedPoints = [];
  for (let i = 0; i < points.length; i++) {
    adjustedPoints.push({ x: points[i].x, y: screenHeight - points[i].y });
  }
  return adjustedPoints;
};

//This function does not recalculate the y values
// offset is how much to move them since the last time they were moved.  A positive offset means the ship is flying left, so the
// mountains are moving to the right
const adjustCurrentPointsForOffset = (currentPoints, offset, gameWidth) => {
  const adjustedPoints = [];
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
      //give it a new x value, 100 greater than the rightmost point
      leftmost.x = adjustedPoints[adjustedPoints.length - 1].x + 100;
      adjustedPoints.push(leftmost);
    }
  } else if (offset < 0) {
    //the right-most point may need to be removed and tacked onto the left side of the peaks
    const cutoffPoint = gameWidth / 2 + slopWidth;
    if (adjustedPoints[adjustedPoints.length - 1].x > cutoffPoint) {
      const rightmost = adjustedPoints.pop();
      adjustedPoints.unshift(rightmost);
    }
  }
  return adjustedPoints;
};
const initialState = {
  gameOffset: 0,
  allPointsCorrected: adjustMountainPointsForScreenHeight(peaks, 800),
  screenDimensions: { height: 600, width: 1000 },
};

const reducer = (state, action) => {
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
      const stateWithNewWidth = {
        ...state,
        screenDimensions: action.cargo,
        allPointsCorrected: adjustMountainPointsForScreenHeight(
          state.allPointsCorrected,
          action.cargo.height
        ),
      };
      return stateWithNewWidth;
  }
};

export const OffsetMountainDataContext = createContext(initialState);

export const OffsetMountainDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const screenSize = useScreenDimensions();

  useEffect(() => {
    dispatch({ type: "UPDATE_GAME_DIMENSIONS", cargo: screenSize });
  }, [screenSize]);

  return (
    <OffsetMountainDataContext.Provider value={{ state, dispatch }}>
      {children}
    </OffsetMountainDataContext.Provider>
  );
};

////{screenSize: {…}}
// screenSize
// :
// {height: 0, width: 0}
// [[Prototype]]
// :
// Object
