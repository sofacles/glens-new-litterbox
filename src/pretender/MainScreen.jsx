import React, { useRef, useState, useEffect } from "react";
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
    <svg
      height="1000"
      width="1000"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        overflow: "hidden",
        position: "relative",
      }}
      onKeyDown={(evt) => {
        debugger;
        if (evt.key == "Shift") {
          let newGameOffset = gameOffset + 10;
          if (newGameOffset > WRAP_DISTANCE) newGameOffset = -WRAP_DISTANCE;
          setGameOffset(newGameOffset);
        }
      }}
      tabIndex="0"
    >
      <Ship x={200} y={200} />
      <Mountains
        gameOffset={gameOffset}
        screenHeight={screenHeight}
        screenWidth={screenWidth}
      />
    </svg>
  );
};

export default MainScreen;