import React, { useContext } from "react";
import { ShipDataContext, OffsetMountainDataProvider } from "../useShipData";

const ComponentThatUsesHook = () => {
  const { state, dispatch } = useContext(OffsetMountainDataContext);
  const moveMountainsRight = () => {
    dispatch({ type: "UPDATE_GAME_OFFSET", cargo: { offsetDifference: 10 } });
  };
  const moveMountainsLeft = () => {
    dispatch({ type: "UPDATE_GAME_OFFSET", cargo: { offsetDifference: -10 } });
  };

  const moveMountains110Left = () => {
    dispatch({ type: "UPDATE_GAME_OFFSET", cargo: { offsetDifference: 110 } });
  };

  const moveMountains110Right = () => {
    dispatch({ type: "UPDATE_GAME_OFFSET", cargo: { offsetDifference: -110 } });
  };

  return (
    <OffsetMountainDataProvider>
      <div>
        <h1>test component</h1>
        <div>
          <button onClick={moveMountainsRight}>move mountains right</button>
        </div>
        <span>offset: {state.gameOffset}</span>
        <div>
          <span data-testid="leftMostPixelX">
            {state.allPointsCorrected[0].x}
          </span>
          <span data-testid="leftMostPixelY">
            {state.allPointsCorrected[0].y}
          </span>
        </div>
        <div>
          <span data-testid="rightMostPixelX">
            {state.allPointsCorrected[state.allPointsCorrected.length - 1].x}
          </span>
          <span data-testid="rightMostPixelY">
            {state.allPointsCorrected[state.allPointsCorrected.length - 1].y}
          </span>
        </div>
      </div>
    </OffsetMountainDataProvider>
  );
};
