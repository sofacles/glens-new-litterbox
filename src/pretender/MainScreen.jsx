import React, { useRef, useState, useEffect } from "react";
import InstrumentPanel from "./InstrumentPanel";
import Mountains from "./Mountains";
import Ship from "./Ship";
import { WRAP_DISTANCE } from "./Constants";

const MainScreen = () => {
  const screen = useRef(null);
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  //pixels the world has been moved as the camera of the screen scrolls left/right with the ship's motion
  const [gameOffset, setGameOffset] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(800);
  }, [window.innerWidth]);
  return (
    <>
      <InstrumentPanel gameOffset={gameOffset} />
      <svg
        height="1000"
        width={screenWidth}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          outline: "0px solid transparent",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#000000",
        }}
        onKeyDown={(evt) => {
          if (evt.key == "Shift") {
            let newGameOffset = gameOffset + 10;
            if (newGameOffset > WRAP_DISTANCE) newGameOffset = -WRAP_DISTANCE;
            setGameOffset(newGameOffset);
          }
        }}
        tabIndex="0"
      >
        <Ship x={700} y={700} />
        <Mountains
          gameOffset={gameOffset}
          screenHeight={screenHeight}
          screenWidth={screenWidth}
        />
      </svg>
    </>
  );
};

export default MainScreen;
