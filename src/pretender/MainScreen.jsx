import React, { useContext, useEffect, useRef } from "react";
import InstrumentPanel from "./InstrumentPanel";
import Mountains from "./Mountains";
import Ship from "./Ship";
import useAnimationFrame from "./hooks/useAnimationFrame";
import { OffsetMountainDataContext } from "./hooks/useOffsetMountainData";
import { ShipDataContext } from "./hooks/useShipData";
import { useMultipleKeys } from "./hooks/useMultipleKeys";

const MainScreen = () => {
  const { state } = useContext(OffsetMountainDataContext);
  const { shipState } = useContext(ShipDataContext);
  const { gameOffset, screenDimensions } = state;
  const screenRef = useRef();

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.focus();
    }
  }, []);

  const { changeDirection, go, resetAnimationTimer, stop, changeShipY } =
    useAnimationFrame();

  const { onKeyDown, onKeyUp } = useMultipleKeys({
    changeDirectionHandler: changeDirection,
    changeShipYHandler: changeShipY,
    goHandler: go,
    resetAnimationHandler: resetAnimationTimer,
    stopHandler: stop,
  });
  return (
    <>
      <InstrumentPanel shipOffset={shipState.offsetY} gameOffset={gameOffset} />
      <svg
        height={screenDimensions.height}
        ref={screenRef}
        width={screenDimensions.width}
        xmlns="http://www.w3.org/2000/svg"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        style={{
          outline: "0px solid transparent",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#000000",
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
