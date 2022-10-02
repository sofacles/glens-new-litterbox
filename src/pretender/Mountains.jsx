import React from "react";
import peaks from "./MountainData.js";
import { WRAP_DISTANCE } from "./Constants";
import { isLiteralExpression } from "typescript";

const Mountains = (props) => {
  //initial state: we are in the middle of the world: x = 0;
  // we want to show a portion of the mountains that's equal to the screen width
  const { gameOffset, screenHeight, screenWidth } = props;

  const adjustXForOffset = (rawX) => {
    let newX = rawX - gameOffset;
    if (newX > WRAP_DISTANCE) {
      newX -= WRAP_DISTANCE * 2;
    }
    return newX;
  };

  const adjustedLines = [];
  for (var i = 0; i < peaks.length - 1; i++) {
    adjustedLines.push({
      x1: adjustXForOffset(peaks[i].x),
      y1: peaks[i].y,
      x2: adjustXForOffset(peaks[i + 1].x),
      y2: peaks[i + 1].y,
    });
  }

  const myLines = adjustedLines.map((lin, idx) => {
    return (
      <line
        key={"kui" + idx}
        x1={lin.x1}
        y1={lin.y1}
        x2={lin.x2}
        y2={lin.y2}
        width="2"
        stroke="#fc6b03"
      />
    );
  });

  //I need to give the ridgelines their new dimensions.  For now I'll just offset all the points and hope that Reactt is smart enough
  //to only draw the ones that appear on screen

  return (
    <svg viewBox="0 0  1000 2000" xmlns="http://www.w3.org/2000/svg">
      {myLines}
    </svg>
  );
};

export default Mountains;
