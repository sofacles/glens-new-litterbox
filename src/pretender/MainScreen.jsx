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
    setScreenHeight(window.innerHeight);
  }, [window.innerWidth]);
  return (
    <div
      ref={screen}
      style={{
        width: "100%",
        height: "1000px",
        background: "#000",
        position: "absolute",
      }}
      onKeyDown={(evt) => {
        if (evt.key == "shift") {
          let newGameOffset = gameOffset + 10;
          if (newGameOffset > WRAP_DISTANCE) newGameOffset = -WRAP_DISTANCE;
          setGameOffset(newGameOffset);
        }
      }}
    >
      <Ship x={200} y={200} />
      <Mountains
        gameOffset={gameOffset}
        screenHeight={screenHeight}
        screenWidth={screenWidth}
      />
    </div>
  );
};

export default MainScreen;
