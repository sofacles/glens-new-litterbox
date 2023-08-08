import React, { useContext, useEffect, useRef } from "react";
import Bullet from "./Bullet";
import InstrumentPanel from "./InstrumentPanel";
import Mountains from "./Mountains";
import Ship from "./Ship";
import useAnimationFrame from "./hooks/useAnimationFrame";
import { OffsetMountainDataContext } from "./hooks/useOffsetMountainData";
import { ShipDataContext } from "./hooks/useShipData";
import { useMultipleKeys } from "./hooks/useMultipleKeys";

const MainScreen = () => {
  const { state } = useContext(OffsetMountainDataContext);
  const { bullets } = state;
  const { shipState } = useContext(ShipDataContext);
  const { gameOffset, screenDimensions } = state;
  const screenRef = useRef();

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.focus();
    }
  }, []);

  const {
    changeShipDirection,
    go,
    resetAnimationTimer,
    stop,
    changeShipY,
    shoot,
  } = useAnimationFrame();

  const localShoot = () => {
    shoot();
  };

  const { onKeyDown, onKeyUp } = useMultipleKeys({
    changeShipDirectionHandler: changeShipDirection,
    changeShipYHandler: changeShipY,
    goHandler: go,
    resetAnimationHandler: resetAnimationTimer,
    fireShotHandler: localShoot,
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
        <Bullet
          isVisible={bullets.bullet1.isVisible}
          x={bullets.bullet1.location.x}
          y={shipState.offsetY}
        />
        <Mountains />
      </svg>
    </>
  );
};

export default MainScreen;
