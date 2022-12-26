import React, {useContext} from 'react';
import {
    OffsetMountainDataContext,
    OffsetMountainDataProvider,
  } from "../useOffsetMountainData";


const ComponentThatUsesHook = () => {
    const { state, dispatch } = useContext(OffsetMountainDataContext);
    const moveMountainsRight = () => {
        dispatch({type: 'UPDATE_GAME_OFFSET', cargo: {offsetDifference: 10}})
    }
    const moveMountainsLeft = () => {
        dispatch({type: 'UPDATE_GAME_OFFSET', cargo: {offsetDifference: -10}})
    }

    const moveMountains150Left = () => {
        dispatch({type: 'UPDATE_GAME_OFFSET', cargo: {offsetDifference: 150}})
    }
    
    // console.info(state);
    return(
    <div>
        <h1>test component</h1>
        <div>
            <button  onClick={moveMountainsRight}>move mountains right</button>
            <button  onClick={moveMountainsLeft}>move mountains left</button>
            <button  onClick={moveMountains150Left}>move mountains 150 pixels left</button>
        </div>
         <span>offset: {state.gameOffset}</span>
         <div data-testid="leftMostPixel">LeftMostPixel is {`x: ${state.allPointsCorrected[0].x}, y:${state.allPointsCorrected[0].y}`} </div>
    </div>
    ); 
};

export const SimpleConsumerOfOffsetMountainDataProvider = () => {
    return ( <OffsetMountainDataProvider>
        <ComponentThatUsesHook />
      </OffsetMountainDataProvider>);
}