import React, { useContext, useState, useRef } from "react";
import { OffsetMountainDataContext } from "./useOffsetMountainData";

const useAnimationFrame = () => {
  const { state, dispatch } = useContext(OffsetMountainDataContext);

  const PX_PER_SECOND = 200;
  const [direction, setDirection] = React.useState("stopped");

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass a function to the setter of the state
      // to make sure we always have the latest state
      // setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
      // OK, my use case is I'm trying to figure out how much to scroll the mountains.

      dispatch({
        type: "UPDATE_GAME_OFFSET",
        cargo: {
          offsetDifference:
            direction == "right"
              ? Math.floor((deltaTime * PX_PER_SECOND) / 1000)
              : -Math.floor((deltaTime * PX_PER_SECOND) / 1000),
        },
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    if (direction === "right") {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    } else if (direction === "left") {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    } else {
      debugger;
      cancelAnimationFrame(requestRef.current);
    }
  }, [direction]);

  return {
    goLeft: () => {
      setDirection("left");
    },
    goRight: () => {
      setDirection("right");
    },
    stop: () => {
      setDirection("stopped");
    },
  };
};

export default useAnimationFrame;
