import React, { useContext } from "react";
import { OffsetMountainDataContext } from "./useOffsetMountainData";
import { useScreenDimensions } from "./useScreenDimensions";

import { ShipDataContext } from "./useShipData";

import {
  BULLET_PX_PER_FRAME,
  LEFT,
  RIGHT,
  UP_ARROW_PIXELS,
} from "../Constants";

const useAnimationFrame = () => {
  const { state, dispatch } = useContext(OffsetMountainDataContext);
  const { shipState, shipDispatch } = useContext(ShipDataContext);
  const screenSize = useScreenDimensions();
  const { width } = screenSize;

  const PX_PER_SECOND = 800;

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
        const amtToMove =
          shipState.direction === "right"
            ? Math.floor((deltaTime_Thrust * PX_PER_SECOND) / 1000)
            : -Math.floor((deltaTime_Thrust * PX_PER_SECOND) / 1000);
        dispatch({
          type: "UPDATE_GAME_OFFSET",
          cargo: {
            offsetDifference: amtToMove,
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

    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].isVisible) {
        console.log(
          `about to move bullet[${i}] ${BULLET_PX_PER_FRAME} pixels at ${time}`
        );
        const { width } = screenSize;
        if (bullets[i].direction === RIGHT && bullets[i].location.x < width) {
          dispatch({
            type: "MOVE_BULLET_RIGHT",
            cargo: {
              index: i,
              pixelsToMove: BULLET_PX_PER_FRAME,
              screenWidth: width,
              lastTimeStamp: time,
            },
          });
        } else if (
          bullets[i].direction === LEFT &&
          bullets[i].location.x > 50
        ) {
          dispatch({
            type: "MOVE_BULLET_LEFT",
            cargo: {
              index: i,
              pixelsToMove: BULLET_PX_PER_FRAME,
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
    shipState.direction,
    bullets[0].isVisible,
    bullets[1].isVisible,
    bullets[2].isVisible,
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
      shipDispatch({ type: "CHANGE_DIRECTION" });
    },
    shoot: () => {
      const nextBulletIndex = bullets.findIndex((b) => b.isVisible === false);
      if (nextBulletIndex !== -1) {
        dispatch({
          type: "START_BULLET",
          cargo: {
            index: nextBulletIndex,
            direction: shipState.direction,
            shipX: shipState.offsetX,
          },
        });
      }
    },
  };
};

export default useAnimationFrame;
