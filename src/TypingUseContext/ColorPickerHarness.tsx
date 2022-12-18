import React from 'react';
import ColorPicker from './ColorPicker';
// import {ThirdColorWithStateProvider} from './ThirdColorContextWithState';
import {ThirdColorWithReducerProvider} from './ThirdColorContextWithReducer';

const ColorPickerHarness = () => {
  // return ( <ThirdColorWithStateProvider/>...
return ( 
<ThirdColorWithReducerProvider>
  <ColorPicker onColorChosen={(color:string) => {
  console.log(`${color} was chosen`);
  //I should get rid of this, but I just wanted to try out ThirdColorWithReducerProvider, don't remember if this is wired up in main branch...
}} />
</ThirdColorWithReducerProvider>);
};

export default ColorPickerHarness;