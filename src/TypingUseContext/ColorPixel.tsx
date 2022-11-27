import React, {useContext} from 'react';
import { ThirdColorContextWithState} from './ThirdColorContextWithState';

import CSS from 'csstype';

const HexValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];



const ColorPixel: React.FC<ColorPixelProps> = (props: ColorPixelProps) => {
  const hexValue = HexValues[props.r] + HexValues[props.g] + HexValues[props.b];
  const [blueValue, blueValueSet] = useContext(ThirdColorContextWithState);
  const style: CSS.Properties = {
    backgroundColor: '#' + hexValue,
    border: `1px solid #${hexValue}`,
  };

  

  return (
    <div
      className="color-pixel"
      style={style}
      onClick={(evt) => {
        blueValueSet({ ...blueValue, selectedHexValue: hexValue });
      }}
    />
  );
};


export { ColorPixel};
export type ColorPixelProps = {
  r: number, g: number, b: number,
}
