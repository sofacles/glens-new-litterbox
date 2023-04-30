import React, { useContext, useState } from "react";
import InstrumentPanel from "./InstrumentPanel";
import Mountains from "./Mountains";
import Ship from "./Ship";
import useAnimationFrame from "./hooks/useAnimationFrame";
import { OffsetMountainDataContext } from "./hooks/useOffsetMountainData";
import { ShipDataContext } from "./hooks/useShipData";
import { THRUST_KEY, UP_DOWN_NEITHER, SHIP_UP_KEY } from "./Constants";

const MainScreen = () => {
  const { state } = useContext(OffsetMountainDataContext);
  const { shipState } = useContext(ShipDataContext);
  const { gameOffset, screenDimensions } = state;
  const { changeDirection, go, resetAnimationTimer, stop, changeShipY } =
    useAnimationFrame();
  const [currentlyPressedKeys] = useState(new Map());

  return (
    <>
      <InstrumentPanel shipOffset={shipState.offsetY} gameOffset={gameOffset} />
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
          const plainKey = evt.key.toLowerCase();

          currentlyPressedKeys.set(plainKey, true);
          if (
            currentlyPressedKeys.has(THRUST_KEY) &&
            currentlyPressedKeys.get(THRUST_KEY)
          ) {
            go();
          }
          if (currentlyPressedKeys.get("x")) {
            changeDirection();
          }
          if (
            currentlyPressedKeys.has(SHIP_UP_KEY) &&
            currentlyPressedKeys.get(SHIP_UP_KEY)
          ) {
            evt.preventDefault();
            changeShipY(UP_DOWN_NEITHER.UP);
          }
        }}
        onKeyUp={(evt) => {
          const plainKey = evt.key.toLowerCase();
          currentlyPressedKeys.set(plainKey, false);
          if (plainKey === THRUST_KEY) {
            stop();
          }

          if (plainKey === SHIP_UP_KEY) {
            resetAnimationTimer();
            changeShipY(UP_DOWN_NEITHER.NEITHER);
          }
        }}
        tabIndex="0"
      >
        <Ship x={300} y={shipState.offsetY} />
        <Mountains />
      </svg>
    </>
  );
};

export default MainScreen;
