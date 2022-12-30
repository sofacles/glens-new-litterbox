import React, { useContext, useRef, useState, useEffect } from "react";
import InstrumentPanel from "./InstrumentPanel";
import Mountains from "./Mountains";
import Ship from "./Ship";
import { WRAP_DISTANCE } from "./Constants";
import useAnimationFrame from "./hooks/useAnimationFrame";
import { OffsetMountainDataContext } from "./hooks/useOffsetMountainData";

const MainScreen = () => {
  const { state, dispatch } = useContext(OffsetMountainDataContext);
  const { gameOffset, screenDimensions } = state;
  const { goLeft, goRight, stop } = useAnimationFrame();

  return (
    <>
      <InstrumentPanel gameOffset={gameOffset} />
      <svg
        height={screenDimensions.height}
        width={screenDimensions.width}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          outline: "0px solid transparent",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#000000",
        }}
        onKeyDown={(evt) => {
          if (evt.key == "Shift") {
            goRight();
          }
        }}
        onKeyUp={(evt) => {
          if (evt.key == "Shift") {
            stop();
          }
        }}
        tabIndex="0"
      >
        <Ship x={300} y={300} />
        <Mountains />
      </svg>
    </>
  );
};

export default MainScreen;
