import React from 'react';
import ColorPicker from './ColorPicker';
import {ThirdColorProvider} from './ThirdColorContext';

const ColorPickerHarness = () => {
return ( <ThirdColorProvider>
<ColorPicker onColorChosen={(color:string) => {
  console.log(`${color} was chosen`);
}} />
</ThirdColorProvider>);
};

export default ColorPickerHarness;