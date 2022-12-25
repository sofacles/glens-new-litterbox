import React, {useContext} from 'react';
import {
    OffsetMountainDataContext,
    OffsetMountainDataProvider,
  } from "../useOffsetMountainData";


const ComponentThatUsesHook = () => {
    const { state, dispatch } = useContext(OffsetMountainDataContext);

    // console.info(state);
    return(
    <div>
        test component <span>offset: {state.gameOffset}</span>
    </div>
    ); 
};

export const SimpleConsumerOfOffsetMountainDataProvider = () => {
    return ( <OffsetMountainDataProvider>
        <ComponentThatUsesHook />
      </OffsetMountainDataProvider>);
}