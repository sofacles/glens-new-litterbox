import React, {useContext} from 'react';
import {
    OffsetMountainDataContext,
    OffsetMountainDataProvider,
  } from "../useOffsetMountainData";


const ComponentThatUsesHook = () => {
    const { state, dispatch } = useContext(OffsetMountainDataContext);
const moveShipRight = () => {
    
    dispatch({type: 'UPDATE_GAME_OFFSET', cargo: {offsetDifference: -10}})
}
    // console.info(state);
    return(
    <div>
        <div>
            <button data-testid="moveRightBtn" onClick={moveShipRight}>go right</button>
        </div>
        test component <span>offset: {state.gameOffset}</span>
    </div>
    ); 
};

export const SimpleConsumerOfOffsetMountainDataProvider = () => {
    return ( <OffsetMountainDataProvider>
        <ComponentThatUsesHook />
      </OffsetMountainDataProvider>);
}