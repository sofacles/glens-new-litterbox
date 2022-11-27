import React from 'react';
import ColorPicker from './ColorPicker';
import {ThirdColorWithStateProvider} from './ThirdColorContextWithState';

const ColorPickerHarness = () => {
return ( <ThirdColorWithStateProvider>
<ColorPicker onColorChosen={(color:string) => {
  console.log(`${color} was chosen`);
}} />
</ThirdColorWithStateProvider>);
};

export default ColorPickerHarness;