import React, { useContext, useRef, useState, useEffect } from "react";
import InstrumentPanel from "./InstrumentPanel";
import Mountains from "./Mountains";
import Ship from "./Ship";
import { WRAP_DISTANCE } from "./Constants";

import { OffsetMountainDataContext } from "./hooks/useOffsetMountainData";

const MainScreen = () => {
  const { state, dispatch } = useContext(OffsetMountainDataContext);
  const { gameOffset, screenDimensions } = state;
  const [observedTimeDeltas, setObservedTimeDeltas] = useState([]);
  const [
    timesAtWhichAnimationFrameWasCalled,
    setTimesAtWhichAnimationFrameWasCalled,
  ] = useState([]);
  const PX_PER_SECOND = 200;

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = (time) => {
    setTimesAtWhichAnimationFrameWasCalled((oldArrTies) => [
      ...oldArrTies,
      time,
    ]);

    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      // setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
      // OK, my use case is I'm trying to figure out how much to scroll the mountains.  So, let's say 200 px a second?

      dispatch({
        type: "UPDATE_GAME_OFFSET",
        cargo: {
          offsetDifference: Math.floor((deltaTime * PX_PER_SECOND) / 1000),
        },
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  return (
    <>
      <InstrumentPanel gameOffset={gameOffset} />
      <svg
        height={screenDimensions.height}
        width={screenDimensions.width}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          outline: "0px solid transparent",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#000000",
        }}
        onKeyDown={(evt) => {
          if (evt.key == "Shift") {
            dispatch({
              type: "UPDATE_GAME_OFFSET",
              cargo: { offsetDifference: 10 },
            });
          }
        }}
        tabIndex="0"
      >
        <Ship x={300} y={300} />
        <Mountains />
      </svg>
    </>
  );
};

export default MainScreen;
