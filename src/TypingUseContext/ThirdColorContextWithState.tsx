import React, { createContext, 
    useState, Dispatch,   SetStateAction, PropsWithChildren } from 'react';

export type ThirdColorInfo = {
    thirdColorLevel: number,
    selectedHexValue: string
};

//Maybe this is the kind of thing that Julian was talking about, since I was getting one of those "blah is a type, but
// foo expects a value" errors in my borked branch
type ThirdColorContextWithStateValue = [ThirdColorInfo, Dispatch<SetStateAction<ThirdColorInfo>>];

export const ThirdColorContextWithState = createContext<ThirdColorContextWithStateValue>(
   [ {thirdColorLevel: 7, selectedHexValue: '777' },
   (err) => {
    console.error(`errored out trying to createContext: ${err}`);
  },
]);

// The Red varies with the Y axis of color picker, Green varies with the X axis, and I have a slider
// component that changes the blue value of all the squares in the grid as it goes up and down.
// This context is all about blue: the "Third Color"
  
export const ThirdColorWithStateProvider = (props: PropsWithChildren<{}>) => {
  const [state, setState] = useState<ThirdColorInfo>({
    thirdColorLevel: 7,
    selectedHexValue: '777',
    });

  return <ThirdColorContextWithState.Provider value={[state, setState]}>
      {props.children}
    </ThirdColorContextWithState.Provider>;
  
};
