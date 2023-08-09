import React, { useCallback, useContext, useState } from "react";
import { OffsetMountainDataContext } from "./useOffsetMountainData";
import { useScreenDimensions } from "./useScreenDimensions";

import { ShipDataContext } from "./useShipData";

import { UP_DOWN_NEITHER_type } from "../types";
import { MAX_BULLET_AGE } from "../Constants";

const useAnimationFrame = () => {
  const { dispatch } = useContext(OffsetMountainDataContext);
  const { shipDispatch } = useContext(ShipDataContext);
  const screenSize = useScreenDimensions();
  const { width } = screenSize;

  const PX_PER_SECOND = 400;
  const [direction, setDirection] = React.useState("right");

  // Track whether bullets are currently being animated on the screen
  const [bullet1, setBullet1] = React.useState({
    isActive: false,
    tStart: 0,
    lastTimeStamp: 0,
  });

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
        const pixelsToMove = Math.floor((deltaTime * PX_PER_SECOND) / 1000);
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
          const dispatchObj = {
            type: "UPDATE_SHIP_Y",
            cargo: {
              upOrDown: shipMovingUpOrDown,
              changeInY:
                shipMovingUpOrDown === "UP" ? -pixelsToMove : pixelsToMove,
            },
          };
          shipDispatch(dispatchObj);
        }

        if (bullet1.isActive) {
          console.log(`bullet1.lastTimeStamp: ${bullet1.lastTimeStamp}`);
          if (!bullet1.lastTimeStamp === 0) {
            setBullet1({
              isActive: true,
              tStart: time,
              lastTimeStamp: time,
            });
            dispatch({
              type: "START_BULLET1",
              cargo: {
                pixelsToMove: 0,
                screenWidth: width,
              },
            });
          } else {
            const { width } = screenSize;
            dispatch({
              type: "MOVE_BULLET1",
              cargo: {
                pixelsToMove:
                  (((time - bullet1.lastTimeStamp) * PX_PER_SECOND) / 1000) *
                  1.5,
                screenWidth: width,
              },
            });
            setBullet1((bullet1) => {
              return {
                isActive: true,
                tStart: bullet1.tStart,
                lastTimeStamp: time,
              };
            });
          }
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateCallback);
    },
    [
      direction,
      dispatch,
      bullet1.isActive,
      isThrusting,
      shipDispatch,
      shipMovingUpOrDown,
    ]
  );

  const resetAnimationTimer = () => {
    previousTimeRef.current = undefined;
  };

  React.useEffect(() => {
    /*
      We might be 
      1. thrusting without the ship moving up and down
      2. moving the ship up and down without thrusting 
      3. Neither thrusting nor moving the ship and down
      4. Both moving the ship and thrusting
      5. Shooting
      .. in combination with anything else that might be moving on the screen
    */
    if (
      isThrusting ||
      shipMovingUpOrDown !== "NEITHER" ||
      bullet1.isActive == true
    ) {
      requestRef.current = requestAnimationFrame(animateCallback);
      return () => cancelAnimationFrame(requestRef.current);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
  }, [
    animateCallback,
    direction,
    bullet1.isActive,
    isThrusting,
    shipMovingUpOrDown,
  ]);

  return {
    go: () => {
      setIsThrusting(true);
    },
    changeShipY: (upOrDown) => {
      setShipMovingUpOrDown(upOrDown);
    },
    resetAnimationTimer,
    stop: () => {
      previousTimeRef.current = undefined;
      setIsThrusting(false);
    },
    changeShipDirection: () => {
      setDirection((dir) => {
        const newDirection = dir === "right" ? "left" : "right";
        return newDirection;
      });
    },

    shoot: () => {
      setBullet1({
        tStart: 0,
        isActive: true,
        lastTimeStamp: 0,
      });
      setTimeout(() => {
        setBullet1({
          tStart: 0,
          isActive: false,
          lastTimeStamp: 0,
        });
      }, 2000);
    },
  };
};

export default useAnimationFrame;
