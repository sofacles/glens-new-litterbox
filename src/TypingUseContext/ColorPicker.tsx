import React, { useContext } from 'react';
// import {ThirdColorContextWithState} from './ThirdColorContextWithState';
import {ThirdColorContextWithReducer} from './ThirdColorContextWithReducer';

import { ColorPixel, ColorPixelProps } from './ColorPixel';

interface ColorPickerProps {
  onColorChosen: (color: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = (props: ColorPickerProps) => {
  
  const cells: React.ReactElement<ColorPixelProps>[] = [];
  const rValue = 12;
  const bValue = 9;

  // const [blueValue] = useContext(ThirdColorContextWithState);
  const {state, dispatch} = useContext(ThirdColorContextWithReducer);


  for (let gValue = 0; gValue <= 15; gValue++) {
    cells.push(
      <ColorPixel
        r={rValue}
        g={gValue}
        b={bValue}
        key={'' + rValue + gValue}
      />
    );
  }

  
  return (
    <>
    <div className="color-picker-container">
   {cells.map(c => c)}
    </div>
    <div>selectedHexValue: {state.selectedHexValue}</div>
    {/* <div>selectedHexValue: {state.selectedHexValue}</div> */}
    </>
  );
};

export default ColorPicker;
