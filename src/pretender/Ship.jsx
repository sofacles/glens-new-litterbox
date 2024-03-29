import React from "react";
import { SHIP_HEIGHT, SHIP_WIDTH } from "./Constants";

const Ship = ({ x, y }) => {
  return (
    <rect
      data-testid="ship"
      x={x}
      y={y}
      width={SHIP_WIDTH}
      height={SHIP_HEIGHT}
      fill="#678A32"
    />
  );
};

export default Ship;

/*
this is version of the ship that I converted on convertio.io
 <g
      transform="translate(0.000000,57.000000) scale(0.100000,-0.100000)"
      fill="#bbbbbb"
      stroke="#ffffff"
    >
      <path
        d="M0 285 l0 -285 585 0 585 0 0 285 0 285 -585 0 -585 0 0 -285z m505
150 c0 -14 8 -21 28 -23 21 -3 27 -9 27 -28 0 -19 5 -24 25 -24 20 0 25 -5 25
-25 0 -23 3 -24 78 -27 76 -3 77 -3 80 -30 3 -24 8 -28 33 -28 24 0 29 4 29
24 0 26 14 36 43 28 10 -3 17 -14 17 -28 0 -23 3 -24 74 -24 90 0 136 -8 136
-25 0 -18 -58 -25 -227 -25 l-153 0 0 -25 c0 -25 -1 -25 -81 -25 -78 0 -80 1
-77 23 2 14 11 23 24 25 21 3 38 34 26 46 -3 3 -27 6 -53 6 -45 0 -48 2 -51
28 -3 27 -4 27 -80 30 l-78 3 0 49 c0 47 2 50 25 50 20 0 25 5 25 26 0 24 2
25 53 22 44 -3 52 -6 52 -23z m-275 -54 c0 -25 -3 -28 -25 -23 -22 4 -25 1
-25 -22 0 -21 -5 -26 -25 -26 -23 0 -25 3 -25 50 l0 50 50 0 c48 0 50 -1 50
-29z m168 -154 c4 -19 -20 -32 -42 -24 -9 4 -12 14 -9 27 7 26 46 24 51 -3z
m-218 -52 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25
-5 25 -25z"
      />
    </g>

    */
