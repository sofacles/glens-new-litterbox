import React, { useCallback, useContext } from "react";
import { OffsetMountainDataContext } from "./useOffsetMountainData";
import { ShipDataContext } from "./useShipData";

import { UP_DOWN_NEITHER_type } from "../types";

const useAnimationFrame = () => {
  const { dispatch } = useContext(OffsetMountainDataContext);
  const { shipDispatch } = useContext(ShipDataContext);

  const PX_PER_SECOND = 400;
  const [direction, setDirection] = React.useState("right");
  // Used for firing one bullet.  If they just hold the fire button down, only one new bullet appears on the screen.
  const [isShooting, setIsShooting] = React.useState(false);
  const [isThrusting, setIsThrusting] = React.useState(false);
  const [shipMovingUpOrDown, setShipMovingUpOrDown] = React.useState("NEITHER");

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  // Unwrapping this useCallback and just assigning the fxn of time
  // to animateCallback doesn't seem to hurt performance.  There may be other reasons for doing this, but I recently read that this can
  // be an issue because every time a component gets rendered, a brand new function gets re-created, so if you happen to be passing a function
  // as a prop to a child component and that component is memoized, memoization won't work.  Memoization means the the component won't rerender unless
  // the props change, but in this case the function prop will change every time.
  const animateCallback = useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        if (isThrusting) {
          dispatch({
            type: "UPDATE_GAME_OFFSET",
            cargo: {
              offsetDifference:
                direction === "right"
                  ? Math.floor((deltaTime * PX_PER_SECOND) / 1000)
                  : -Math.floor((deltaTime * PX_PER_SECOND) / 1000),
            },
          });
        }

        if (shipMovingUpOrDown !== "NEITHER") {
          const pixelsToMove = Math.floor((deltaTime * PX_PER_SECOND) / 1000);
          console.log(
            `inside animate callback pixelsToMove is: ${pixelsToMove}`
          );
          const dispatchObj = {
            type: "UPDATE_SHIP_Y",
            cargo: {
              upOrDown: shipMovingUpOrDown,
              changeInY:
                shipMovingUpOrDown === "UP" ? -pixelsToMove : pixelsToMove,
            },
          };
          console.log(`dispatching: ${JSON.stringify(dispatchObj)}`);
          shipDispatch(dispatchObj);
        }

        if (isShooting) {
          //TODO: make sure there are less than 4 bullets on the screen
          //
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateCallback);
    },
    [direction, dispatch, isThrusting, shipDispatch, shipMovingUpOrDown]
  );

  React.useEffect(() => {
    /*
      We might be 
      1. thrusting without the ship moving up and down
      2. moving the ship up and down without thrusting 
      3. Neither thrusting nor moving the ship and down
      4. Both moving the ship and thrusting
      .. in combination with anything else that might be moving on the screen
    */
    if (isThrusting || shipMovingUpOrDown !== "NEITHER") {
      requestRef.current = requestAnimationFrame(animateCallback);
      return () => cancelAnimationFrame(requestRef.current);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
  }, [animateCallback, direction, isThrusting, shipMovingUpOrDown]);

  return {
    go: () => {
      setIsThrusting(true);
    },
    changeShipY: (upOrDown) => {
      setShipMovingUpOrDown(upOrDown);
    },
    resetAnimationTimer: () => {
      previousTimeRef.current = undefined;
    },
    stop: () => {
      previousTimeRef.current = undefined;
      setIsThrusting(false);
    },
    changeShipDirection: () => {
      setDirection((dir) => {
        const newDirection = dir === "right" ? "left" : "right";
        console.log(`changing direction from ${dir} to ${newDirection}`);
        return newDirection;
      });
    },
    shoot: () => {
      setIsShooting(true);
    },
  };
};

export default useAnimationFrame;
