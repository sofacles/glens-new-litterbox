import React, { useCallback, useContext, useState } from "react";
import { OffsetMountainDataContext } from "./useOffsetMountainData";
import { useScreenDimensions } from "./useScreenDimensions";

import { ShipDataContext } from "./useShipData";

import { UP_DOWN_NEITHER_type } from "../types";
import { MAX_BULLET_AGE, UP_ARROW_PIXELS } from "../Constants";

const useAnimationFrame = () => {
  const { state, dispatch } = useContext(OffsetMountainDataContext);
  const { shipDispatch } = useContext(ShipDataContext);
  const screenSize = useScreenDimensions();
  const { width } = screenSize;

  const PX_PER_SECOND = 400;
  const [direction, setDirection] = React.useState("right");

  const { bullets } = state;
  const [isThrusting, setIsThrusting] = React.useState(false);
  const [shipMovingUpOrDown, setShipMovingUpOrDown] = React.useState("NEITHER");

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const requestRef = React.useRef();

  //for calculating how much the landscape moves by when you're thrusting
  const previousTimeRef_Thrust = React.useRef();

  // Unwrapping this useCallback and just assigning the fxn of time
  // to animateCallback doesn't seem to hurt performance.  There may be other reasons for doing this, but I recently read that this can
  // be an issue because every time a component gets rendered, a brand new function gets re-created, so if you happen to be passing a function
  // as a prop to a child component and that component is memoized, memoization won't work.  Memoization means the the component won't rerender unless
  // the props change, but in this case the function prop will change every time.
  const animateCallback = (time) => {
    if (previousTimeRef_Thrust.current !== undefined) {
      if (isThrusting) {
        const deltaTime_Thrust = time - previousTimeRef_Thrust.current;
        dispatch({
          type: "UPDATE_GAME_OFFSET",
          cargo: {
            offsetDifference:
              direction === "right"
                ? Math.floor((deltaTime_Thrust * PX_PER_SECOND) / 1000)
                : -Math.floor((deltaTime_Thrust * PX_PER_SECOND) / 1000),
          },
        });
      }
    }

    if (isThrusting) {
      previousTimeRef_Thrust.current = time;
    } else {
      previousTimeRef_Thrust.current = undefined;
    }

    if (shipMovingUpOrDown !== "NEITHER") {
      const dispatchObj = {
        type: "UPDATE_SHIP_Y",
        cargo: {
          upOrDown: shipMovingUpOrDown,
          changeInY:
            shipMovingUpOrDown === "UP" ? -UP_ARROW_PIXELS : UP_ARROW_PIXELS,
        },
      };
      shipDispatch(dispatchObj);
    }

    //Not using a ref for the last time this animate function ran.  I'm putting it in the state that is stored in useOffsetMountainData
    //const bulletDispatches = [];
    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].isVisible) {
        if (bullets[i].lastTimeStamp === 0) {
          dispatch({
            type: "START_BULLET",
            cargo: {
              index: i,
              tStart: time,
              lastTimeStamp: time,
            },
          });
        } else {
          const pixelsToMove =
            (((time - bullets[i].lastTimeStamp) * PX_PER_SECOND) / 1000) * 0.5;

          console.log(
            `In useAnimationFrame, bullet ${i} isVisible and has a non-zero lastTimeStamp and is going to move: ${pixelsToMove} px.`
          );

          const { width } = screenSize;
          dispatch({
            type: "MOVE_BULLET",
            cargo: {
              index: i,
              pixelsToMove,
              screenWidth: width,
              lastTimeStamp: time,
            },
          });
        }
      }
    }

    requestRef.current = requestAnimationFrame(animateCallback);
  };

  const resetAnimationTimer = () => {
    previousTimeRef_Thrust.current = undefined;
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
      bullets.some((b) => b.isVisible)
    ) {
      requestRef.current = requestAnimationFrame(animateCallback);
      return () => cancelAnimationFrame(requestRef.current);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
  }, [
    animateCallback,
    direction,
    bullets[0].isActive,
    bullets[1].isActive,
    bullets[2].isActive,
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
      previousTimeRef_Thrust.current = undefined;
      setIsThrusting(false);
    },
    changeShipDirection: () => {
      setDirection((dir) => {
        const newDirection = dir === "right" ? "left" : "right";
        return newDirection;
      });
    },
    shoot: () => {
      const nextBulletIndex = bullets.findIndex((b) => b.isVisible == false);
      if (nextBulletIndex != -1) {
        dispatch({
          type: "ACTIVATE_BULLET",
          cargo: { index: nextBulletIndex },
        });
      }
    },
  };
};

export default useAnimationFrame;
