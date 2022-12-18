import React, { createContext, 
    useReducer, Dispatch, PropsWithChildren } from 'react';

export type ThirdColorInfo = {
    thirdColorLevel: number,
    selectedHexValue: string
};

export type ThirdColorAction = {
  Type: string,
  Cargo: any
};

export type ThirdColorContextType = {
  thirdolorInfo: ThirdColorInfo,
  thirdColorAction: ThirdColorAction
};


function Reducer(state: ThirdColorInfo, action: ThirdColorAction) {
  switch(action.Type) {
    case "UPDATE_SELECTED_COLOR":
      return {...state, selectedHexValue: action.Cargo.selectedHexValue};
  }
  return state;
}
export const ThirdColorContextWithReducer = createContext<{state: ThirdColorInfo, dispatch: Dispatch<ThirdColorAction>}>(
  {
    state: {
      thirdColorLevel: 7, 
      selectedHexValue: '777' 
    },
    dispatch: () => null
  }
);

// The Red varies with the Y axis of color picker, Green varies with the X axis, and I have a slider
// component that changes the blue value of all the squares in the grid as it goes up and down.
// This context is all about blue: the "Third Color"
  
export const ThirdColorWithReducerProvider = (props: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(Reducer, {
    thirdColorLevel: 7,
    selectedHexValue: '777',
    });

  return <ThirdColorContextWithReducer.Provider value={{state, dispatch}}>
      {props.children}
    </ThirdColorContextWithReducer.Provider>;
  
};
